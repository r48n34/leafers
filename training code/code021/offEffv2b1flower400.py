import tensorflow as tf
import matplotlib.pyplot as plt
import logging

# https://keras.io/examples/vision/randaugment/
# https://github.com/leondgarse/keras_efficientnet_v2
from imgaug import augmenters as iaa
import imgaug as ia
ia.seed(42)

logging.basicConfig(
    level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', 
    datefmt='%Y-%m-%d %H:%M', 
    handlers=[logging.FileHandler('offv2b1RRModel.log', 'w', 'utf-8'), ]
)

train_data_dir = "G:\\fypssd\\target1\\smartScale400data1337\\train"
vaild_data_dir = "G:\\fypssd\\target1\\smartScale400data1337\\valid"

batch_size = 64
imgSize = 240

dataSeed = 1337

train_ds = tf.keras.preprocessing.image_dataset_from_directory(
  train_data_dir, seed=dataSeed, batch_size=batch_size,
  image_size=(imgSize, imgSize), color_mode='rgb'
)

valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
  vaild_data_dir, seed=dataSeed, batch_size=batch_size,
  image_size=(imgSize, imgSize), color_mode='rgb'
)

classNum = len(train_ds.class_names)
classArr = train_ds.class_names
print(classNum)
print(train_ds.class_names)

rand_aug = iaa.RandAugment(n=3, m=7)

def augment(images):
    images = tf.cast(images, tf.uint8)
    return rand_aug(images=images.numpy())


train_ds = train_ds.map(lambda image,label:(tf.py_function(augment, [image], [tf.float32])[0],label))

pretrained_model = tf.keras.applications.efficientnet_v2.EfficientNetV2B1(include_top=False, weights='imagenet', input_shape=(imgSize, imgSize, 3) )
pretrained_model.trainable = True

model = tf.keras.Sequential([
    pretrained_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.55),
    tf.keras.layers.Dense(classNum, activation='softmax')
])

epochsRound = 8
base_learning_rate = 0.0001

# save model callback
checkpoint_filepath = './tmp/checkpoint'
model_checkpoint_callback = tf.keras.callbacks.ModelCheckpoint(
    filepath=checkpoint_filepath,
    save_weights_only=True,
    monitor='val_accuracy',
    mode='max',
    save_best_only=True
)

# set lr decay callback
def learnDecay(epoch, lr):
    if epoch < (epochsRound / 2):
        return lr
    else:
        return lr * tf.math.exp(-0.15)

learnDecayCallback = tf.keras.callbacks.LearningRateScheduler(learnDecay)

class LogCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        keys = list(logs.keys())
        print("End epoch {} of training; got log keys: {}".format(epoch, keys))
        logging.info(f"End epoch {epoch} of training:")
        logging.info(f"Loss: { logs['loss'] } ")
        logging.info(f"accuracy: { logs['accuracy'] } ")
        logging.info(f"val_loss: { logs['val_loss'] } ")
        logging.info(f"val_accuracy: { logs['val_accuracy'] } ")
        logging.info(f"---------------------------------------")

# model.load_weights(checkpoint_filepath)

model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=base_learning_rate),
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False),
              metrics=['accuracy' ])

history = model.fit(train_ds, epochs=epochsRound, validation_data=valid_ds, 
                        callbacks=[model_checkpoint_callback, learnDecayCallback, LogCallback() ] )

model.load_weights(checkpoint_filepath)
test_loss, test_acc = model.evaluate(valid_ds, verbose=2)
print(test_acc)

model.save("offv2b1RRModel.h5")

acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
loss = history.history['loss']
val_loss = history.history['val_loss']

epochs_range = range(epochsRound)

plt.figure(figsize=(8, 8))
plt.subplot(1, 2, 1)
plt.plot(epochs_range, acc, label='Training Accuracy')
plt.plot(epochs_range, val_acc, label='Validation Accuracy')
plt.legend(loc='lower right')
plt.title('Training and Validation Accuracy')

plt.subplot(1, 2, 2)
plt.plot(epochs_range, loss, label='Training Loss')
plt.plot(epochs_range, val_loss, label='Validation Loss')
plt.legend(loc='upper right')
plt.title('Training and Validation Loss')
plt.show()
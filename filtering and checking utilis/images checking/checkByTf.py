from numpy.core.numeric import False_
import tensorflow as tf
from tensorflow.keras import datasets, layers, models
import matplotlib.pyplot as plt
import numpy as np
import os
import shutil
from PIL import Image

import tensorflowjs as tfjs

from tensorflow import keras
from tensorflow.keras.models import Sequential

def copyType(file, currDir, targetLocation):

    mainDir = os.path.join(targetLocation, file)
    os.mkdir(mainDir)

    subDir = os.path.join(targetLocation, file, "class")
    os.mkdir(subDir)


    for index, file in enumerate( os.listdir(currDir) ):
        
        try:
            shutil.copy2( os.path.join(currDir, file) , os.path.join(subDir, file))
        except:
            print("error with: " + file + " in " + mainDir )

    #print("ok")


def main(currentLocation, targetLocation):
    if not currentLocation.endswith('\\') or not currentLocation.endswith('/'):
        currentLocation += '\\'
    
    for index, file in enumerate( os.listdir(currentLocation) ):
        copyType( file, os.path.join(currentLocation, file), targetLocation )


# From file
original = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\newRes'

# Copy check file
grandDir = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\result'

# Garbage file
toDir = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\broken'

main(original, grandDir)

#grandDir = "D:\\gh code\\codeNotes\\university\\webScraper\\result"
errorArray = []

for index, file in enumerate( os.listdir(grandDir) ):

    try:
        data_dir = os.path.join(grandDir, file)

        batch_size = 64
        imgSize = 224

        train_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir, seed=123, subset="training", validation_split=0.2,
            image_size=(imgSize, imgSize), batch_size=batch_size
        )

        valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir, seed=123, subset="validation", validation_split=0.2,
            image_size=(imgSize, imgSize), batch_size=batch_size
        )

        classNum = len(train_ds.class_names)

        baseModel = tf.keras.applications.MobileNetV3Large(input_shape=(imgSize,imgSize,3),
                                                    include_top=False,
                                                    weights='imagenet')

        baseModel.trainable = False
        model = Sequential([
            baseModel,
            tf.keras.layers.GlobalAveragePooling2D(),
            tf.keras.layers.Dropout(0.1),
            tf.keras.layers.Dense(classNum, activation=tf.nn.softmax)
        ])

        epochsRound = 1

        base_learning_rate = 0.0001
        model.compile(optimizer=tf.keras.optimizers.Adam(lr=base_learning_rate),
                    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                    metrics=['accuracy'])

        history = model.fit(train_ds, 
                            epochs=epochsRound,
                            validation_data=valid_ds,
        )

        test_loss, test_acc = model.evaluate(valid_ds, verbose=2)
        print(test_acc)

    except:
        errorArray.append(file)
        print(file + " falied")

print("Error Array:")
print(errorArray)

for i in errorArray:
    shutil.move(os.path.join(original, i), os.path.join(toDir, i))

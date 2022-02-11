import os
import cv2

from numpy.core.numeric import False_
import tensorflow as tf
from tensorflow.keras import datasets, layers, models

import os
import shutil

from tensorflow import keras
from tensorflow.keras.models import Sequential

# From file
original = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\newRes2'

# Copy check file
grandDir = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\resultTemp'

# Garbage file
toDir = 'F:\\test vsxc code\\codeNotes\\university\\webScraper\\broken'

if not os.path.exists(toDir):
    os.makedirs(toDir)

if not os.path.exists(grandDir):
    os.makedirs(grandDir)

# list of acceptable extensions
good_exts=['jpg', 'png', 'jpeg', 'gif', 'bmp' ]
errorArray = []

def check_images( s_dir, ext_list):
    
    bad_images=[]
    bad_ext=[]
    s_list= os.listdir(s_dir)

    for klass in s_list:
        klass_path=os.path.join (s_dir, klass)
        print ('processing class directory ', klass)
        if os.path.isdir(klass_path):
            
            file_list=os.listdir(klass_path)
            for f in file_list:

                try:

                    f_path = os.path.join (klass_path,f)
                    index = f.rfind('.')
                    ext=f[index+1:].lower()

                    if ext not in ext_list:
                        print('file ', f_path, ' has an invalid extension ', ext)
                        os.remove( f_path )
                        #bad_ext.append(f_path)

                    if os.path.isfile(f_path):
                        try:
                            img=cv2.imread(f_path)
                            shape=img.shape
                        except:
                            print('file ', f_path, ' is not a valid image file')
                            os.remove( f_path )
                            #bad_images.append(f_path)
                    else:
                        print('*** fatal error, you a sub directory ', f, ' in class directory ', klass)
                except:
                    print("Oh no:" + f_path)
        else:
            print ('*** WARNING*** you have files in ', s_dir, ' it should only contain sub directories')
    return bad_images, bad_ext

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


def main(currentLocation, targetLocation):
    if not currentLocation.endswith('\\') or not currentLocation.endswith('/'):
        currentLocation += '\\'
    
    for index, file in enumerate( os.listdir(currentLocation) ):
        copyType( file, os.path.join(currentLocation, file), targetLocation )



bad_file_list, bad_ext_list = check_images(original, good_exts)
main(original, grandDir)


batch_size = 64
imgSize = 224

baseModel = tf.keras.applications.MobileNetV3Large(input_shape=(imgSize,imgSize,3),
                                                    include_top=False,
                                                    weights='imagenet')

baseModel.trainable = False


for index, file in enumerate( os.listdir(grandDir) ):

    try:
        data_dir = os.path.join(grandDir, file)

        train_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir, seed=123, subset="training", validation_split=0.2,
            image_size=(imgSize, imgSize), batch_size=batch_size
        )

        valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir, seed=123, subset="validation", validation_split=0.2,
            image_size=(imgSize, imgSize), batch_size=batch_size
        )

        classNum = len(train_ds.class_names)

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

print("Done")

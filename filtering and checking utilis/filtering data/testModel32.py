import tensorflow as tf
from tensorflow import keras

import numpy as np
import os
import shutil

import psycopg2
client = psycopg2.connect("dbname=fyp user=postgres password=123")
cur = client.cursor()

data_dir = "F:\\test vsxc code\\Google-Image-Scraper-master\\photos"
cpDir = "F:\\test vsxc code\\Google-Image-Scraper-master\\temp"

model_dir1 = "F:\\dlModel\\checkIsPlants\\m1.h5"
model_dir2 = "F:\\dlModel\\checkIsPlants\\m2.h5"
model_dir3 = "F:\\dlModel\\checkIsPlants\\m3.h5"

batch_size = 8
imgSize = 240

loaded_model_One = tf.keras.models.load_model(model_dir1)
#loaded_model_Two = tf.keras.models.load_model(model_dir1)
#loaded_model_Three = tf.keras.models.load_model(model_dir1)

label = ['no', 'yes']

noArr = []
yesArr = []

bigFile = os.listdir(data_dir)
num = 0

cur.execute("SELECT dirName FROM checked_plant")
resArr = [i[0] for i in cur.fetchall()]
records = set ( resArr )

print(records)

for index, file in enumerate(bigFile):
    
    fol = os.path.join(data_dir, file)
    bigFile_filder = os.listdir(fol)
    
    writeCond = True
    
    if file in records:
        print(file, "skipped.")
        continue 
    
    for index2, inside_file in enumerate(bigFile_filder):
        
        try:
    
            imgPath = os.path.join(fol, inside_file)
            image = tf.keras.preprocessing.image.load_img(
                imgPath, color_mode="rgb", target_size=(240,240)
            )
            
            input_arr = ( tf.keras.preprocessing.image.img_to_array(image) / 127.5) - 1
            input_arr = np.array([input_arr])

            prediction_One = loaded_model_One.predict(input_arr, batch_size=64, use_multiprocessing=True)
            #prediction_Two = loaded_model_Two.predict(input_arr, batch_size=64, use_multiprocessing=True)
            #prediction_Three = loaded_model_Three.predict(input_arr, batch_size=64, use_multiprocessing=True)

            #arr = [prediction_One, prediction_Two, prediction_Three]
            
            # tempArr = []
            # for i in arr:
            #     tempArr.append(np.argmax(i))
                
            print(label[ np.argmax(prediction_One) ], num)
            num += 1
            
            #if tempArr.count(0) >= 2:
            if np.argmax(prediction_One) == 0:
                noArr.append(imgPath)
                shutil.copyfile(imgPath, os.path.join(cpDir,inside_file))
            else:
                yesArr.append(imgPath)
        except:
            writeCond = False
            break
            
    cur.execute("INSERT INTO checked_plant (dirName, status) VALUES ( %s, %s );", (file, writeCond) )
    client.commit()
            
print("No: -----")
for i in noArr:
    print(i)

print("Yes: -----")
for i in yesArr:
    print(i)

# test_ds = tf.keras.preprocessing.image_dataset_from_directory(
#   data_dir, seed=123, image_size=(imgSize, imgSize), batch_size=batch_size, color_mode='rgb'
# )

# resize_and_rescale = tf.keras.Sequential([
#   tf.keras.layers.Resizing(imgSize, imgSize),
#   tf.keras.layers.Rescaling(1./127.5, offset=-1)
# ])

# test_ds = test_ds.map(lambda image,label:(resize_and_rescale(image),label))

# loaded_model.evaluate(test_ds)

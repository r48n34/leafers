import tensorflow as tf
import os
import shutil

def copyTrainToNewFolder(data_dir, target_dir, splitRate, ipSeed):
    """
    Using keras image_dataset_from_directory to split the data to actual folder
    """

    if not os.path.exists( target_dir ) and not os.path.isdir( target_dir ):
        os.mkdir( target_dir )

    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir, seed=ipSeed, subset="training", validation_split=splitRate,
        image_size=(100, 100), batch_size=64, color_mode='rgb'
    )

    file_paths_train = train_ds.file_paths

    #training loop
    for ind, imgPath in enumerate(file_paths_train):

        train_path_mk = os.path.join(target_dir, "train")
        if not os.path.exists( train_path_mk ) and not os.path.isdir( train_path_mk ):
            os.mkdir( train_path_mk )

        splitArr = imgPath.split('\\')
        folderName = splitArr[len(splitArr) - 2]
        imgName = splitArr[len(splitArr) - 1]
        newPath = os.path.join(target_dir, "train" , folderName)

        # print(newPath)

        if not os.path.exists( newPath ) and not os.path.isdir( newPath ):
            os.mkdir( newPath )

        shutil.copy( imgPath , os.path.join(newPath, imgName))

    valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir, seed=ipSeed, subset="validation", validation_split=splitRate,
        image_size=(100, 100), batch_size=64, color_mode='rgb'
    )

    file_paths_valid = valid_ds.file_paths

    #valid loop
    for ind, imgPath in enumerate(file_paths_valid):

        valid_path_mk = os.path.join(target_dir, "valid")
        if not os.path.exists( valid_path_mk ) and not os.path.isdir( valid_path_mk ):
            os.mkdir( valid_path_mk )

        splitArr = imgPath.split('\\')
        folderName = splitArr[len(splitArr) - 2]
        imgName = splitArr[len(splitArr) - 1]
        newPath = os.path.join(target_dir, "valid" , folderName)

        if not os.path.exists( newPath ) and not os.path.isdir( newPath ):
            os.mkdir( newPath )

        shutil.copy( imgPath , os.path.join(newPath, imgName))

if __name__ == "__main__":
    copyTrainToNewFolder("G:\\fypssd\\target1\\flower400GroupBy(flower258)", "G:\\fypssd\\target1\\flower258GroupBynew", 0.2, 321)
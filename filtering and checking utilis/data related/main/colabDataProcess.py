import tensorflow as tf
import os
import shutil
import matplotlib.pyplot as plt
import itertools
import numpy as np
from PIL import Image

"""

calBagging(possArr)
Calculate the accuracy of embedding models by array

copyTrainToNewFolder(data_dir, target_dir, splitRate, ipSeed)
Using keras image_dataset_from_directory to split the data to actual folder

combindDir(path, dirPath)
combindDir combind folders with same first name into single folder, and copy a new one to target path

printDirTree(path)
Print family tree with regarding path folder first name

genReport(path)
Generate a folder report regarding inside folder items

scaleDataSmart(dataPath, offset)
Scale your data by the max numbers of items occur in all files

allImagesRootToPng(path, dirPath)
Transfer all images from original path to a new copy of dirPath with png format

"""

def calBagging(possArr):
    """
    Calculate the accuracy of embedding models by array
    """
    table = list( itertools.product([False, True], repeat=len(possArr) ))

    if len(possArr) % 2 == 1:
        print("Input array must be a obb number length.")
        return

    truePoss = 0
    majority = (len(possArr) // 2) + 1

    for i in table:

        if i.count(True) >= majority:

            temp = 1
            for ind, val in enumerate(i):
                if val == True:
                    temp *= possArr[ind]
                else:
                    temp *= (1 - possArr[ind])
            
            truePoss += temp

    return truePoss

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

        splitArr = imgPath.split('/')
        folderName = splitArr[len(splitArr) - 2]
        imgName = splitArr[len(splitArr) - 1]
        newPath = os.path.join(target_dir, "train" ,folderName)

        print(newPath)

        if not os.path.exists( newPath ):
          os.mkdir( newPath )
        
        finallyPath = os.path.join(newPath, imgName)
        print(finallyPath)

        shutil.copy( imgPath , finallyPath )

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

        splitArr = imgPath.split('/')
        folderName = splitArr[len(splitArr) - 2]
        imgName = splitArr[len(splitArr) - 1]
        newPath = os.path.join(target_dir, "valid" , folderName)

        if not os.path.exists( newPath ):
          os.mkdir( newPath )
        
        finallyPath = os.path.join(newPath, imgName)

        shutil.copy( imgPath , finallyPath)

def combindDir(path, dirPath):
    """

    combindDir combind folders with same first name into single folder, and copy a new one to target path

    e.g. folder named ["a apple", "a acon", "a appare", "b boy"] will combinded into [ "a", "b" ] with inside items

    Keyword arguments:

    path -- original path string  

    dirPath -- target path string


    """

    if path == "" or dirPath == "":
        print("Missing input path")
        return False
    
    if not os.path.exists( dirPath ) and not os.path.isdir( dirPath ):
        os.mkdir( dirPath )

    try:
        dirArr = os.listdir(path)
        uniqueSet = list(set( [ str(i.split()[0]) for i in dirArr ] ))

        print(uniqueSet)
        print(len(uniqueSet))

        # Create new path to dirPath
        for typeName in uniqueSet:
            newPath = os.path.join(dirPath, typeName)
            if not os.path.exists( newPath ) and not os.path.isdir( newPath ):
                os.mkdir( newPath )
            
        # cpoy files to dirPath
        for file in dirArr:
            targetFile = str(file.split()[0])

            currentPath = os.path.join(path, file)

            for k in os.listdir(currentPath):
                shutil.copy(os.path.join(path, file , k), os.path.join(dirPath, targetFile, k))
        
        print("Done!")
        return True
    except:
        print("error occur...")
        return False

def printDirTree(path):
    """ 
    Print family tree with regarding path folder first name
    """
    
    datdic = {}
    dirArr = os.listdir(path)

    for i in dirArr:
        firstName = str(i.split()[0])

        if firstName in datdic:
            a = datdic[firstName]
            a.append(i)
            datdic[firstName] = a
        else:
            datdic[firstName] = [i]
        
    # print(datdic)
    for i in datdic:
        print(i)
        print(datdic[i])
        print("---------------------")

    return datdic

def plotDistributionOneD(arr):
    """
    plot Distribution graph by 1D array
    """
    tempArr = arr.copy()
    tempArr.sort()
    plt.bar(np.arange(len(tempArr)), tempArr)
    plt.ylabel('Numbers of photo') 
    plt.xlabel('classes')
    plt.title("Total photo distribution") 
    plt.show()

def plotHistOneD(arr):
    """
    plot Histogram graph by 1D array
    """
    tempArr = arr.copy()
    plt.hist(tempArr, bins=24 )
    plt.ylabel('classes')
    plt.xlabel('Numbers of photo') 
    plt.title("Histogram of images per class") 
    plt.show()


def genGeneralReport(path):
    """ Generate a folder report regarding inside folder items """
    totalcount = 0
    tinydict = {}

    for ind, folder in enumerate( os.listdir(path) ) :

        insidePath = os.path.join(path, folder)
        tinydict[folder] = len( os.listdir(insidePath) )
        totalcount += len( os.listdir(insidePath) )

    # tinydictSort = sorted(tinydict.items(), key=lambda x: x[1])

    numOnly = np.array( [ value for key, value in tinydict.items() ] )

    print("-------------------------------")
    print("Generated report for" , path)
    print("Total folder:" , len(numOnly))
    print("Total items:" , totalcount)
    print("----------------")
    print("Avg:" , int(np.average(numOnly)))
    print("Mean:" , int(np.median(numOnly)))
    print("Max:" , max(tinydict.items(), key = lambda k : k[1]) )
    print("Min:" , min(tinydict.items(), key = lambda k : k[1]) )
    print("-------------------------------")

    plotDistributionOneD(numOnly)
    plotHistOneD(numOnly)

def genReport(path):
    """
    Generate report regarding the folder informations
    """
    totalcount = 0
    tinydict = {}

    for ind, folder in enumerate( os.listdir(path) ) :

        insidePath = os.path.join(path, folder)
        tinydict[folder] = len( os.listdir(insidePath) )
        totalcount += len( os.listdir(insidePath) )

    # tinydictSort = sorted(tinydict.items(), key=lambda x: x[1])

    numOnly = np.array( [ value for key, value in tinydict.items() ] )

    avgVal = int(np.average(numOnly))
    meanVal =  int(np.median(numOnly))
    maxVal = max(tinydict.items(), key = lambda k : k[1])
    minVal = min(tinydict.items(), key = lambda k : k[1])


    print("-------------------------------")
    print("Generated report for" , path)
    print("Total folder:" , len(numOnly))
    print("Total items:" , totalcount)
    print("----------------")
    print("Avg:" , avgVal )
    print("Mean:" , meanVal )
    print("Max:" , maxVal )
    print("Min:" , minVal )
    print("-------------------------------")

    return { "minVal":minVal[1], "maxVal":maxVal[1], "avgVal" : avgVal, "meanVal": meanVal }

def scaleByMax( path,  result, offset = 0 ):

    """
    Scaling folders items helpers
    """

    for ind, folder in enumerate( os.listdir(path) ):
        insidePath = os.path.join(path, folder)
        insidePathArr = os.listdir(insidePath)

        if len(insidePathArr) >= int(result["maxVal"]):
            continue

        copyVal = result["maxVal"] - len(insidePathArr) + offset

        print("---------------")
        print("current:", len(insidePathArr))
        print("copy count:" , copyVal)
        print("---------------")

        for k in range(copyVal):
            inside_folder = np.random.choice( insidePathArr )
            shutil.copy( os.path.join(insidePath, inside_folder) , os.path.join(insidePath, "newImg" + str(k) + inside_folder ))

def scaleDataSmart(dataPath, offset):
    """
    Scale your data by the max numbers of items occur in all files
    """

    scaleByMax( dataPath, genReport(dataPath) , offset )
    print("After Report:")
    genReport(dataPath)

def allImagesRootToPng(path, dirPath, quite = False):
    """
    Transfer all images from original path to a new copy of dirPath with png format
    Keyword arguments:

    path -- original path string  

    dirPath -- target path string
    """

    if path == "" or dirPath == "":
        print("Missing input path")
        return False
    
    if not os.path.exists( dirPath ) and not os.path.isdir( dirPath ):
        os.mkdir( dirPath )
 
    for outer_Path in os.listdir(path):

        folder_Path = os.path.join(path, outer_Path)
        for ind, inter_Images in enumerate( os.listdir(folder_Path) ):

            img_Path = os.path.join(path, outer_Path, inter_Images)

            target_Path = os.path.join(dirPath, outer_Path)
            if not os.path.exists( target_Path ) and not os.path.isdir( target_Path ):
                os.mkdir( target_Path )
            
            try:
                img = Image.open(img_Path)
                target_Path_Name = os.path.join(dirPath, outer_Path, "images" + str(ind) + ".png" )
                img.save( target_Path_Name , "PNG")

                if quite :
                    print("Saved imaged : " , str(img_Path) )
            except:
                print("skipping images:" , str(inter_Images) )
        
    print("Done!")
    return True

def allImagesRootToJpeg(path, dirPath, quite = False):
    """
    Transfer all images from original path to a new copy of dirPath with jpeg format
    Keyword arguments:

    path -- original path string  

    dirPath -- target path string
    """

    if path == "" or dirPath == "":
        print("Missing input path")
        return False
    
    if not os.path.exists( dirPath ) and not os.path.isdir( dirPath ):
        os.mkdir( dirPath )

    print("Processing... Please wait.")
 
    for outer_Path in os.listdir(path):

        folder_Path = os.path.join(path, outer_Path)
        for ind, inter_Images in enumerate( os.listdir(folder_Path) ):

            img_Path = os.path.join(path, outer_Path, inter_Images)

            target_Path = os.path.join(dirPath, outer_Path)
            if not os.path.exists( target_Path ) and not os.path.isdir( target_Path ):
                os.mkdir( target_Path )
            
            try:
                img = Image.open(img_Path)
                target_Path_Name = os.path.join(dirPath, outer_Path, "images" + str(ind) + ".jpeg" )
                img.save( target_Path_Name , "JPEG")

                if not quite:
                    print("Saved imaged : " , str(img_Path) )
            except:
                print("skipping images:" , str(inter_Images) )
        
    print("Done!")
    return True
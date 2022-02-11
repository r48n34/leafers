import os
import shutil
from PIL import Image


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

main("D:\\gh code\\codeNotes\\university\\webScraper\\img4", "D:\\gh code\\codeNotes\\university\\webScraper\\result")
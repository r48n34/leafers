import os
from PIL import Image

def allImagesRootToJpeg(path, dirPath, quite = False):
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


if __name__ == "__main__":
    allImagesRootToJpeg("G:\\fypssd\\target1\\allPng", "G:\\fypssd\\target1\\allJpeg", True )
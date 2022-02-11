import os
import shutil

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


    
   



if __name__ == "__main__":
    combindDir("G:\\fypssd\\target1\\flowers", "G:\\fypssd\\target1\\flower400GroupBy" )
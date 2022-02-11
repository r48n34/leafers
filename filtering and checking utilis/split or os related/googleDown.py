import os
import cv2
import shutil

# sep single class data under current dir
# types = "train" / "valid"
def sepTrainValid(currentLocation, targetLocation, validNum , classes):

    def nameingFunc(n):
        name = n if '.jpg' in n else (n + str('.jpg'))
        return name

    trainDir = targetLocation + "train\\" + classes
    validDir = targetLocation + "valid\\" + classes

    os.mkdir(trainDir)
    os.mkdir(validDir)

    direc = os.listdir(currentLocation)
    #filledDirec = [img for img in direc if img.find('images') >= 0]
    filledDirec = [img for img in direc]

    cutPt = int( len(filledDirec)  * (1 - validNum) )

    trainArr = [ img for img in filledDirec[:cutPt] ]
    validArr = [ img for img in filledDirec[cutPt:] ]

    for i in trainArr:
        try:
            shutil.copy2( os.path.join(currentLocation, i) , os.path.join(trainDir, nameingFunc(i)))
        except:
            print("Falied" + os.path.join(validDir, nameingFunc(i)))

    for i in validArr:
        try:
            shutil.copy2( os.path.join(currentLocation, i) , os.path.join(validDir, nameingFunc(i)))
        except:
            print("Falied" + os.path.join(validDir, nameingFunc(i)))


# validNum = 0 to 1, best ~0.3
def sepData(currentLocation, targetLocation, validNum):

    os.mkdir(targetLocation + "train")
    os.mkdir(targetLocation + "valid")

    for index, pol in enumerate( os.listdir(currentLocation) ):
        sepTrainValid(currentLocation + pol, targetLocation, validNum, pol)

def reSizeFunc(path, target):
    files = os.listdir(path)
    
    for index, file in enumerate(files):
        try:
            if file.find('images') >= 0:
                name = os.path.join(path, file)

                #read and resize
                img = cv2.imread(name)
                resized_image = cv2.resize(img, (resizeVal, resizeVal), interpolation=cv2.INTER_AREA)

                # change dir to target dir and save img
                os.chdir(target)
                filename = str(index) + "hi" + ".jpg"
                cv2.imwrite(filename, resized_image)       
        except:
            print(file, "resize error.")

def main(currentLocation, targetLocation, validNum):

    if not currentLocation.endswith('\\') or not currentLocation.endswith('/'):
        currentLocation += '\\'
    if not targetLocation.endswith('\\') or not targetLocation.endswith('/'):
        targetLocation += '\\'
    
    for index, file in enumerate( os.listdir(currentLocation) ):
        reSizeFunc(os.path.join(currentLocation, file), os.path.join(currentLocation, file))

    sepData(currentLocation, targetLocation, validNum)
    print("Done")

resizeVal = 512
main("D:\\gh code\\codeNotes\\university\\webScraper\\temp", "D:\\gh code\\codeNotes\\university\\webScraper\\result", 0.2)

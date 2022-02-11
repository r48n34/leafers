import os
import json

def checkSubDirExist(dir):
    badArr = []
    num = 0

    for name in os.listdir(dir):
        newDir = os.path.join(dir, name)
        print(num, "/" ,len(os.listdir(dir)))
        num += 1
        
        for name2 in os.listdir(newDir):
            currFile = os.path.join(newDir, name2)
            
            if os.path.isdir(currFile):
                badArr.append(newDir)
                break

    print(badArr)
    print("done")

def readJsonFile(dirName):
    f = open(dirName,"r",encoding="utf-8")
    data = json.load(f)
    f.close()
    return data


def checkHavenDownloadData(dir, data):
    dirArr = set( os.listdir(dir) )
    origArr = [i["scientific_name"][0] for i in data] 
    
    notExistArr = []
    
    for i in origArr:
        if i not in dirArr:
            notExistArr.append(i)
    
    return notExistArr

if __name__ == "__main__":
    print("Running...")
    checkSubDirExist("F:\\test vsxc code\\photos")
    print("Done.")

import os
import numpy as np
import shutil

def genReport(path):
    totalcount = 0
    tinydict = {}

    for ind, folder in enumerate( os.listdir(path) ) :

        insidePath = os.path.join(path, folder)
        tinydict[folder] = len( os.listdir(insidePath) )
        totalcount += len( os.listdir(insidePath) )

    tinydictSort = sorted(tinydict.items(), key=lambda x: x[1])

    numOnly = np.array( [ value for key, value in tinydict.items() ] )

    #print(tinydict)
    #print(tinydictSort)

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

def scaleByMax( path,  result ):

    for ind, folder in enumerate( os.listdir(path) ):
        insidePath = os.path.join(path, folder)
        insidePathArr = os.listdir(insidePath)

        if len(insidePathArr) >= int(result["maxVal"]):
            continue

        copyVal = int( result["maxVal"] / len(insidePathArr) )

        print("---------------")
        print("current:", len(insidePathArr))
        print("copy count:" , copyVal)
        print("total amount" , len(insidePathArr) * copyVal)
        print("---------------")
        
        for ind2, inside_folder in enumerate( os.listdir(insidePath) ):
            
            for k in range(copyVal):

                shutil.copy( os.path.join(insidePath, inside_folder) , os.path.join(insidePath, "newImg" + str(ind2) + str(k) + inside_folder ))


if __name__ == "__main__":
    dataPath = "G:\\fypssd\\target1\\flowersScaleUp"

    result = genReport(dataPath)
    scaleByMax( dataPath,  result )

    print("After Report")
    genReport(dataPath)
  
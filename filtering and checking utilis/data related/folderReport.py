import os
import numpy as np
import matplotlib.pyplot as plt

def plotDistributionOneD(arr):
    tempArr = arr.copy()
    tempArr.sort()

    plt.bar(np.arange(len(tempArr)), tempArr)
    plt.ylabel('Numbers of photo') 
    plt.xlabel('classes')
    plt.title("Total photo distribution") 
    plt.show()

def plotHistOneD(arr):
    tempArr = arr.copy()
    #tempArr.sort()

    plt.hist(tempArr, bins=24 )
    plt.ylabel('classes')
    plt.xlabel('Numbers of photo') 
    plt.title("Histogram of images per class") 
    plt.show()


def genReport(path):
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


if __name__ == "__main__":
    genReport("G:\\fypssd\\target1\\flower400GroupBy")
    # genReport("G:\\fypssd\\target1\\smartScale400data1337\\valid")
    # genReport("G:\\fypssd\\target1\\groupByNew")
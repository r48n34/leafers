import os


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



if __name__ == "__main__":
    printDirTree("G:\\fypssd\\target1\\smartScale689\\train")
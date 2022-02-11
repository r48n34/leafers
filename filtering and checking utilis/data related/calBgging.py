import itertools

def calBagging(possArr):
    """accuracy of models"""

    table = list( itertools.product([False, True], repeat=len(possArr) ))

    truePoss = 0

    for i in table:

        if i.count(True) >= 2:

            temp = 1
            for ind, val in enumerate(i):
                if val == True:
                    temp *= possArr[ind]
                else:
                    temp *= (1 - possArr[ind])
            
            truePoss += temp

    print(truePoss)

if __name__ == "__main__":
    calBagging([0.7840, 0.8340, 0.7900])




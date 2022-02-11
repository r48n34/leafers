import os

data_dir = "F:\\test vsxc code\\Google-Image-Scraper-master\\photos"
cpDir = "F:\\test vsxc code\\Google-Image-Scraper-master\\temp"

needRmArr = set( os.listdir(cpDir) )

print(needRmArr)

for index, file in enumerate( os.listdir(data_dir) ):
    
    fol = os.path.join(data_dir, file)
    bigFile_filder = os.listdir(fol)
    
    for index2, inside_file in enumerate(bigFile_filder):
    
        imgPath = os.path.join(fol, inside_file)
        
        if inside_file in needRmArr:
            os.remove(imgPath)
            print("Removed:", imgPath)

print("Done")
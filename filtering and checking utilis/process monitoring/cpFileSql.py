import psycopg2
import os
import shutil
from distutils.dir_util import copy_tree

imgPath = "G:\\fypssd\\photos"
cpPath = "G:\\fypssd\\finalDir"

curPath =  set( os.listdir(imgPath) )
print(len(curPath))

client = psycopg2.connect("dbname=fyp user=postgres password=123")
cur = client.cursor()

cur.execute("""SELECT plant_data.*,
json_agg( DISTINCT plant_common_name_data.common_name ) as common_name,
json_agg( DISTINCT plant_chinese_name_data.chinese_name ) as chinese_name,
json_agg( DISTINCT plant_sc_name_data.sc_name ) as sc_name,
json_agg( DISTINCT plant_scientific_name_data.scientific_name ) as scientific_name
FROM plant_data
JOIN plant_common_name_data
ON plant_data.id = plant_common_name_data.plant_id
JOIN plant_chinese_name_data
ON plant_data.id = plant_chinese_name_data.plant_id
JOIN plant_sc_name_data
ON plant_data.id = plant_sc_name_data.plant_id
JOIN plant_scientific_name_data
ON plant_data.id = plant_scientific_name_data.plant_id
WHERE is_angiosperms = true
GROUP BY plant_data.id;""")

records = cur.fetchall()
count = 0

for i in records:

    if i[11][0] in curPath:
        p = os.path.join(imgPath, i[11][0])
        tar = os.path.join(cpPath, i[11][0])
        print(p)
        #count += 1
        copy_tree(p, tar)

print(count)
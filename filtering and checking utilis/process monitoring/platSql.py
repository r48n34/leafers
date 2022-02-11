import psycopg2
import os

curPath =  set( os.listdir("F:\\test vsxc code\\Google-Image-Scraper-master\\photos") )
print(len(curPath))

client = psycopg2.connect("dbname=fyp user=postgres password=123")
cur = client.cursor()

# cur.execute("SELECT dirName FROM checked_plant")
# resArr = [i[0] for i in cur.fetchall()]
# records = set ( resArr )

# print(records)



# for i in range(6):
#     cur.execute("INSERT INTO checked_plant (dirName, status) VALUES ( %s, %s );", ("hello", True) )
#     client.commit()

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

#cur.execute("SELECT dirName FROM plant_data")
records = cur.fetchall()

count = 0
for i in records:
    #print(i[11][0])
    if i[11][0] in curPath:
        count += 1
    
print(len(records))
print(count)

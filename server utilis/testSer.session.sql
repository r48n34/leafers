-- {
--         "species_id": "13338",
--         "species_name": "liang",
--         "family_no": "358",
--         "family_name": "Poaceae",
--         "family_name_chi": "禾本科",
--         "family_name_sc": "禾本科",
--         "common_name": [
--             ""
--         ],
--         "chinese_name": [
--             "大泰竹"
--         ],
--         "sc_name": [
--             "大泰竹"
--         ],
--         "scientific_name": [
--             "× Thyrsocalamus liang"
--         ]
-- },

CREATE TABLE plant_data(
    id SERIAL primary key,
    species_id INTEGER,
    species_name varchar(255),
    family_no varchar(255),
    family_name varchar(255),
    family_name_chi varchar(255),
    family_name_sc varchar(255),
    is_angiosperms BOOLEAN
)

INSERT INTO plant_data (species_id, species_name, family_no, family_name, family_name_chi, family_name_sc, is_angiosperms)
VALUES (13338, 'liang', 358, 'Poaceae', '禾本科', '禾本科');
SELECT * FROM plant_data;

   
CREATE TABLE plant_common_name_data(
    id SERIAL primary key,
    plant_id INTEGER,
    FOREIGN KEY (plant_id) REFERENCES plant_data(id),
    common_name varchar(255)
)
INSERT INTO plant_common_name_data (plant_id, common_name) VALUES ( (SELECT id FROM plant_data WHERE species_id = 13338), '');
SELECT * FROM plant_common_name_data;


CREATE TABLE plant_chinese_name_data(
    id SERIAL primary key,
    plant_id INTEGER,
    FOREIGN KEY (plant_id) REFERENCES plant_data(id),
    chinese_name varchar(255)
)
INSERT INTO plant_chinese_name_data (plant_id, chinese_name) VALUES ( (SELECT id FROM plant_data WHERE species_id = 13338), '大泰竹');
SELECT * FROM plant_chinese_name_data;


CREATE TABLE plant_sc_name_data(
    id SERIAL primary key,
    plant_id INTEGER,
    FOREIGN KEY (plant_id) REFERENCES plant_data(id),
    sc_name varchar(255)
)
INSERT INTO plant_sc_name_data (plant_id, sc_name) VALUES ( (SELECT id FROM plant_data WHERE species_id = 13338), '大泰竹');
SELECT * FROM plant_sc_name_data;


CREATE TABLE plant_scientific_name_data(
    id SERIAL primary key,
    plant_id INTEGER,
    FOREIGN KEY (plant_id) REFERENCES plant_data(id),
    scientific_name varchar(255)
)
INSERT INTO plant_scientific_name_data (plant_id, scientific_name) VALUES ( (SELECT id FROM plant_data WHERE species_id = 13338), '× Thyrsocalamus liang');
SELECT * FROM plant_scientific_name_data;

CREATE TABLE checked_plant(
    id SERIAL primary key,
    dirName varchar(255),
    status boolean
)
TRUNCATE TABLE checked_plant RESTART IDENTITY;
SELECT * FROM checked_plant;
SELECT count(*) as checked_count FROM checked_plant;
SELECT count(*) as remaining FROM plant_data WHERE is_angiosperms = true;
DROP TABLE checked_plant;


SELECT plant_data.*, json_agg(plant_scientific_name_data.scientific_name)
FROM plant_data
JOIN plant_common_name_data
ON plant_data.id = plant_common_name_data.plant_id
JOIN plant_chinese_name_data
ON plant_data.id = plant_chinese_name_data.plant_id
JOIN plant_sc_name_data
ON plant_data.id = plant_sc_name_data.plant_id
JOIN plant_scientific_name_data
ON plant_data.id = plant_scientific_name_data.plant_id
GROUP BY plant_data.id;

SELECT plant_data.*,
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
-- WHERE plant_scientific_name_data.scientific_name IN ('× Thyrsocalamus liang') 
WHERE plant_chinese_name_data.chinese_name like '%樹%' 
GROUP BY plant_data.id;

COPY (plant_data) TO 'F:\test vsxc code\codeNotes\university\webScraper\runSql\sqlPlay\test.csv' (FORMAT CSV, HEADER TRUE, DELIMITER ',', ENCODING 'utf-8');

-- SELECT plant_data.*,
-- json_agg( DISTINCT plant_common_name_data.common_name ) as common_name,
-- json_agg( DISTINCT plant_chinese_name_data.chinese_name ) as chinese_name,
-- json_agg( DISTINCT plant_sc_name_data.sc_name ) as sc_name,
-- json_agg( DISTINCT plant_scientific_name_data.scientific_name ) as scientific_name
-- FROM plant_data
-- JOIN plant_common_name_data
-- ON plant_data.id = plant_common_name_data.plant_id
-- JOIN plant_chinese_name_data
-- ON plant_data.id = plant_chinese_name_data.plant_id
-- JOIN plant_sc_name_data
-- ON plant_data.id = plant_sc_name_data.plant_id
-- JOIN plant_scientific_name_data
-- ON plant_data.id = plant_scientific_name_data.plant_id
-- GROUP BY plant_data.id;

-- SELECT plant_data.*,
-- json_agg( 
--     json_build_object(
--         'common_name',(
--             SELECT ARRAY_AGG(plant_common_name_data.common_name)
--             FROM plant_common_name_data
--             WHERE plant_common_name_data.plant_id = plant_data.id
--         ),
--         'chinese_name',(
--             SELECT ARRAY_AGG(plant_chinese_name_data.chinese_name)
--             FROM plant_chinese_name_data
--             WHERE plant_chinese_name_data.plant_id = plant_data.id
--         ),
--         'sc_name',(
--             SELECT ARRAY_AGG(plant_sc_name_data.sc_name)
--             FROM plant_sc_name_data
--             WHERE plant_sc_name_data.plant_id = plant_data.id
--         ),
--         'scientific_name',(
--             SELECT ARRAY_AGG(plant_scientific_name_data.scientific_name)
--             FROM plant_scientific_name_data
--             WHERE plant_scientific_name_data.plant_id = plant_data.id
--         )
--     ) 
-- ) as details
-- FROM plant_data
-- JOIN plant_common_name_data
-- ON plant_data.id = plant_common_name_data.plant_id
-- JOIN plant_chinese_name_data
-- ON plant_data.id = plant_chinese_name_data.plant_id
-- JOIN plant_sc_name_data
-- ON plant_data.id = plant_sc_name_data.plant_id
-- JOIN plant_scientific_name_data
-- ON plant_data.id = plant_scientific_name_data.plant_id
-- GROUP BY plant_data.id;

-- SELECT plant_data.*,
-- json_agg( 
--     json_build_object(
--         'common_name',plant_common_name_data.common_name,
--         'chinese_name',plant_chinese_name_data.chinese_name,
--         'sc_name',plant_sc_name_data.sc_name,
--         'scientific_name',plant_scientific_name_data.scientific_name
--     ) 
-- )
-- FROM plant_data
-- JOIN plant_common_name_data
-- ON plant_data.id = plant_common_name_data.plant_id
-- JOIN plant_chinese_name_data
-- ON plant_data.id = plant_chinese_name_data.plant_id
-- JOIN plant_sc_name_data
-- ON plant_data.id = plant_sc_name_data.plant_id
-- JOIN plant_scientific_name_data
-- ON plant_data.id = plant_scientific_name_data.plant_id
-- GROUP BY plant_data.id;


-- In case
TRUNCATE TABLE plant_data RESTART IDENTITY CASCADE;

TRUNCATE TABLE plant_common_name_data RESTART IDENTITY;
TRUNCATE TABLE plant_chinese_name_data RESTART IDENTITY;
TRUNCATE TABLE plant_sc_name_data RESTART IDENTITY;
TRUNCATE TABLE plant_scientific_name_data RESTART IDENTITY;

DROP TABLE 
plant_scientific_name_data, 
plant_sc_name_data, 
plant_chinese_name_data, 
plant_common_name_data, 
plant_data;
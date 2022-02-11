import express , {Request,Response} from 'express';
import expressSession from 'express-session';

import {Client} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

//import { fillData } from './utili/insertData';

export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

client.connect();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(expressSession({
    secret: 'fjghjfghjghddfighkdfjghgofhisdgsdfo;ghjsl;jkfh',
    resave: true, 
    saveUninitialized: true 
}));

app.use(express.static('public'));

( async () => {
    let result = await client.query(`
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
    WHERE is_angiosperms = TRUE
    GROUP BY plant_data.id;`)

    //WHERE plant_common_name_data.common_name like '%tree%'

    for(let i of result.rows){
        console.log(i.scientific_name[0]);
    }

    console.log( result.rows.length );

    let otherArr = [...result.rows];
    let uqArr: any = new Set( otherArr.map( v => v.scientific_name[0].split(" ")[0]) ) 
    let result2 = Array.from(uqArr) 
    console.log(result2);
    
})()

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
});
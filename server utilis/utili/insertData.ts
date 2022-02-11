import plantsData from '../dataFile/allPlants.json'
import angData from '../dataFile/Angiosperms_Dicotyledons.json'

import { client } from '../app'

async function falttenData(){
    return angData.map(v => v[1]);
}

async function fillData(){

    let d = await falttenData();
    const specSet = new Set(d);

    try{

        for(let i of plantsData){

            let isSpec = specSet.has(i.family_name);

            await client.query(`INSERT INTO plant_data 
            (species_id, species_name, family_no, family_name, family_name_chi, family_name_sc, is_angiosperms)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`
            ,[i.species_id, i.species_name, i.family_no, i.family_name, i.family_name_chi, i.family_name_sc, isSpec]);

            for(let k of i.common_name){

                await client.query(`INSERT INTO plant_common_name_data (plant_id, common_name) 
                VALUES ( (SELECT id FROM plant_data WHERE species_id = $1), $2);
                `
                ,[i.species_id, k]);
            }

            for(let k of i.chinese_name){

                await client.query(`INSERT INTO plant_chinese_name_data (plant_id, chinese_name) 
                VALUES ( (SELECT id FROM plant_data WHERE species_id = $1), $2);
                `
                ,[i.species_id, k]);
            }

            for(let k of i.sc_name){

                await client.query(`INSERT INTO plant_sc_name_data (plant_id, sc_name) 
                VALUES ( (SELECT id FROM plant_data WHERE species_id = $1), $2);
                `
                ,[i.species_id, k]);
            }

            for(let k of i.scientific_name){

                await client.query(`INSERT INTO plant_scientific_name_data (plant_id, scientific_name) 
                VALUES ( (SELECT id FROM plant_data WHERE species_id = $1), $2);
                `
                ,[i.species_id, k]);
            }

        }

        console.log("Done")

    }
    catch(e){
        console.log(e)
        console.log("Oh no.")
    }

}

export { fillData }
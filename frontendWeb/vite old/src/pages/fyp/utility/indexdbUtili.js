import modelData from '../dataStorage/modelData.json'

async function checkDbExist(){
    const dbName = 'tensorflowjs';
    return ( await window.indexedDB.databases() ).map( (db) => db.name).includes(dbName);
}

async function checkModelExist(modelName){

    return new Promise(async (rec,rej) => {
        
        // check if db exist
        if(!(await checkDbExist())){
            rec(false);
            return;
        }

        let request = window.indexedDB.open('tensorflowjs');

        // check if model exist
        request.onsuccess = async function(event) {
            let db = event.target.result;

            try {

                // Open a transaction of regarding transaction table
                let transaction = await db.transaction("model_info_store", "readonly");
                // Open a table
                let request = await transaction.objectStore("model_info_store").get(modelName);

                request.onsuccess = function(event) {
                    //console.log(request.result);
                    //url = 'indexeddb://my-model';
                    request.result ? rec(true) : rec(false);
                };
                
            }
            catch (error) {
                //console.log(error);
                rec(false);
            } 

        };

    });

}

async function getAllIndexedDbModelData(){
    let temp = [];

    for(let i of modelData){
        await checkModelExist(i.shortTitle) && temp.push(i);     
    }
    
    return temp;
}

async function deleteIndexedDb(modelName){

    return new Promise(async (rec,rej) => {
        // check if db exist
        if(!(await checkDbExist())){
            rec(false);
            return;
        }

        let request = window.indexedDB.open('tensorflowjs');

        // check if model exist
        let total = 0;
        request.onsuccess = async function(event) {
            let db = event.target.result;

            try {

                // Open a transaction of regarding transaction table
                let transaction = await db.transaction("model_info_store", "readwrite");
                let request = await transaction.objectStore("model_info_store").delete(modelName);

                let transaction3 = await db.transaction("models_store", "readwrite");
                let request2 = await transaction3.objectStore("models_store").delete(modelName);

                request.onsuccess = function(event) {
                    //console.log("delete model_info_store success");
                    total ++;
                    checkTotal();
                };

                request2.onsuccess = function(event) {
                    //console.log("delete models_store success");
                    total ++;
                    checkTotal();
                };

                function checkTotal(){
                    total === 2 && rec(true);
                }
                
            }
            catch (error) {
                console.log(error);
                rec(false);
            } 

        };

    });

}

export { checkDbExist, checkModelExist, deleteIndexedDb, getAllIndexedDbModelData }
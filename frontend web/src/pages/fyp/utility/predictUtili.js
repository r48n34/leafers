import * as tf from '@tensorflow/tfjs';
//<input type="file" name="avatar" accept="image/png, image/jpeg" onInput={(e) => setThisPic(e.target.files[0])} ></input>

async function createModel(url, method){ // fit model in hook myModel
    const mod = method === "LayersModel" ? await tf.loadLayersModel(url) : await tf.loadGraphModel(url);
    return mod
}

// for img elements to display the images fron=m useState
function createObj(img){
    return URL.createObjectURL(img);
}

function timer(t){
    return new Promise( (rec) => {
      setTimeout(rec, t)
    })
}

async function toindexedDb(model, modelName){
    try{
        const saveResult = await model.save("indexeddb://" + modelName);
        console.log(saveResult);
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }

}

async function predictResult(myModel, imgInputId, imgSize, subNum, divNum, labelArr){
    let obj;

    try{

        const imageRef = document.getElementById(imgInputId); // That image elements
        
        let waitTime = 1300 // Normal wait time
        await timer(waitTime);
    
        let start = new Date();

        //console.log(subNum);
        //console.log(divNum);
    
        let imgPre = tf.browser.fromPixels(imageRef)
            .resizeNearestNeighbor([imgSize,imgSize])
            .toFloat()
            .div(tf.scalar(divNum))
            .sub(tf.scalar(subNum))  
            .expandDims();
        
        //let afterResize = new Date();
        //console.log("Img resize & rescale time", (new Date() - start) / 1000);
    
        const p = await myModel.predict(imgPre).data();
    
        //console.log("yo");
    
        const labelMyModel = labelArr;
        let ind = p.indexOf(Math.max(...p));
        //console.log(p);
        //console.log("MyModel:", labelMyModel[ind]);
    
        obj = {
            status: true,
            object : labelMyModel[ind],
            confident : (Math.max(...p) * 100).toFixed(2) + "%",
            timeTaken: (new Date() - start) / 1000 + " secs",
            timeTakenOffset: (new Date() - start + waitTime) / 1000 + " secs",
        }
    
        //console.log(obj);
    
        //console.log("Time used to predict: ",(new Date() - afterResize) / 1000);
        //console.log("Overall time: ",(new Date() - start) / 1000);
        //console.log("----------------------------");
    }
    catch(err){
        obj = {
          status: false,
          object : "",
          confident : 0,
          timeTaken: 0,
          timeTakenOffset: 0,
        }
    }
    finally{
        return obj;
    }



}

// Helper function for argsort
//let argsort = arr => arr.map( (v, i) => [v, i] ).sort().map( a => a[1] );

async function predictResultTopFive(myModel, imgInputId, imgSize, subNum, divNum, labelArr){
    let obj = {};

    try{

        const imageRef = document.getElementById(imgInputId); // That image elements
        
        let waitTime = 1300 // Normal wait time
        await timer(waitTime);
    
        let start = new Date();

        //console.log(subNum);
        //console.log(divNum);
    
        let imgPre = tf.browser.fromPixels(imageRef)
            .resizeNearestNeighbor([imgSize,imgSize])
            .toFloat()
            .div(tf.scalar(divNum))
            .sub(tf.scalar(subNum))  
            .expandDims();
        
        //let afterResize = new Date();
        //console.log("Img resize & rescale time", (new Date() - start) / 1000);
    
        const p = await myModel.predict(imgPre).data();

        // tfjs default value
        const {values, indices} = tf.topk(p, 5);  

        const top5ArrPoss = Array.from( values.dataSync() )
        const top5Arr = Array.from( indices.dataSync() )

        let topFiveArr = []
        for(let op = 0; op < 5; op ++){
            topFiveArr.push( {label: labelArr[ top5Arr[op] ], confident: top5ArrPoss[op]  } )
        }

        topFiveArr.forEach( (v,i) => obj[`top${i + 1}`] = v );

        obj = {
            ...obj,
            status: true,
            timeTaken: (new Date() - start) / 1000 + " secs",
            timeTakenOffset: (new Date() - start + waitTime) / 1000 + " secs",
        }
    
        //console.log(obj);
    
        //console.log("Time used to predict: ",(new Date() - afterResize) / 1000);
        //console.log("Overall time: ",(new Date() - start) / 1000);
        //console.log("----------------------------");
    }
    catch(err){
        obj = {
            "top1": {},
            "top2": {},
            "top3": {},
            "top4": {},
            "top5": {},
            "status": false,
            "timeTaken": "",
            "timeTakenOffset": ""
        }

        console.log(err);
    }
    finally{
        return obj;
    }

}


export {createModel, createObj, predictResult, predictResultTopFive, toindexedDb}
import * as tf from '@tensorflow/tfjs';
import { funcObj, serverData } from '../services/apiUse';

async function createModel(
    url: string, 
    method: "LayersModel" | "GraphModel",
    setLoadingProgress?: Function
):Promise<tf.LayersModel | tf.GraphModel<string | tf.io.IOHandler>>{ // fit model in hook myModel

    function callBackProgress(num:number){
        !!setLoadingProgress && setLoadingProgress(num)
    }
    
    const mod = method === "LayersModel" 
    ? await tf.loadLayersModel(url,{
        onProgress: (e) => callBackProgress(e) 
    }) 
    : await tf.loadGraphModel(url, {
        onProgress: (e) => callBackProgress(e) 
    });

    return mod
}

// for img elements to display the images fron=m useState
function createObj(img: Blob | MediaSource){
    return URL.createObjectURL(img);
}

function timer(t: number){
    return new Promise( (rec) => {
      setTimeout(rec, t)
    })
}

async function toindexedDb(model: tf.LayersModel | tf.GraphModel<string | tf.io.IOHandler>, modelName:string): Promise<boolean>{
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

async function predictResult(
    myModel: any, //tf.LayersModel | tf.GraphModel<string | tf.io.IOHandler>
    imgInputId: string,
    imgSize: number,
    subNum: number,
    divNum: number,
    labelArr: any[]
){
    let obj;

    try{

        const imageRef:any = document.getElementById(imgInputId); // That image elements
        
        let waitTime = 1300 // Normal wait time
        await timer(waitTime);
    
        let start = new Date();

        let imgPre = tf.browser.fromPixels(imageRef)
            .resizeNearestNeighbor([imgSize,imgSize])
            .toFloat()
            .div(tf.scalar(divNum))
            .sub(tf.scalar(subNum))  
            .expandDims();
        
    
        const p = await myModel.predict(imgPre).data();
    
        const labelMyModel = labelArr;
        let ind = p.indexOf(Math.max(...p));
    
        obj = {
            status: true,
            object : labelMyModel[ind],
            confident : (Math.max(...p) * 100).toFixed(2) + "%",
            timeTaken: (new Date().getTime() - start.getTime()) / 1000 + " secs",
            timeTakenOffset: (new Date().getTime() - start.getTime() + waitTime) / 1000 + " secs",
        }
    
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

interface RankObj {
    label: string
    confident: number 
}

export interface PredictedObject {
    "top1": RankObj,
    "top2": RankObj,
    "top3": RankObj,
    "top4": RankObj,
    "top5": RankObj,
    "status": boolean;
    "timeTaken": string
    "timeTakenOffset": string
}

async function predictResultTopFive(
    myModel: tf.GraphModel<string | tf.io.IOHandler>, // tf.LayersModel | tf.GraphModel<string | tf.io.IOHandler>,
    imgInputId:string,
    imgSize:number,
    subNum:number,
    divNum:number,
    labelArr:any[]
): Promise<PredictedObject>{
    let obj = {} as any;

    try{

        const imageRef = document.getElementById(imgInputId) as HTMLImageElement; // That image elements
        
        let waitTime = 1300 // Normal wait time
        await timer(waitTime);
    
        let start = new Date();
    
        let imgPre = tf.browser.fromPixels(imageRef)
            .resizeNearestNeighbor([imgSize,imgSize])
            .toFloat()
            .div(tf.scalar(divNum))
            .sub(tf.scalar(subNum))  
            .expandDims();
        
        const p = await (myModel.predict(imgPre) as tf.Tensor<tf.Rank>).data();

        // tfjs default value
        const {values, indices} = tf.topk(p, 5);  

        const top5ArrPoss:number[] = Array.from( values.dataSync() )
        const top5Arr:number[] = Array.from( indices.dataSync() )

        let topFiveArr:RankObj[] = []
        for(let op = 0; op < 5; op ++){
            topFiveArr.push( { label: labelArr[ top5Arr[op] ], confident: top5ArrPoss[op] } )
        }

        topFiveArr.forEach( (v,i) => obj[`top${i + 1}`] = v );

        obj = {
            ...obj,
            status: true,
            timeTaken: (new Date().getTime() - start.getTime()) / 1000 + " secs",
            timeTakenOffset: (new Date().getTime() - start.getTime() + waitTime) / 1000 + " secs",
        }
    
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

        console.log(obj)
        return obj;
    }

}

async function fetchserver(img: Blob){
    const serverUrl = `${serverData.serverUrl}${funcObj[1].name}?code=${serverData.serverCode}`
    console.log(serverUrl);

    return new Promise( (rec) => {

        try{
    
            //img = fileDate.files[0]
            let reader = new FileReader();
    
            reader.onload = async function() {
    
                let arrayBuffer:any = this.result
                let array = new Uint8Array(arrayBuffer)
    
                console.log(arrayBuffer);
                console.log(array);
    
                let res = await fetch(serverUrl ,{
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify( array )
                });
    
                let req = await res.json();
                console.log(req);

                rec(req);
            }
    
            reader.readAsArrayBuffer(img);
        }
        catch(err){
            console.log(err);
            console.log("Invalid input.");
            rec({ status: false })
        }
    })

}

export {timer, createModel, createObj, predictResult, predictResultTopFive, toindexedDb, fetchserver}
//import * as FileSystem from 'expo-file-system';
//import { decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js'

import * as ImageManipulator from 'expo-image-manipulator';

// Thanks https://github.com/ohyicong/reactnative-knn-image-classifier/blob/main/App.js
function base64ImageToTensor(base64){

    //Function to convert jpeg image to tensors
    const rawImageData = tf.util.encodeString(base64, 'base64');
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);

    const buffer = new Uint8Array(width * height * 3);

    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
}

// resize images for sutiable images
async function resizeImage(imageUrl, width, height){
    const actions = [{
      resize: { width, height },
    }];

    const saveOptions = {
      compress: 0.75,
      format: ImageManipulator.SaveFormat.JPEG,
      base64: true,
    };

    const res = await ImageManipulator.manipulateAsync(imageUrl, actions, saveOptions);
    return res;
}

// Transfer image to tensor data for predict
async function uriToTensor(url, imgsize){

    let imagePred = await resizeImage(url, imgsize , imgsize);
    let tensor = base64ImageToTensor(imagePred.base64);
    return tensor

}

// id = 0, food101Model data
function food101Data(){
    const modelJson = require("./food101/model.json");
        
    const mW1 = require("./food101/group1-shard1of4.bin");
    const mW2 = require("./food101/group1-shard2of4.bin");
    const mW3 = require("./food101/group1-shard3of4.bin");
    const mW4 = require("./food101/group1-shard4of4.bin");

    return [ modelJson, [mW1, mW2, mW3, mW4] ];
}

// id = 1
function flower400Code021Data(){
    const modelJson = require("./flower400Code021/model.json");
        
    const mW1 = require("./flower400Code021/group1-shard1of7.bin");
    const mW2 = require("./flower400Code021/group1-shard2of7.bin");
    const mW3 = require("./flower400Code021/group1-shard3of7.bin");
    const mW4 = require("./flower400Code021/group1-shard4of7.bin");
    const mW5 = require("./flower400Code021/group1-shard5of7.bin");
    const mW6 = require("./flower400Code021/group1-shard6of7.bin");
    const mW7 = require("./flower400Code021/group1-shard7of7.bin");

    return [ modelJson, [mW1, mW2, mW3, mW4, mW5, mW6, mW7] ];
}

// return model data as id input
async function getFuntionDataFromId(id){
    const arr = [food101Data, flower400Code021Data];

    if(id < 0 || id + 1 > arr.length){ // in case
        return [];
    }

    return arr[id]();

}

function timer(t){
  return new Promise( (rec, rej) =>{
    setTimeout(rec,t)
  })
}

async function predictResultTopFive(tensorArr, ipLabels){
  let obj = {};

  try{
    
    // tfjs default value
    const {values, indices} = tf.topk(tensorArr, 5);  

    const top5ArrPoss = Array.from( values.dataSync() )
    const top5Arr = Array.from( indices.dataSync() )

    let topFiveArr = []
    for(let op = 0; op < 5; op ++){
        console.log(top5ArrPoss[op]);
        topFiveArr.push( {label: ipLabels[ top5Arr[op] ], confident: top5ArrPoss[op]  } )
    }

    topFiveArr.forEach( (v,i) => obj[`top${i + 1}`] = v );

    obj = {
        ...obj,
        status: true,
    }

    //console.log(obj);

  }
  catch(err){
      obj = {
          "top1": {},
          "top2": {},
          "top3": {},
          "top4": {},
          "top5": {},
          "status": false,
      }

      console.log(err);
  }
  finally{
      return obj;
  }

}

export { uriToTensor, getFuntionDataFromId, predictResultTopFive }
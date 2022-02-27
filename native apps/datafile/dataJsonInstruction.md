// Name
"modeltitle":"Food101 Server",

// labels name
"modeltype":"Image Classifications",

// Subtitle name
"modelSubtitle":"Recognize 101 types of food!", 

// predictMode:"server" => serverPath e,g, "http://192.168.8.6:8000/upload?modelId=1"
// predictMode:"offline" => ""
// predictMode:"onlineModel" => molineModelPath e,g, "https://cdn.jsdelivr.net/gh/r48n34/self-tf-Model-storage/5Classv3Graph/model.json"
"modelapiPath":"http://192.168.8.6:8000/upload?modelId=1",

// Model shows on mainPage or not
"modelShowStatus": true, 

// Online imgaes uri
"modelImagesUri": "https://github.com/r48n34/r48n34.github.io/blob/master/img/school.jpg?raw=true|alt=school",

// Online imgaes alt
"imageAlt": "images",

//predictMode:
//"server" => Use server to Predict
//"offline" => Use offlineModel to Predict
//"onlineModel" => Use github model to Predict
"predictMode": "server",

// model is using online resources or offline model
"online" : true,

// Only "offline" or "onlineModel" needs to be add
"labels": [],

// Only "offline" or "onlineModel" needs to be add
"offlineInfo" : {
    "size": 224, // model input size
    "divValue": 1, // 1 if [0,255], 127.5 if [-1,1], 255 if [0,1]
    "subVal": 0, // 0 if [0,255] or [0,1], 1 if [-1,1]
    "modelFunctionId" : -1 // "offline" only, current 0 = food101
}
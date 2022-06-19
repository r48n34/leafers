export interface modelDataInterface {
    modeltitle: string;
    shortTitle: string;
    modeltype: string;
    iconName: string;
    modelSubtitle: string;
    modelapiPath: string;
    modelShowStatus: boolean;
    modelImagesUri: string;
    imageAlt: string;
    bgColor?:string;
    predictMode: string;
    online: boolean;
    buttonDisable: boolean;
    defaultThreshold: number;
    labels: string[];
    offlineInfo: OfflineInfo;
}

interface OfflineInfo {
    size: number;
    divValue: number;
    subVal: number;
    modelFunctionId: number;
}

export const dummyData:modelDataInterface = {

    "modeltitle":"",
    "shortTitle":"",
    "modeltype":"",
    "iconName":"",
    "bgColor":"",
    "modelSubtitle":"",
    "modelapiPath":"",
    "modelShowStatus": true,
    "modelImagesUri": "",
    "imageAlt": "",
    "predictMode": "",
    "online" : true,
    "buttonDisable": false,
    "defaultThreshold" : 0.4,
    "labels": [] ,
    "offlineInfo" : {
        "size": 0,
        "divValue": 1,
        "subVal": 1,
        "modelFunctionId" : -1
    }
}
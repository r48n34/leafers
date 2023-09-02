export interface ModelDataInterface {
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

export const dummyData: ModelDataInterface = {

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


export interface CreateAtObj {
    seconds: number
    nanoseconds: number
}

export interface HistoryData {
    confident: number | string
    createAt: CreateAtObj
    item: string
    modelName: string
    modelapiPath: string
}

export interface UserDataInterface {
    uid: string,
    displayName: string,
    email: string,
    photoURL: string,
    creationTime: string | Date,
    lastSignInTime: string | Date
}

export interface UserSettingInterface {
    uploadHist: boolean
}


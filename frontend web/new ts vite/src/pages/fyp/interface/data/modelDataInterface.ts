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
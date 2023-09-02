const serverUrl = "https://flowersapinew.azurewebsites.net/api/";
// const serverCode = "wiVnASAb_nUP3PVfcVE0zfmDtLy2KkxxOn8Cza3lC8tJAzFuzGFfew%3D%3D";

export interface FetchServerObject {
    name: string;
    code: string;
    query: any[];
    params: any[];
    body: any[];
}

export const serverData = {
    serverUrl: "https://flowersapinew.azurewebsites.net/api/",
    serverCode: "jOahjXeC0i0K9fi7Phj5iPunKeury9u-sEJRNltk3Fk1AzFu2VZT0A==",
}

export const funcObj = [
    {
        name: "modeldatareturn",
        query: [],
        params: [],
        body: [],
    },
    {
        name: "flowerPredictBlob",
        query: [],
        params: [],
        body: [],
    },

]

function fetchUrlCombine(apiName: string){
    let baseLink = `${serverUrl}${apiName}?code=${serverData.serverCode}`;
    return baseLink;
}

async function LabelSearchModelFetch(){
    try{
        let req = await fetch( fetchUrlCombine(funcObj[0].name) );
        let result = await req.json();
    
        return result;
    }
    catch(e){
        return e;
    }
}

export { LabelSearchModelFetch }
const serverUrl = "https://fypflowerpredict.azurewebsites.net/api/";

interface FetchServerObject {
    name: string;
    code: string;
    query: any[];
    params: any[];
    body: any[];
}

const funcObj = [
    {
        name: "modelDataReturn",
        code: "7yWafRksScQHwoYS7sy3OeAx7vIwgI2hsahJ5fQTG3nggnMKkdpbBQ==",
        query: [],
        params: [],
        body: [],
    }
]

function fetchUrlCombine(obj:FetchServerObject){
    let baseLink = `${serverUrl}${obj.name}?code=${obj.code}`;
    return baseLink;
}

async function LabelSearchModelFetch(){
    try{
        let req = await fetch( fetchUrlCombine(funcObj[0]) );
        let result = await req.json();
    
        return result;
    }
    catch(e){
        return e;
    }
}

export { LabelSearchModelFetch }
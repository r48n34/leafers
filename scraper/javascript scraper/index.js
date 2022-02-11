import Scraper from 'images-scraper';
import download from 'image-downloader';
import fs from 'fs';

import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

const google = new Scraper({
    puppeteer: {
      headless: false,
    },
});
  
function timer(t){
    return new Promise(rec =>{
        setTimeout(rec,t)
    })
}

let totals = 0;
function downloadWorkers(arr, dist){
    return new Promise( async (rec,rej) =>{

        for (let i of arr){

            try{

                if(i === undefined || i === null){
                    continue;
                }
    
                const options = {
                    url: i,
                    dest: dist,
                    timeout: 15000           
                }
        
                let a = await download.image(options);
                console.log("ok", ++totals);
    
            }
            catch(e){
                console.log(e, ++totals)
            }

        }

        rec("ok");

    })
}

let total = 0;
async function getResult(num, arr){

    return new Promise( async (rec,rej) =>{

        totals = 0;

        const results = await google.scrape(arr, num);
        console.log('results', results);

        let arrResult = results.map(v => v.url);
        let dist = "./img/" + arr
    
        !fs.existsSync(dist) && fs.mkdirSync(dist);

        //let tripNum = Math.floor( num / 3)
    
        let worker1 = downloadWorkers(arrResult.slice( 0, 50 ), dist);
        let worker2 = downloadWorkers(arrResult.slice( 50, 100 ), dist);
        let worker3 = downloadWorkers(arrResult.slice( 100,150 ), dist);
        let worker4 = downloadWorkers(arrResult.slice( 150,200 ), dist);

        Promise.all([worker1, worker2, worker3, worker4 ]).then(values => {
            rec();
        });

    });

};

async function main(num){
    let arr = [
        //"Air-plant",
        //"Annual Morning-glory",
        //"Beach Naupaka",
        //"Billygoat-weed",
        //"Birdwood's Mucuna",
        //"Blood-flower",
        //"Cairo Morning Glory",
        //"Cape Jasmine",
        //"Cherokee Rose",
        //"Chinese Feverine",
        //"Chinese Knotweed",
        //"Chinese Lily",
        //"Chinese Lobelia",
        //"Chinese Osbeckia",
        //"Chinese Privet",
        //"Chinese Silvergrass",
        //"Climbing Bauhinia",
        //"Coffee Senna",
        //"Common Chickweed",
        //"Common Melastoma",
        //"Common Reedgrass",
        //"Creeping Fig",
        //"Cudweed",
        //"Desmos",
        "Downy Holly",
        "Dwarf Mountain Pine",
        "Elephants-foot",
        "Erose Mussaenda",
        "European Dodder",
        "False Mallow",
        "Fire-cracker Vine",
        "Fragrant Glorybower",
        "Fragrant Litsea",
        "Gelsemium",
        "Giant Alocasia",
        "Ginger Lily",
        //"Glorybower",
        //"Golden-rod",
        //"Hawk's Beard",
        //"Henry's Rose",
        //"Hong Kong Hawthorn",
        //"India Abutilon",
        //"Indian Mock Strawberry",
        //"Itea",
        //"Japanese Raspberry",
        //"Japanese Thistle",
        //"Lalang Grass",
        //"Lantana",
        //"Large-flowered Uvaria",
        //"Lavender Sorrel",
        //"Lily Turf",
        //"Marsh Fleabane",
        //"Mexican Sunflower",
        //"Microcos",
        //"Mile-a-minute Weed",
        //"Musk Mallow",
        //"Myrobalan",
        //"Night Blooming Cereus",
        //"Nodding Wikstroemia",
        //"Pagoda Flower",
        //"Plantain",
        //"Poisonous Tomato",
        //"Prickly-pear",
        //"Redtop",
        //"Retuse-leaved Crotalaria",
        //"Rose Myrtle",
        //"Rough-leaved Holly",
        //"Sandpaper Vine",
        //"Sea-Lavender",
        //"Sensitive plant",
        //"Shining-fruit Nightshade",
        //"Shrimp Claw Plant",
        //"Skullcap",
        //"Smooth Crotalaria",
        //"Sorrel",
        //"Sow-Thistle",
        //"Tetrongan",
        //"Three-leaved Eleutherococcus",
        //"Twig-hanging Embelia",
        //"Uvaria",
        //"Water Hyacinth",
        //"Waxy Leaf",
        //"Wedelia",
        //"White Leadwort",
        //"Wild Asparagus",
        //"Wild Coxcomb",
        //"Wild Honeysuckle",
        //"Wood Gossip Caesalpinia",
        //"Yellow Bramble"
    ];

    total = num * arr.length;

    for(let k of arr){
        await getResult(num, k);
    }
 
}

main(200);
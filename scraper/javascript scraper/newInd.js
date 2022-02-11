// import Scraper from 'images-scraper';
// import download from 'image-downloader';
// import fs from 'fs';

var Scraper = require('images-scraper');
var download = require('image-downloader');
var fs = require('fs');
var url = require('url');

//const dataClass = require('F:\\test vsxc code\\codeNotes\\university\\webScraper\\dataFile\\other.json');
const dataClass = require('F:\\test vsxc code\\codeNotes\\university\\webScraper\\dataFile\\oneHun.json');

var sem = require('semaphore')(1);

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
});

let totals = 0;
function downloadWorkersHelper(urlOne, dist){
    return new Promise( async (rec,rej) =>{

        try{

            // Check url is valid, else falls into catch
            const myURL1 = new URL(urlOne);
    
            const options = {
                url: urlOne,
                dest: dist,
                timeout: 20000           
            }
        
            let a = await download.image(options);
            //console.log("ok", ++totals);
            ++totals;
            rec("ok");
    
        }
        catch(e){
            console.log("Error", ++totals);
            rec("ok");
        }

    })
}

let globalArray = [];

async function grandWorkers(dist){

    return new Promise( async (rec,rej) =>{

        while(globalArray.length > 0){

            let targets = "";
    
            // Only one workers can access the array
            sem.take(function() {
                if(globalArray.length <= 0){
                    rec();
                    console.log("Worker Done with length < 0 .")
                }
                targets = globalArray.pop();
                sem.leave();
            });

            // Downloading images
            try{

                if(targets === undefined || targets === null || targets === "" ){
                    continue;
                }

                await downloadWorkersHelper(targets, dist);
                globalArray < 0 && rec();
            }
            catch(e){
                continue;
            }
    
        }

        console.log("Worker Done with breaks while loop.")
        rec();

    })

}

let total = 0;

async function getResult(num, arr){

    return new Promise( async (rec,rej) =>{

        totals = 0;

        const results = await google.scrape(arr, num);
        //console.log('results', results);

        let arrResult = results.map(v => v.url);

        globalArray = [...arrResult];

        let dist = "./newRes2/" + arr
        !fs.existsSync(dist) && fs.mkdirSync(dist);

        // workers count
        let workerArr = [];
        for(let i = 0; i < 5 ; i++){
            workerArr.push( grandWorkers(dist) );
        }

        Promise.all(workerArr).then(values => {
            console.log("ok")
            rec();
        });

    });

};

async function main(num){

    let arr = [];
    for(let k of dataClass){
        //console.log(k.chinese_name[0]);
        arr.push(k);
    }

    total = num * arr.length;

    for(let k of arr){
        await getResult(num, k);
    }

    console.log("All files downloaded.")
 
}

main(100);
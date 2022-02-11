const fs = require('fs');
const Papa = require('papaparse');

// const dataAll = require('F:\\test vsxc code\\codeNotes\\university\\webScraper\\dataFile\\allPlants.json')
// const dataClass = require('F:\\test vsxc code\\codeNotes\\university\\webScraper\\dataFile\\allPlantsGen.json')

const dataClass = require('F:\\test vsxc code\\codeNotes\\university\\webScraper\\dataFile\\other.json')

async function main()  {

  for(let k of dataClass.records){
    console.log(k.chinese_name[0]);
  }

}

main();
// 2.3 : Read a JSON file and display specific data in the console.

const fs = require('fs');

function readAndDisplayData(filePath, keyToDisplay){
    try{
       const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8')); 
       const specificData = jsonData[keyToDisplay];

       console.log('"task 2.3" Specific data access successfulyy :- "Occupation:"', specificData);
    }catch(error){
        console.error('error reading JSON file:',error.message);

    }
}

const filePathForInfo = './Ass-2/Info.json';
const keyToDisplay = 'Occupation';

readAndDisplayData(filePathForInfo, keyToDisplay);
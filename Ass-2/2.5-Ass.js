// 5.  Create a script that reads data from a CSV file and converts it into JSON format
const { json } = require('express');
const csvtojson = require('csvtojson');
const fs = require('fs');


function csvToJSON(csvFilePath, jsonFilePath){
    csvtojson()
        .fromFile(csvFilePath)
        .then((jsonArrayObj)=>{
            fs.writeFile(jsonFilePath, JSON.stringify(jsonArrayObj, null, 4),(err)=>{
                if (err) throw err;
                console.log('"task 2.5" Conversion complete. JSON file created!');
            })
        })
}

const csvFilePath = './Ass-2/csvFile.csv';
const jsonFilePath = 'output.json';
csvToJSON(csvFilePath, jsonFilePath)
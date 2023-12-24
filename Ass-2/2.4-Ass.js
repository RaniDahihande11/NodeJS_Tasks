// 4. Write a function that appends data to an existing file.
const { json } = require('express');
const fs = require('fs');

function appendToFile(filePath, dataToAppend) {
    try {
        fs.appendFileSync(filePath, dataToAppend);
        console.log('"task 2.4" Successfully appended data to:',filePath);
    } catch (error) {
        console.error('Error appending to file:',error.message);
    }
}


const filePathForExiFile = './FirstProject/Content/First.txt'; 
const dataToAppend = '\nThis is the new data to append.';

appendToFile(filePathForExiFile, dataToAppend);
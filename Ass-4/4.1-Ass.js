// 4.1 Read a JSON file and display its contents in the console
const fs = require('fs');

const filePath = './Ass-4/Info.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
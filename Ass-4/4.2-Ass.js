// 4.2 : Implement a function to add a new object to the JSON file and save the updated data.
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.post('/addObject', (req, res) => {
  try {
    const jsonData = fs.readFileSync('./Ass-4/data.json', 'utf-8');
    const data = JSON.parse(jsonData);

    const newObj = req.body; 
    data.push(newObj);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');

    res.status(200).json({ message: 'Object added successfully', data: newObj });
  } catch (error) {
    console.error('Error adding object:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(5000,()=>{
  console.log('Server is listening on the port 5000...');
})

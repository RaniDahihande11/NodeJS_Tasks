//  //  4.3 : Modify an existing object in the JSON file by updating its properties.
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


app.put('/updateObject/:id', (req, res) => {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf-8');
    const data = JSON.parse(jsonData);

    console.log('Type of data:', typeof data); 

    const objectId = req.params.id;
    const existingObj = data.find(obj => obj.id === objectId);

    if (!existingObj) {
      return res.status(404).json({ error: 'Object not found' });
    }
    Object.assign(existingObj, req.body);

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');

    res.status(200).json({ message: 'Object updated successfully', data: existingObj });
  } catch (error) {
    console.error('Error updating object:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(5000,()=>{
  console.log('Server is listening on the port 5000...');
})

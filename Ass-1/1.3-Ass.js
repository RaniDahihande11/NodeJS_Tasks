// Assigment 1.3 : Set up a basic HTTP server using Express. 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(5000,()=>{
    console.log('Server is listening on the port 5000...');
})
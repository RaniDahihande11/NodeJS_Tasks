// 4. Create a route that responds with a simple "Hello, World!" message.

const express = require('express');
const app = express();

app.get('/resource',(req, res)=>{
    res.send('Hello, World!');
     
})

app.listen(5000,()=>{
    console.log('Server is listening on the port 5000...');
})

module.exports = app
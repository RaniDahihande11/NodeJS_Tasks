// Assigment 1.5 :  Implement middleware to log incoming requests and their corresponding URLs to the console. 

const express = require('express');
const app = express();

app.use('/',(req, res, next)=>{
    console.log('Request received:',req.method, req.url);
    next();
})



app.get('/',(req, res)=>{
    res.send('Hello, World!');
     
})

app.listen(5000,()=>{
    console.log('Server is listening on the port 5000...');
})

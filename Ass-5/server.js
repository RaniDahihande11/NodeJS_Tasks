const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const users = require('./users');
const auth = require('./auth')

// satic assets
app.use(express.static(path.join(__dirname, 'methods-public')));
// app.use(express.static('./methods-public')) // express.static = built-in middeleware
// parse form data
app.use(express.urlencoded({ extended: false}))
// parse json
app.use(express.json());

app.use('/api/users', users)
app.use('/login', auth)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'methods-public', 'index.html'));
});

app.listen(5000,()=>{
    console.log('Server is listening on the port 5000...');
})



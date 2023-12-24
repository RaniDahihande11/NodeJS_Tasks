// 4.5 Sort the objects in the JSON file based on a specific property and save the sorted data.
const express = require('express');
const app = express();

const { products } = require('./data')
// app.get('/',(req,res)=>{
//     res.json([{name:'rani'},{name:'susan'}])
// })

app.get('/',(req,res)=>{
        res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
     })

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);     
 })
 app.get('/api/products/:productID',(req,res)=>{
    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;

    const singleProduct = products.find((product)=> product.id === Number(productID))
    
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    // console.log(singleProduct);

    return res.json(singleProduct);     
 })

 app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello World');
 })

 app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query; 
    let sortedPrducts = [...products];
    
    if(search && typeof search === 'string'){
        sortedPrducts = sortedPrducts.filter((product)=>{
            return product.name.startsWith(search)
        })
        
    }
    if(limit){
        sortedPrducts = sortedPrducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedPrducts)



    res.send('Hello World');
 })

app.listen(5000,()=>{
    console.log('Server is listenin on the port 5000...');
})








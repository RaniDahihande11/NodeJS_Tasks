//  1. Use the built-in fs module to read data from a text file and display its contents in the console

const {readFile } = require('fs');

readFile('./Ass-2/First.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err);
        return
        
    }
    const first = result;
    console.log(result);
  

   readFile('./Ass-2/Second2.txt','utf-8',(err,resul)=>{
    if (err) {
        console.log(err);
        return }

    })
    const second2 = result;
    console.log(result);
        

})

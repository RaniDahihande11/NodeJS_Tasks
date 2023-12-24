// 2.Implement a function that writes user input to a new text file.
const { writeFile } = require('fs');

writeFile('First.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err);
        return
        
    }

const second = result;
    
    writeFile('write.txt',
    `Here is the result:${second}`
    ,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
       console.log('done with this task');
        
    })
})




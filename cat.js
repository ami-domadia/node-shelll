const fs = require('fs');

module.exports=function cat(filename){
    fs.readFile(`${filename}`, 'utf8', (err, data)=>{
        if (err) throw err;
        console.log(data);
    });
    
}
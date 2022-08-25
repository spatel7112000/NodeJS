const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt` ;

fs.appendFile(filePath,'Hello There This is Jimmy here',(err)=>{
    if(!err) 
        console.log("File is Updated Successfully");
 
});
const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt` ;

// For Create A File

// fs.writeFileSync(filePath,'hello world');

// For Read A File
// fs.readFile(filePath,'utf8',(err,CRUD)=>{
    
//         console.log(CRUD)
//     });

// For Update(append) A File

// fs.appendFile(filePath,'Hello There This is Jimmy here',(err)=>{
//     if(!err) 
//         console.log("File is Updated Successfully");
 
// });

// For Rename A File

// fs.rename(filePath,`${dirPath}/Hello World.txt`,(err)=>{
//     if(!err) 
//         console.log("File Name is Updated Successfully");
 
// });

// For Delete A File

// fs.unlinkSync(`${dirPath}/Hello World.txt`);
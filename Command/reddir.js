const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Files');

fs.readdir(dirPath,(err,Files)=>{
    Files.forEach((Files) => {
        console.log("File Name is : ",Files)
    });
})


// in a folder you can print all the files name via fs.readdir

// if you can use console.log(dirPath)
// You can print your file Name but all of your files are in a Array List  -->

// you can't read a another drive files or directory file beacause all the files are stored and run on a server
// you can get a data from a web server of your current folder and in folder item or files
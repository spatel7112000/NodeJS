const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Files');

 console.log(dirPath)

// Using For loop

for(i=0;i<10;i++)
{
    fs.writeFileSync(dirPath+"/hello"+i+".txt","A Simple Text File");

                         //   or    //

    // fs.writeFileSync(dirPath+`/helloworld${i}.txt`,"A Simple Text File");
}

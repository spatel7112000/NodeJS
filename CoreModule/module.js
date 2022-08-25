
const fs = require('fs');

console.log("my fisrt import module");
fs.writeFileSync("test1.docx","my fisrt import module")

// A Particular Module required to imported  =  Core Module
// ex: FileSystem
// A Module already in library =  Global Module
// ex: Console


// print a directory Name
console.log("-->>>",__dirname);

// print a File Name
console.log("-->>>",__filename);
const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt` ;

// For Create A File

fs.writeFileSync(filePath,'hello world');

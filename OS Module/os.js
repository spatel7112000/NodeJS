const os = require('os');

console.log(os.arch());    //os Architecture
console.log(os.freemem()/(1024*1024*1024));      //os Free RAM
console.log(os.totalmem()/(1024*1024*1024));      //os Total RAM
console.log(os.hostname());      //os HostName
console.log(os.platform());      //os Platform
console.log(os.userInfo());      //os UserInfo
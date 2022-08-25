const http = require('http');

function dataControl(req,resp)
{
    resp.write("<h1>I Make a Basic Server</h1>");
    resp.end();
}
//Take a Function As a Parameter


http.createServer(dataControl).listen(7112);



// http.createServer((req,resp)=>{
//    resp.write("<h1>Make a Basic Server</h1>");
//    resp.end();
// }).listen(7112);

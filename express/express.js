const express = require('express');
const app = express(); 


// request a data from server

app.get('',(req,res)=>{
    res.send(`Welcome, sachin patel,
    <a href="/Help">Help</a>`);
});

// Normal use of html tag 

app.get('/Help',(req,res)=>{
    res.send(`
    <input type="text">,
    <a href="/About">About</a>
    `);
});

// use of JSON Data 

app.get('/About',(req,res)=>{
    res.send([
        {Name:'sachin',
              Email:'sachinpatel@gmail.com',
              Div: 'Information Tech.'  
        },
        {Name:'sachin',
              Email:'sachinpatel@gmail.com',
              Div: 'Information Tech.'  
        }
]);
});

// Normal use of html tag 

app.get('/hyperlink',(req,res)=>{
    
    res.send('Welcome,<a href="/help">help</a>,<a href="/about">about</a>,<a href="/">index</a>');
});
// request a data from server
// how to get a data from query parameter

// app.get('',(req,res)=>{
//     console.log("Data sent threw Browser By",req.query.name)
//     res.send('Welcome, '+req.query.name);

// or

// res.send(`
//     <input type="text" value="${req.query.name}">,
//     <a href="/About">About</a>
//     `);
// });

app.listen('7112');


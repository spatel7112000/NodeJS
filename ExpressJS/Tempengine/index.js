const express = require("express");
const app = express();
const path = require("path");
 
app.set('view engine','ejs');


app.get("/profile", (_, resp) => {
  resp.render('profile');
  
});

app.get("/info", (_, resp) => {

const user={
  name:'sAcHiN pAtEl',
  email:'sachin@gmail.com'
}
resp.render('info',{user});
});

app.listen(2050);

const express = require('express');
const app = express();
const path = require('path');

const filePath = path.join(__dirname,'public');

app.use(express.static(filePath));
app.listen(2000);
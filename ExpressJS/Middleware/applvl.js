const express = require("express");
const app = express();
const midlwr = require("./midlwr/midlwr");

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to the World");
});

app.get("/user", (req, resp) => {
  resp.send("Welcome to the user World");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to about the World");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome to the Help of Hello World");
});

app.listen(2024);

const express = require("express");
const midlwr = require("./midlwr/midlwr");
const app = express();

// app.use(reqFilter);

app.get("/", reqFilter, (req, resp) => {
  resp.send("Welcome to the World");
});

app.get("/user", reqFilter, (req, resp) => {
  resp.send("Welcome to the user World");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to about the World");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome to the Help of Hello World");
});

app.listen(2026);

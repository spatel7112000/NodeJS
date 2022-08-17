const express = require("express");
const midlwr = require("./midlwr/midlwr");
const app = express();
const route = express.Router();
// app.use(reqFilter);

route.use(reqFilter);
app.use("/", route);

route.get("/", (req, resp) => {
  resp.send("Welcome to the World");
});

route.get("/user", (req, resp) => {
  resp.send("Welcome to the user World");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to about the World");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome to the Help of Hello World");
});

app.listen(2028);

const express = require("express");
const app = express();
const path = require("path");

const filePath = path.join(__dirname, "public");

app.get("", (_, resp) => {
  resp.sendFile(`${filePath}/index.html`);
});
app.get("/about", (_, resp) => {
  resp.sendFile(`${filePath}/about.html`);
});
app.get("/help", (_, resp) => {
  resp.sendFile(`${filePath}/help.html`);
});
app.get("*", (_, resp) => {
    resp.sendFile(`${filePath}/404.html`);
  });
app.listen(2001);

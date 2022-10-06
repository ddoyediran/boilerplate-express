let express = require("express");
const path = require("path");
let app = express();

// app.use("/static", express.static(path.join(__dirname, "/views/index.html")));

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

console.log("Hello World");

module.exports = app;

let express = require("express");
const path = require("path");
let app = express();
require("dotenv").config();

//const vee = process.env.MESSAGE_STYLE;

///console.log(vee);

// app.use("/static", express.static(path.join(__dirname, "/views/index.html")));

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  const vee = process.env.MESSAGE_STYLE;

  if (vee.toString() === "uppercase") {
    res.json({ message: vee.toUpperCase() });
  }
  //res.json({ name: "Ade" });
});

console.log("Hello World");

module.exports = app;

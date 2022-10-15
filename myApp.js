let express = require("express");
const path = require("path");
const { nextTick } = require("process");
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

app.get("/test", function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.send("Working!");
  next();
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res, next) {
  res.json({ echo: req.params.word });
  next();
});

console.log("Hello World");

module.exports = app;

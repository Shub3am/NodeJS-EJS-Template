const express = require("express");
require("dotenv").config();
const App = express();
const path = require("path");
App.set("views", path.join(__dirname + "/views"));

App.use(express.static(path.join(__dirname + "/public")));
App.set("view engine", "ejs");

App.get("/", (req, res) => {
  res.send("Hello! Thanks For Using This Template");
});

App.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started at ${process.env.PORT || 3000} `);
});

const express = require("express");
const app = express();

// app.set("views", path.join(__dirname, "views"));
app.set("views-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(3000);

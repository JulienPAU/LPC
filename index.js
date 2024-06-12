const express = require("express");
const app = express();

const port = 5050;

app.use(express.static("./Les Petits Cadrans/static"));

app.set("view engine", "ejs");
app.set("views", "./Les Petits Cadrans/views");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/galerie", (req, res) => {
  res.render("pages/galerie");
});

app.get("/articles", (req, res) => {
  res.render("pages/articles");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

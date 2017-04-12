var express = require("express");
var ECT = require("ect");
var sass = require("node-sass");
var session = require("express-session");
var bodyParser = require("body-parser");
var sqlite3 = require("sqlite3");

// environments
var app = express();
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect'});
app.set('view engine', 'ect');
app.engine("ect", ectRenderer.render);
app.use(bodyParser.urlencoded({ extended: false }));
var db = new sqlite3.Database("./data/db");

// assets
app.get("/index.css", function(req, res) {
  var f = sass.renderSync({file: __dirname + "/assets/index.scss"});
  res.writeHead(200, {"Content-Type":"text/css"});
  res.end(f.css, "utf-8");
});

// routes
app.get("/", function(req, res) {
  res.render("index");
});

app.listen(3000);

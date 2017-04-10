var express = require("express");
var ECT = require("ect");
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

app.listen(3000);

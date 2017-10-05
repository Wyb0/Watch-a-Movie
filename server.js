var express = require('express')
var bodyParser = require('body-parser')
var exphbrs = require('express-handlebars')
var path = require('path')

var app = express();

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
})
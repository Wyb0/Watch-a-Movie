var express = require('express')
var bodyParser = require('body-parser')
var exphbrs = require('express-handlebars')
var path = require('path')

var app = express();

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
})
var express = require('express')
var bodyParser = require('body-parser')
var exphbrs = require('express-handlebars')
var path = require('path')

var app = express();

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
})
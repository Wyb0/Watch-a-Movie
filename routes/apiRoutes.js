var connection = require("../data/connection.js")
var express = require("express")

var app = express();

function moviePush(app, __dirname) {
    app.post("/movie/added", function (request, response) {
        var movieInput = req.body;
        //connection.push(movieInput);
        res.json(newMovie)
    })

    app.post("/movie/watched", function (request, response) {
        var movieWatched = req.body;
        //connection.push(movieWatched);
        res.json(movieWatched)
    })
}

module.exports = apiRoutes
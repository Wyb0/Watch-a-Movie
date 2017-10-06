var newMovie = require("../data/newMovie.js")
var watchedMovie = require("../data/watchedMovie.js")
var express = require("express")

var app = express();

function moviePush(app, __dirname) {
    app.post("/movie/added", function (request, response) {
        var movieInput = req.body;
        newMovie.push(movieInput);
        res.json(newMovie)
    })

    app.post("/movie/watched", function (request, response) {
        var movieWatched = req.body;
        watchedMovie.push(movieWatched);
        res.json(movieWatched)
    })
}

module.exports = pushes
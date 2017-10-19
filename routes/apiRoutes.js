var connection = require("../data/connection.js")

module.exports = function(app){
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
};
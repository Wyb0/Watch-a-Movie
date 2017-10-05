var newMovie = require("../data/newMovie.js")
var watchedMovie = require("../data/watchedMovie.js")

function API(app, __dirname) {
    
    app.post("/dino/new", function (req, res) {

       
        var formData = req.body;
        
        dinoLeft.push(formData);
        
        res.json(dinoLeft);

    });

    // move dino to right array
    app.post("/dino/done", function (req, res) {

        // walks the dino and moves to right array
        var formData2 = req.body;
        dinoRight.push(formData2);
        // captures the index of dino to remove from left array
        var killit = formData2.dinoID;
        // removes dino from left array
        dinoLeft.splice(killit, 1);
        // returns both arrays 
        res.json({ sdinoLeft: dinoLeft,sdinoRight: dinoRight})
    });
}

module.exports = apiStuff;
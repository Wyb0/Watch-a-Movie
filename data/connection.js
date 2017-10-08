var mysql = require("mysql")

var connection

connection(function () {
    connection.connect(function(err){
        if (err) {
            console.log("Error: " + err.stack);
            return
        }
        console.log("Connected: " + connection.threadID)
    })
})
    

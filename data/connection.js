var mysql = require("mysql")

var connection

function connection() {
    connection.connect(function(err){
        if (err) {
            console.log("Error: " + err.stack);
            return
        }
        console.log("Connected: " + connection.threadID)
    })
}
    
module.exports = connection

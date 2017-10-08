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
//doesn't work
if (process.env.PORT || 8000) {
    connection = mysql.createConnection(process.env.PORT || 8000);
    connection()
  } else {
    connection = mysql.createConnection(
        {
        host: "localhost",
        user: "root",
        password: "",
        database: "moviesWatchlist"
        }
    )
    connection()
  }
    
module.exports = connection

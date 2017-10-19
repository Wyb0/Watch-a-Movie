var connection = require('../data/connection.js');
var express = require('express');
var path = require('path');
var mysql = require('mysql');


module.exports = function(app){

    app.get('/', function(req, res){
        connection.query("SELECT * FROM movies", function(error, response){

            if (error) throw error;
            res.render("index", {
                index: response
            })
        })
    })
}
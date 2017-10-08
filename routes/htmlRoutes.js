var connection = require('../data/connection.js');
var express = require('express');
var path = require('path');

const html_routing = (app, __dirname)=>{
    app.get('/', (req,res)=>{
        console.log('routed to html');
        // res.render('index.handlebars');
        res.sendFile(path.join(__dirname, "/public/test.html"));        
    })
}

module.exports = htmlRoutes;
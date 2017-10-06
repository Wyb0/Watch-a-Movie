//tested with luca, working to render on local host, still not rendering movie to page
const toDo = require('../data/newMovie.js');
const express = require('express');
const path = require('path');

const html_routing = (app, __dirname)=>{
    app.get('/', (req,res)=>{
        console.log('routed to html');
        // res.render('index.handlebars');
        res.sendFile(path.join(__dirname, "/public/test.html"));        
    })
}

module.exports= html_routing;
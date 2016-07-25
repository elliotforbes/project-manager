var express = require('express');
var router = require('./router');
var app = express();

app.use('/', router);

app.get('/', function (req, res){
    console.log("Home API Point hit");
    res.send("Hello World");
});

app.listen(3001, function() {
    console.log("Rest API listening on port 3001");
});

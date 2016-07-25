var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    var currDate = new Date().toISOString();
    console.log(currDate + ": API Endpoint Hit");
    next();
});

router.get('/', function() {
    console.log("The Home Page Has been hit");
    next();
});

module.exports = router;
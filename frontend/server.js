var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('src'));

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, "src/views/index.html"));
});

app.listen(3000, function(err) {
  if (err) console.log(err);
  console.log("Listening on port 3000");
});

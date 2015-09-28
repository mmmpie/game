var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/ex-1/ex-1.html');
});

express.static(__dirname + '/ex-1/');

app.listen(port);

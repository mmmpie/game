var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/static/index.html');
});

app.use('/static', express.static(__dirname + '/static'));
app.use('/hour-1', express.static(__dirname + '/hour-1'));
app.use('/hour-2', express.static(__dirname + '/hour-2'));

app.listen(port);

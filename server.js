var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('ex-1')).listen(80);

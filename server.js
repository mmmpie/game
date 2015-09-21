var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('ex-1')).listen(process.env.PORT || 8080);

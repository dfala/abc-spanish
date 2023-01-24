var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    session     = require('express-session'),
    path        = require('path'),
    requestIp   = require('request-ip');

// APP DEFINITION
var app   = express();
var sessionCookie = { httpOnly : true };
var portNum = 3000;

var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(portNum, function () {
  console.log('HTTP server listening on port: ' + portNum);
});

// app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json({limit: '400mb'}));
app.use(bodyParser.urlencoded({limit: '400mb', extended: true}));
app.use(requestIp.mw());

app.use(express.static(__dirname + '/views'));

require('./API.js')(app);
// require('./RoutesController.js')(app);

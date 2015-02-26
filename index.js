var http = require('http'),
    express = require('express'),
    meddleware = require('meddleware'),
    config = require('shush')('./config/middleware');


var app = express();

app.use(meddleware(config));

var router = express.Router;

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
  res.send('ok');
});


app.get('/magic', function(req, res) {
  res.send('ok');
});

http.createServer(app).listen(8080);
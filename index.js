var http = require('http'),
    path = require('path'),
    express = require('express'),
    meddleware = require('meddleware'),
    config = require('shush')('./config/middleware');


var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', './views');
app.set('view engine', 'html');
app.use('/', express.static(path.join(__dirname, './public')));
app.use(meddleware(config));

var router = express.Router;

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
  res.render('index', {config: config });
});


app.get('/magic', function(req, res) {
  res.send('ok');
});

http.createServer(app).listen(3000);

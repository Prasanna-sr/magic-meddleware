var express = require('express');
var meddleware = require('meddleware');
var bodyParser = require('body-parser');

var config = require('shush')('./config/middleware');

var app = express();

app.use(bodyParser.json());

app.use(meddleware(config));

var router = express.Router();
app.use(router);

router.get('/', function(req, res) {
    res.send('Test Page');
});

router.get('/cookie', function(req, res) {
    res.send(req.cookies);
});

app.listen(3000, function() {
    console.log('server running in port 3000');
});

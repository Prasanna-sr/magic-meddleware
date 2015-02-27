var http = require('http'),
    express = require('express'),
    meddleware = require('meddleware');

var config = require('shush')('./config/middleware');

var app = express();

app.use(meddleware(config));

var router = express.Router();

app.use(router);


router.use(function(req, res, next) {
	console.log('ok default');
	next();
});


router.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies);
    //console.log(app._router.stack);
    res.send('ok');
});

// router.get('/magic', function(req, res) {
//     //delete require.cache[require.resolve('./config/middleware')];
//     var config = require('shush')('./config/middleware');
//     config['prk'].changed = true;
//     app.use(meddleware(config, 1));
//     res.send('success');
// });

router.use(function(req, res, next) {
	console.log('test after routes');
	next();
});

router.get('/test', function(req, res) {
	res.send('test');
});

http.createServer(app).listen(8080);

	var helmet = require('helmet');
	var express = require('express');
	var compression = require('compression');
	var app = express();
	var server = require('http').createServer(app);
	app.use(compression({
	    level: 6
	}));
	app.use(helmet.frameguard('deny'));
	app.use(helmet.xssFilter());
	app.disable('x-powered-by');
	app.set('trust proxy', true);
	app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 9099);
	app.use(function(req, res, next) {
	    var host = req.get('host');
	    if (req.protocol === 'https' || host.indexOf('localhost') > -1) {
	        next();
	    } else {
	        return res.redirect(301, 'https://' + host + req.url);
	    }
	});
	app.use("/:storeTenant/", express.static(__dirname + '/public'));
	server.listen(app.get('port'), () => {
		console.log('\nServer Running on \"http://localhost:' + server.address().port + '\"\n');
	});
	module.exports = app;
var express = require('express')
	,app = express()
	,bodyParser = require('body-parser')
	,React = require('react')
	,ReactDOM = require('react-dom/server')
	,port = process.env.PORT || 8080
	,logger = require('morgan')
	
// Server configuration
// Handles forms with text
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Handles File uploads
app.use('/media', express.static(__dirname + '/media'))

// Templates and static files
app.set('view engine', 'pug');
app.use(express.static('static'));

// Http Request Logging
app.use(logger('dev'));


app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Routes
app.use('/', require('./src/client'));
app.use('/api/v1', require('./api/api'));
app.all('/api/v1', [require('./middlewares/validateRequest')]);

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
	res.status(404);
	res.end('Page not Found')
	next();
});

app.listen(port, function(){
	console.log("The blog is running on port %d", port);
});

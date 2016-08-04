var express = require('express')
	,app = express()
	,bodyParser = require('body-parser')
	,multer = require('multer')
	,React = require('react')
	,ReactDOM = require('react-dom/server')
	,port = process.env.PORT || 8080
	
// Server configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static('static'));


app.listen(port, function(){
	console.log("The blog is running on port %d", port);
});

// Routes

var client = require('./src/client')
	,api = require('./api/api');

app.use('/', client);
app.use('/api', api);
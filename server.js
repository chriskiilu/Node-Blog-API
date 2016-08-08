var express = require('express')
	,app = express()
	,bodyParser = require('body-parser')
	,React = require('react')
	,ReactDOM = require('react-dom/server')
	,port = process.env.PORT || 8080
	
// Server configuration
// Handles forms with text
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Handles File uploads
app.use('/media', express.static(__dirname + '/media'))

// Templates and static files
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
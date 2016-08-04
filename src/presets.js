var express = require('express')
	,app = express()
	,bodyParser = require('body-parser')
	,multer = require('multer')
	,React = require('react')
	,ReactDOM = require('react-dom/server')
	,port = process.env.PORT || 8080
	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.use(express.static('static'));


app.listen(port, function(){
	console.log("The blog is running on port %d", port);
});

module.exports = app
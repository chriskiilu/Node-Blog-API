var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;
var userSchema = mongoose.Schema({	
		name: String,
		email: String,
		password: String
	});
var User = mongoose.model('User', userSchema);

var postSchema = mongoose.Schema({
	title: String,
	author: String,
	content: String,
	// image: Buffer,
	timestamp: Date,
});
var Post = mongoose.model('Post', postSchema);

module.exports = {
	'User': User,
	'Post': Post,
};
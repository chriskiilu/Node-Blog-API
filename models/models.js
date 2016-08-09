var mongoose = require('mongoose');
	// ,Grid = require('gridfs-stream');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/blog');
var conn = mongoose.connection;
// Grid.mongo = mongoose.mongo;
// var gridfs = Grid(conn.db);
var userSchema = mongoose.Schema({	
		username: String,
		name: String,
		email: String,
		password: String
	});
var User = mongoose.model('User', userSchema);
var postSchema = mongoose.Schema({
	title: String,
	author: String,
	content: String,
	files: Array,
	timestamp: Date,
});
var Post = mongoose.model('Post', postSchema);

module.exports = {
	'User': User,
	'Post': Post,
	// 'gridfs': gridfs,
};
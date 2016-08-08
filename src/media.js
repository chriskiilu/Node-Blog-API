var express = require('express')
	,router = express.Router()
	,models = require('../models/models')
	,emailCheck = require('email-check')
	,path = require('path')
	,fs = require('fs')

router.use(function(req,res,next){
	next();
});

router.route('/:filename')
	.get(function(req,res){
		var filename = req.param.filename;
		
		models.Post.find(function(err, posts){
			if (err) {
				res.end(err);
			} else {
				posts = { 
					posts: posts
				}
				res.json(posts)
			}
		});
	})
module.exports = router;
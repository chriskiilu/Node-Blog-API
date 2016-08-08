var express = require('express')
	,router = express.Router()
	,models = require('../models/models')
	,emailCheck = require('email-check')
	,path = require('path')
	,multer = require('multer')
	,upload = multer({dest: './media/'})

router.use(function(req,res,next){
	next();
});

router.route('/')
	.get(function(req,res){
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
	.post(upload.array('files'), function(req,res){
		var data = {
			title: req.body.title,
			content: req.body.content,
			author: req.body.author,
			timestamp: new Date(),
		};
		if(req.files){
			var filepath = req.files.map(function(file,index,files){
				return file.path;
			});
			data.files = filepath;
		}

		var post = new models.Post(data);
		post.save(function(err){
			if(err){
				res.end(err);
			} else {
				res.json(post)
			}
		});
	})
router.route('/:post_id')
	.get(function(req,res){
		models.Post.findById(req.params.post_id, function(err, post){
			res.json(post)
		})
	})
	.put(function(req, res){
		models.Post.findById(req.params.post_id, function(err, post){
			post.title = req.body.title;
			post.content = req.body.content;
			post.save(function(err){
				if(err){
					res.end(err);
				} else {
					res.send('Post updated');
				}
			})
		})
	})
	.delete(function(req,res){
		models.Post.remove({
			_id: req.params.post_id
		}, function(err, post){
			if(err){
				res.end(err);
			} else {
				res.end('Post deleted');
			}

		})
	})
module.exports = router;
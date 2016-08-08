var express = require('express')
	,router = express.Router()
	,models = require('../models/models')
	,emailCheck = require('email-check')

router.use(function(req,res,next){
	next();
});

router.route('/')
	.get(function(req,res){
		models.User.find(function(err, users){
			if (err) {
				res.end(err);
			} else {
				users = { 
					users: users
				}
				res.json(users)
			}
		});
	})
	.post(function(req,res){
		if(req.body.password1 !== req.body.password2){
		 res.end('Passwords do not match.');
		}
		emailCheck(req.body.email)
			.then(function(emailRes){
				var user = new models.User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password1
				});
				user.save(function(err){
					if(err){
						res.end(err);
					} else {
						res.end('User created');
					}
				});
			})
			.catch(function(err){
				if (err.message === 'refuse') {
			      // The MX server is refusing requests from your IP address. 
			      res.end('Your email address has an invalid domain')
			    } else {
			      res.end('Invalid Email Address!')
			    }
			});
	})
router.route('/:user_id')
	.get(function(req,res){
		models.User.findById(req.params.user_id, function(err, user){
			res.json(user)
		})
	})
	.put(function(req, res){
		models.User.findById(req.params.user_id, function(err, user){
			user.name = req.body.name;
			user.email = req.body.email;
			user.save(function(err){
				if(err){
					res.end(err);
				} else {
					res.end('User updated');
				}
			})
		})
	})
	.delete(function(req,res){
		models.User.remove({
			_id: req.params.user_id
		}, function(err, user){
			if(err){
				res.end(err);
			} else {
				res.end('User deleted');
			}

		})
	})
module.exports = router;
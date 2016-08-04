var express = require('express')
	,router = express.Router()

router.use(function(req,res,next){
	next();
});

router.route('/')
	.get(function(req,res){
		res.render('index')
	})

module.exports = router;
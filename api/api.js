var express = require('express')
	,router = express.Router()
	,users = require('./users')
	,posts = require('./posts')

router.use(function(req,res,next){
	next();
});

router.use('/users', users)
router.use('/posts', posts)

module.exports = router;
var express = require('express')
	,router = express.Router()

router.use(function(req,res,next){
	next();
});

router.use('/users', require('./users'))
router.use('/posts', require('./posts'))

module.exports = router;
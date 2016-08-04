var express = require('express')
	,router = express.Router()
	,index = require('./index')

router.use(function(req,res,next){
	next();
});

router.use('/', index)

module.exports = router;
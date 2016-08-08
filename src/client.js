var express = require('express')
	,router = express.Router()
	,index = require('./index')
	,media = require('./media')

router.use(function(req,res,next){
	next();
});

router.use('/', index)
router.use('/media', media)

module.exports = router;
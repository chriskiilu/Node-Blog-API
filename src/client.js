var express = require('express')
	,router = express.Router()

router.use(function(req,res,next){
	next();
});

router.use('/', require('./index'))
router.use('/media', require('./media'))

module.exports = router;
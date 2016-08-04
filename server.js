var app = require('./src/presets.js')
var models = require('./models/models')

app.route('/')
	.get(function(req,res){
		console.log(models.User('Chris', 'cndeti@gmail/com', 'PAsswe'))
		res.render('index', {
			users: [ models.User('Chris', 'cndeti@gmail/com', 'PAsswe'),
			models.User('sdas', 'asd@gmail/com', 'vvv')]
		})
	})
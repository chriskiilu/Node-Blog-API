var User = function (name, email, password){
	this.properties = {
		name: name,
		email: email,
		password: password
	};

	return this.properties;
}

module.exports = {
	'User': User,
}
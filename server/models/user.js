var mongoose = require('mongoose');

//new mongoose model
//User Model
//email property - required, trimmed, String w/min length of 1
var User = mongoose.model('User',{
	email:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	}
});

module.exports = {User};
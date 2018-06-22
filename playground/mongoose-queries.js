const {ObjectID} = require ('mongodb');

const {mongoose} = require('../server/db/mongoose.js');
const {Todo} = require('../server/models/todo.js');

const {User} = require('../server/models/user.js');


/*var id = '5b2d1ec71e0793e83ec56824';

if(ObjectID.isValid(id)){
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return console.log("ID not found");
		}
		console.log(`By Id ${id}`,todo);
	}).catch((e)=>{
		console.log(e);
	});
}else{
	console.log("ID NOT VALID");
}*/
/*Todo.find({
	_id: id
}).then((todos)=>{
	console.log("Todos",todos);
});

Todo.findOne({
	_id: id
}).then((todo)=>{
	console.log("Todos",todo);
});*/

//query users collection
//Users.findById

var userID = '5b2d1febcd870e0415eebce3';

User.findById(userID).then((user)=>{
	if(!user){
		return console.log("User not found");
	}

	console.log("Found user",JSON.stringify(user,undefined,2));
	
},(err)=>{
	console.log("Error",err);
})
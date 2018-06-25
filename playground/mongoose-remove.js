const {ObjectID} = require ('mongodb');

const {mongoose} = require('../server/db/mongoose.js');
const {Todo} = require('../server/models/todo.js');
const {User} = require('../server/models/user.js');


/*Todo.remove({}).then((result)=>{
	console.log(result);
});*/


//Todo.findOneAndRemove
//Todo.findByIdAndRemove

/*Todo.findOneAndRemove({_id:"5b30ee0e4b71a68cde5ae961"}).then((todo)=>{
	console.log(todo);
});

Todo.findByIdAndRemove("5b30ee0e4b71a68cde5ae961").then((todo)=>{
	console.log(todo);
});*/
const _ = require('lodash');
const {ObjectID} = require ('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(err)=>{
		res.status(400).res.send(err);

	})
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({
			todos:todos
		});
	},(err)=>{
		res.status(400).send(err);
	})
});

app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;

	if(ObjectID.isValid(id)){
		Todo.findById(id).then((todo)=>{
			if(!todo){
				res.status(404).send();
			}
			res.send({
				todo
			});
		},(err)=>{
			res.status(400).send();
		}).catch((e)=>{
			res.status(400).send();
		});
	}else{
		res.status(404).send();
	}
});

app.delete('/todos/:id',(req,res)=>{
	//get the id
	var id = req.params.id;

	//validate ID (404 if not valid)
	if(ObjectID.isValid(id)){
		Todo.findByIdAndRemove(id).then((todo)=>{
			//console.log(todo);
			if(!todo){
				return res.status(404).send();
			}
			res.status(200).send(todo);
		},(err)=>{
			res.status(400).send();
		});
	}else{
		res.status(404).send();
	}
});

app.patch('/todos/:id',(req,res)=>{
	//get the id
	var id = req.params.id;
	//peels off text and completed from the body of the request. This makes sure we ONLY look at these two properties and prevents users from sending whatever property updates they want
	var body = _.pick(req.body,['text','completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}


	Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo:todo});

	}).catch((e)=>{
		res.status(400).send();
	})
})

app.listen(port,()=>{
	console.log(`Connected on Port ${port}`);
});
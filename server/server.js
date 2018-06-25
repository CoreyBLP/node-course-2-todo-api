var {ObjectID} = require ('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

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
				res.status(404).send();
			}
			res.status(200).send({todo});
		},(err)=>{
			res.status(400).send();
		});
	}else{
		res.status(404).send();
	}
});

app.listen(port,()=>{
	console.log(`Connected on Port ${port}`);
});
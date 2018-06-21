//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp",(error,db)=>{
	if(error){
		return console.log("Unable to connect to mongo db");
	}
	console.log("Connected! MongoDB");

/*	db.collection("Todos").findOneAndUpdate({
		_id: new ObjectID("5b2bf01379e60ccc8b94926d")
	},{
		//mongoDB Update operators
		$set:{
			completed:true
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});*/

	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID("5b2bf2ec79e60ccc8b9493ac")
	},{
		$set:{
			name:"Gussy Fink-nottle"
		},
		$inc:{
			age:1
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});

	//db.close();
});
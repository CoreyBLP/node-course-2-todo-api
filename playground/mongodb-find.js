//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp",(error,db)=>{
	if(error){
		return console.log("Unable to connect to mongo db");
	}
	console.log("Connected! MongoDB");

	db.collection('Users').find({name:"Fred Turnips"}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log("Unable to fetch",err);
	});

	db.collection('Users').find({name:"Bobbo Turnips"}).count().then((count)=>{
		console.log(`Bobbo Turnips Instances: ${count}`);
	},(err)=>{
		console.log("Unable to fetch",err);
	});


	//db.close();
});
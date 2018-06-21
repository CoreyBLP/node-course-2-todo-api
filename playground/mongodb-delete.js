//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp",(error,db)=>{
	if(error){
		return console.log("Unable to connect to mongo db");
	}
	console.log("Connected! MongoDB");

	//deleteMany
	/*db.collection("Todos").deleteMany({text:"Punch a rock"}).then((result)=>{
		console.log(result);
	});*/

	//deleteOne
	/*db.collection("Todos").deleteOne({text:"Punch a rock"}).then((result)=>{
		console.log(result);
	});*/

	//findOneAndDelete
	/*db.collection("Todos").findOneAndDelete({text:"Punch a rock"}).then((result)=>{
		console.log(result.value.text);
	})*/

	/*db.collection("Users").deleteMany({name:"Tony Cabbage"}).then((result)=>{
		console.log(result);
	});*/

	/*db.collection("Users").findOneAndDelete({name:"Bobbo Turnips"}).then((result)=>{
		console.log(result);
	});*/
	db.collection("Users").findOneAndDelete({_id:new ObjectID("5b2bbbe4ffdeff6fbc02450e")}).then((results)=>{
		console.log(results);
	})

	//db.close();
});
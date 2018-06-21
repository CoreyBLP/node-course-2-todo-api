//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

/*var obj = new ObjectID();
console.log(obj);*/

MongoClient.connect("mongodb://localhost:27017/todoApp",(error,db)=>{
	if(error){
		return console.log("Unable to connect to mongo db");
	}
	console.log("Connected! MongoDB");

	/*db.collection("Todos").insertOne(({
		text: 'Something to do',
		completed:false
	}),(error,result)=>{
		if(error){
			return console.log("Error inserting Todo",error);
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	});*/

	//insert a new doc into Users collection (name, age, location)
	//for (var i = 0; i < 20; i++) {
		/*db.collection("Users").insertOne(({
			name: generateName(),
			age: Math.round(Math.random()*20),
			location: "Earth"
		}),(error,result)=>{
			if(error){
				return console.log("Error in adding user",error);
			}

			console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
		});*/
	//}

	

	db.close();
});

var fNames = ["Fred","Tony","Amy","Bobbo"];
var lNames = ["Turnips","Cabbage","Pepper","Sprinkles"];

var generateName =()=>{
	var fullName = fNames[Math.floor(Math.random()*fNames.length)]+" "+lNames[Math.floor(Math.random()*lNames.length)];
	return fullName
}
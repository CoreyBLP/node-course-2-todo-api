var mongoose = require("mongoose");

//set mongoose to use the global (built-in) Promise object
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose:mongoose};
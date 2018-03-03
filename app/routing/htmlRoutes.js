//dependancies
var path = require("path");


//export routes for server
module.exports = function(app) {

	//home page route
	app.get("/", function(req, res)	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//survey page route
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));	
	});


};
//friend data route
console.log("apiRoutes is loaded");
var reqFriend = require("../data/friend");


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(reqFriend);
	});	

	app.post("/api/friends", function(req, res)	{
		var movieMatch = false;
		for (i = 0; i < reqFriend.movieBuddy.length; i++) {
			if (reqFriend.clientData = reqFriend.movieBuddy[i])	{
				movieMatch = true;
			}
		}
		if (!movieMatch) {
			reqFriend.movieBuddy.push(reqFriend.clientData[0]);
			res.json(reqFriend.movieBuddy);
			console.log(reqFriend.movieBuddy);
		}
	})	

	app.post("/api/clear", function(req, res) {
    
    // empty arrays
    reqFriend.clientData = [];
    reqFriend.movieBuddy = [];

    console.log(reqFriend);
	});
	
}
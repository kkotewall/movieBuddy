//dependencies
var express = require("express");
var bodyParser = require("body-Parser");
var path = require("path");


//express app set up
var app = express();
var PORT = process.env.PORT || 3000;


//express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('app/public'));


//router
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//listener
app.listen(PORT, function()	{
	console.log("App listening on PORT: " + PORT);
});
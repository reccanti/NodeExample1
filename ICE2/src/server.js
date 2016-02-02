/*
 * Import all necessary dependencies and use them to store the index
 * file in memory
 */
var http = require("http");
var fs = require("fs");
var index = fs.readFileSync(__dirname + "/../client/client.html");


/**
 * A function to handle a request to the server. When it receives a request, it
 * responds by returning the index page.
 * 
 * @param  {Object} request  - A JSON object that contains request information.
 * @param  {Object} response - A JSON object that contains response information.
 */
function onRequest(request, response) {

	console.log(request.url);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();
}


/*
 * get the port and create the http server. Requests sent to the designated
 * port will be handled by the above function onRequest
 */
var port = process.env.PORT || process.env.NODE_PORT || 3000;
http.createServer(onRequest).listen(port);
console.log("listening on port " + port);
// imports node's built-in http server system
var http = require('http');


// imports our data module
var myData = require("./myData.js");


// imports our Polygon module
var Polygon = require("./polygon.js");


// imports underscore from node_modules
var _ = require("underscore");


/*
 * every internet connected device has a unique IP address.
 * every device has ~65,000 "ports". These are places where
 * bits are input and output. You should only run one server
 * on one port. Some of these ports are reserved by the system. 
 *
 * This is future-proofing for Heroku. Heroku assigns the Port value on a 
 * value called PORT in the process environment. This checks to see if there
 * is a PORT variable assigned. If none is assigned, it checks for a NODE_PORT
 * variable. If none of those are checked, it will assign the port value to 
 * 3000s
 */
var port = process.env.PORT || process.env.NODE_PORT || 3000;


/*
 * This is the function that will be called whenever someone 
 * makes a request to our server. It accepts a request and 
 * response object. 
 *
 * request is an object that provides data from the user
 * which contains information about the request being made.
 * 
 * "response" is an object that contains the information that
 * will be sent to the user.
 */
function onRequest(request, response) {
	
		/*
		 * This writes the header for the http request.
		 * This lets the User know that their request was successful
		 * (200) and that the response is plain text ("Content-Type")
		 */
		response.writeHead(200, {"Content-Type": "text/plain"});
		
		
		/*
		 * This is the actual content of our response. It will
		 * display the message: "Hello World", as described in our
		 * "myData" module
		 */
		response.write(myData.getMessage());
		
		
		/*
		 * This ends our response. Nothing else can be sent to the client
		 * in this request after this function is called.
		 */
		response.end();
}


/*
 * The "http" module creates a server and waits for someone to 
 * request access to it. When it receives a request, it calls
 * a callback function, in this case onRequest.
 */ 
http.createServer(onRequest).listen(port);


/*
 * This is used to test that underscore is working
 */
var myArray = [1, 2, 3, 4, 5];
var found = _.contains(myArray, 3);
console.log(found);


// sanity test to make sure the program is running
console.log("listening on port: " + port);


// creates a polygon object and logs its height.
var  myPolygon = new Polygon(10, 10);
console.log(myPolygon.height);
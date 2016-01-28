/*
 * A simple module used to demonstrate exporting.
 * returns a single function that returns the message.
 */
var message = "Hello World";
function getMessage() {
	return message;
}
module.exports.getMessage = getMessage;
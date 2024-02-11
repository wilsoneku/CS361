var zmq = require("zeromq"),
	sock = zmq.socket("push");

// select socket to use
sock.bindSync("tcp://127.0.0.1:3000");
console.log("Sender bound to port 3000");

var message = "A message from CS361";
// send message to socket once per second
console.log("sending " + "'" + message + "'");
sock.send(message);

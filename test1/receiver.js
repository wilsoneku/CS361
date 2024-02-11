// receiver.js
var zmq = require("zeromq"),
	sock = zmq.socket("pull");

// connect to socket @ port 3000
sock.connect("tcp://127.0.0.1:3000");
console.log("Receiver connected to port 3000");

sock.on("message", function (msg) {
	console.log("message received: %s", msg.toString());
});

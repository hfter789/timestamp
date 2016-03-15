var app = require('express')();
var server = require('http').createServer(app);

app.get('/', function (req, res) {
  res.send('Hello World');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

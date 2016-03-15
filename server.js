var app = require('express')();
var server = require('http').createServer(app);
var MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var BASE_YEAR = 1900;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/:timestamp', function (req, res, next) {
  console.log('timestamp is', req.params.timestamp);
  var time = req.params.timestamp;
  var timeInt = parseInt(time);
  var timeString;

  if(timeInt) {
    // it is a number
    var date = new Date(timeInt);
    timeString = MONTH[date.getMonth()] + ' ' + date.getDate() + ', ' + (date.getYear() + BASE_YEAR);
  } else {
    timeString = time;
    timeInt = new Date(timeString).getTime();
  }
  
  if(!timeInt) {
    timeString = null;
  }
  res.send({
    unix: timeInt,
    natural: timeString
  });
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

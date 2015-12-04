var ws = require('nodejs-websocket');
var http = require('http');

if(process.argv.length == 4) {
  ws.connect(process.argv[2]).on('text', function (data) {
    var url = process.argv[3];
    var dataString = encodeURIComponent(data);
    var fullUrl = url + "?data=" + dataString;

    http.get(fullUrl, function (res) {
      console.log("success " + res);
    }).on('error', function (e) {
      console.log("error " + e.message);
    });
  });
} else {
  console.log('Correct usage:');
  console.log(process.argv[0] + ' ' + process.argv[1] + ' <web socket endpoint> <target url>');
  console.log('');
  console.log('For example:');
  console.log(process.argv[0] + ' ' + process.argv[1] + ' wss://socket.example.org http://localhost/callback');
}
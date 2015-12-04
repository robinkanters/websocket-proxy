/**
 * Copyright (C) 2015 Robin Kanters
 *
 * For more info, see:
 * https://raw.githubusercontent.com/robinkanters/websocket-proxy/master/LICENSE
 */

var ws = require('nodejs-websocket');
var http = require('http');

if (process.argv.length != 4) {
    printHelp();
    process.exit();
}

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

function printHelp() {
    console.log('Correct usage:');
    console.log(process.argv[0] + ' ' + process.argv[1] + ' <web socket endpoint> <target url>');
    console.log('');
    console.log('For example:');
    console.log(process.argv[0] + ' ' + process.argv[1] + ' wss://socket.example.org http://localhost/callback');

    process.exit();
}
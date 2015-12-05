/**
 * Copyright (C) 2015 Robin Kanters
 *
 * For more info, see:
 * https://raw.githubusercontent.com/robinkanters/websocket-proxy/master/LICENSE
 */

var ws = require('nodejs-websocket');
var http = require('http');

var HTTP_LISTEN_PORT = 9145;

var HTTP_STATUS_OK = 200;
var HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
var HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

if (process.argv.length != 4) {
    printHelp();
    process.exit();
}

var socket = ws.connect(process.argv[2]);
socket.on('text', function (data) {
    var url = process.argv[3];
    var dataString = encodeURIComponent(data);
    var fullUrl = url + '?data=' + dataString;

    http.get(fullUrl).on('error', function (e) {
        console.log("error " + e.message);
    });
});

http.createServer().listen(HTTP_LISTEN_PORT).on('request', function(req, res) {
    if (req.method != 'POST') {
        return endConnectionWithStatusCode(res, HTTP_STATUS_METHOD_NOT_ALLOWED);
    }

    var jsonString = '';
    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        socket.sendText(jsonString);

        endConnectionWithStatusCode(res, HTTP_STATUS_OK);
    });

    req.on('error', function () {
        endConnectionWithStatusCode(res, HTTP_STATUS_INTERNAL_SERVER_ERROR);
    })
});

function endConnectionWithStatusCode(res, statusCode) {
    res.setHeader('Accept', 'POST');
    res.writeHead(statusCode);
    res.end();
}

function printHelp() {
    console.log('Correct usage:');
    console.log(process.argv[0] + ' ' + process.argv[1] + ' <web socket endpoint> <target url>');
    console.log('');
    console.log('For example:');
    console.log(process.argv[0] + ' ' + process.argv[1] + ' wss://socket.example.org http://localhost/callback');

    process.exit();
}
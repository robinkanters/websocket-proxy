# Web Socket to HTTP proxy

NodeJS script to proxy websocket messages to an HTTP endpoint

## Usage

Specify the web socket to connect to, and the HTTP URI to route the requests to:

```sh
nodejs ./websocket.js wss://socket.example.org http://localhost/callback
```
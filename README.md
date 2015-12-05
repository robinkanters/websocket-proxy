# Web Socket to HTTP proxy

NodeJS script to proxy websocket messages to an HTTP endpoint

## Usage

Specify the web socket to connect to, and the HTTP URI to route the requests to:

```sh
nodejs ./websocket.js wss://socket.example.org http://localhost/callback
```

To send messages back over the websocket, send an HTTP POST request like so:

```sh
curl http://localhost:9145 --data '{"message":"Hello world!"}'
```

## License

This software is licensed under the GNU General Public License v3.0. This means:

### You must:

- Disclose Source
- License and copyright notice
- State Changes

### You may:

- Commercial Use
- Distribution
- Modification
- Patent Use
- Private Use

### You must not:

- Hold Liable

Source and more information: http://choosealicense.com/licenses/gpl-3.0/
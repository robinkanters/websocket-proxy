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

## Contributing

Pull requests are very welcome!

### Fork the repository

Click the fork button on the top right to get your own copy of the repository:
<img src="https://camo.githubusercontent.com/f903d85119926728359f0397fdc7a435cd0726fa/68747470733a2f2f692e696d6775722e636f6d2f6a6b6d467238712e706e67" height="40" valign="middle"/>

Please branch off of the `develop` branch for new features, and the `master` branch for bugfixes.

### Make awesome stuff!

Clone your fork to your own machine, make modifications in your own version of the repository, then push it to your fork on GitHub.

### Share your awesomeness! (create a pull request)

Go to the [pull requests section of the official repository](https://github.com/robinkanters/websocket-proxy/pulls), create a pull request and submit it. I will review it as soon as possible! :smile:

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
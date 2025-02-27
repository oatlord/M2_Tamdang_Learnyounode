const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

// sends a request, pipes request contents while performing uppercasing, then pipes them to response
http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)
}).listen(port);
const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const fileLocation = process.argv[3];

// source (the stream) pipes to destination (server response or res)
const server = http.createServer(function (req,res) {
    fs.createReadStream(fileLocation).pipe(res)
}).listen(port);
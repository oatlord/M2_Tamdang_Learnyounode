const process = require('process');
const http = require('http');
const args = process.argv;
const url = args[2];

http.get(url, function(response) {
    response.setEncoding('utf-8');
    response.on('data', console.log);
})
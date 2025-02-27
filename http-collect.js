const process = require('process');
const http = require('http');
const bl = require('bl');
const args = process.argv;
const url = args[2];

http.get(url, function(response) {
    response.pipe(bl(function (error, data) {
        if (error) {
            return console.error(error);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
})
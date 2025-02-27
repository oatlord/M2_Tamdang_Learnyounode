const process = require('process');
const http = require('http');
const bl = require('bl');
const args = process.argv;
let count = 0;

let text = [];

function printData() {
    for (let i = 0; i < 3; i++) {
        console.log(text[i]);
    }
}

function httpGet(index) {
    http.get(args[2 + index], function (response) {
        response.pipe(bl(function (error, data) {
            if (error) { return console.error(error) }

            text[index] = data.toString();
            count++;

            if (count == 3) {
                printData();
            }
        })
        )
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}
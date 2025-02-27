const fs = require('fs');
const process = require('process');
const args = process.argv;
const filePath = args[2];
let strArray = undefined;
let newLineCount = 0;

function countNewline(callback) {
    fs.readFile(filePath, function doneReading(err, fileContents) {
        let buffString = fileContents.toString();
        strArray = buffString.split("\n");
        newLineCount = strArray.length - 1;
        callback();
    })
}

function logCount() {
    console.log(newLineCount);
}

countNewline(logCount);
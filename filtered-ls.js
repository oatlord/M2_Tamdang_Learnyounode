const fs = require('fs');
const process = require('process');
const path = require('path');
const args = process.argv;
const filePath = args[2];
const extension = "."+args[3];
let filename = undefined;

function printDirectories(callback) {
    fs.readdir(filePath, function doneReading(error,buffer) {
        for (let i = 0; i < buffer.length; i++) {
            if (path.extname(buffer[i]) === extension) {
                filename = buffer[i];
                callback();
            }
        }
    })
}

function logDirectories() {
    console.log(filename);
}

printDirectories(logDirectories);
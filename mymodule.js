const fs = require('fs');
const path = require('path');

module.exports = function printDirectories(dirName, extension, callback) {
    fs.readdir(dirName, function doneReading(error, list) {
        if (error) return callback(error)

        list = list.filter(function (file) {
            return path.extname(file) === "."+extension;
        })

        // if there are no errors, returns the filtered list TO the callback function
        callback(null,list);
    })
}
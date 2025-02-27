const mymodule = require('./mymodule.js');
const process = require('process');
const args = process.argv;

// callback function takes the list that was returned from the module and simply prints all of it since it's already been filtered
mymodule(args[2],args[3],function (err,list) {
    if (err) {
        return console.error("There was an error: ", err);
    }

    list.forEach(function (file) {
        console.log(file);
    })
})
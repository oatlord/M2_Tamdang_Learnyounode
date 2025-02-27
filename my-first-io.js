const fs = require('fs');
const process = require('process');
const args = process.argv;
const filePath = args[2];

const buff = fs.readFileSync(filePath);
const str = buff.toString();

const strArray = str.split("\n");
console.log(strArray.length-1);
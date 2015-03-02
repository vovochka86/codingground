/* Simple Hello World in Node.js */

var fs = require('fs');
var array = fs.readFileSync('123.txt').toString().split("\n");
console.log(array[10]);
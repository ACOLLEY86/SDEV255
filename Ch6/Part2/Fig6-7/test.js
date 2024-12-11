/* Written By Anthony Colley
Figure 6.7 */

var fs = require("fs");
var data = fs.readFileSync("file1.txt");
console.log("File content:");
console.log(data);
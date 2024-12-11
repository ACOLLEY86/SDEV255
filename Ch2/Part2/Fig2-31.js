/* Written By Anthony Colley
Figure 2.31 & 2.32 */

console.log("Before setTimeout()");
setTimeout(function() {
  console.log("In the callback function");
}, 5000);  // 5000 milliseconds, or 5 seconds
console.log("After setTimeout()");
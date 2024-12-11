/* Written by Anthony Colley
Figure 1.21 */

// function definition
function add_10_first_integers() {
    var total = 0;
    for (var i = 0; i <= 10; i++) total += i;
    return total;
  }
  // function call
  var total = add_10_first_integers();
  console.log("Total = " + total);
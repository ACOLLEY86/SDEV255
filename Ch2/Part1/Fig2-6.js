/* Written By Anthony Colley
Figure 2.6 */

class Person {
    // class properties
    lastname = "";
    firstname = "";
    age = 0;
    
    // class methods
    display() {
      console.log(" The person's lastname = " + this.lastname +
                  ", firstname = " + this.firstname);
    }
  }
  var p = new Person;
  p.lastname = "Clinton";  // initialization of the lastname 
                           // property of the object p
  p.firstname = "Bill";    // initialization of the firstname 
                           // property of the object p
  console.log("Variable p = ", p);
  p.display();
/* Written By Anthony Colley
Figure 4.3b & 4.4 */

import Counter from "./Counter3b.js";
const Counters = {
  data() {
    return {
      total : 0
    }
  },
  components : {
    Counter:Counter
  },
  template : `
      Counter 1 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br>
      Counter 2 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br>
      Counter 3 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br><br>
      Total : {{total}} <br>
  `,
  methods : {
    add(value) {
      this.total += parseInt(value);
    },
    sub(value) {
      this.total -= parseInt(value);
    }
  },
}
export default Counters;
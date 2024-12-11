/* Written By Anthony Colley
Figure 3.16 & 3.17 & 3.18 */

const Counter = {
  data() {
    return {
      count : 10
    }
  },
  template : `
    Without v-model:
      <input type="text" :value="count" /> &nbsp;&nbsp; 
      count = {{count}} <br><br>
    With v-model:
      <input type="text" v-model="count" /> &nbsp;&nbsp; 
      count = {{count}}
  `,
}
export default Counter;
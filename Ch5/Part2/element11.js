/* Written By Anthony Colley
Figure 5.11 */

const Element = {
  data() {
    return {
    }
  },
  template : `
    <li> 
      <span> {{text}} </span>
      <button @click="remove()"> Remove </button> 
      <button> Modify </button>
    </li>
  `,
  props : ["text", "index"],
  methods : {
    remove() {
      // process the click on the Remove button
      this.$emit("remove", { index : this.index });
    },
  },
  emits : ["remove"]
}
export default Element;
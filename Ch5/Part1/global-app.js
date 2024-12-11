/* Written By Anthony Colley
Figure 5.7 */

import Element from "./element.js";
const GlobalApp = {
  data() {
    return {
      elements : []
    }
  },
  components : {
    Element:Element
  },
  template : `
    <button>Add Element</button>
    <ul></ul>
  `,
}
export default GlobalApp;
import Element from "./element.js";
const GlobalApp = {
  data() {
    return {
      elements: [], // array of object { text, _id }
      // (_id = document id in MongoDB)
    };
  },
  components: {
    Element: Element,
  },
  template: `
  <button @click="add()">Add Task</button>
  <ul>
  <Element v-for="(element, index) in elements"
  :key="index" :element="element"
   @remove="remove($event)" @modify="modify($event)" @task="task($event)"  @dateA="dateA($event)"  
 />
  </ul>
`,
  methods: {
    async add() {
      var defaultTitle = "Task " + (this.elements.length + 1);
      var defaultTaskDescription = "Enter Task Description ";
      var defaultDateAssigned = "Enter Date Assigned ";
      try {
        const response = await axios.post("/list", {
          text: defaultTitle,
          task: defaultTaskDescription,
          dateA: defaultDateAssigned,
        });
        console.log(this.elements);
        this.elements.push({
          _id: response.data.id,
          text: defaultTitle,
          task: defaultTaskDescription,
          dateA: defaultDateAssigned,
        });
      } catch (err) {
        console.error(err);
      }
    },
    remove(params) {
      var id = params.id;
      // remove the element with this id from the elements
      // array
      this.elements = this.elements.filter(function (element) {
        if (element._id == id) return false;
        else return true;
      });
      axios.delete("/list", { data: { id: id } }); // the options must be written in the data // property
    },
    modify(params) {
      var id = params.id;
      var value = params.value;
      // modify the text of the element with this id in the
      // elements array
      this.elements = this.elements.map(function (element) {
        if (element._id == id) {
          element.text = value;
          return element;
        } else return element;
      }); // modify the text of the element having this // identifier
      axios.put("/list", { text: value, id: id });
    },
    task(params) {
      var id = params.id;
      var value = params.value;
      // modify the text of the element with this id in the
      // elements array
      this.elements = this.elements.map(function (element) {
        if (element._id == id) {
          element.task = value;
          return element;
        } else return element;
      }); // modify the text of the element having this // identifier
      axios.put("/list", { task: value, id: id });
    },
    dateA(params) {
      var id = params.id;
      var value = params.value;
      this.elements = this.elements.map(function (element) {
        if (element._id == id) {
          element.dateA = value;
          return element;
        } else return element;
      });
      axios.put("/list", { dateA: value, id: id });
    },
  },
  async created() {
    try {
      const response = await axios.get("/list");
      this.elements = response.data.elements.map(function (element) {
        return {
          _id: element._id,
          text: element.text,
          task: element.task,
          dateA: element.dateA,
        };
      });
    } catch (err) {
      console.error(err);
    }
  },
};
export default GlobalApp;

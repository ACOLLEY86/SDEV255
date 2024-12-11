import Element from "./element.js";

const GlobalApp = {
  data() {
    return {
      elements: [], // array of objects { text, task, dateA, completed, _id }
    };
  },
  components: {
    Element: Element,
  },
  template: `
  <button class="add-task" @click="add()">Add Task</button>
  <h1>Active Tasks</h1>
  <ul>
    <Element 
      v-for="(element, index) in activeElements"
      :key="element._id" 
      :element="element"
      @remove="remove($event)" 
      @modify="modify($event)" 
      @task="task($event)"  
      @dateA="dateA($event)"  
      @completed="toggleCompleted($event)"
    />
  </ul>
  <h1>Completed Tasks</h1>
  <ul>
    <Element 
      v-for="(element, index) in completedElements"
      :key="element._id" 
      :element="element"
      @remove="remove($event)" 
    />
  </ul>
  `,
  computed: {
    activeElements() {
      return this.elements.filter((element) => !element.completed);
    },
    completedElements() {
      return this.elements.filter((element) => element.completed);
    },
  },
  methods: {
    async add() {
      var defaultTitle = "Task " + (this.elements.length + 1);
      var defaultTaskDescription = "Enter Task Description";
      var defaultDateAssigned = new Date().toISOString().split('T')[0]; // Default to today's date
      try {
        const response = await axios.post("/list", {
          text: defaultTitle,
          task: defaultTaskDescription,
          dateA: defaultDateAssigned,
          completed: false, // New property
        });
        this.elements.push({
          _id: response.data.id,
          text: defaultTitle,
          task: defaultTaskDescription,
          dateA: defaultDateAssigned,
          completed: false, // Initialize as not completed
        });
      } catch (err) {
        console.error(err);
      }
    },
    remove(params) {
      var id = params.id;
      this.elements = this.elements.filter((element) => element._id !== id);
      axios.delete("/list", { data: { id: id } });
    },
    modify(params) {
      var id = params.id;
      var value = params.value;
      this.elements = this.elements.map((element) => {
        if (element._id === id) {
          element.text = value;
        }
        return element;
      });
      axios.put("/list", { text: value, id: id });
    },
    task(params) {
      var id = params.id;
      var value = params.value;
      this.elements = this.elements.map((element) => {
        if (element._id === id) {
          element.task = value;
        }
        return element;
      });
      axios.put("/list", { task: value, id: id });
    },
    dateA(params) {
      var id = params.id;
      var value = params.value;
      this.elements = this.elements.map((element) => {
        if (element._id === id) {
          element.dateA = value;
        }
        return element;
      });
      axios.put("/list", { dateA: value, id: id });
    },
    toggleCompleted(params) {
      var id = params.id;
      var completed = params.completed;
      this.elements = this.elements.map((element) => {
        if (element._id === id) {
          element.completed = completed;
        }
        return element;
      });
      axios.put("/list", { id: id, completed: completed });
    },
  },
  async created() {
    try {
      const response = await axios.get("/list");
      this.elements = response.data.elements.map((element) => ({
        _id: element._id,
        text: element.text,
        task: element.task,
        dateA: element.dateA,
        completed: element.completed || false, // Ensure default value for older entries
      }));
    } catch (err) {
      console.error(err);
    }
  },
};

export default GlobalApp;
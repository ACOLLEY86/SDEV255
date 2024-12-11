const Element = {
  data() {
    return {
      inputTitle: false,
      inputTask: false,
    };
  },
  template: `
  <li style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
    <div style="flex: 1;">
      <label>Title:</label>
      <span v-if="!inputTitle">{{ element.text }}</span>
      <input 
        v-else 
        type="text" 
        :value="element.text" 
        @blur="modifyTitle($event)" 
        ref="refInputTitle" 
        style="width: 100%;"
      />
      <button @click="toggleEditTitle()" style="margin-left: 10px;">Edit Title</button>
    </div>

    <div style="flex: 2; text-align: center;">
      <label>Task:</label>
      <span v-if="!inputTask">{{ element.task }}</span>
      <input 
        v-else 
        type="text" 
        :value="element.task" 
        @blur="modifyTask($event)" 
        ref="refInputTask" 
        style="width: 100%;"
      />
      <button @click="toggleEditTask()" style="margin-left: 10px;">Edit Task</button>
    </div>

    <div style="flex: 1; text-align: right;">
      <label>Date Assigned:</label>
      <input 
        type="date" 
        :value="element.dateA" 
        @blur="modifyDateAssigned($event)" 
        style="width: 100%;"
      />
    </div>

    <div style="flex: 1; text-align: right;">
      <label>Date Completed:</label>
      <input 
        type="date" 
        :value="element.dateC" 
        @blur="modifyDateCompleted($event)" 
        style="width: 100%;"
      />
    </div>

    <button @click="remove()" class="remove">Remove</button>
  </li>
`,
  props: ["element"],
  methods: {
    toggleEditTitle() {
      this.inputTitle = true;
    },
    toggleEditTask() {
      this.inputTask = true;
    },
    remove() {
      this.$emit("remove", { id: this.element._id });
    },
    modifyTitle(event) {
      const value = event.target.value;
      this.inputTitle = false;
      this.$emit("modify", { id: this.element._id, value: value });
    },
    modifyTask(event) {
      const value = event.target.value;
      this.inputTask = false;
      this.$emit("task", { id: this.element._id, value: value });
    },
    modifyDateAssigned(event) {
      const value = event.target.value;
      this.$emit("dateA", { id: this.element._id, value: value });
    },
    modifyDateCompleted(event) {
      const value = event.target.value;
      this.$emit("dateC", { id: this.element._id, value: value });
    },
  },
  emits: ["remove", "modify", "task", "dateA", "dateC"],
  updated() {
    if (this.$refs.refInputTitle) this.$refs.refInputTitle.focus();
    if (this.$refs.refInputTask) this.$refs.refInputTask.focus();
  },
};
export default Element;
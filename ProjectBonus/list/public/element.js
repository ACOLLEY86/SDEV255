const Element = {
  data() {
    return {
      inputTitle: false,
      inputTask: false,
    };
  },
  template: `
  <li :style="{ backgroundColor: element.completed ? '#f0f0f0' : '#fff', opacity: element.completed ? 0.7 : 1 }">
    <div style="flex: 1;">
      <label>Title:</label>
      <span v-if="!inputTitle || element.completed">{{ element.text }}</span>
      <input 
        v-else 
        type="text" 
        :value="element.text" 
        @blur="modifyTitle($event)" 
        ref="refInputTitle" 
        style="width: 100%;"
        :disabled="element.completed"
      />
      <button 
        @click="toggleEditTitle()" 
        style="margin-left: 10px;" 
        v-if="!element.completed">Edit Title</button>
    </div>

    <div style="flex: 2; text-align: center;">
      <label>Task:</label>
      <span v-if="!inputTask || element.completed">{{ element.task }}</span>
      <input 
        v-else 
        type="text" 
        :value="element.task" 
        @blur="modifyTask($event)" 
        ref="refInputTask" 
        style="width: 100%;"
        :disabled="element.completed"
      />
      <button 
        @click="toggleEditTask()" 
        style="margin-left: 10px;" 
        v-if="!element.completed">Edit Task</button>
    </div>

    <div style="flex: 1; text-align: center;">
      <label>Date Assigned:</label>
      <input 
        type="date" 
        :value="element.dateA" 
        @blur="modifyDateAssigned($event)" 
        style="width: 100%;"
        :disabled="element.completed"
      />
    </div>

    <div style="flex: 1; text-align: center;">
      <label>Completed:</label>
      <input 
        type="checkbox" 
        :checked="element.completed" 
        @change="toggleCompleted($event)"
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
    toggleCompleted(event) {
      const completed = event.target.checked;
      this.$emit("completed", { id: this.element._id, completed });
    },
  },
  emits: ["remove", "modify", "task", "dateA", "completed"],
  updated() {
    if (this.$refs.refInputTitle) this.$refs.refInputTitle.focus();
    if (this.$refs.refInputTask) this.$refs.refInputTask.focus();
  },
};

export default Element;
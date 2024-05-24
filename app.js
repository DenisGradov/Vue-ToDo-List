const app = Vue.createApp({
  data() {
    return {
      todoList: [],
      inputValue: "",
    };
  },
  methods: {
    addToDo() {
      this.todoList.push(this.inputValue);
      this.inputValue = "";
    },
  },
});

app.mount("#vueApp");

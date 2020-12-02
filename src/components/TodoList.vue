<template>
  <div>
    <AddTodo @add-todo="addTodo" />
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" :todos="todos" @delete-todo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import axios from "axios";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    AddTodo,
  },
  //props:["todos"],
  data() {
    return {
      todos: [
        // {
        //   userId: 1,
        //   id: 1,
        //   title: "delectus aut autem",
        //   completed: false,
        // },
        // {
        //   userId: 1,
        //   id: 2,
        //   title: "quis ut nam facilis et officia qui",
        //   completed: false,
        // },
        // {
        //   userId: 1,
        //   id: 3,
        //   title: "fugiat veniam minus",
        //   completed: false,
        // },
        // {
        //   userId: 1,
        //   id: 4,
        //   title: "et porro tempora",
        //   completed: true,
        // },
        // {
        //   userId: 1,
        //   id: 5,
        //   title:
        //     "laboriosam mollitia et enim quasi adipisci quia provident illum",
        //   completed: false,
        // },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      this.todos = this.todos.filter((i) => i.id !== id);
    },
    addTodo(title) {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: title,
          completed: false,
        })
        .then(res => this.todos.push(res.data))
        .catch((e) => console.log(e));
        //Abit laggy here
    },
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => (this.todos = res.data))
      .catch((e) => console.log(e));
  },
};
</script>
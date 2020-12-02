<template>
  <div id="item" :class="{ 'line-through': todo.completed }">
    <p>
      <input type="checkbox" @change="markComplete" :checked="todo.completed" />
      {{ todo.title }}
      <delete-todo-button @delete-todo="$emit('delete-todo',todo.id)"/>
    </p>
  </div>
</template>

<script>
import DeleteTodoButton from "./DeleteTodoButton"

export default {
  // Name of the component
  name: "TodoItem",
  // To pass value in.
  props: ["todo"],
  components:{
    DeleteTodoButton,  
  },
  // Method
  methods: {
    markComplete() {
      //this.isComplete = !this.isComplete;
      // eslint-disable-next-line vue/no-mutating-props
      this.todo.completed = !this.todo.completed;
    },
  },
//   data() {
//     return {
//       todo: {
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false,
//       },
//     };
//   },
};
</script>

<style scoped>
/* Not Working ! */
.item {
  color: #42b983;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.line-through {
  text-decoration: line-through;
}
</style>
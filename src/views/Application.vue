<template>
  <div>
    <h1>Counter Button Test</h1>
    <CounterButton />
    <h1>Todo List Test</h1>
    <TodoList />
  </div>
</template>

<script>
import CounterButton from "../components/CounterButton.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: "Application",
  components: {
    CounterButton,
    TodoList
  },
};
</script>
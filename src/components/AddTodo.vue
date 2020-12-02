<template>
  <div>
    <form @submit.prevent="emit">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    emit() {
      this.$emit("add-todo", this.title);
      this.title = "";
    },
  },
};
</script>
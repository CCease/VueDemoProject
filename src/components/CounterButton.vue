<template>
  <div class="wrapper">
    <button class="button" @click="buttonClick">
      You clicked this button {{ count }} times.
    </button>
  </div>
</template>

<script>
export default {
  name: "CounterButton",
  methods: {
    buttonClick() {
      this.count++;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.button {
  display: block;
  border-radius: 18px;
  background-color: #42b983;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  left: 50;
  padding: 10px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
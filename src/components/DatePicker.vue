<template>
  <aaa
    v-model="date"
    :editable="false"
    placeholder="Select Your Birthday."
    :default-value="dafaultValue"
    @change="$emit('input', date)"
  />
</template>

<script>
import aaa from "vue2-datepicker";
import "vue2-datepicker/index.css";


export default {
  name: "test",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    aaa,
  },
  props: [
    'dafaultValue'
  ],
  data: () => ({
    dayStr: ["7", "1", "2", "3", "4", "5", "6"],
    date: ""
  }),
};
</script>
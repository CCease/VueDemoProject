<template>
  <div>
    <h1>LifeCountPage</h1>
    <!-- Date picker here -->
    <date-picker @input="date = $event" :dafaultValue="this.date" />

    <!-- Block here -->
    <ProgressBlock :progress="todayBlock" />

    <!-- Information -->
    <h2>Legend</h2>
    <div class="legend">
      <div class="blockdata">
        <div class="data past"></div>
        The time passed
      </div>
      <div class="blockdata">
        <div class="data today"></div>
        Today
      </div>
      <div class="blockdata">
        <div class="data sleep"></div>
        Future sleeping time if you sleeps 8 hours a day
      </div>
      <div class="blockdata">
        <div class="data work"></div>
        Future working time if you work 8 hours a day and retire on 65
      </div>
      <div class="blockdata">
        <div class="data retire"></div>
        Day of retire
      </div>
      <div class="blockdata">
        <div class="data future"></div>
        Free time
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBlock from "../components/lifecount/ProgressBlock.vue";
import DatePicker from "../components/DatePicker.vue";
import dayjs from "dayjs";

export default {
  name: "LifeCountPage",
  components: {
    ProgressBlock,
    DatePicker,
  },
  data() {
    return {
      date: dayjs().subtract(18, "y"),
    };
  },
  computed: {
    passedDays() {
      return dayjs().diff(this.date, "d");
    },
    todayBlock() {
      return Math.floor(this.passedDays / 73);
    },
  },
};
</script>

<style lang="scss">
@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.data {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-left: 10px;
  &.past {
    background-color: #f5f839;
  }
  &.future {
    background-color: #b4aab970;
  }
  &.sleep {
    background-color: #8545a58e;
  }
  &.work {
    background-color: #1b18ddab;
  }
  &.today {
    animation: flash ease 2s infinite;
    background-color: #17e922;
  }
  &.retire {
    background-color: #e98c4d;
  }
}
.blockdata {
  width: 500px;
  text-align: left;
  margin-top: 8px;
}
.legend{
  display: grid;
  justify-content: center;
}
</style>
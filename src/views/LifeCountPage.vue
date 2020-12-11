<template>
  <div>
    <h1>LifeCountPage (WIP)</h1>
    <!-- Date picker here -->

    <!-- <p>Date Picker</p> -->
    <date-picker @input="date = $event" :dafaultValue="this.date"/>
    <h1>{{ date }}</h1>
    <h1>{{ passedDays }}</h1>
    <h1>{{ todayBlock }}</h1>

    <!-- Block here -->
    <ProgressBlock :progress="todayBlock"/>

    <!-- Dynamic Data (Past) -->
    <TimeInfo />
    
    <!-- Dynamic Data (Future) -->

    <!-- Information -->
    <ExplainInfo />
  </div>
</template>

<script>
import ProgressBlock from "../components/lifecount/ProgressBlock.vue";
import TimeInfo from "../components/lifecount/TimeInfo.vue";
import ExplainInfo from "../components/lifecount/ExplainInfo.vue";
import DatePicker from '../components/DatePicker.vue';
import dayjs from 'dayjs';



export default {
  name: "LifeCountPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ProgressBlock,
    // eslint-disable-next-line vue/no-unused-components
    TimeInfo,
    // eslint-disable-next-line vue/no-unused-components
    ExplainInfo,
    // eslint-disable-next-line vue/no-unused-components
    DatePicker,
    
  },
  data() {
    return {
      date: dayjs().subtract(18,'y'),      
    };
  },
  computed: {
    passedDays(){
      return dayjs().diff(this.date,'d')
    },
    todayBlock(){
      return Math.floor(this.passedDays/73)
    }
  },
};
</script>
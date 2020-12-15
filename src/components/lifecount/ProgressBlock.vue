<template>
  <div class="lifecount">
      <br/>
    <div class="box">
      <br/>
      <div
        class="blocks"
        v-for="(block, index) in this.blocks"
        :key="index"
        :class="[
          { past: index < progress },
          { future: index > progress+sleepBlockCount+workBlockCount },
          { sleep: index > progress && index <= progress+sleepBlockCount },
          { work: index > progress+sleepBlockCount && index <= progress+sleepBlockCount+workBlockCount },
          { today: index === progress },
          { retire: index === 325 },
        ]"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProgressBlock",
  props: {
    progress: Number,
  },
  data() {
    return {
      blockCount: 400,
      todayProgress: 271,
    };
  },
  computed: {
    lifeLength(){
        return "Life Length: "+365*80+" Days"
    },
    blocks() {
      var arr = [];
      for (let index = 0; index < this.blockCount; index++) {
        arr.push({});
      }
      return arr;
    },
    sleepBlockCount(){
      return Math.floor((400-this.progress)/3)
    },
    workBlockCount(){
      if (this.progress>=325) {
        return 0;
      } else {
        return Math.floor((325-this.progress)/3)
      }
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
.lifecount {
  .box {
    font-size: 0px;
    width: 500px;
    height: 500px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 610px) {
      height: 400px;
      width: 400px;
    }
    @media (max-width: 360px) {
      height: 350px;
      width: 350px;
    }
    .flash {
      animation: flash ease 2s infinite;
      background-color: #4fa38c;
    }
  }
}
.blocks {
  display: inline-block;
  width: calc(100% / 20 - 6px);
  height: calc(100% / 20 - 6px);
  margin: 3px;
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
</style>
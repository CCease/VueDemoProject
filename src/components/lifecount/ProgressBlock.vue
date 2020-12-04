<template>
  <div class="lifecount">
      {{lifeLength}}
    <div class="box">
      <br />
      <!-- <div
      v-for="(item, index) in results.blockArr"
      :key="index"
      class="block"
      :class="[
        item.type,
        { retired: index === 323 && index >= results.length.past },
        { flash: index === results.length.past - 1 },
      ]"
    ></div> -->
      <div
        class="testing"
        v-for="(block, index) in this.blocks"
        :key="index"
        :class="[
          { past: index < this.todayProgress },
          { future: index > this.todayProgress },
          { today: index === this.todayProgress },
        ]"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "ProgressBlock",
  props: {
    progress: Number,
    livedDays: Number
  },
  data() {
    return {
      blockCount: 400,
      todayProgress: 271,
    };
  },
  computed: {
    lifeLength(){
        return 365*80
    },
    blocks() {
      var arr = [];
      for (let index = 0; index < this.blockCount; index++) {
        arr.push({});
      }
      return arr;
    },
    results() {
      if (!this.date.trim()) return false;
      const blockArr = [];
      const date = dayjs(this.date);
      const thisDay = dayjs();
      const oneBlockHour = 24 * 72; // 一个方块代表的小时
      const haveChildren = 28; // 生孩子的年龄
      const pastDate = thisDay.diff(date, "day"); // 已经过去的时间(天)
      const deathDate = date.add(80, "year"); // 80岁的时候
      const fromDeathDate = deathDate.diff(thisDay, "day"); // 距离80岁还能活的时间(天)
      const retiredDate = date.add(65, "year"); // 65岁退休的时候
      const fromRetiredDate = retiredDate.diff(thisDay, "day"); // 距离65岁还能活的时间(天)
      const childrenDate = date.add(18 + haveChildren, "year"); // 如果28岁生孩子，孩子18岁的时候
      const fromChildrenDate = childrenDate.diff(thisDay, "day"); // 距离孩子18岁还能活的时间(天)
      const parentsDate = date.add(80 - haveChildren, "year"); // 距离父母死亡
      const fromParentsDate = parentsDate.diff(thisDay, "day"); // 距离父母死亡还能活的时间(天)
      const past = ~~(pastDate / 72); // 已经过去的方块
      const sleep = ~~((8 * fromDeathDate) / oneBlockHour); // 碎觉所需的方块
      const work =
        fromRetiredDate <= 0 ? 0 : ~~((8 * fromRetiredDate) / oneBlockHour); // 工作所需的方块
      const child =
        fromChildrenDate <= 0 ? 0 : ~~((5 * fromChildrenDate) / oneBlockHour); // 陪伴孩子
      const parents =
        fromParentsDate <= 0
          ? 0
          : ~~(((fromParentsDate / 31) * 24) / oneBlockHour); // 陪伴父母
      let surplus = 400 - (sleep + past + work + child + parents);
      if (surplus <= 0) surplus = 0;
      const data = {
        past,
        sleep,
        work,
        child,
        parents,
        surplus,
      };
      Object.keys(data).forEach((e) => {
        for (let i = 0; i < data[e]; i++) {
          blockArr.push({
            type: e,
          });
        }
      });
      return {
        blockArr,
        length: data,
      };
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
  .card {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    .name {
      margin-bottom: 10px;
    }
    small {
      font-size: 16px;
      color: #999999;
      margin-left: 5px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  .hint {
    margin: 17px 0;
  }
  li {
    margin: 8px 0;
    list-style: none;
    line-height: 1.5;
    .block {
      margin: 0;
      width: 15px !important;
      height: 15px !important;
      margin-right: 5px;
    }
  }
  .nya-input {
    width: 100%;
    box-sizing: border-box;
    .mx-input {
      border-radius: 0;
      height: 100%;
      box-sizing: border-box;
    }
  }
  .box {
    font-size: 0px; //Todo: change to 0
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
  .block {
    display: inline-block;
    //Todo: what this mean
    //width: calc(100% / 20 - 6px);
    //height: calc(100% / 20 - 6px);
    width: 50px;
    height: 50px;
    margin: 3px;
    &.past {
      background-color: #98c3b9;
    }
    &.sleep {
      background-color: #c1e8f9;
    }
    &.work {
      background-color: #ab9f93;
    }
    &.child {
      background-color: #e3a6ab;
    }
    &.parents {
      background-color: #7ea1b7;
    }
    &.surplus {
      background-color: #e2e2e2;
    }
    &.retired {
      background-color: #f8c039;
    }
  }
}

.testing {
  display: inline-block;
  //Todo: what this mean
  width: calc(100% / 20 - 6px);
  height: calc(100% / 20 - 6px);
  //width: 50px;
  //height: 50px;
  margin: 3px;
  &.past {
    background-color: #f8c039;
  }
  &.future {
    background-color: #962dd3;
  }
  &.today {
    background-color: #17e922;
  }
}
.testing {
  .can {
    display: inline-block;
    //Todo: what this mean
    width: calc(100% / 20 - 6px);
    height: calc(100% / 20 - 6px);
    margin: 3px;
    background-color: #210bee;
  }
}
</style>
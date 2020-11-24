<template>
    <div class="wrapper">
        <button class="button" v-on:click="buttonClick1">
            You clicked this button {{ count1 }} times. <br>(v-on:click="buttonClick1")
        </button>
        <br/>
        <button class="button" @click="buttonClick2">
            You clicked this {{ msg }} button {{ count2local }} times. <br>(@click="buttonClick2")        
        </button>
    </div>
</template>

<script>
export default {
    name: "CounterButton",
    props:{
        count2: Number,
    },
    methods:{
        buttonClick1(){
            this.count1++;
        },
        buttonClick2(){
            this.count2local++;
        }
    },
    // computer: {function here} ????
    //TODO: Do something to replace count2local: this.count2
    data(){
        return{
            count1: 0,
            count2local: this.count2
        }
    }
}    
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
  transition: all .1s ease-in-out;
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
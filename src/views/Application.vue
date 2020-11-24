<template>
    <div>
        <h1>Todo List</h1>
        <div>
            <CounterButton count2="10"/>
        </div>
        <div>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
        <HelloWorld msg="test"/>
    </div>
</template>

<script>
import CounterButton from '../components/CounterButton.vue'
import TodoItem from '../components/TodoItem.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
    name: "Application",
    components: {
        CounterButton,
        TodoItem,
        HelloWorld
    }
}
</script>
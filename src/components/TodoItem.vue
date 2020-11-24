<template>
    <div>
        <p>Todo Item is here</p>
    </div>    
</template>
//TODO: Complete this component and create a TodoList component consist of todos
<script>
export default {
    // Name of the component
    name: "TodoItem",
    // Todo: ???
    props: [""],
    // Method
    methods:{
        markComplete(){
            this.todo.complete = !this.todo.complete;
        }
    }
    
}
</script>

<style scoped>

</style>
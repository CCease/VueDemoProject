<template>
    <button type="button" @click="$emit('delete-todo')">X</button>
</template>

<script>
export default {
    name:"DeleteTodoButton",
}
</script>
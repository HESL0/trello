<template>
  <header class="board-header">
    <h1>{{ board.title }}</h1>
    <button @click="$emit('add-list')">Add List</button>
  </header>
</template>

<script setup>
const props = defineProps({
  board: Object
})

const emit = defineEmits(['add-list'])
</script>

<style scoped>
.board-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #026aa7;
  color: white;
  border-radius: 6px 6px 0 0;
}

button {
  background-color: #5aac44;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #519839;
}
</style>

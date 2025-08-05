<template>
  <div class="card">
    <p>{{ card.content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object
})
</script>

<style scoped>
.card {
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  cursor: grab;
}
</style>

<template>
  <div class="list-header">
    <input
      v-if="editing"
      v-model="titleInput"
      @keyup.enter="save"
      @blur="save"
    />
    <h3 v-else @click="editing = true">{{ title }}</h3>
    <button @click="emit('delete')">×</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  title: String
})

const emit = defineEmits(['edit-title', 'delete'])

const editing = ref(false)
const titleInput = ref(props.title)

watch(() => props.title, (val) => {
  titleInput.value = val
})

function save() {
  if (titleInput.value.trim()) {
    emit('edit-title', titleInput.value.trim())
  }
  editing.value = false
}
</script>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  flex: 1;
  margin-right: 0.5rem;
  padding: 0.25rem;
}
</style>

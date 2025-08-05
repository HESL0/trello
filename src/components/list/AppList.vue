<template>
  <div class="list">
    <ListHeader
      :title="list.title"
      @edit-title="editTitle"
      @delete="deleteList"
    />

    <div class="cards">
      <BoardCard
        v-for="card in list.cards"
        :key="card.id"
        :card="card"
      />
    </div>

    <div class="add-card">
      <input
        v-model="newCardContent"
        placeholder="Add new card"
        @keyup.enter="addCard"
      />
      <button @click="addCard">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ListHeader from './ListHeader.vue'
import BoardCard from '../card/BoardCard.vue'
import { useCardStore, useListStore } from 'src/store'

const props = defineProps({
  list: Object,
  boardId: Number
})

const emit = defineEmits(['add-card', 'edit-list', 'delete-list'])

const cardStore = useCardStore()
const listStore = useListStore()

const newCardContent = ref('')

function addCard() {
  if (!newCardContent.value.trim()) return
  cardStore.addCard(props.boardId, props.list.id, newCardContent.value.trim())
  newCardContent.value = ''
}

function editTitle(newTitle) {
  listStore.editList(props.boardId, props.list.id, newTitle)
}

function deleteList() {
  listStore.deleteList(props.boardId, props.list.id)
}
</script>

<style scoped>
.list {
  background: #dfe3e6;
  padding: 0.5rem;
  border-radius: 6px;
  min-width: 250px;
}

.add-card {
  margin-top: 0.5rem;
}

input {
  width: 100%;
  padding: 0.25rem;
}
</style>

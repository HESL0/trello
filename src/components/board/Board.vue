<template>
  <div class="board">
    <BoardHeader :title="board.title" @edit-title="editTitle" />

    <div class="lists-container">
      <List
        v-for="list in board.lists"
        :key="list.id"
        :list="list"
        :boardId="board.id"
        @add-card="addCard"
        @edit-list="editList"
        @delete-list="deleteList"
      />
      <div class="add-list">
        <input
          v-model="newListTitle"
          placeholder="New list title"
          @keyup.enter="addList"
        />
        <button @click="addList">Add List</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BoardHeader from './BoardHeader.vue'
import List from '../list/List.vue'
import { useBoardStore, useListStore, useCardStore } from 'src/store'

const props = defineProps({
  board: {
    type: Object,
    required: true
  }
})

const boardStore = useBoardStore()
const listStore = useListStore()
const cardStore = useCardStore()

const newListTitle = ref('')

function addList() {
  if (!newListTitle.value.trim()) return
  listStore.addList(props.board.id, newListTitle.value.trim())
  newListTitle.value = ''
}

function addCard(listId, content) {
  cardStore.addCard(props.board.id, listId, content)
}

function editList(listId, newTitle) {
  listStore.editList(props.board.id, listId, newTitle)
}

function deleteList(listId) {
  listStore.deleteList(props.board.id, listId)
}

function editTitle(newTitle) {
  boardStore.editBoard(props.board.id, newTitle)
}
</script>

<style scoped>
.board {
  padding: 1rem;
  background: #f4f5f7;
  border-radius: 6px;
}

.lists-container {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}

.add-list {
  min-width: 250px;
  padding: 0.5rem;
  background: #ebecf0;
  border-radius: 6px;
}
</style>

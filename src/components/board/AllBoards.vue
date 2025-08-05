<template>
  <div class="all-boards">
    <h2>Your Boards</h2>

    <div class="boards-list">
      <div
        v-for="board in boards"
        :key="board.id"
        class="board-item"
        @click="selectBoard(board)"
      >
        {{ board.title }}
      </div>
    </div>

    <div class="add-board">
      <input
        v-model="newBoardTitle"
        placeholder="New board title"
        @keyup.enter="addBoard"
      />
      <button @click="addBoard">Add Board</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBoardStore } from 'src/store'
import { useRouter } from 'vue-router'

const boardStore = useBoardStore()
const router = useRouter()

const newBoardTitle = ref('')

const boards = boardStore.boards

function addBoard() {
  if (!newBoardTitle.value.trim()) return
  boardStore.addBoard(newBoardTitle.value.trim())
  newBoardTitle.value = ''
}

function selectBoard(board) {
  router.push({ name: 'board', params: { id: board.id } })
}
</script>

<style scoped>
.all-boards {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.boards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.board-item {
  background: #026aa7;
  color: white;
  padding: 1rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: background 0.3s ease;
}

.board-item:hover {
  background: #055a9c;
}

.add-board input {
  padding: 0.5rem;
  width: 70%;
  margin-right: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-board button {
  padding: 0.5rem 1rem;
  border: none;
  background: #026aa7;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBoardStore = defineStore('board', () => {
  const boards = ref([])

  function addBoard(title) {
    boards.value.push({ id: Date.now(), title, lists: [] })
  }
  function editBoard(id, title) {
    const board = boards.value.find(b => b.id === id)
    if (board) board.title = title
  }
  function deleteBoard(id) {
    boards.value = boards.value.filter(b => b.id !== id)
  }

  return { boards, addBoard, editBoard, deleteBoard }
})

import { defineStore } from 'pinia'
import { useBoardStore } from './boardStore'

export const useListStore = defineStore('list', () => {
  const boardStore = useBoardStore()

  function addList(boardId, title) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (board) board.lists.push({ id: Date.now(), title, cards: [] })
  }
  function editList(boardId, listId, title) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (!board) return
    const list = board.lists.find(l => l.id === listId)
    if (list) list.title = title
  }
  function deleteList(boardId, listId) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (!board) return
    board.lists = board.lists.filter(l => l.id !== listId)
  }

  return { addList, editList, deleteList }
})

import { defineStore } from 'pinia'
import { useBoardStore } from './boardStore'

export const useCardStore = defineStore('card', () => {
  const boardStore = useBoardStore()

  function addCard(boardId, listId, content) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (!board) return
    const list = board.lists.find(l => l.id === listId)
    if (list) list.cards.push({ id: Date.now(), content })
  }
  function editCard(boardId, listId, cardId, content) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (!board) return
    const list = board.lists.find(l => l.id === listId)
    if (!list) return
    const card = list.cards.find(c => c.id === cardId)
    if (card) card.content = content
  }
  function deleteCard(boardId, listId, cardId) {
    const board = boardStore.boards.find(b => b.id === boardId)
    if (!board) return
    const list = board.lists.find(l => l.id === listId)
    if (!list) return
    list.cards = list.cards.filter(c => c.id !== cardId)
  }

  return { addCard, editCard, deleteCard }
})

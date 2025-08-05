<template>
  <TrelloBoard v-if="board" :board="board" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useBoardStore } from 'src/store'
import TrelloBoard from 'src/components/board/BoardList.vue'
import { computed } from 'vue'

const route = useRoute()
const boardStore = useBoardStore()

const board = computed(() =>
  boardStore.boards.find((b) => b.id === Number(route.params.id))
)
</script>

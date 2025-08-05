<template> 
<div class="all-boards">
    <h2>Your Boards</h2>

    <div class="board-list">
    <div 
    v-for="boards in board"
    :key="board.id"
    class="board-item"
    ></div>
    </div>
</div>
</template>
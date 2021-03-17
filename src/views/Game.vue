<template>
  <div :class="{ boards: boards.length > 1 }">
    <template v-for="boardData in boards" :key="boardData.id">
      <GameBoard :id="boardData.id" :board="boardData.board" />
    </template>
  </div>
</template>

<script lang="ts">
import { columns, rowsCount } from '@/./consts';
import { Board, BoardColumn } from '@/./types';
import GameBoard from '@/components/GameBoard.vue';
import { generateTileValue } from '@/utils';
import { defineComponent } from 'vue';

function generateBoard(boardIndex: number) {
  let boardId = String(boardIndex);

  function generateColumn(
    { from, to }: { from: number; to: number },
    columnIndex: number,
  ) {
    return [...Array(rowsCount)].reduce((rows: BoardColumn, row, rowIndex) => {
      let value;
      const values = Object.keys(rows);

      do {
        value = generateTileValue(from, to);
      } while (values.includes(String(value)));

      boardId += value;

      return {
        ...rows,
        [value]: {
          value,
          id: [boardIndex, columnIndex, rowIndex, value].join(''),
        },
      };
    }, {});
  }

  const board: Board = columns.map(generateColumn);

  return { board, id: boardId };
}

export default defineComponent({
  components: {
    GameBoard,
  },
  data() {
    return {
      boards: [generateBoard(0)],
    };
  },
});
</script>

<style scoped>
.boards {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

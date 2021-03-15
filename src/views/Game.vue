<template>
  <div :class="{ boards: boards.length > 1 }">
    <template v-for="boardData in boards" :key="boardData.id">
      <GameBoard :board="boardData.board" :id="boardData.id" />
    </template>
  </div>
</template>

<script lang="ts">
import { columns, rowsCount } from '@/./consts';
import { Board, BoardColumn } from '@/./types';
import GameBoard from '@/components/GameBoard.vue';
import { generateTileValue } from '@/utils';

function generateBoard(boardIndex: number) {
  let boardId = String(boardIndex);

  const board: Board = columns.map((column, columnIndex) =>
    [...Array(rowsCount)].reduce((rows: BoardColumn, row, rowIndex) => {
      let value;
      const values = Object.keys(rows);

      do {
        value = generateTileValue(column.from, column.to);
      } while (values.includes(String(value)));

      boardId += value;

      return {
        ...rows,
        [value]: {
          value,
          id: [boardIndex, columnIndex, rowIndex, value].join(''),
        },
      };
    }, {}),
  );

  return { board, id: boardId };
}

export default {
  components: {
    GameBoard,
  },
  computed: {
    boards: {
      get() {
        return [generateBoard(0)];
      },
    },
  },
};
</script>

<style scoped>
.boards {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

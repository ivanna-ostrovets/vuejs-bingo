<template>
  <div :class="{ boards: boards.length > 1 }">
    <template v-for="boardData in boards" :key="boardData.id">
      <GameBoard :id="boardData.id" :board="boardData.board" />
    </template>
  </div>
</template>

<script lang="ts">
import { columnsConfig, rowsCount } from '@/./consts';
import { Board, BoardColumn } from '@/./types';
import GameBoard from '@/components/GameBoard.vue';
import { generateTileValue } from '@/utils';
import shortid from 'shortid';
import { defineComponent } from 'vue';

function generateUniqueValue(min: number, max: number, values: string[]) {
  let value: number;

  do {
    value = generateTileValue(min, max);
  } while (values.includes(String(value)));

  return value;
}

function generateColumn(min: number, max: number): BoardColumn {
  return [...Array(rowsCount)].reduce((column: BoardColumn) => {
    const value = generateUniqueValue(min, max, Object.keys(column));

    return {
      ...column,
      [value]: { value, id: shortid.generate() },
    };
  }, {});
}

function generateBoard(): { id: string; board: Board } {
  return {
    id: shortid.generate(),
    board: columnsConfig.map(({ min, max }) => generateColumn(min, max)),
  };
}

export default defineComponent({
  components: {
    GameBoard,
  },
  data() {
    return {
      boards: [generateBoard()],
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

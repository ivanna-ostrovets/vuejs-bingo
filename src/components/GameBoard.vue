<template>
  <div class="board">
    <template v-for="column in columnNames" :key="column.name + id">
      <div class="cell">
        <ColumnHeader :name="column.name" :color="column.color" />
      </div>
    </template>

    <template v-for="(column, index) in board" :key="id + index">
      <GameTile
        v-for="tile in column"
        :key="tile.id"
        :tile="tile"
        class="cell"
      />
    </template>
  </div>
</template>

<script lang="ts">
import GameTile from '@/components/GameTile.vue';
import ColumnHeader from '@/components/ColumnHeader.vue';
import { Board } from '@/types';
import { columns } from '@/consts';

export default {
  components: {
    GameTile,
    ColumnHeader,
  },
  props: {
    id: String,
    board: Board,
  },
  data() {
    return {
      columnNames: columns,
    };
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 400px;
  height: 400px;
  background-color: #be346e;
  padding: 8px;
  padding-top: 0;
  border-radius: 6px;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

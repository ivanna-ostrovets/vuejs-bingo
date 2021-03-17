<template>
  <div class="board">
    <div class="header">
      <template v-for="column in columnNames" :key="column.name + id">
        <div class="cell">
          <ColumnHeader :name="column.name" :color="column.color" />
        </div>
      </template>
    </div>

    <div class="content">
      <template v-for="(column, index) in board" :key="id + index">
        <GameTile
          v-for="tile in column"
          :key="tile.id"
          :tile="tile"
          class="cell"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import ColumnHeader from '@/components/ColumnHeader.vue';
import GameTile from '@/components/GameTile.vue';
import { columnsConfig } from '@/consts';
import { Board } from '@/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: {
    GameTile,
    ColumnHeader,
  },
  props: {
    id: { type: String },
    board: { type: Object as PropType<Board>, required: true },
  },
  data() {
    return {
      columnNames: columnsConfig,
    };
  },
});
</script>

<style scoped>
.board {
  width: 400px;
  height: 400px;
  background-color: #be346e;
  padding: 8px;
  border-radius: 6px;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-rows: max-content auto;
  grid-gap: 8px;
}

.header {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.content {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  grid-gap: 4px;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

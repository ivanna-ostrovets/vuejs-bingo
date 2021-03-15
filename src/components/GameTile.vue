<template>
  <div class="tile">{{ tile.value }}</div>
</template>

<script lang="ts">
import { Tile } from '@/./types';

export default {
  components: {},
  props: {
    tile: Tile,
  },
};
</script>

<style scoped>
.tile {
  border-radius: 4px;
  background-color: white;
  margin: 2px;
}
</style>

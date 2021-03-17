<template>
  <div class="tile">{{ tile.value }}</div>
</template>

<script lang="ts">
import { Tile } from '@/./types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: {},
  props: {
    tile: Object as PropType<Tile>,
  },
});
</script>

<style scoped>
.tile {
  border-radius: 4px;
  background-color: white;
  margin: 2px;
}
</style>

<template>
  <div class="container" :style="containerStyle">
    <div class="name" :style="nameStyle">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: {
    name: String,
    color: String,
  },
  data() {
    return {
      containerStyle: {
        backgroundColor: this.color,
      },
      nameStyle: {
        border: `1px solid ${this.color}`,
      },
    };
  },
});
</script>

<style scoped>
.container {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: var(--primary);
  background-color: white;
  box-shadow: 0 0 0 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

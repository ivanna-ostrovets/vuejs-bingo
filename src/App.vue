<template>
  <Navigation />
  <div id="content"><router-view /></div>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Navigation,
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: var(--background-color);
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary);
  height: 100%;
}

#content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - var(--nav-height));
}
</style>

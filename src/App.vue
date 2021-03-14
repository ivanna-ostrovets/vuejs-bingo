<template>
  <Navigation />
  <router-view id="content" />
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
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
  color: var(--text-color);
}

#content {
  text-align: center;
}
</style>

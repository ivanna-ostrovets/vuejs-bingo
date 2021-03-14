<template>
  <div id="nav">
    <router-link to="/">Game</router-link>
    <router-link to="/rules">Rules</router-link>
  </div>
</template>

<style>
#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: var(--primary);
}

#nav a:not(:last-of-type) {
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: var(--secondary);
}
</style>

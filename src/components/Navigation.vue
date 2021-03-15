<template>
  <div id="nav">
    <router-link to="/">Game</router-link>
    <router-link to="/rules">Rules</router-link>
  </div>
</template>

<style>
#nav {
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
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

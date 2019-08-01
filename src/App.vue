<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import fruits from '@/assets/owoce.svg';
export default {
  created() {
    this.$store.commit('setAssetsUrl', fruits);
  },
}
</script>

<style lang="scss">
$primary-color      : blue !default;
html {
  font: $prime-font;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

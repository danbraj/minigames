<template>
  <div id="app">
    <router-link class="btn absolute" to="/">Lista minigierek</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 80px;
  position: relative;
}

body {
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: lighten(#2c3e50, 10%);
  // &.router-link-exact-active {
  //   color: #42b983;
  // }
}

.btn {
  color: $primary-color;
  background: #fff;
  border: 2px $primary-color solid;
  background: inherit;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 10px;
  padding: 14px 26px;
  display: inline-block;

  &:hover {
    text-decoration:none;
    background: $primary-color;
    color: #fff;
  }
}

.absolute {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
<template>
  <div id="app">
    <h1><router-link to="/">Minigames</router-link></h1>
    <h2>{{ msg }}</h2>
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
@import './scss/base/variables';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}

// a {
//   color: $primary-color;
// }

.btn {
  color: $primary-color;
  border: 1px $primary-color solid;
  background: #fff;
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
</style>
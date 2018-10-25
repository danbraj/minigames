<template>
  <div id="minigames">
    <router-link class="btn top-right" to="/">Lista minigierek</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'minigames',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<style lang="scss">
$normal-font-size: 16px !default;

body {
  margin: 0;
}

#minigames {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 80px;
  position: relative;
  font-size: $normal-font-size;

  .btn {
    color: $primary-color;
    background: #fff;
    border: 2px $primary-color solid;
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

  .top-right {
    position: absolute;
    right: 0;
    top: 0;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: lighten(#2c3e50, 10%);
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}
</style>
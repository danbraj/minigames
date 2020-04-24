<template>
  <div id="app">
    <router-view class="page"/>
  </div>
</template>

<script>
import fruits from '@/assets/fruits.svg';
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
  overflow-x: hidden;
}
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.25rem;
}
h3 {
  font-size: 1.125rem;
}
h4 {
  font-size: 1.05rem;
}
a {
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: $primary-color;
}

.main, .game, .nav__wrapper {
  @extend %wrapper;
  box-sizing: border-box;
}

.nav {
  background-color: #1B325F;
  color: #eee;
}
.nav__wrapper {
  display: flex;
  align-items: center;
  padding: 0
}
.nav__title {
  margin: 0 1rem;
  padding: .4rem;
  flex-grow: 1;
}
.nav__button {
  border: 0;
  background-color: black;
  color: #eee;
  // margin: 4px;
  display: block;
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.nav__panel {
    margin: 0 1rem;
}

.feather {
  width: 32px;
  height: 32px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

// @media (max-aspect-ratio: 1/1) {
//   .page {
//     display: flex;
//     flex-direction: column-reverse;
//   }
// }
</style>

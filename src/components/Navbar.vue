<template>
  <div class="nav">
    <router-link to="/">Powrót</router-link>
    <h1>{{ title }}</h1>
    <button>Jeszcze raz</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
    background-color: $secondary-color;
}
</style>

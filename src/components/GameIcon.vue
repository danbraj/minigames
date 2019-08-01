<template>
  <router-link class="game-icon" :to="game.name">
    <div class="game-icon__box">
      <span class="game-icon__title">{{ game.title }}</span>
      <span class="game-icon__status">{{ game.status }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$game-icon-color: yellow !default;
$game-icon-accent-color: orange !default;

.game-icon {
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  color: lighten(#2c3e50, 10%);
  display: inline-block;
  height: 60px;
  width: 280px;
  margin: 10px;
  border: 6px solid $game-icon-color;
  background-color: $game-icon-color;

  &:hover {
    border-color: $game-icon-accent-color;
  }

  &.router-link-active {
    border-color: $game-icon-accent-color;
    background: $game-icon-accent-color;
  }
}
.game-icon__box {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}
.game-icon__title {
  position: absolute;
  bottom: 4px;
  left: 4px;
  font-size: 1.4em;
}
.game-icon__status {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.76em;
}
</style>

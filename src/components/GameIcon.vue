<template>
  <router-link class="game-icon" :to="game.name">
    <div class="game-icon__box" v-bind:style="{ 'background-image': 'url(' + game.imagePath + ')' }">
      <span class="game-icon__title">{{ game.title }}</span>
      <span v-if="game.status != ''" class="game-icon__status">{{ game.status }}</span>
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

<style scoped lang="scss">
$game-icon-color          : yellow !default;
$game-icon-hover-color    : orange !default;

.game-icon {
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  // font-weight: bold;
  color: white; //lighten(#2c3e50, 10%);
  display: inline-block;
  height: 200px;
  width: 280px;
  margin: 10px 10px 30px;
  border: 2px solid $game-icon-color;
  background-color: $game-icon-color;

  &:hover {
    border-color: $game-icon-hover-color;
    .game-icon__title, .game-icon__status {
      background-color: $game-icon-hover-color;
    }
  }

  &.router-link-active {
    border-color: lighten($game-icon-hover-color, 5%);
    background: lighten($game-icon-hover-color, 5%);
  }

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: $game-icon-hover-color;
}
.game-icon__box {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}
.game-icon__title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: absolute;
  font-size: 1.125rem;
  padding: 8px 16px;
  background-color: $game-icon-color;
  // border: 2px solid $game-icon-color;

  min-width: 160px;
  // width: 60%;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
}
.game-icon__status {
  position: absolute;
  top: 8px;
  right: 0;
  font-size: 0.76em;
  font-weight: bold;
  padding: 4px 16px 4px 4px;
  background-color: $game-icon-color;
}
</style>
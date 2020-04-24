<template>
  <div class="home">
    <div class="nav">
      <div class="nav__wrapper">
        <h1 class="nav__title">Minigames</h1>
        <router-link class="nav__button" to="/about" tag="button" aria-label="Informacje">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#info"/>
          </svg>
        </router-link>
        <router-link class="nav__button" to="/settings" tag="button" aria-label="Ustawienia">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#settings"/>
          </svg>
        </router-link>
      </div>
    </div>
    <div class="main">
      <GameIcon v-for="(game, index) in minigames" :key="index" :game="game"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue';
import GameIcon from '@/components/GameIcon.vue';
import minigames from '@/data/games.js';

export default {
  name: 'home',
  components: {
    GameIcon,
  },
  data() {
    return {
      minigames,
    };
  },
};
</script>

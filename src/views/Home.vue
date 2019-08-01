<template>
  <div class="home">
    <Navbar title="Minigames"/>
    <GameIcon v-for="(game, index) in minigames" :key="index" :game="game"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import GameIcon from '@/components/GameIcon.vue';

export default {
  name: 'home',
  components: {
    Navbar, GameIcon,
  },
  data() {
    return {
      minigames: [
        {
          name: 'memory',
          title: 'Memory',
          status: '',
        },
        {
          name: 'repeat',
          title: 'Repeat game',
          status: 'Beta',
        },
        {
          name: 'match3',
          title: 'Match 3',
          status: 'Inprogress',
        },
        {
          name: 'playground',
          title: 'Playground',
          status: 'Temporary',
        },
      ],
    };
  },
};
</script>

<template>
  <div id="minigames" class="minigames">
    <games></games>
    <router-view class="panel"></router-view>
  </div>
</template>

<script>
import Games from '@/components/Games';

export default {
  components: {
    'games': Games
  },
  name: 'minigames'
}
</script>

<style lang="scss">
$content-width: 1200px !default;
$normal-font-size: 16px !default;

body {
  margin: 0;
}

.minigames {
  
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //padding-top: 80px;
  position: relative;
  font-size: $normal-font-size;

  a {
    text-decoration: none;
    font-weight: bold;
  }

  .panel {
    width: $content-width;
    margin: 0 auto;
    position: relative;
  }

  @media only screen and (max-width: $content-width) {
    .panel {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
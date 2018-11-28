<template>
  <div>
    <span>Poziom {{ level }}</span>
    <div class="board" v-bind:class="{ 'busy': isBusy }">
        
      <div class="screen">
        <asset class="picture" :name="solution[0]"></asset>
        <asset class="picture" :name="solution[1]"></asset>
        <asset class="picture" :name="solution[2]"></asset>
      </div>

      <ul>
        <li v-for="index in solutionCount" :key="index">{{ index }}</li>
      </ul>

      <ul>
        <li v-for="(asset, index) in answers" :key="index">
          <asset :name="asset"></asset>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Asset from '@/components/Asset';

const svgHardDefs = [
  'hblueberries',
  'happle',
  'hnuts',
  'hcherries',
  'hgrape',
  'hpineapple'
]

export default {
  components: {
    asset: Asset
  },
  data() {
    return {
      level: 1,
      solution: [],
      solutionCount: 0,
      answers: [],
      isBusy: false,
      cooldown: 0,
    };
  },
  created() {
    this.solutionCount = 3;
    const assets = svgHardDefs
      .sort(() => 0.5 - Math.random());

    this.answers = assets;
    this.solution = [].concat(assets)
      .sort(() => 0.5 - Math.random())
      .slice(0, this.solutionCount);
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    list-style-type: none;
}
.minigame {
  width: $content-width;
  margin: 0 auto;
}
.board {
  position: relative;
  width: $content-width;
  margin: 40px 0;

  &.busy {
    pointer-events: none;
  }
}
@media only screen and (max-width: $content-width) {
  .board {
    width: 100%;
  }
}
</style>
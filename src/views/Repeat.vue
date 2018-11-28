<template>
  <div>
    <span>Poziom {{ level }}</span>
    <div class="board" v-bind:class="{ 'busy': isBusy }">
        
      <div class="screen">
        <asset class="picture" :name="actual"></asset>
      </div>

      <ul>
        <li class="order" v-for="index in solutionCount" :key="index" v-bind:class="{ 'active': index == order, 'good': chosenSolution[index-1] == solution[index-1] }">{{ index }}</li>
      </ul>

      <ul class="answers">
        <li class="answer" v-for="(asset, index) in answers" :key="index" v-on:click="choose(asset)">
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
      answers: [],
      actual: null,
      solution: [],
      solutionCount: 0,
      chosenSolution: [],
      isBusy: false,
      cooldown: 0,
      order: 0,
    };
  },
  created() {
    this.solutionCount = 4;
    this.answers = svgHardDefs
      .sort(() => 0.5 - Math.random());
    this.shuffle();
  },
  methods: {
    shuffle() {
      this.solution = [].concat(this.answers)
        .sort(() => 0.5 - Math.random())
        .slice(0, this.solutionCount);
      this.chosenSolution = [];

      this.showSolutionItem();
    },
    showSolutionItem() {
      if (this.order > this.solutionCount) {
        this.order = 0;
        this.actual = null;
        return;
      }
      setTimeout(() => {
        this.actual = this.solution[this.order];
        this.order++;
        this.showSolutionItem();
      }, 2000);
    },
    choose(asset) {
      this.chosenSolution.push(asset);
      if (this.solutionCount == this.chosenSolution.length) {
        this.shuffle();
      }
    }
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
.picture {
  width: 260px;
  height: 260px;
  margin: 20px;
}
.order {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  line-height: 32px;
  background: #ccc;
  display: inline-block;
  vertical-align: middle;
  margin: 6px;
  font-weight: 700;

  &.active {
    background: $primary-color;
    color: #fff;
  }

  &.good {
    background: green;
    color: #fff;
  }
}
.answers {
  display: flex;
  justify-content: center;
}
.answer {
  margin: 6px;
  border: 2px solid $secondary-color;
  &:hover {
    cursor: pointer;
    border-color: $primary-color;
    background: $secondary-color;
  }
}
</style>
<template>
  <div>
    <span>Poziom {{ level }}</span>
    <div class="board" v-bind:class="{ 'busy': isBusy }">
        
      <div class="screen">
        <asset class="picture" :name="actual"></asset>
        <span v-if="resultText" class="result" v-bind:class="resultClass" v-text="resultText"></span>
      </div>

      <ul>
        <li class="order" v-for="index in solutionCount" :key="index" v-bind:class="{ 'active': index == order, 'good': solutionCorrectness[index-1] }">{{ index }}</li>
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

const svgDefs = [
   0,  1,  2,  3,  4,  5,
   6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17
];

export default {
  components: {
    asset: Asset
  },
  data() {
    return {
      counter: 0,
      level: 1,
      answers: [],
      actual: null,
      solution: [],
      solutionCount: 0,
      solutionCorrectness: [],
      isBusy: false,
      order: 0,
      answerOrder: 0,
      resultText: null,
      resultClass: {
        'correct': false,
        'mistake': false
      }
    };
  },
  created() {
    this.solutionCount = 3;
    this.answers = svgDefs
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    this.shuffle();
  },
  methods: {
    shuffle() {
      this.isBusy = true;
      if (++this.counter % 5 == 0) {
        this.answers = svgDefs
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);
      }
      this.solutionCount = this.level + 2;
      this.chosenSolution = [];
      this.solution = [];
      for (let i = 0; i < this.solutionCount; i++) {
        const index = Math.floor(Math.random() * this.answers.length);
        this.solution.push(this.answers[index]);
      }

      this.showSolutionItem();
    },
    showSolutionItem() {
      if (this.order > this.solutionCount) {
        this.order = 0;
        this.actual = null;
        this.isBusy = false;
        return;
      }
      setTimeout(() => {
        this.actual = this.solution[this.order];
        this.order++;
        this.showSolutionItem();
      }, 1500);
    },
    choose(asset) {

      if (asset == this.solution[this.answerOrder]) {
        this.solutionCorrectness.push(true);
        this.answerOrder++;
        if (this.solutionCount == this.solutionCorrectness.length) {

          this.isBusy = true;
          this.resultClass = {
            'correct': true,
            'mistake': false
          }
          this.resultText = 'Bardzo dobrze';
          this.level++;
          setTimeout(() => {
            this.resultText = null;
            this.answerOrder = 0;
            this.solutionCorrectness = [];
            this.shuffle();
          }, 1200);
        }
      } else {

        this.resultClass = {
          'correct': false,
          'mistake': true
        }
        this.resultText = 'Pomyłka';
        this.level = --this.level >= 1 ? this.level : 1;
        setTimeout(() => {
          this.resultText = null;
        }, 1200);
        this.answerOrder = 0;
        this.solutionCorrectness = [];
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
    background: #507d2a;
    color: #fff;
  }
}
.answers {
  display: flex;
  flex-wrap: wrap;
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
.screen {
  position: relative;
}
.result {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  font-style: italic;
  font-weight: 700;
  color: #fff;
  padding: 10px 16px;
  background: $primary-color;
}
.correct {
  background: #507d2a;
}
.mistake {
  background: #dc143c;
}
</style>
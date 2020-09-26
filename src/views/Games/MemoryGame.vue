<template>
  <div>
    <div class="nav">
      <div class="nav__wrapper">
        <router-link class="nav__button" to="/" tag="button" aria-label="Powrót">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#arrow-left"/>
          </svg>
        </router-link>
        <h1 class="nav__title">Memory</h1>
        <div class="nav__panel">
          <span>Poziom {{ isHard ? 'trudny' : 'normalny' }}</span>
          <!-- <div class="difficulty-panel">
            <ul>
              <li><a v-on:click="setDifficulty(0)">Łatwy</a></li>
              <li><a v-on:click="setDifficulty(1)">Średni</a></li>
              <li><a v-on:click="setDifficulty(2)">Trudny</a></li>
            </ul>
          </div> -->
        </div>
        <button class="nav__button" v-on:click="toggleHardDifficulty()" tag="button" aria-label="Ustawienia">
          <svg class="feather" v-if="isHard">
            <use xlink:href="/res/feather-sprite.svg#chevron-down"/>
          </svg>
          <svg class="feather" v-else>
            <use xlink:href="/res/feather-sprite.svg#chevrons-up"/>
          </svg>
        </button>
        <button class="nav__button" v-on:click="restart()" tag="button" aria-label="Jeszsze raz">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#refresh-cw"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="game" v-bind:class="{ 'busy': isBusy }">
        <progress v-if="cooldown > 0"  class="indicator" :value="cooldown" max="25"></progress>
        <card v-for="(card, index) in cards" :key="index" :card="card" @click.native="flip(index)" v-bind:class="{ 'card--small': isHard }"></card>
        <button v-if="cardsLeft == 0" class="btn--again" @click="restart">Jeszcze raz</button>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

const svgDefs = [
  0,  1,  2,  3,  4,  5,
  6,  7,  8,  9, 10, 11
];
const svgHardDefs = [
  12, 13, 14, 15, 16, 17
];

// easy - 6, medium - 12, hard - 18
const difficulty = [6, 12, 18];

export default {
  components: {
    Card
  },
  data() {
    return {
      difficulty: 1,
      cards: [],
      cardsCount: -1,
      cardsLeft: -1,
      first: -1,
      count: -1,
      isBusy: true,
      cooldown: 0,
      isHard: false
    };
  },
  created() {
    this.shuffle();
    this.cardsCount = difficulty[this.difficulty] * 2;
    this.cardsLeft = this.cardsCount;
    this.isBusy = false;
  },
  methods: {
    flip(idx) {
      if (!this.cards[idx].isFlipped && !this.isBusy) {
        this.cards[idx].isFlipped = true;
        this.count++;

        if (this.count == 0) {
          this.first = idx;
        } else if (this.count == 1) {
          this.isBusy = true;
          const a = this.first;
          const b = idx;
          if (a != b && this.cards[a].handle == this.cards[b].handle) {
            this.cards[a].isMatched = true;
            this.cards[b].isMatched = true;
            this.isBusy = false;
            this.cardsLeft -= 2;
            // if (this.cardsLeft == 0) { console.log('win'); }
          } else {

            const cool = () => {
              if (this.cooldown >= 25) {
                this.cards[a].isFlipped = false;
                this.cards[b].isFlipped = false;
                this.isBusy = false;
                this.cooldown = 0;
                clearInterval(interval);
              } else {
                this.cooldown++; 
              }
            } 
            const interval = setInterval(cool, 100);
            // setTimeout(() => {
            //   this.cards[a].isFlipped = false;
            //   this.cards[b].isFlipped = false;
            //   this.isBusy = false;
            // }, 2500);
          }
          this.count = -1;
          this.first = -1;
        }
      }
    },
    restart() {
      if (!this.isBusy) {
        this.isBusy = true;
        this.cards.forEach(el => {
          el.isFlipped = false;
          el.isMatched = false;
        });
        this.count = -1;
        this.first = -1;
        //this.cards = null;
        setTimeout(() => {
          this.shuffle();
        }, 670);
        this.cardsCount = difficulty[this.difficulty] * 2;
        this.cardsLeft = this.cardsCount;
        this.isBusy = false;
      }
    },
    shuffle() {
      const defs = svgDefs;

      let cardsTypes;
      if (this.difficulty == 2) {
        cardsTypes = defs.concat(svgHardDefs);
        this.isHard = true;
      }
      else {
        cardsTypes = defs
          .sort(() => 0.5 - Math.random())
          .slice(0, difficulty[this.difficulty]);
        this.isHard = false;
      }
      
      this.cards = cardsTypes
        .concat(cardsTypes)
        .sort(() => 0.5 - Math.random())
        .map(symbol => {
          return { handle: symbol, isFlipped: false, isMatched: false };
        });
    },
    setDifficulty(d) {
      if (!this.isBusy) {
        this.difficulty = (d >= 0 && d < 3 ? d : 0);
        this.restart();
        this.cards = null;
      }
    },
    toggleHardDifficulty() {
      if (!this.isBusy) {
        this.difficulty = this.difficulty == 2 ? 1 : 2;
        this.restart();
        this.cards = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$content-width  : 900px !default;
$primary-color  : red !default;
// a {
//   cursor: pointer;
//   &:hover {
//     color: lighten($color: #3e5871, $amount: 30%);
//   }
// }
// .minigame {
//   width: $content-width;
//   margin: 0 auto;
// }
.game {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // width: $content-width;
  perspective: 66vw;
  width: initial;
  margin: 20px 0 0 0;
  padding: 0;

  &.busy {
    pointer-events: none;
  }

  // @media only screen and (min-width: 1500px) {
  //   margin: 0;
  // }
}
.btn--again {
  margin: 0;
  color: $primary-color;
  background: #fff;
  border: 2px $primary-color solid;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2em;
  text-transform: uppercase;
  position: absolute;
  background-color: #fff;
  padding: 14px 26px;
  display: inline-block;
  z-index: 1;
  width: 200px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration:none;
      background: $primary-color;
      color: #fff;
  }
}

.indicator {
  position: absolute;
  // left: 0;
  top: -20px;
  height: 14px;
  // width: 260px;
  width: 100vw;
  appearance: none;
  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
  }
  &::-webkit-progress-value {
    background-color: lighten($primary-color, 25%);
    // background-image: -webkit-linear-gradient(left, #f1617e, #a8d582);
    // background-size: 100% 100%;
  }
}
// @media only screen and (max-width: $content-width) {
//   .game {
//     width: 100%;
//     //width: 100vw;
//   }
// }

.difficulty-panel {
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: inline;
    & + li {
      &:before {
        content: ' | ';
      }
    }
  }
  
  // @media only screen and (min-width: 1500px) {
  //   position: absolute;
  //   right: 900px;
  //   text-align: right;
  //   margin-top: 40px;
  //   margin-right: 2%;
  // }
}
</style>
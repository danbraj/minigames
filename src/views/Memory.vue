<template>
    <div class="container">
        <h2>Memory</h2>
        <div class="board" v-bind:class="{ 'busy': isBusy }">
            <card v-for="(card, index) in cards" :key="index" :card="card" @click.native="flip(index)"></card>
        </div>
        <button v-if="cardsLeft == 0" class="btn" @click="restart">Jeszcze raz</button>
    </div>
</template>

<script>
import Card from '@/components/Card';

const cardsDefs = [
  'apple',
  'banana',
  'blueberries',
  'strawberry',
  'pear',
  'lemon',
  'nut',
  'grape',
  'watermelon',
  'cherry',
  'plum',
  'pineapple'
];

export default {
  components: {
    card: Card
  },
  created() {
    this.cards = cardsDefs
      .concat(cardsDefs)
      .sort(() => 0.5 - Math.random())
      .map(x => {
        return { handle: x, isFlipped: false, isMatched: false };
      });
    this.cardsCount = this.cards.length;
    this.cardsLeft = this.cardsCount;
    this.isBusy = false;
  },
  data() {
    return {
      cards: [],
      cardsCount: -1,
      cardsLeft: -1,
      first: -1,
      count: -1,
      isBusy: true
    };
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
            setTimeout(() => {
              this.cards[a].isFlipped = false;
              this.cards[b].isFlipped = false;
              this.isBusy = false;
            }, 2500);
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
        this.cardsLeft = this.cardsCount;
        this.count = -1;
        this.first = -1;
        setTimeout(() => {
          this.cards.sort(() => 0.5 - Math.random());
          this.isBusy = false;
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
.board {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 800px;
  perspective: 500px;
  margin: 20px 0;

  &.busy {
    pointer-events: none;
  }
}
@media only screen and (max-width: 800px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .board {
    width: 100vw;
  }
}
</style>
<template>
    <div class="container">
        <h2>Memory</h2>
        <div class="board" v-bind:class="{ loading }">
            <card v-for="(card, index) in cards" :key="index" :card="card" @click.native="flip(index)"></card>
        </div>
        <button v-if="cardsLeft == 0" class="btn" @click="restart">Jeszcze raz</button>
    </div>
</template>

<script>
import Card from './../components/Card'

let cards = [
    'apple',
    'banana',
    'blueberries',
    'strawberry',
    'pear',
    'lemon',
    'nut',
    'grape'
];

export default {
    components: {
        card: Card
    },
    created() {
        const c = (this.cards.concat(this.cards)).sort(() => 0.5 - Math.random());
        this.cards = c.map(x => {
            return { handle: x, isFlipped: false, isMatched: false}
        });
        this.cardsCount = this.cards.length;
        this.cardsLeft = this.cardsCount;
        this.loading = false;
    },
    data() {
        return {
            cards,
            cardsCount: -1,
            cardsLeft: -1,
            first: -1,
            count: -1,
            loading: true
        }
    },
    methods: {
        flip(idx) {
            if (!this.cards[idx].isFlipped && !this.loading) {

                this.cards[idx].isFlipped = true;
                this.count++;

                if (this.count == 0) {
                    this.first = idx;
                } else if (this.count == 1) {
                    const a = this.first;
                    const b = idx;
                    if (a != b && this.cards[a].handle == this.cards[b].handle) {
                        this.cards[a].isMatched = true;
                        this.cards[b].isMatched = true;
                        this.cardsLeft-=2;
                        // if (this.cardsLeft == 0) { console.log('win'); }
                    } else {
                        setTimeout(() => {
                            this.cards[a].isFlipped = false;
                            this.cards[b].isFlipped = false;
                        }, 3000);
                    }
                    this.count = -1;
                    this.first = -1;
                }
            }
        },
        restart() {
            if (!this.loading) {
                this.loading = true;
                this.cards.forEach(el => {
                    el.isFlipped = false;
                    el.isMatched = false;
                });
                this.cardsLeft = this.cardsCount;
                this.count = -1;
                this.first = -1;
                setTimeout(() => {
                    this.cards.sort(() => 0.5 - Math.random());
                    this.loading = false;
                }, 1000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 600px;
    margin: 0 auto;
}
.board {
    display: grid;
    width: 600px;
    height: 600px;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    perspective: 500px;
    margin: 20px 0;

    &.loading {}
}
@media only screen and (max-width: 600px) {
    .container {
        width: 100%;
        margin: 0;
    }
    .board {
        width: 100vw;
        height: 100vw;
    }
}
</style>
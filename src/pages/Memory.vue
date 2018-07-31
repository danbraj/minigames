<template>
    <div class="container">
        <h2>Memory</h2>
        <div class="board">
            <card v-for="(card, index) in cards" :key="index" :card="card"></card>
        </div>
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
        this.cards = (this.cards.concat(this.cards)).sort(() => 0.5 - Math.random());
    },
    data() {
        return {
            cards,
            pair: {
                first: '',
                second: ''
            },
            lastCardFlipped: '',
            count: 0
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
    grid-template: repeat(4, 150px) / repeat(4, 150px);
    perspective: 500px;
}
</style>
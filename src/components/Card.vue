<template>
    <div class="card" v-bind:class="{ 'flipped': isFlipped, 'matched': isMatched }" @click="flip">
        <svg class="front">
            <use :xlink:href="getPicUrl(card)"></use>
        </svg>
        <div class="back"></div>
    </div>
</template>

<script>
import svg from './../assets/owoce.svg';

export default {
    props: [
        'card'
    ],
    data() {
        return {
            isFlipped: false,
            isMatched: false
        }
    },
    methods: {
        getPicUrl(card) {
            return `${svg}#${card}`;
        },
        flip() {
            this.isFlipped = !this.isFlipped;
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    margin: 10px;
    position: relative;
    transition: transform 0.76s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.front, .back {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
}

.front {
    border: 1px solid #ccc;
    padding: 15px;
    background: beige;
}

.back {
    border: 1px solid #aaa;
    background: burlywood;
    transform: rotateY(180deg);
}

.flipped {
    transform: rotateY(180deg);
}
</style>
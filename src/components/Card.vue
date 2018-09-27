<template>
    <div class="card" v-bind:class="{ 'flipped': card.isFlipped, 'matched': card.isMatched }">
        <svg class="front">
            <use :href="getPicUrl(card.handle)"></use>
        </svg>
        <div class="back"></div>
    </div>
</template>

<script>
import svg from '@/assets/owoce.svg';

export default {
    props: [
        'card'
    ],
    methods: {
        getPicUrl(handle) {
            return `${svg}#${handle}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    margin: 10px;
    position: relative;
    transition: transform 0.33s;
    transform-style: preserve-3d;

    &.flipped {
        transform: rotateY(180deg);
    }
}

%card-side {
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
    @extend %card-side;
    border: 1px solid #ccc;
    padding: 10px;
    background: beige;
    transform: rotateY(180deg);//

    .matched > & {
        animation: out 1s normal forwards ease-in-out;
    }

    @keyframes out {
        from {opacity: 1;}
        to {opacity: 0.2;}
    }
}

.back {
    @extend %card-side;
    border: 1px solid #aaa;
    background: #cca4a3;
    cursor: pointer;
    //transform: rotateY(180deg);
}
</style>
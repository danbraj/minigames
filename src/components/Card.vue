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

$card-width: 120px !default;
$card-height: 120px !default;
$front-color: beige !default;
$front-border: #ccc !default;
$back-color: #cca4a3 !default;
$back-border: #aaa !default;

.card {
    box-sizing: border-box;
    width: $card-width;
    height: $card-height;
    margin: 8px;
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
    border: 2px solid $front-border;
    padding: 10px;
    background: $front-color;
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
    border: 2px solid $back-border;
    background: $back-color;
    cursor: pointer;
    //transform: rotateY(180deg);
}
</style>
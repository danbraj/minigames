<template>
    <div class="card" v-bind:class="{ 'card--flipped': card.isFlipped, 'card--matched': card.isMatched }">
        <Icon class="card__front" :id="card.handle"/>
        <div class="card__back"></div>
    </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
    components: {
        Icon
    },
    props: {
        card: Object
    },
}
</script>

<style scoped lang="scss">
$card-width: 120px !default;
$card-height: 120px !default;
$front-color: beige !default;
$front-border: #ccc !default;
$back-color: #cca4a3 !default;
$back-border: #aaa !default;

$card-width: 25vw;
$card-height: 25vh;

.card {
    box-sizing: border-box;
    // width: calc(#{$card-width} - .8rem);
    // height: calc(#{$card-height} - .8rem);
    // margin: .4rem;
    width: calc((100% - 8 * 5px) / 4);
    height: calc((100vh - 90px - (12 * 5px)) / 6);
    margin: 5px;
    position: relative;
    transition: transform 0.33s;
    transform-style: preserve-3d;

    @media (min-aspect-ratio: 1/1) {
        width: calc((100% - 12 * 5px) / 6);
        height: calc((100vh - 90px - (8 * 5px)) / 4);
    }
}
.card--small {
    width: calc((100% - 8 * 5px) / 4);
    height: calc((100vh - 90px - (18 * 5px)) / 9);
    @media (min-aspect-ratio: 1/1) {
        width: calc((100% - 18 * 5px) / 9);
        height: calc((100vh - 90px - (8 * 5px)) / 4);
    }
}
.card--flipped {
    transform: rotateY(180deg);
}
.card--matched {
    > .card__front {
        @keyframes out {
            from {opacity: 1;}
            to {opacity: 0.2;}
        }
        animation: out 1s normal forwards ease-in-out;
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
    // border-radius: 12px;
}
.card__front {
    @extend %card-side;
    border: 2px solid $front-border;
    padding: 6px;
    background: $front-color;
    transform: rotateY(180deg);//
}
.card__back {
    @extend %card-side;
    border: 2px solid $back-border;
    background: $back-color;
    cursor: pointer;
    //transform: rotateY(180deg);//
    animation: fadeIn 0.67s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-fill-mode: forwards;  
    opacity: 0;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}
</style>
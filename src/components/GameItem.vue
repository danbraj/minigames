<template>
    <router-link :to="game.name">
        <div class="game-item">
            <span class="title">{{ game.title }}</span>
            <span class="status">{{ game.status }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    props: [
        'game'
    ]
}
</script>

<style lang="scss" scoped>
$game-block-color: yellow !default;

a {
    box-sizing: border-box;
    text-decoration: none;
    font-weight: bold;
    color: lighten(#2c3e50, 10%);
    display: inline-block;
    height: 60px;
    width: 280px;
    margin: 10px;
    border: 6px solid $game-block-color;
    background-color: $game-block-color;

    &:hover {
        border-color: $secondary-color;
    }

    &.router-link-active {
        border-color: $secondary-color;
        background: $secondary-color;
    }
}

.game-item {
    display: inline-block;
    width: 100%;
    height: 100%;
    
    position: relative;
}

.title {
    position: absolute;
    bottom: 4px;
    left: 4px;
    font-size: 1.4em;
}

.status {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 0.76em;
}
</style>
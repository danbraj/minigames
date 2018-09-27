<template>
    <router-link :to="game.name">
        <div class="game-block">
            <p class="title">{{ game.title }}</p>
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
@import './../scss/base/variables';
a {
    text-decoration: none;
    display: inline-block;
    height: 100px;
    width: 200px;
    margin: 10px;
}

p {
    margin: 0;
    padding: 0;
}

.game-block {
    display: inline-block;
    width: 200px;
    height: 100px;
    background-color: $secondary-color;
    position: relative;
}

.title {
    position: absolute;
    bottom: 8px;
    left: 8px;
    font-size: 1.2em;
}

.status {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 0.67em;
}
</style>
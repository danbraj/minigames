<template>
    <div class="container">
        <h2>Match 3</h2>
        <div class="board" v-bind:class="{ loaded }">
            <item v-for="(item, index) in items" :key="index" :item="item"></item>
        </div>
    </div>
</template>

<script>
import Item from './../components/Item'

let itemsDefs = [
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
        item: Item
    },
    created() {
        const itemsTypes = itemsDefs.sort(() => 0.5 - Math.random()).slice(0, 5);
        const count = itemsTypes.length;
        let arr = [];
        for (let i = 0; i < 80; i++) {
            const idx = Math.floor(Math.random() * count);
            arr.push(itemsTypes[idx]);
        }
        this.items = arr.map(x => {
            return { handle: x };
        });
        this.loaded = true;
    },
    data() {
        return {
            items: [],
            loaded: false
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
.board {
    display: grid;
    grid-template: repeat(8, 1fr) / repeat(10, 1fr);
    width: 1000px;
    height: 800px;
    overflow: hidden;
}
.item {
    position: relative;
    top: -800px;
    .loaded > & {
        background-color: white;
        animation: godown 2s normal forwards cubic-bezier(0.550, 0.055, 0.675, 0.190);
        @keyframes godown {
            from {top: -800px}
            to {top: 0}
        }
    }
}
</style>

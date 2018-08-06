<template>
    <div class="container">
        <h2>Match 3</h2>
        <div class="board">
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
    },
    data() {
        return {
            items: []
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
}
</style>

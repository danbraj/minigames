<template>
    <div>
        <h2>Ustawienia</h2>
        <h3>Assety</h3>
        <div class="assets">
            <div class="asset">
                <span v-text="assets[0].name"></span>
                <div class="symbols">
                    <svg class="symbol" v-for="(symbol, index) in assets[0].symbols" :key="index">
                        <use :href="svgUrl(assets[0].url, symbol)"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fruitsAssets from '@/assets/owoce.svg';

export default {
    data() {
        return {
            assets: [
                {
                    name: 'Owoce',
                    url: fruitsAssets,
                    symbols: [
                        'apple',
                        'banana',
                        'blueberries',
                        'strawberry',
                        'pear',
                        'lemon',
                        'nut',
                        'grape',
                        'watermelon',
                        'cherry',
                        'plum',
                        'pineapple',
                        'hblueberries',
                        'happle',
                        'hnuts',
                        'hcherries',
                        'hgrape',
                        'hpineapple'
                    ]
                }
            ]
        }
    },
    methods: {
        svgUrl(url, symbol) {
            return `${url}#${symbol}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.symbol {
    width: 100px;
    height: 100px;
}
</style>

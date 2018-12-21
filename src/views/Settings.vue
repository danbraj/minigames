<template>
    <div>
        <h2>Ustawienia</h2>
        <h3>Assety</h3>
        <div class="assets">
            <div class="asset" v-for="(asset, idx) in assets" :key="idx">
                <span class="title" v-text="asset.name"></span>
                <div class="symbols" :class="{ 'active': $store.getters.currentAssetsUrl == asset.url }" v-on:click="chooseAssets(asset.url)">
                    <svg class="symbol" v-for="index in asset.symbols" :key="index">
                        <use :href="svgUrl(asset.url, index-1)"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fruitsAssets from '@/assets/owoce.svg';
import figuresAssets from '@/assets/figury.svg';

export default {
    data() {
        return {
            activeAsset: null,
            assets: [
                {
                    name: 'Owoce',
                    url: fruitsAssets,
                    symbols: 18
                },
                {
                    name: 'Figury',
                    url: figuresAssets,
                    symbols: 18
                }
            ]
        }
    },
    methods: {
        svgUrl(url, symbol) {
            return `${url}#${symbol}`;
        },
        chooseAssets(assetUrl) {
            if (assetUrl != this.$store.getters.currentAssetsUrl) {
                this.$store.commit('setAssetsUrl', assetUrl);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-weight: 700;
    line-height: 3em;
}
.symbol {
    width: 70px;
    height: 70px;

    &s {
        &:hover {
            background-color: #fcf4a3;
            cursor: pointer;
        }
    }
}
.active {
    background-color: $secondary-color;
}
.assets {
    display: flex;
    @media only screen and (max-width: 460px) {
        flex-flow: column;
    }
}
</style>

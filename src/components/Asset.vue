<template>
    <svg class="asset">
        <use :href="svgUrl"></use>
    </svg>
</template>

<script>
export default {
    props: [
        'name'
    ],
    computed: {
        svgUrl() {
            return `${this.$store.getters.currentAssetsUrl}#${this.name}`;
        }
    }
}
</script>

<style lang="scss" scoped>
$asset-width: 80px !default;
$asset-height: 80px !default;

.asset {
    box-sizing: border-box;
    width: $asset-width;
    height: $asset-height;
    margin: 6px;
    position: relative;
    transition: transform 0.33s;

    /* animacja wejścia */
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
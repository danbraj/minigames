<template>
    <svg>
        <use :href="svgUrl"></use>
    </svg>
</template>

<script>
export default {
    props: {
        id: Number
    },
    computed: {
        svgUrl() {
            return `${this.$store.getters.currentAssetsUrl}#${this.id < 18 ? this.id : this.id - 18}`;
        },
    },
}
</script>
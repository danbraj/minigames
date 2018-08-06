<template>
    <svg class="item">
        <use :href="getPicUrl(item.handle)"></use>
    </svg>
</template>

<script>
import svg from './../assets/owoce.svg';

export default {
    props: [
        'item'
    ],
    methods: {
        getPicUrl(handle) {
            return `${svg}#${handle}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    width: 100px;
    height: 100px;
}
</style>
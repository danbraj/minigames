<template>
    <div class="item">
        <svg class="item">
            <use :href="getPicUrl(item.handle)"></use>
        </svg>
        <div class="debug">{{ `(${idx}) ${item.x} / ${item.y}` }}</div>
    </div>
</template>

<script>
import svg from './../assets/owoce.svg';

export default {
    props: [
        'item', 'idx'
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
.debug {
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    font-weight: 900;
    font-size: 0.9em;
    pointer-events: none;
    user-select: none;
}
</style>
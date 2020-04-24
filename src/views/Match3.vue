<template>
  <div>
    <div class="nav">
      <div class="nav__wrapper">
        <router-link class="nav__button" to="/" tag="button" aria-label="Powrót">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#arrow-left"/>
          </svg>
        </router-link>
        <h1 class="nav__title">Match 3</h1>
        <div class="nav__panel"></div>
        <!-- <router-link class="nav__button" to="/" tag="button">Jeszcze raz</router-link>
        <router-link class="nav__button" to="/settings" tag="button">Ustawienia</router-link> -->
      </div>
    </div>
    <div class="container">
      <div class="board" v-bind:class="{ loaded }">
        <item
          v-for="(e, idx) in items"
          :key="idx"
          :idx="idx"
          :item="e"
          v-bind:style="{ left: px(e.x*100), top: px(e.y*100) }"
          @click.native="del(idx)"
        ></item>
        <!-- v-if="e != null"  -->
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";

const svgDefs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const itemsTypes = svgDefs.sort(() => 0.5 - Math.random()).slice(0, 5);
const count = itemsTypes.length;

export default {
  components: {
    item: Item
  },
  created() {
    let arr = [];
    let x = 0,
      y = 0;
    for (let i = 0; i < 80; i++) {
      const idx = Math.floor(Math.random() * count);
      arr.push({
        handle: itemsTypes[idx],
        x,
        y
      });
      x++;
      if (i % 10 == 9) {
        y++;
        x = 0;
      }
    }
    this.items = arr;
    this.loaded = true;
  },
  data() {
    return {
      items: [],
      loaded: false
    };
  },
  methods: {
    del(idx) {
      console.log(idx);
      const x = idx % 10; // this.items[idx].x
      const y = Math.floor(idx / 10); // this.items[idx].y

      // console.log(x, y);
      let prev;
      for (let i = y; i >= 0; i--) {
        const index = x + i * 10;
        if (i < y) {
          this.items[prev] = this.items[index];
          this.items[prev].y++; //+2
        }
        if (i == 0) {
          this.$set(this.items, index, {
            handle: itemsTypes[Math.floor(Math.random() * count)],
            x: index,
            y: 0 //+1
          });
        }
        prev = index;
      }
    },
    px(value) {
      return `${value}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
.board {
  position: relative;
  width: 1000px;
  height: 800px;
  overflow: hidden;
  margin-top: 40px;
}
.item {
  position: absolute;
  top: 0px;
  transition: top 0.33s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  // .loaded > & {
  //     background-color: white;
  //     animation: godown 2s normal forwards cubic-bezier(0.550, 0.055, 0.675, 0.190);
  //     @keyframes godown {
  //         from {top: -800px}
  //         to {top: 0}
  //     }
  // }
}
</style>

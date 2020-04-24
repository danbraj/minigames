<template>
  <div class="board" v-on:keydown="handleKey" tabindex="0" v-bind:style="{ width: `${cols * cell}px`, height: `${rows * cell}px` }">
    <div v-for="(row, rowIndex) in rows" :key="rowIndex">
      <div v-for="(col, colIndex) in cols" :key="colIndex"  class="cell" v-bind:class="customClass(rowIndex, colIndex)"></div>
    </div>
    {{ count }}
  </div>
</template>

<script>
import { rows, cols, cell, bodyIndex, foodIndex } from '@/data/games/snake/constants.js';

export default {
  props: [
    'board', 'count', 'handleKey'
  ],
  data() {
    return {
      rows,
      cols,
      cell
    };
  },
  watch: { 
    board: function(newVal, oldVal) { // watch it
      console.log('prop "board" changed: ', newVal, ' (old: ', oldVal, ')');
    }
  },
  computed: {

  },
  methods: {
    customClass(row, col) {
      const value = this.board[(cols * row) + col];
      return value == bodyIndex ? 'cell--body' : value == foodIndex ? 'cell--food' : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  margin: auto;
  background: #eee;
  border: 2px solid $primary-color;
}
.cell {
  width: 40px;
  height: 40px;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
}
.cell--body {
  background-color: #1B325F;
}
.cell--food {
  background-color: #9CC4E4;
}
</style>
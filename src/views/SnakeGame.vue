<template>
  <div class="snake">
    <div class="nav">
      <div class="nav__wrapper">
        <router-link class="nav__button" to="/" tag="button">Powrót</router-link>
        <h1 class="nav__title">Snake game</h1>
        <router-link class="nav__button" to="/about" tag="button">Informacje</router-link>
        <router-link class="nav__button" to="/settings" tag="button">Ustawienia</router-link>
        <button class="nav__button" @click="nextFrame">Test</button>
      </div>
    </div>
    <div class="game">
      <Cells :board="board" :count="count" :handleKey="handleKey"/>
    </div>
  </div>
</template>

<script>
import Cells from '@/components/Snake/Cells';
import { rows, cols, startCell, bodyIndex, foodIndex, keys, dirs } from '@/data/games/snake/constants.js';

export default {
  components: {
    Cells
  },
  data() {
    return {
      difficulty: 0,
      board: [],
      snake: [],
      direction: null,
      nextDirection: null,
      gameOver: false,

      count: 0,
    };
  },
  created() {
    this.start();
  },
  methods: {
    start() {
      const board = [];
      const snake = [startCell];
      board[startCell] = bodyIndex;

      this.board = board;
      this.snake = snake;
      this.direction = keys.down;
      this.nextFrame();
    },
    nextFrame() {
      const head = this.getNextIndex(this.snake[0], this.direction);
      // console.log('expected actual: ', head, '; previous: ', this.snake[0]);
      this.count = head;

      if (this.snake.indexOf(head) !== -1) {
        this.gameOver = true;
        return;
      }

      const food = this.board[head] === foodIndex || this.snake.length === 1;
      if (food) {
        const maxCells = rows * cols;
        let i;
        do {
          i = Math.floor(Math.random() * maxCells)
        }
        while(this.board[i])
        this.board[i] = foodIndex;
      } else {
        this.board[this.snake.pop()] = null;
      }
      
      this.board[head] = bodyIndex;
      this.snake.unshift(head);

      if (this.nextDirection) {
        this.direction = this.nextDirection;
        this.nextDirection = null;
      }

      setTimeout(this.nextFrame, 100);
    },
    getNextIndex(head, direction) {
      let x = head % cols;
      let y = Math.floor(head / cols);
      switch (direction) {
        case keys.up: y = y <= 0 ? rows - 1 : y - 1; break;
        case keys.down: y = y >= rows ? 0 : y + 1; break;
        case keys.left: x = x <= 0 ? cols - 1 : x - 1; break;
        case keys.right: x = x >= cols - 1 ? 0 : x + 1; break;
        default: break;
      }
      // console.log(head, x, y)
      return (cols * y) + x;
    },
    handleKey(event) {
      const direction = event.keyCode;
      // console.log(direction);
      const diff = Math.abs(this.direction - direction);
      if (dirs[direction] && diff !== 0 && diff !== 2) {
        this.nextDirection = direction;
      }
    },
    restart() {
      
    },
    setDifficulty() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  margin-top: 20px;
}
</style>
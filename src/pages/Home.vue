<template>
    <div class="container">
        <h2>Home</h2>
        <game-item v-for="(game, index) in minigames" :key="index" :game="game"></game-item>
    </div>
</template>

<script>
import GameItem from './../components/GameItem';

export default {
    components: {
        'game-item': GameItem
    },
    data() {
        return {
            minigames: [
                {
                    name: 'memory',
                    title: 'Memory',
                    description: 'Memory game',
                    status: ''
                },
                {
                    name: 'match3',
                    title: 'Match 3',
                    description: 'Match 3 puzzle game',
                    status: 'Inprogress'
                },
                {
                    name: '/',
                    title: '',
                    description: '..',
                    status: 'Coming soon'
                }
            ]
        }
    }
}
</script>

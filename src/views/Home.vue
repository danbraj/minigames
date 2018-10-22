<template>
    <div class="container">
        <game-item v-for="(game, index) in minigames" :key="index" :game="game"></game-item>
    </div>
</template>

<script>
// @ is an alias to /src
import GameItem from '@/components/GameItem';

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
                // {
                //     name: 'match3',
                //     title: 'Match 3',
                //     description: 'Match 3 puzzle game',
                //     status: 'Inprogress'
                // },
                {
                    name: 'playground',
                    title: 'Playground',
                    description: '..',
                    status: 'Coming soon'
                }
            ]
        }
    }
}
</script>

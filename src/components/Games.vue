<template>
    <div class="games">
        <!-- <h2>Lista gier</h2> -->

        <game-item v-for="(game, index) in minigames" :key="index" :game="game"></game-item>
        
        <router-link class="settings" v-if="this.$route.name != 'settings'" to="/settings">Ustawienia</router-link>
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
                    name: 'repeat',
                    title: 'Repeat Game',
                    description: 'Repeat game',
                    status: 'Inprogress'
                },
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

<style lang="scss" scoped>
.games {
    padding: 30px 0;
    
    @media only screen and (min-width: 1800px) {
        position: absolute;
        left: 900px;
    }
}

.settings {
    position: absolute;
    bottom: -40px;
    display: block;
    text-align: center;
    width: 100%;

    @media only screen and (min-width: 1800px) {
        position: static;
        margin-top: 20px;
    }
}
</style>

<template>
  <div id="app">
    <GameSetup :setGame="setGame" v-if="!this.game.isStarted" />

    <DiceStats 
        v-if="this.game.isStarted"
        :player1="this.player1"
        :player2="this.player2"
        :diceRolls="this.diceRolls"
        :game="this.game"/>
  </div>
</template>

<script>
const DiceRolls= {
    TWO_PLUS:"2+",
    THREE_PLUS:"3+",
    FOUR_PLUS:"4+",
    FIVE_PLUS:"5+",
    SIX_PLUS:"6+"
};
import DiceStats from "./components/DiceStats.vue";
import GameSetup from "./components/GameSetup.vue";
export default {
    name: "App",
    components: {
        DiceStats,
        GameSetup
    },
    data() {
        return {
            game: {
                name: "",
                isStarted:false
            },
            player1: {
                name: ""
            },
            player2: {
                name: ""
            },
            diceRolls: []
        };
    },
    methods: {
        setGame(player1, player2,gameName) {
            this.player1.name = player1;
            this.player2.name = player2;
            this.diceRolls = this.initDice();
            this.game.name = gameName;
            this.game.isStarted = true;
        },
        initDice(){
            return [
                {
                    rollType: DiceRolls.TWO_PLUS,
                    averageRate: 5/6,
                    player1:{
                        pass: 0,
                        fail: 0
                    },
                    player2:{
                        pass: 0,
                        fail: 0
                    }
                },
                {
                    rollType: DiceRolls.THREE_PLUS,
                    averageRate: 4/6,
                    player1:{
                        pass: 0,
                        fail: 0
                    },
                    player2:{
                        pass: 0,
                        fail: 0
                    }
                },
                {
                    rollType: DiceRolls.FOUR_PLUS,
                    averageRate: 3/6,
                    player1:{
                        pass: 0,
                        fail: 0
                    },
                    player2:{
                        pass: 0,
                        fail: 0
                    }
                },
                {
                    rollType: DiceRolls.FIVE_PLUS,
                    averageRate: 2/6,
                    player1:{
                        pass: 0,
                        fail: 0
                    },
                     player2:{
                        pass: 0,
                        fail: 0
                    }
                },
                {
                    rollType: DiceRolls.SIX_PLUS,
                    averageRate: 1/6,
                    player1:{
                        pass: 0,
                        fail: 0
                    },
                    player2:{
                        pass: 0,
                        fail: 0
                    }
                },
            ]
        }
    },
    mounted: function () {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple", {
        method: "get",
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            this.questions = jsonData.results;
        });
    },
};
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

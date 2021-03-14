<template>
  <div id="app">
    <GameSetup :setGame="setGame" 
        :continueGame="continueGame"
        v-if="!this.game.isStarted" />

    <DiceStats 
        v-if="this.game.isStarted"
        :player1="this.player1"
        :player2="this.player2"
        :diceRolls="this.diceRolls"
        :game="this.game"/>
  </div>
</template>

<script>

import DiceStats from "./components/DiceStats.vue";
import GameSetup from "./components/GameSetup.vue";
import Constants from "./Constants.js";
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
            this.$cookies.set(Constants.COOKIES.DICE_STATS, JSON.stringify(this.diceRolls));
            this.$cookies.set(Constants.COOKIES.GAME_NAME, gameName);
            this.$cookies.set(Constants.COOKIES.PLAYERS, [player1,player2])
        },
        continueGame(){
            let dices = this.$cookies.get(Constants.COOKIES.DICE_STATS);
            let playersCookies = this.$cookies.get(Constants.COOKIES.PLAYERS);
            let gameName =  this.$cookies.get(Constants.COOKIES.GAME_NAME);
            let players = playersCookies.split(',');
            this.player1.name = players[0];
            this.player2.name = players[1];
            this.diceRolls = JSON.parse(dices);
            this.game.name = gameName;
            this.game.isStarted = true;
        },
        initDice(){
            return [
                {
                    rollType: Constants.DICE_ROLLS.TWO_PLUS,
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
                    rollType: Constants.DICE_ROLLS.THREE_PLUS,
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
                    rollType: Constants.DICE_ROLLS.FOUR_PLUS,
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
                    rollType: Constants.DICE_ROLLS.FIVE_PLUS,
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
                    rollType: Constants.DICE_ROLLS.SIX_PLUS,
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
                {
                    rollType: Constants.DICE_ROLLS.FOUR_INVUL,
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
            ]
        }
    },
    mounted: function () {
       
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

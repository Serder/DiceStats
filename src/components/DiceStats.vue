<template>
<div>
    <h1> Find out if your roll sucks </h1>
    <h2> {{ game.name }} </h2>
    <div class="container grid">
        <!-- Header -->
        <div class="row header" >
            <div class="col-md-5">
                <h3>{{ player1.name }}</h3>
                <div class="container-fluid">
                    <div classs="row">
                        <div class="col-md-6">
                            PASS
                        </div>
                        <div class="col-md-">
                            FAIL
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                ROLLS
            </div>
            <div class="col-md-5">
                <h3>{{ player2.name}}</h3>
                <div class="container-fluid">
                    <div classs="row">
                        <div class="col-md-6">
                            PASS
                        </div>
                        <div class="col-md-">
                            FAIL
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- Content -->
        <div class="row rollRow row-striped" v-for="roll in diceRolls" :key="roll.rollType">
            <div class="col-md-5">
                <RollCount 
                    :rollType="roll.rollType"
                    :playerRoll="roll.player1"
                    :updateCookie="updateCookie"/>
            </div>
            <div class="col-md-2 middleBorders">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 justify-content-center">
                            <SuccessRate
                                :averageSuccess="roll.averageRate"
                                :playerFail="roll.player1.fail"
                                :playerPass="roll.player1.pass"
                                />
                        </div>
                        <div class="col-md-4 justify-content-center">
                                {{ roll.rollType }}
                        </div>
                        <div class="col-md-4 justify-content-center">
                              <SuccessRate
                                :averageSuccess="roll.averageRate"
                                :playerFail="roll.player2.fail"
                                :playerPass="roll.player2.pass"
                                />
                        </div>
                    </div>
                </div>
              
            </div>
            <div class="col-md-5">
                <RollCount 
                    :rollType="roll.rollType"
                    :playerRoll="roll.player2"
                    :updateCookie="updateCookie"/>
            </div>
        </div>
        <!-- Functions -->
        <div class="row" style="padding-top:25px;">
            <div class="col-md-1">
                <input type="button" value="Save to File" @click="saveFile" />
            </div>
             <div class="col-md-1">
                <input type="button" value="Finish Game" @click="finishGame" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RollCount from "./RollCount.vue";
import SuccessRate from "./SuccessRate.vue";
import Constants from "../Constants.js";

export default {
    props: {
        game: Object,
        player1: Object,
        player2: Object,
        diceRolls: Array
    },
     components: {
        RollCount,
        SuccessRate
    },
    data(){
       return{

       }
    },
    computed: {
      
    },
    watch: {
      
    },
    methods:{
        updateCookie: function(){
              this.$cookies.set(Constants.COOKIES.DICE_STATS, JSON.stringify(this.diceRolls));
        },
        saveFile: function() {
            let data = JSON.stringify(this.diceRolls);
            let file = new Blob([data], {type: 'application/json'});

            let a = document.createElement("a"),
            url = URL.createObjectURL(file);
            a.href = url;
            a.download = this.game.name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        },
        finishGame: function(){
            this.saveFile();
            this.$cookies.remove(Constants.COOKIES.DICE_STATS);
            this.$cookies.remove(Constants.COOKIES.PLAYERS);
            this.$cookies.remove(Constants.COOKIES.GAME_NAME);
            this.game.isStarted = false;
        }
    }
}
</script>

<style scoped>
.rollRow{
    padding-top:10px;
    padding-bottom:10px;
}
.col-md-4{
    padding-right:0px;
    padding-left:0px;
}
.col-md-5{
    padding-right:0px;
    padding-left:0px;
}
.row-striped:nth-of-type(odd){
  background-color: #c4c4c4;
}
.header{
    font-weight: bold;
    background-color:#a8a8a8;
}
.middleBorders{
    border-right:3px solid #000;
    border-left:3px solid #000;
}
</style>
<template>
    <div class="">
        <h1> Find out if your roll sucks </h1>
        <form
           @submit="setGame(player1,player2,gameName)" >
            <div class="container" >
                <div class="row">
                    <div class="col-md-6" v-bind:class="{'align-self-center': !this.showContinue}">
                        <div class="padding">
                            <input type="text" v-model="gameName" placeholder="Game Name" required/>
                        </div>
                        <div class="padding">
                            <input type="text" v-model="player1" placeholder="Player 1 Name" required/>
                        </div>
                        <div class="padding">
                            <input type="text" v-model="player2" placeholder="Player 2 Name" required/>
                        </div>
                         <div>
                            <input type="submit"  value="Start Game"/>
                        </div>
                    </div>
                    <div class="col-md-6" v-bind:class="{'hide': !this.showContinue}">
                        <div class="padding">
                            <label>GAME: </label>
                        <label>{{ this.oldGameName }}</label>
                        </div>
                        <div class="padding">
                            <label>Player 1: </label>
                            <label>{{ this.oldPlayer1 }}</label>
                        </div>
                        <div class="padding">
                            <label>Player 2: </label>
                            <label>{{ this.oldPlayer2 }}</label>
                        </div>
                        <div>
                            <input type="button" @click="continueGame" value="Continue Game" 
                                />
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    </div>
</template>

<script>
import Constants from "../Constants.js";
export default {
    name: 'GameSetup',
    props:{
        setGame:Function,
        continueGame:Function
    },
    data(){
        return{
            player1:"",
            player2:"",
            gameName:"",
            oldPlayer1:"",
            oldPlayer2:"",
            oldGameName:"",
        };
    },
    watch:{
        
    },
    computed:{
        showContinue: function(){
            let dices = this.$cookies.get(Constants.COOKIES.DICE_STATS);
            let players = this.$cookies.get(Constants.COOKIES.PLAYERS);
            let gameName =  this.$cookies.get(Constants.COOKIES.GAME_NAME);
            if(dices && players && gameName){
                return true;
            } else{
                return false;
            } 
        }
    },
    mounted:function(){
        
        let dices = this.$cookies.get(Constants.COOKIES.DICE_STATS);
        let playersCookies = this.$cookies.get(Constants.COOKIES.PLAYERS);
        let gameName =  this.$cookies.get(Constants.COOKIES.GAME_NAME);
        if(dices && playersCookies && gameName){
            let players = playersCookies.split(',');
            this.oldPlayer1 = players[0];
            this.oldPlayer2 = players[1];
            this.oldGameName = gameName;
        } 
        
    },
   
}
</script>

<style scoped>
.padding{
    padding-bottom: 15px;
}

.hide{
    display:none;
}
</style>
<template>
    <div class="">
        <h1> Find out if your roll sucks </h1>

        <div class="" >
            <div class="">
                <input type="text" v-model="player1" placeholder="Player 1 Name" required/>
            </div>
            <div class="">
                <input type="text" v-model="player2" placeholder="Player 2 Name" required/>
            </div>
        </div> 
        <div>
            <input type="submit" @click="setGame(player1,player2)" value="Start Game"/>
        </div>
    </div>
 
</template>

<script>

export default {
    name: 'GameSetup',
    props:{
        setGame:Function
    },
    data(){
        return{
            player1:"",
            player2:"",
        };
    }
}
</script>
<template>
    <div class="">
        <h1> Find out if your roll sucks </h1>
        <form
           @submit="setGame(player1,player2,gameName)" >
            <div class="" >
                <div class="">
                    <input type="text" v-model="gameName" placeholder="Game Name" required/>
                </div>
                <div class="">
                    <input type="text" v-model="player1" placeholder="Player 1 Name" required/>
                </div>
                <div class="">
                    <input type="text" v-model="player2" placeholder="Player 2 Name" required/>
                </div>
            </div> 
            <div>
                <input type="submit"  value="Start Game"/>
            </div>
        </form>
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
            gameName:""
        };
    }
}
</script>
<template>
    <div>
        <label v-bind:class="{ 'red': isUnderAverage}">{{ playerSuccess }}%</label> <br/>
        <label v-bind:class="{ 'red': isUnderAverage, 'hidden': total==0}">{{ deltaRoll }}</label>
    </div>
</template>

<script>

export default {
    props: {
        averageSuccess: Number,
        playerPass: Number,
        playerFail: Number
    },
    
    data(){
       return {

       }
    },
    computed: {
        total: function(){
            return this.playerPass + this.playerFail;
        },
        averageRoll:function(){
            let total = this.playerPass + this.playerFail;
            let averageSuccessRolls = Math.floor(total * this.averageSuccess);
            return averageSuccessRolls;
        },
        playerSuccess: function(){
            let total = this.playerPass + this.playerFail;
            if(total == 0)
                return 100;
            else
                return Math.round(this.playerPass / total*100);
        },
        isUnderAverage: function(){
            if(this.playerSuccess < Math.round(this.averageSuccess*100))
                return true;
            return false;
        },
        deltaRoll: function(){
            let total = this.playerPass + this.playerFail;
            let averageSuccessRolls = Math.floor(total * this.averageSuccess);
            let delta = this.playerPass - averageSuccessRolls;
           
            if(this.isUnderAverage){

                return delta;
            }else{
                return "+" + delta;
            }
        
        }
    },
    watch: {
       
    },
    methods:{
      
    }
}
</script>

<style scoped>
label{
    color:green;
}
.red{
    color: #c9123a;
}
.col-md-3{
    padding-right:0px;
    padding-left:0px;
}
.hidden{
    display:none;
}
</style>
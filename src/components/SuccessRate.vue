<template>
    <div class="col-md-3">
        <label v-bind:class="{ 'red': isUnderAverage}">{{ playerSuccess }}%</label>
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
        playerSuccess: function(){
            let total = this.playerPass + this.playerFail;
            if(total == 0)
                return 0;
            else
                return Math.round(this.playerPass / total*100);
        },
        isUnderAverage: function(){
            if(this.playerSuccess < Math.round(this.averageSuccess*100))
                return true;
            return false;
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
</style>
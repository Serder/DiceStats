<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="col-md-3">
                    <input type="number" v-model.number="decreasePass" />
                </div>
                <div class="col-md-6">
                    <input type="button" value="-" @click="pass = false">
                    <label>{{ pass }}</label>
                    <input type="button" value="+" @click="pass = true">
                </div>
                <div class="col-md-3">
                    <input type="number" v-model.number="increasePass"/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-md-3">
                    <input type="number" v-model.number="decreaseFail" />
                </div>
                <div class="col-md-6">
                    <input type="button" value="-" @click="fail = false">
                    <label>{{ fail }}</label>
                    <input type="button" value="+" @click="fail = true">
                </div>
                <div class="col-md-3">
                    <input type="number" v-model.number="increaseFail"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        playerRoll: Object,
      
    },
    
    data(){
        return{
            increasePass:0,
            increaseFail:0,
            decreasePass:0,
            decreaseFail:0
        }
    },
    computed: {
       pass: {
           get: function(){
                return this.playerRoll.pass;
           },
           set: function(isIncrement){
               var moveBy=0;
               if(isIncrement){
                    if(this.increasePass){
                        moveBy = this.increasePass;
                        this.increasePass=0;
                    }
                    if(moveBy> 0) 
                            this.playerRoll.pass += moveBy ;
                        else 
                            this.playerRoll.pass++;
               }else{
                    if(this.decreasePass){
                        moveBy = this.decreasePass;
                        this.decreasePass =0;
                    }
                        
                    if(this.playerRoll.pass <=0 || (this.playerRoll.pass- moveBy) <= 0)
                         this.playerRoll.pass=0;
                    else
                        if(moveBy> 0) 
                            this.playerRoll.pass -= moveBy ;
                        else 
                            this.playerRoll.pass--;
               }
           }
       },
       fail: {
           get: function(){
               return this.playerRoll.fail;
           },
           set: function(isIncrement){
            var moveBy=0;
               if(isIncrement){
                    if(this.increaseFail){
                        moveBy = this.increaseFail;
                        this.increaseFail=0;
                    }
                    
                    if(moveBy> 0) 
                            this.playerRoll.fail += moveBy ;
                        else 
                            this.playerRoll.fail++;
               }else{
                    if(this.decreaseFail){
                        moveBy = this.decreaseFail;
                        this.decreaseFail =0;
                    }
                        
                    if(this.playerRoll.fail <=0 || (this.playerRoll.fail - moveBy) <= 0)
                        this.playerRoll.fail=0;
                    else{
                        if(moveBy> 0) 
                            this.playerRoll.fail -= moveBy ;
                        else 
                            this.playerRoll.fail--;
                    }
               }
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
input[type=number]{
    width: 100%;
    
} 
.col-md-3{
    padding-right:5px;
    padding-left:5px;
}
.col-md-6{
    padding-right:5px;
    padding-left:5px;
}
label{
    padding-right:10px;
    padding-left:10px;
}
input[type=button]{
    width:30px;
}
</style>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="col-md-2">
                    <input type="button" value="-" @click="pass = false"/>
                </div>
                <div class="col-md-3 justify-content-center">
                    <label>{{ pass }}</label>
                </div>
                <div class="col-md-7">
                    <input type="button" value="+" @click="pass = true" class="buttonMargin"/>
                    <input type="button" value="5" @click="Add(true,5)" class="buttonMargin"/>
                    <input type="button" value="10" @click="Add(true,10)" class="buttonMargin"/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-md-2">
                    <input type="button" value="-" @click="fail = false"/>
                </div>
                <div class="col-md-3 justify-content-center">
                    <label>{{ fail }}</label>
                </div>
                <div class="col-md-7">
                    <input type="button" value="+" @click="fail = true"/>
                    <input type="button" value="5" @click="Add(false,5)" class="buttonMargin"/>
                    <input type="button" value="10" @click="Add(false,10)" class="buttonMargin"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        playerRoll: Object,
        updateCookie:Function
    },
    
    data(){
        return{
            increasePass:0, 
            increaseFail:0, 
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
                    if(this.playerRoll.pass <=0) 
                         this.playerRoll.pass=0; 
                    else 
                        this.playerRoll.pass--; 
                } 
                this.updateCookie();
           }
       },
       fail: {
           get: function(){
               return this.playerRoll.fail;
           },
           set: function(isIncrement){
                let moveBy=0;
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
                    if(this.playerRoll.fail <=0)
                        this.playerRoll.fail=0;
                    else{
                        this.playerRoll.fail--;
                    }
                }
                this.updateCookie();
           }
       }
    },
    watch: {
       
    },
    methods:{
        Add:function(isPass,addBy){
            if(isPass){
                this.increasePass=addBy;
                this.pass = true;
            }else{
                this.increaseFail=addBy;
                this.fail = true;
            }
        }
    }
}
</script>

<style scoped>
input[type=number]{
    width: 100%;
    
} 
.col-md-2{
    padding-right:5px;
    padding-left:5px;
}
.col-md-4{
    padding-right:5px;
    padding-left:5px;
}
.col-md-7{
    padding-right:5px;
    padding-left:5px;
}
.buttonMargin{
    margin-right:2px;
    margin-left:2px;
}
label{
    padding-right:10px;
    padding-left:10px;
}
input[type=button]{
    width:30px;
}
</style>
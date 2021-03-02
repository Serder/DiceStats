<template>
<div>
     <h1> Find out if your roll sucks </h1>

    <div class="container">
       
        <!-- Header -->
        <div class="row" >
            <div class="col-md-5">
                {{ player1.name }}
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
                {{ player2.name}}
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
        <div class="row" v-for="roll in diceRolls" :key="roll.rollType">
            <div class="col-md-5">
               <RollCount 
                :playerRoll="roll.player1"/>
            </div>
            <div class="col-md-2">
                {{ roll.rollType }}
            </div>
            <div class="col-md-5">
                 <RollCount 
                :playerRoll="roll.player2"/>
            </div>
        </div>
        <!-- Functions -->
        <div class="row">
            <div class="col-md-1">
                <input type="button" value="Save to File" @click="saveFile" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RollCount from "./RollCount.vue";
export default {
    props: {
        game: Object,
        player1: Object,
        player2: Object,
        diceRolls: Array
    },
     components: {
        RollCount
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
        saveFile: function() {
            const fs = require("fs");

            let cars = [
            {
                Name: "chevrolet chevelle malibu",
                Miles_per_Gallon: 18,
                Cylinders: 8,
                Displacement: 307,
                Horsepower: 130,
                Weight_in_lbs: 3504,
                Acceleration: 12,
                Year: "1970-01-01",
                Origin: "USA"
            },
            {
                Name: "buick skylark 320",
                Miles_per_Gallon: 15,
                Cylinders: 8,
                Displacement: 350,
                Horsepower: 165,
                Weight_in_lbs: 3693,
                Acceleration: 11.5,
                Year: "1970-01-01",
                Origin: "USA"
            }
            ];
            cars.forEach(car => {
            car.price = 12000;
            });

            let data = JSON.stringify(cars);
            fs.writeFileSync("data.json", data);
            log(fs.file)
        }
    }
}
</script>
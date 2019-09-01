<template>
    <header class="div-filter">
        <div>
            <img id="ALLButtonImg" alt="ALL" src="@/assets/world.png">
            <button class="mytext">ALL</button>
            
        </div>
        <div>
            <img id="EURButtonImg" alt="Currency" src="@/assets/europe.png">
            <button v-on:click="filtering" class="mytext">EUR</button>
        </div>
        <div>
            <img id="JPYButtonImg" alt="Currency" src="@/assets/japan.png">
            <button class="mytext">JPY</button>
        </div>
        <div>
            <img id="USDButtonImg" alt="Currency" src="@/assets/usa.png">
            <button class="mytext" v-on:click="filtering">USD</button>
        </div>
    </header>
</template>

<script>
    import Divisas from '@/components/Divisas.vue';

    export default {
        name: "DivFilter",
        components: {
            Divisas
        },
        methods:{
            filtering: function(){
                
                console.log(Divisas.data.filter)
            }
        }   
    };



</script>

<style scoped>

.div-filter{
    float: left;
    width: 30px;
    height: 0px;
    position: absolute;
    top: 27.5%;
    left: 25%;
    transform: translateY(-50%);
}
.mytext{
    float: left;
    position: relative;
    width: 100px;
    height: 50px;
    
    left: 0%;
    transform: translateY(-80%);

    border: none;
    background: none;
    cursor: pointer;
    outline: none;

    font-family: open Sans Condensed;
    font-size: 20px;
    color: #BDBDBD;
    font-weight: bold;
    align-items: center;
    letter-spacing: 0.15px;
}

</style>
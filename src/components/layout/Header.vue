<template>
    <header class="header">
        <div class="row">
            <div class="column" style="background-color:#aaa;">
                <img id="ets_logo" alt="ETS logo" src="@/assets/logo-1.png">
                <router-link to="/">Home</router-link>
                <router-link to="/filterCurrency">filterCurrency</router-link>
                <router-link to="/filterFamilyRisk">filterFamilyRisk</router-link>
            </div>
            <div class="column" style="background-color:#bbb;">
                <p>Some text..</p>
            </div>
            <div class="column" style="background-color:#ccc;">
                <home/>
            </div>
        </div>
    </header>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
    name: "Header",
    components: {
    Home
  },
}
</script>

<style scoped>

    .header{
        background: #fff;
        color: #333;
        text-align: left;
        padding-top: 31px;
        padding-left: 24px;
        
    }
    .header a {
        color: #333;
        padding-right: 5px;
        text-decoration: none;
    }
    


    /* Create three unequal columns that floats next to each other */
    .column {
    float: left;
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
    }

    .left, .middle {
    width: 250px;
    }

    .right {
    width: 500px;
    }

    /* Clear floats after the columns */
    .row:after {
    content: "";
    display: table;
    clear: both;
    }

</style>
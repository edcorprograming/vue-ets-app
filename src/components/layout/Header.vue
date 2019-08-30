<template>
    <header class="header">
        <img id="ets_logo" alt="ETS logo" src="@/assets/logo-1.png">
        <router-link to="/">Home</router-link>
        <router-link to="/filterCurrency">filterCurrency</router-link>
        <router-link to="/filterFamilyRisk">filterFamilyRisk</router-link>
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


</style>
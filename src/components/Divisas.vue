<template>
    <div id="divisas">
         <div class="row max-height">
            <h1 class="divisas-title">ETS FUNDS</h1>
            <router-link class="row-container" :to="{name: 'displayPage', params: {id: object.id}}" v-for="object in myData" :key="object.id">
                <div class="row divisas-row">
                    <div class="divisas-text col-md-6 header-s">{{object.name}}</div>
                    <div class="divisas-text col-md-3 col-6 paragraph-s">{{object.currency}}</div>
                    <div class="divisas-text col-md-3 col-6 paragraph-s">{{object.risk_family}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'divisas',
        props: {
            myData: Array,

        },
        data() 
        {
            return {

            }
        },
        computed: {

        }
    }
</script>

<style scoped>

 

</style>
<template>
    <div id="divisas">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Risk Family</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="object in myData" :key="object.id">
                    <td>{{object.name}}</td>
                    <td>{{object.risk_family}}</td>
                </tr>
            </tbody>
        </table>
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
        methods: {
               
                
        }
    }
</script>

<style scoped>

</style>
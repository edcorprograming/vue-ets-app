<template>
    <div id="divisas">
        <table>
            <thead>
                <p>ETS FUNDS</p>
                    <button v-on:click="filter = !filter">load data</button>
            </thead>
            <tbody>
                <tr class="boxnames" v-for="object in filterByCurrency" :key="object.id" >
                    <td class="names">{{object.name}}</td>
                    <td class="names">Currency {{object.currency}}</td>
                    <td class="names">Family Risk {{object.risk_family}}</td>
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
                filter: false,
            }
        },
        computed: {
            filterByCurrency(){
                var newData = []
                if(this.filter){
                    for(var i=0; i< this.myData.length; i++){
                        if(this.myData[i].currency === "EUR")
                        {
                            newData.push(this.myData[i])
                        }
                    }
                    return newData
                }
                else{
                    return this.myData
                }

            }, 
            reversedList(){
                return this.myData.reverse()
            }
        }
    }
</script>

<style scoped>

    .boxnames{
        padding-top: 10px;
        padding-bottom: 10px;
        background-color:#F2F2F2;
    }

    .names{
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>
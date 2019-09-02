<template>

    <div class="row max-height">
        <div class="row-header">
          <router-link to='/'>Home</router-link>
          <router-link :to="{name: 'displayPage', params: {id: prevId}}">Patrá</router-link>
          <router-link :to="{name: 'displayPage', params: {id: nextId}}">Palante</router-link>
          ID is: {{ $route.params.id }}
        </div>
        <div class="col-md-5" style="background:#F2F2F2">
          <canvas id="planet-chart"></canvas>
        </div>
        <div class="col-md-7" >
          <p>Name</p>
          <p>{{myData.name}}</p>
          <p>Currency</p>
          <p>{{myData.currency.name}}</p>
          <p>Issuer</p>
          <p>{{myData.issuer.name}}</p>
          <p>Region</p>
          <p>{{myData.region.name}}/{{myData.region.region_level2.name}}/{{myData.region.region_level2.region_level3.name}}</p>
          <p>Risk Family</p>
          <p>{{myData.risk_family.name}}</p>
          <p>Sector</p>
          <p>{{myData.sector.name}}</p>
        </div>
    </div>
</template>


<script>
import Chart from 'chart.js';
import planetChartData from '../chart-data.js';

export default {
    data()
  {
    return{
      myData:[
        
      ],
      nextId: "",
      prevId: "",
      nextName: "",
      prevName: "",
      planetChartData: planetChartData,
    }
  },

  mounted()
  {
      this.getSymbols(),
      this.createChart('planet-chart', this.planetChartData)
  },
 
  methods:
  {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    })
  },
 
  async getSymbols() 
    {
      try {
        const response = await fetch('http://jsonstub.com/' + this.$route.params.id, {
        headers: { 'Content-type' : 'application/json',
                   'JsonStub-User-Key': '6fe1470b-4310-4998-bc11-969c53fd512e',
                   'JsonStub-Project-Key': '31597c40-92cb-429a-8394-9cff99a51925'}
        })
        const data = await response.json()
        this.myData = data
        this.loadIds()
      } catch (error) {
        console.error(error)
      }

    },
    async loadIds(){
        try {
            var controlVar = ""
            var idArray = [controlVar].concat(atob(localStorage.getItem("ids")).split("/"));
            var namesArray = [controlVar].concat(atob(localStorage.getItem("names")).split("/"));
            console.log(idArray)
            for(let i = 0; i< idArray.length; i++){
                if(idArray[i] == this.$route.params.id){
                    this.prevId = idArray[i-1]
                    this.nextId = idArray[i+1]
                    this.prevName = namesArray[i-1]
                    this.nextName = namesArray[i+1]
                }
            }
      } catch (error) {
        console.error(error)
      }
    }
  },
  watch:{
      '$route' (to){
        this.loadIds()
        this.getSymbols()
      }
  }
}
</script>
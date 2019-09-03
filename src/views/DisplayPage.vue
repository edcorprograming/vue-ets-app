<template>
  <div id="wrapper">
    <div class="row-big">
          <router-link to='/'>Home</router-link>
          <router-link :to="{name: 'displayPage', params: {id: prevId}}">Patrá</router-link>
          <router-link :to="{name: 'displayPage', params: {id: nextId}}">Palante</router-link>
        </div>
    <div class="row max-height" style="height:90%; margin-right:0px">
        <div class="col-md-5 gradient-color">
          <h4 class="header-m chart-title" style="color: #FFFFFF">Price evolution</h4>
          <canvas class="chart" id="evolution-chart"></canvas>
        </div>
        <div class="col-md-7" >
          <p class="overline-m">Name</p>
          <p class="header-m">{{myData.name}}</p>
          <p class="overline-m">Currency</p>
          <p class="paragraph-s">{{myData.currency.name}}</p>
          <p class="overline-m">Issuer</p>
          <p class="paragraph-s">{{myData.issuer.name}}</p>
          <p class="overline-m">Region</p>
          <p class="paragraph-s">{{region}}</p>
          <p class="overline-m">Risk Family</p>
          <p class="paragraph-s">NOOOOO2</p>
          <p class="overline-m">Sector</p>
          <p class="paragraph-s">NOOOOO3</p>
        </div>
    </div>
    </div>
</template>


<script>
import Chart from 'chart.js';

export default {
    data()
  {
    return{
      myData:{
        name: "",
        currency: "",
        issuer: "",
        risk_family: "",
        sector: ""
      },
      nextId: "",
      prevId: "",
      nextName: "",
      prevName: "",

      region: "",

      myChart: null,

      evolutionChartData : {
        type: 'line',
        data: {
          labels: [],
          datasets: 
          [{
              label: 'Price',
              data: [],
              borderColor: '#02B5C4',
              borderWidth: 3,
              lineTension: 0,
              fill: false,
          }]
          
        },
        options: {
          legend:{
            display: false,
          },
          elements:{
            point:{
              radius:0,
            }
          },
          aspectRatio: 1,
          responsive: true,
          scales: {
            yAxes: [{
              position: 'right',
              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)',
                zeroLineColor: '#ffffff'
              },
              ticks: {
                beginAtZero: true,
                padding: 5,
                fontColor: '#ffffff'
                
              }
            }],
            xAxes:[{
              type: 'time',
              time: {
                unit:'year',
                unitStepSize: 1,
                displayFormats: {
                  'millisecond': 'SSS [ms]',
                  'second': 'h:mm:ss a', // 11:20:01 AM
                  'minute': 'h:mm:ss a', // 11:20:01 AM
                  'hour': 'MMM D, hA', // Sept 4, 5PM
                  'day': 'MMM Do', // Sep 4 2015
                  'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                  'month': 'MMM YYYY', // Sept 2015
                  'quarter': '[Q]Q - YYYY', // Q3
                  'year': 'YYYY', // 2015
                }
              },

              gridLines: {
                color: 'rgba(255, 255, 255, 0.2)',
              },
              ticks: {
                min: 0,
                padding: 10,
                fontColor: '#ffffff'
                
              }
            }]
          }
        }
      }
    }
  },

  mounted()
  {
      this.getSymbols()
      
  },
 
  methods:
  {
    populateChart(){
      this.evolutionChartData.data.labels = []
      this.evolutionChartData.data.datasets[0].data = []

      for(let i =0; i < this.myData.prices.length; i++){
        this.evolutionChartData.data.datasets[0].data[i] = this.myData.prices[i].value
        this.evolutionChartData.data.labels[i] = this.myData.prices[i].date.split('T')[0]
      }

    },
  
    createChart(chartId, chartData) {
      
      const ctx = document.getElementById(chartId);
      this.myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      })
    },

    getRegion(object, index){
      let next = ""
      if(object["region_level"+index] != undefined){
        next = this.getRegion(object["region_level"+index], index+1)
      }
      else 
        return ""

      return "/" + object['name'] + next;
    },
 
    async getSymbols(){
      try {
        const response = await fetch('http://jsonstub.com/' + this.$route.params.id, {
        headers: { 'Content-type' : 'application/json',
                   'JsonStub-User-Key': '6fe1470b-4310-4998-bc11-969c53fd512e',
                   'JsonStub-Project-Key': '31597c40-92cb-429a-8394-9cff99a51925'}
        })
        const data = await response.json()
        this.myData = null
        this.myData = data
        console.log(this.myData)
        this.loadIds()
        this.region = this.myData.region.name + this.getRegion(this.myData.region, 2)
        
        this.populateChart()
        this.createChart('evolution-chart', this.evolutionChartData)
        
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
        this.myChart.destroy()
        this.loadIds()
        this.getSymbols()
      }
  }
}
</script>
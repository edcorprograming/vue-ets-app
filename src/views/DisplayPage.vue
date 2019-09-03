<template>
  <div class="row max-height " style="margin:0 ;">
    <div class=" stay-on-top col-md-12" style=" padding-bottom: 80px; padding-left:0;" >
      
          <router-link to='/'>
            <div class="ets_logo" ></div> 
          </router-link>
        </div>
    <div class="row full-page"  >
        
        <div class="col-md-5 gradient-color graph">
          <h4 class="header-m chart-title" style="color: #FFFFFF">Price evolution</h4>
          <canvas class="chart" id="evolution-chart"></canvas>
        </div>
        <div class="col-md-7 padding-mobile" style="padding-left: 30px" >
          <p class="overline-m">Name</p>
          <p class="header-m">{{myData.name}}</p>
          <p class="overline-m">Currency</p>
          <p class="paragraph-s">{{myData.currency.name}}</p>
          <p class="overline-m">Issuer</p>
          <p class="paragraph-s">{{myData.issuer.name}}</p>
          <p class="overline-m">Region</p>
          <p class="paragraph-s">{{region}}</p>
          <p class="overline-m">Risk Family</p>
          <p class="paragraph-s">{{risk_family}}</p>
          <p class="overline-m">Sector</p>
          <p class="paragraph-s">{{sector}}</p>
          <div class="row-container bottom-corner">
          <div class=" row">
            <div class="header-s col-md-4 col-4 hide-text" style="text-align: center; padding-top: 20px">{{prevName}}</div>
            <router-link :style="{visibility: prevId!='' ? 'visible' : 'hidden'}" style="text-align: center; " class="col-md-2 col-2"  :to="{name: 'displayPage', params: {  id: prevId}}">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="24.5" stroke="#BDBDBD"/>
                <path d="M38.757 40L43.707 44.95C43.8026 45.0422 43.8787 45.1526 43.9311 45.2746C43.9836 45.3966 44.0111 45.5278 44.0123 45.6606C44.0135 45.7934 43.9882 45.9251 43.9379 46.048C43.8876 46.1708 43.8133 46.2825 43.7194 46.3764C43.6256 46.4703 43.5139 46.5445 43.391 46.5948C43.2681 46.6451 43.1364 46.6704 43.0036 46.6692C42.8709 46.6681 42.7396 46.6405 42.6176 46.5881C42.4956 46.5357 42.3853 46.4595 42.293 46.364L36.636 40.707C36.4486 40.5195 36.3433 40.2652 36.3433 40C36.3433 39.7348 36.4486 39.4805 36.636 39.293L42.293 33.636C42.4817 33.4538 42.7343 33.353 42.9964 33.3553C43.2586 33.3576 43.5095 33.4628 43.6949 33.6482C43.8803 33.8336 43.9854 34.0844 43.9877 34.3466C43.99 34.6088 43.8892 34.8614 43.707 35.05L38.757 40Z" fill="#BDBDBD"/>
              </svg>
            </router-link>
            <router-link :style="{visibility: nextId!='' ? 'visible' : 'hidden'}"  class="col-md-2 col-2" style="text-align: center;" :to="{name: 'displayPage', params: {  id: nextId}}">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="24.5" stroke="#BDBDBD"/>
                <path transform="rotate(180 0 80)
                translate(-82 80)" d="M38.757 40L43.707 44.95C43.8026 45.0422 43.8787 45.1526 43.9311 45.2746C43.9836 45.3966 44.0111 45.5278 44.0123 45.6606C44.0135 45.7934 43.9882 45.9251 43.9379 46.048C43.8876 46.1708 43.8133 46.2825 43.7194 46.3764C43.6256 46.4703 43.5139 46.5445 43.391 46.5948C43.2681 46.6451 43.1364 46.6704 43.0036 46.6692C42.8709 46.6681 42.7396 46.6405 42.6176 46.5881C42.4956 46.5357 42.3853 46.4595 42.293 46.364L36.636 40.707C36.4486 40.5195 36.3433 40.2652 36.3433 40C36.3433 39.7348 36.4486 39.4805 36.636 39.293L42.293 33.636C42.4817 33.4538 42.7343 33.353 42.9964 33.3553C43.2586 33.3576 43.5095 33.4628 43.6949 33.6482C43.8803 33.8336 43.9854 34.0844 43.9877 34.3466C43.99 34.6088 43.8892 34.8614 43.707 35.05L38.757 40Z" fill="#BDBDBD"/>
              </svg>
            </router-link>
            <div class="header-s col-md-4 col-4 hide-text" style="text-align: center; padding-top: 20px">{{nextName}}</div>
          </div>
        </div>
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
      },
      nextId: "",
      prevId: "",
      nextName: "",
      prevName: "",

      region: "",
      risk_family: "",
      sector: "",

      first: false,

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
  created(){
    window.addEventListener('resize', this.handleResize)
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
      if(object["region_level"+index] != null){
        next = this.getRegion(object["region_level"+index], index+1)
      }
      else 
        return object['name']

      return object['name']+"/" + next;
    },

    getRiskFamily(object){
      let next = ""
      if(object["sub_family"] != null){
        next = this.getRiskFamily(object["sub_family"])
      }
      else 
        return object['name']

      return  object['name']+"/" + next;
    },

    getSector(object, index){
      let next = ""

      if(object == null){
        return
      }
      else if(object["sector_level"+index] != null){
        next = this.getSector(object["sector_level"+index], index+1)
      }
      else
        return  object['name']
      
      return object['name']+"/" + next;
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
        this.region = this.getRegion(this.myData.region, 2)

        this.risk_family = this.getRiskFamily(this.myData.risk_family)
        this.sector = this.getSector(this.myData.sector, 2)
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
                this.prevName = namesArray[i-1].split("-")[0]
                this.nextName = namesArray[i+1].split("-")[0]
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
    },
  }
}
</script>
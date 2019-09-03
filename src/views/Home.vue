<template>
  <div class="row max-height" style="margin-right: 0; ">
        <div class="stay-on-top col-md-2" >
          <router-link  to="/" class="main-log">
            <div class="ets_logo"></div>
          </router-link>
          <div class=" left-menu-items row" >
            <!-- Primera columna que contiene dos filtros y el logo -->
            <div class="col-md-12 col-6">
              <button class="button-no-style" v-on:click="CurrencyPage = true ; filterbycurrency(CurrencyFilter)">
                <img v-show="CurrencyPage" alt="Currency" src="@/assets/C-ON.png">
                <img v-show="!CurrencyPage" alt="Currency" src="@/assets/C-OFF.png">
              </button>
              <p v-show="!CurrencyPage" class="header-s"  style="color: #BDBDBD" >{{CurrencyFilter}}</p>
              <p  v-show="CurrencyPage" class="header-s"  style="color: #02B5C4" >{{CurrencyFilter}}</p>
            </div>
            <div class="col-md-12 col-6 ">
              <button class="button-no-style" v-on:click="CurrencyPage = false ; filterbyfamilyrisk(FamilyRiskFilter)" >
                <img v-show="!CurrencyPage"  alt="FamilyRisk" src="@/assets/FR-ON.png">
                <img v-show="CurrencyPage"  alt="FamilyRisk" src="@/assets/FR-OFF.png">
              </button>
              <p v-show="CurrencyPage" class="header-s"  style="color: #BDBDBD" >{{FamilyRiskFilter}}</p>
              <p v-show="!CurrencyPage" class="header-s"  style="color: #02B5C4" >{{FamilyRiskFilter}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-2 stay-on-top second-menu" >

           <!-- Segunda columna, filtro por divisas o por family risk -->
          <div v-show="CurrencyPage" class="right-menu-items row ">
            <div class="col-md-12 col-6">
              <div class="padding-icons-v">
                <img class="padding-icons" alt="ALL" src="@/assets/world.png">
                <button v-on:click="filterbycurrency('ALL')" class="header-m button-no-style">
                  <div v-show="CurrencyFilter == 'ALL'" style="color: #02B5C4">ALL</div>
                  <div v-show="CurrencyFilter != 'ALL'" style="color: #BDBDBD">ALL</div>
                </button>
              </div>
              <div class="padding-icons-v">
                <img class="padding-icons"  alt="EUR" src="@/assets/europe.png">
                <button v-on:click="filterbycurrency('EUR')" class="header-m button-no-style">
                  <div v-show="CurrencyFilter == 'EUR'" style="color: #02B5C4">EUR</div>
                  <div v-show="CurrencyFilter != 'EUR'" style="color: #BDBDBD">EUR</div>
                </button>
              </div>
            </div>
            <div class="col-md-12 col-6">
              <div class="padding-icons-v">
                <img class="padding-icons" alt="JPY" src="@/assets/japan.png">
                <button v-on:click="filterbycurrency('JPY')" class="header-m button-no-style">
                  <div v-show="CurrencyFilter == 'JPY'" style="color: #02B5C4">JPY</div>
                  <div v-show="CurrencyFilter != 'JPY'" style="color: #BDBDBD">JPY</div>
                </button>
              </div>
              <div class="padding-icons-v">
                <img class="padding-icons" alt="USD" src="@/assets/usa.png">
                <button v-on:click="filterbycurrency('USD')" class="header-m button-no-style" >
                  <div v-show="CurrencyFilter == 'USD'" style="color: #02B5C4">USD</div>
                  <div v-show="CurrencyFilter != 'USD'" style="color: #BDBDBD">USD</div>
                </button>
              </div>
            </div>
          </div>

          <div v-show="!CurrencyPage" class="right-menu-items row" style="top: 38%">
            <div class="col-md-12 col-5">
              <div class="padding-icons-v">
                <img class="padding-icons" alt="ALL" src="@/assets/world.png">
                <button v-on:click="filterbyfamilyrisk('ALL')" class="header-m button-no-style">
                  <div v-show="FamilyRiskFilter == 'ALL'" style="color: #02B5C4">ALL</div>
                  <div v-show="FamilyRiskFilter != 'ALL'" style="color: #BDBDBD">ALL</div>
                </button>
              </div>
              <div class="padding-icons-v">
                <img class="padding-icons" alt="Equity" src="@/assets/Equity.png">
                <button v-on:click="filterbyfamilyrisk('Equity')" class="header-m button-no-style">
                  <div v-show="FamilyRiskFilter == 'Equity'" style="color: #02B5C4">Equity</div>
                  <div v-show="FamilyRiskFilter != 'Equity'" style="color: #BDBDBD">Equity</div>
                </button>
              </div>
            </div>
            <div class="col-md-12 col-5">
              <div class="padding-icons-v">
                <img class="padding-icons" alt="Balanced" src="@/assets/Balanced.png">
                <button v-on:click="filterbyfamilyrisk('Balanced')" class="header-m button-no-style">
                  <div v-show="FamilyRiskFilter == 'Balanced'" style="color: #02B5C4">Balanced</div>
                  <div v-show="FamilyRiskFilter != 'Balanced'" style="color: #BDBDBD">Balanced</div>
                </button>
              </div>
            </div>
          </div>


        </div>
        <div class="col-md-8 items-displayer" >
            <!--<dataTable :key="reload" :myData="myData" />-->
            <Divisas :key="reload" :myData="displayData" />
        </div>
    </div>
</template>

<script>
import Divisas from '../components/Divisas.vue';

export default {
  name: 'Home',
  props:{
  },
  components: {
    Divisas,
  },
  data()
  {
    return{
      myData:[
        
      ],
      displayData:[],
      CurrencyPage: true,
      FamilyRiskPage: false,
      CurrencyFilter: "ALL",
      FamilyRiskFilter: "ALL",
      reload: 0
    }
  },

  mounted()
  {
      this.getSymbols()
  },

  methods:
  {
    filterbycurrency(string){
      if(string == "ALL")
        this.displayData = this.myData
      else
        this.displayData = this.myData.filter(item => item.currency == string)
      this.CurrencyFilter = string
      this.reload +=1
    },

    filterbyfamilyrisk(string){
      if(string == "ALL")
        this.displayData = this.myData
      else
        this.displayData = this.myData.filter(item => item.risk_family == string)
      this.FamilyRiskFilter = string
      this.reload +=1
    },
 
    async getSymbols() 
    {
      try {
        const response = await fetch('http://jsonstub.com/symbols ', {
        headers: { 'Content-type' : 'application/json',
                  'JsonStub-User-Key': '6fe1470b-4310-4998-bc11-969c53fd512e',
                  'JsonStub-Project-Key': '31597c40-92cb-429a-8394-9cff99a51925'}
        })
        const data = await response.json()
        this.myData = data
        this.displayData = this.myData
        this.storeData()
      } catch (error) {
        console.error(error)
      }

    },
    async storeData() 
    {
      try {
        var resultIds = ""
        var resultNames = ""
        for(var item of this.myData){
          resultIds = resultIds + item.id + "/"
          resultNames = resultNames + item.name + "/"
        }
        localStorage.setItem("ids", btoa(resultIds));
        localStorage.setItem("names", btoa(resultNames));
      } catch (error) {
        console.error(error)
      }
    }
  },
  watch: {

  }
}
</script>

<style>

</style>

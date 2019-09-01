<template>
    <header class="header">
        <tr>
            <router-link  to="/" id="homelink" >
                <img id="ets_logo"  src="@/assets/logo-1.png" alt="ETS logo">
            </router-link>
        </tr>
        <tr>
            <router-link   to="/" id="currency">
                <img v-show="CurrencyPage" id="currencyButtonImg" alt="Currency" src="@/assets/C-ON.png">
                <img v-show="!CurrencyPage" id="currencyButtonImg" alt="Currency" src="@/assets/C-OFF.png">
            </router-link>
            <p id="currency2">{{CurrencyFilter}}</p>
        </tr>
        <tr>
            <router-link  to="/filterFamilyRisk" id="familyrisk">
                <img v-show="FamilyRiskPage" id="familyFilterRiskImg" alt="FamilyRisk" src="@/assets/FR-ON.png">
                <img v-show="!FamilyRiskPage" id="familyFilterRiskImg" alt="FamilyRisk" src="@/assets/FR-OFF.png">
            </router-link>
            <p id="familyrisk2">{{FamilyRiskFilter}}</p>
        </tr>
    </header>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
    name: "Header",
    props:{
        
    },
    data(){
        return{
            CurrencyPage: true,
            FamilyRiskPage: false,
            CurrencyFilter: "ALL",
            FamilyRiskFilter: "ALL",
        }
    },
    components: {
    Home
  },
  methods:{

  },
  computed:{

  },
  watch: {
      '$route' (to, from){
        if(to.path === "/filterCurrency" || to.path === "/" )
        {
            this.CurrencyPage = true
            this.FamilyRiskPage = false
            
        }
        else if(to.path === "/filterFamilyRisk"){
            this.CurrencyPage = false
            this.FamilyRiskPage = true
        }
      }
  }
}


</script>

<style scoped>

    *{
        box-sizing: border-box;
        font-family: Open Sans Condensed;
    }

    #homelink{
        text-align: left;
        position: relative;
        top: 31px;
        left: 14px;
    }

    #currency, #currency2{
        position: absolute;
        transform: translateY(100%);
        top: 30%;
        left: 0px;
    }

    #familyrisk, #familyrisk2{
        transform: translateY(100%);
        position: absolute;
        top: 40%;
        left: 0px;
    }

    #currency2, #familyrisk2{
        left: 58px;
        width: 178px;
        height: 51px;
        font-size: 12px;
        color: #BDBDBD;
        font-weight: bold;
    }






</style>
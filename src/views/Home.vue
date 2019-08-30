<template>
  <div id="app">
    <divisas :myData="myData" />
  </div>
</template>

<script>
import Divisas from '../components/Divisas.vue';

export default {
  name: 'Home',
  components: {
    Divisas
  },
  data()
  {
    return{
      myData:[
        
      ],
    }
  },

  mounted()
  {
      this.getSymbols()
  },

  methods:
  {
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
      } catch (error) {
        console.error(error)
      }

    },
  },
}
</script>

<style>

</style>

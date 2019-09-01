<template>
  <div class="main">
      <div class="column left" >
        <Header />
      </div>
      <div class="column middle">
        <DivFilter />
      </div>
      <div class="column right">
          <router-view/>
      </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue'
  import DivFilter from './components/layout/DivFilter.vue'
  export default {

  name:"app",
  components: {
    Header,
    DivFilter,
  },
  data(){
       return{
         altimagecurrency: true,
       }
  }
}
</script>

<style>

    *{
      box-sizing: border-box;
      font-family: Open Sans Condensed;
    }

  html, body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  .main {
    display: table;
    height: 100%;
    width: 100%;
  }
  .column {
    display: table-cell;
  }
  .left, .middle {
    width: 20%;
  }

  .right {
    width: 50%;
  }
  .middle {
    background-color: #F2F2F2;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
</style>

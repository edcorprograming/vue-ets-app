<template>
  <div id="app">

    <div class="row">
        <div class="column left" style="background-color:#fff;">
          <Header />
        </div>
        <div class="column middle" style="background-color: #F2F2F2;">
          <p>Some text..</p>
        </div>
        <div class="column right" style="background-color:#fff;">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  export default {

  name:"app",
  components: {
    Header
  }
}
</script>

<style>

    /* Create three unequal columns that floats next to each other */
    .column {
    float: left;
    padding: 10px;
    height: 500px; /* Should be removed. Only for demonstration */
    }

    .left, .middle {
    width: 237px;
    }

    .right {
    width: 700px;
    }

    /* Clear floats after the columns */
    .row:after {
    content: "";
    display: table;
    clear: both;
    }
</style>

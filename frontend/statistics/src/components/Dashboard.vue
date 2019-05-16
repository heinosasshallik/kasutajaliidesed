<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <img alt="logo" class="logo d-none d-md-block" src="@/assets/logo.png">
          </div>
          <div class="col text-align-center">
            <h1>Dashboard</h1>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid">
      <div  class="row">
        <div class="col-4">
          
          Game sales this month:
          <line-chart class="space" :chart-data="salesDataCollection"></line-chart>
        </div>
        <div class="col-4">
          Users registered per month:
          <bar-chart class="space" :chart-data="usersDataCollection"></bar-chart>
        </div>
        <div class="col-4">
          Number of games per category:
          <pie-chart class="space" :chart-data="categoriesDataCollection"></pie-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart.js';
  import BarChart from './BarChart.js';
  import PieChart from './PieChart.js';

  export default {
    components: {
      LineChart,
      BarChart,
      PieChart
    },
    data () {
      return {
        salesDataCollection: {},
        usersDataCollection: {},
        categoriesDataCollection: {},
      }
    },
    mounted () {
        fetch("http://dijkstra.cs.ttu.ee/~heisas/kasutajaliidesed/prax4/public/sales.json")
            .then(resp => resp.json()).then(response => {
              console.log(response);
              this.salesDataCollection = response;
        });
        fetch("http://dijkstra.cs.ttu.ee/~heisas/kasutajaliidesed/prax4/public/users.json")
            .then(resp => resp.json()).then(response => {
              console.log(response);
              this.usersDataCollection = response;
        });
        fetch("http://dijkstra.cs.ttu.ee/~heisas/kasutajaliidesed/prax4/public/categories.json")
            .then(resp => resp.json()).then(response => {
              console.log(response);
              this.categoriesDataCollection = response;
        })

    },
    methods: {
      fillData () {
        
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  body {
    padding: 0px;
    margin: 0px;
  }
  h1 {
    color: white;
    margin: 0px;
    padding: 10px 0px 0px 0px;
  }
  .header  {
    background: black;
    margin: 0px 0px 40px 0px;
    padding: 0px;
  }
  .small {
    max-width: 600px;
    margin:  0px auto;
  }

  .space {
    margin-bottom: 40px;
  }

  .col, .row, .container, .container-fluid {
    padding: 0px !important;
    margin: 0px !important;
  }

  .logo {
    height: 70px;
  }
</style>

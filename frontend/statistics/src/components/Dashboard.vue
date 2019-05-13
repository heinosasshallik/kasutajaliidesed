<template>
  <div>
    <h1>Dashboard</h1>
    <div class="small">
      Game sales this month:
      <line-chart class="space" :chart-data="salesDataCollection"></line-chart>
      Users registered per month:
      <bar-chart class="space" :chart-data="usersDataCollection"></bar-chart>
      Number of games per category:
      <pie-chart class="space" :chart-data="categoriesDataCollection"></pie-chart>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart.js';
  import BarChart from './BarChart.js';
  import PieChart from './PieChart.js';
  
  import sales from '../db/sales.json';
  import users from '../db/users.json';
  import categories from '../db/categories.json';

  export default {
    components: {
      LineChart,
      BarChart,
      PieChart
    },
    data () {
      return {
        salesDataCollection: sales,
        usersDataCollection: users,
        categoriesDataCollection: categories,
      }
    },
    mounted () {

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
    background: black;
    color: white;
    margin-bottom: 40px;
    padding: 0px;
  }
  .small {
    max-width: 600px;
    margin:  0px auto;
  }

  .space {
    margin-bottom: 40px;
  }
</style>

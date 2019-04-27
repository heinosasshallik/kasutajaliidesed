<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2"></div>
      <h1 class="col display-4 heading mt-3 pb-2">Mängu müümine</h1>
      <div class="col-xl-2"></div>
    </div>

    <div class="row">
      <div class="col-xl-2"></div>
      <div class="col container-fluid no-padding-margin pb-2">
        <form class="col-xl-8 col-12">
          <div class="form-group px-sm-3 px-xl-0">
            <div class="container-fluid"></div>
              <div class="row">
                <label class="mt-3">Kirjuta siia mängu nimi ning me pakume sulle hinna</label>
              </div>    
              <div class="row">
                <input class="border rounded col py-2" type="text" placeholder="Mängu nimi">
              </div>
              <div class="row mt-2">
                <span class="text-success h3">15€</span>
              </div>
              <div class="row mt-2 align-items-center">
                <label class="col-4 no-padding-margin">Email:</label>
                <input class="border rounded col py-2" type="text" placeholder="Email">
              </div>
              <div class="row mt-1 align-items-center">
                <label class="col-4 no-padding-margin">Pangakonto:</label>
                <input class="border rounded col py-2" type="text" placeholder="Pangakonto">
              </div>
            </div>
          </form>
        </div>
        <div class="col-xl-2"></div>
      </div>


      <div class="row">
        <div class="col-xl-2"></div>
        <form class="d-flex justify-content-between col-xl-8 col-12 no-padding-margin">
          <div class="d-flex align-items-center mr-sm-3 mr-xl-0">
            <a href="sell-confirm.html"><p class="btn btn-success">Valmis müümiseks</p></a>
          </div>
        </form>
        <div class="col-xl-2"></div>
      </div>
    </div>
</template>

<script>
    import QuestionFilterSearch from "../components/questions/filters/QuestionFilterSearch";
    import Navigation from "../components/layout/Navigation";
    import {mapState} from "vuex";

    export default {
        name: "HomeView",
        components: {
            Navigation,
            QuestionFilterSearch
        },
        computed: {
            ...mapState('auth', ['isLoggedIn']),
        },
        methods: {
            startSearch() {
                this.$router.push({
                    name: 'QuestionListView'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_colors.scss';
  @import '../assets/styles/_mixins.scss';

</style>

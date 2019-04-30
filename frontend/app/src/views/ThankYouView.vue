<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2"></div>
      <h1 class="col display-4 heading mt-3 pb-2">Aitäh ostu eest</h1>
      <div class="col-xl-2"></div>
    </div>

    <div class="row">
      <div class="col-xl-2"></div>
      <div class="col container-fluid no-padding-margin pb-2">
        <form class="col-xl-8 col-12">
          <div class="form-group px-sm-3 px-xl-0">
            <div class="container-fluid"></div>
            <div class="row">
              <label class="mt-3">Aitäh ostu sooritamise eest!</label>
            </div>
          </div>
        </form>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>

<script>
    import QuestionFilterSearch from "../components/questions/filters/QuestionFilterSearch";
    import Navigation from "../components/layout/Navigation";
    import {mapState} from "vuex";

    export default {
        name: "ThankYouView",
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

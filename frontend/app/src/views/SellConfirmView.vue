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
              <label class="mt-3">Olete müümiseks valmis! Teie genereeritud müügikood:</label>
            </div>
            <div class="row mt-1">
              <span class="h2">3719ASHDK137J</span>
            </div>
            <div class="row mt-3">
              <span>Saatke mäng postiga või tooge kohale aadressile Pikk 25a, Tallinn, Harjumaa.
              Vigastusega mängud saadetakse tagasi.</span>
            </div>
            <div class="row mt-3">
              <span class="font-weight-bold">Postiga saates kindlasti lisage pakile juurde müügikood!</span>
            </div>
          </div>
        </form>
      </div>
      
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "SellConfirmView",
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
</style>

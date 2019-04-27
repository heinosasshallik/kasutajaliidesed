<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2"></div>
        <h1 class="col display-4 heading mt-3 pb-2">Team Fortress 2</h1>
        <div class="col-xl-2"></div>
      </div>
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="col container-fluid no-padding-margin">
          <div class="row no-padding-margin">
            <div class="col-md-5 col-12 no-padding-margin">
              <img alt="product" class="product-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Hltob-win-cover.jpg/220px-Hltob-win-cover.jpg">
            </div>
            <div class="col-md-7 col-12 py-3 d-flex flex-column">
              <div class="mb-3">
                Team Fortress 2 (TF2) is a team-based multiplayer first-person shooter video game developed and published by Valve
                Corporation. It is the sequel to the 1996 mod Team Fortress for Quake and its 1999 remake, Team Fortress Classic. It
                was released as part of the video game bundle The Orange Box in October 2007 for Microsoft Windows and the Xbox
                360.<br><br>
                A PlayStation 3 version followed in December 2007. The game was released for Windows as a standalone entry in
                April
                2008 and was updated to support OS X in June 2010 and Linux in February 2013. It is distributed online through
                Valve's
                digital retailer Steam, with retail distribution being handled by Electronic Arts.
              </div>
              <div class="mt-auto d-flex flex-row justify-content-end align-items-center">
                <span class="text-success mr-2">9,99€</span>
                <div class="mr-2">
                  <button onclick="window.location.href='cart.html'" class="btn btn-success">Lisa ostukorvi</button>
                </div>
              </div>
            </div>
          </div>
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

  .product-image {
    display: block;
    width: 100%;
    height: auto;
  }
</style>

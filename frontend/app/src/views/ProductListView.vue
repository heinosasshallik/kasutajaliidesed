<template>
  <div class="container-fluid mt-xl-2">
    <div class="row">
      <div class="col-xl-2"></div>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts()">Kõik</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('strategy')">Strateegia</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('action')">Action</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('fps')">FPS</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('rpg')">RPG</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('indie')">Indie</button>
      <button type="button" class="btn btn-outline-secondary col-12 col-sm" @click="updateProducts('racing')">Võidusõit</button>
      <div class="col-xl-2"></div>
    </div>
    <div class="text-center pt-4" v-if="dividedProducts.length == 0">
      Tooted puuduvad.
    </div>
    <div class="row" v-for="fourProducts in dividedProducts" v-bind:key="fourProducts[0].id">
      <div class="col-xl-2"></div>
      <div class="card product-card col-lg-3 col-xl-2 col-sm-6 mt-xl-2 cursor-pointer"
          v-for="product in fourProducts" 
          v-bind:key="product.id"
          @click="$router.push({name: 'ProductView', params: {id: product.id}})">
        <img class="card-img-top" v-bind:src="product.image"
          alt="Card image cap">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ product.name }}</h5>
          <div class="mt-auto d-flex justify-content-between">
            <small class="card-text text-success">{{ product.price }}</small>
            <small class="card-text text-muted">{{ product.category }}</small>
          </div>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from "vuex";

    export default {
        name: "ProductListView",
        computed: {
          ...mapGetters('product', ['dividedProducts']),
        },
        methods: {
          ...mapActions('product', ['updateProducts'])
        },
        created() {
          this.updateProducts();
        }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_colors.scss';
  @import '../assets/styles/_mixins.scss';

  .genre-button {
    background-color: #3fb5ff;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: lightgray solid 1px;
  }

  .genre-list {
    margin-top: 15px;
  }

  .product-card {
    padding: 0px !important;
    margin: 0px !important;
  }

  .card-link,
  .card-link:hover {
    color: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }

</style>

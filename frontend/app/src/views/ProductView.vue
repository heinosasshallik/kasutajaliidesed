<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2"></div>
        <h1 class="col display-4 heading mt-3 pb-2"> {{ product.name }}</h1>
        <div class="col-xl-2"></div>
      </div>
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="col container-fluid no-padding-margin">
          <div class="row no-padding-margin">
            <div class="col-md-5 col-12 no-padding-margin">
              <img alt="product" class="product-image" v-bind:src="product.image">
            </div>
            <div class="col-md-7 col-12 py-3 d-flex flex-column">
              <div class="mb-3" v-html="product.description"></div>
              <div class="mt-auto d-flex flex-row justify-content-end align-items-center">
                <span class="text-success mr-2">{{ product.price }}</span>
                <div class="mr-2">
                  <button @click="buy" class="btn btn-success">Osta</button>
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
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "ProductView",
        computed: {
          ...mapGetters('product', ['getProductById']),
        },
        methods: {
          ...mapActions('product', ['updateProducts', 'addToCart']),
          buy() {
            this.addToCart(this.product);
            this.$router.push({name: 'CartView'});
          }
        },
        data() {
          return {
            product: {},
          }
        },
        created() {
          this.updateProducts();
          this.product = this.getProductById(this.$route.params.id);
        }
    }
</script>

<style lang="scss" scoped>

  .product-image {
    display: block;
    width: 100%;
    height: auto;
  }
</style>

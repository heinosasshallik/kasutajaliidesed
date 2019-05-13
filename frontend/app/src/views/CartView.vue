<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2"></div>
      <h1 class="col display-4 heading mt-3 pb-2">Ostukäru</h1>
      <div class="col-xl-2"></div>
    </div>
    <div class="text-center pt-4" v-if="cart.length == 0">
      Tooted puuduvad.
    </div>
    <div class="row" v-for="product in cart" v-bind:key="product.id">
      <div class="col-xl-2"></div>
      <div class="col container-fluid no-padding-margin border-bottom-grey pb-2">
        <div class="row no-padding-margin">
          <div class="col-12 col-sm-4 col-md-3 col-lg-2 no-padding-margin">
            <img alt="product" class="product-image pl-sm-3 pl-xl-0" v-bind:src="product.image">
          </div>
          <div class="col-12 col-sm-8 col-md-9 col-lg-10 py-3">
            <div class="container-fluid">
              <div class="row">
                <div class="col h1 d-flex align-items-center">{{ product.name }}</div>
                <div class="col d-flex align-items-center font-weight-light justify-content-end">Tarne 7-14 päeva</div>
              </div>
              <div class="row">
                <div class="col h5 text-success d-flex align-items-center">{{ product.price }}</div>
                <div class="col d-flex align-items-center font-weight-light text-muted cursor-pointer justify-content-end">
                  <u @click="removeFromCart(product)">Eemalda toode</u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>


    <div class="row mt-3" v-if="cart.length != 0">
      <div class="col-xl-2"></div>
      <form class="d-flex justify-content-between col-xl-8 col-12 px-sm-3 px-xl-0">
        <div class="form-group pl-sm-3 pl-xl-0">
          <label for="bankFormControlSelect">Vali pank</label>
          <select class="form-control" id="bankFormControlSelect">
            <option>LHV</option>
            <option>SEB</option>
            <option>Luminor</option>
            <option>Swedbank</option>
          </select>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-success" @click="buy">Osta</button>
        </div>
      </form>
      <div class="col-xl-2"></div>
    </div>
    
  </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";

    export default {
      name: "CartView",
      computed: {
        ...mapState('product', ['cart']),
      },
      methods: {
        ...mapActions('product', ['emptyCart', 'removeFromCart']),
        buy() {
          this.emptyCart();
          this.$router.push({name: 'ThankYouView'});
        },
      }
    }
</script>

<style lang="scss" scoped>
  .border-bottom-grey {
    border-bottom: 1px solid lightgrey;
  }

  .product-image {
    display: block;
    width: 100%;
    height: auto;
  }
</style>

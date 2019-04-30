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
              <div v-if="errors.length" class="row">
                <p>
                  <b>Palun paranda järgnevad vead:</b>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                </p>
              </div>
              <div class="row">
                <label class="mt-3">Kirjuta siia mängu nimi ning me pakume sulle hinna</label>
              </div>    
              <div class="row">
                <model-select :options="options"
                                v-model="item"
                                placeholder="Vali mäng"
                                >
                 </model-select>
              </div>
              <div class="row mt-2">
                <span class="text-success h3">{{ price }}€</span>
                
              </div>
              <div class="row mt-2 align-items-center">
                <label class="col-4 no-padding-margin">Email:</label>
                <input v-model="email" class="border rounded col py-2" type="text" placeholder="Email">
              </div>
              <div class="row mt-1 align-items-center">
                <label class="col-4 no-padding-margin">Pangakonto:</label>
                <input v-model="bankAccount" class="border rounded col py-2" type="text" placeholder="Pangakonto">
              </div>
            </div>
          </form>
        </div>
        <div class="col-xl-2"></div>
      </div>


      <div class="row">
        <div class="col-xl-2"></div>
        <form class="d-flex justify-content-between col-xl-8 col-12 no-padding-margin">
          <div class="d-flex align-items-center ml-sm-2 mr-sm-3 mr-xl-0">
            <a @click="confirm()"><p class="btn btn-success">Valmis müümiseks</p></a>
          </div>
        </form>
        <div class="col-xl-2"></div>
      </div>
    </div>
</template>

<script>
  import { ModelSelect } from 'vue-search-select'
  import {mapState, mapActions, mapGetters} from "vuex";

  export default {
    name: "SellView",
    components: {
      ModelSelect
    },
    data() {
      return {
        options: [],
        item: {
          value: 0,
          text: ''
        },
        gameName: "",
        price: 0,
        email: "",
        bankAccount: "",
        errors: [],
      }
    },
    watch: {
      item: {
        handler(newItem, oldItem) {
          if (newItem.value !== oldItem.value) {
            this.updatePrice();
          }
        },
        deep: true,
      }
    },
    computed: {
      ...mapState('product', ['products']),
      ...mapGetters('product', ['getProductById']),
    },
    methods: {
      ...mapActions('product', ['updateProducts']),
      confirm() {
        if (this.checkForm()) {
          this.$router.push({
            name: 'SellConfirmView'
          });
        }
      },
      updatePrice() {
        this.price = (parseFloat(this.getProductById(this.item.value).price.slice(0, -1)) * 0.8).toFixed(2);
      },
      validateEmail(email) {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      },
      checkForm: function () {
        this.errors = [];

        if (!(this.item && this.item.value)) {
          this.errors.push('Mängu valimine on nõutud.');
        }
        if (!this.email || !this.validateEmail(this.email)) {
          this.errors.push('Email ei ole korrektne.');
        } if (!this.bankAccount || this.bankAccount.length == 0) {
          this.errors.push('Pangakonto on nõutud.');
        }

        return this.errors.length == 0;
      }
    
    },
    created() {
      this.updateProducts();
      this.products.forEach(product => {
        this.options.push({
          value: product.id,
          text: product.name
        });
      });
    }
  }
</script>

<style lang="scss" scoped>
</style>

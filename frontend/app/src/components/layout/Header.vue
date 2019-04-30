<template>
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-dark">-</span>
        </button>
        <img @click="$router.push({name: 'ProductListView'})" alt="logo" class="logo d-none d-md-block" src="@/assets/images/logo.png">
      
      
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="$router.push({name: 'ProductListView'})">Mängud <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name: 'SellView'})">Müük</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kontakt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ettevõttest</a>
            </li>
          </ul>
        </div>
      
      
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Otsi..." aria-label="Search">
          <div class="btn btn-outline-warning my-2 my-sm-0 d-none d-sm-block cursor-pointer">Otsing</div>
        </form>
      
        <div class="ml-3">
          <a @click="$router.push({name: 'CartView'})"><img alt="cart" class="shopping-cart-image" src="@/assets/images/shopping-cart.png"><span
              class="shopping-cart-text"> ({{cart.length}})</span></a>
        </div>
      </nav>
    </div>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        name: "Header",
        computed: {
          ...mapState('product', ['cart']),
        }
    }
    
</script>

<style scoped>

  .header {
    color: white;
  }

  .logo {
    height: 70px;
  }

  .shopping-cart-image {
    cursor: pointer;
  }

  .shopping-cart-container {
    color: white;
    margin-left: 20px;
  }

  .search-and-category-container {
    height: 100%;
  }

  .search-container {
    background-color: white;
    height: 40px;
    border-radius: 5px;
    margin-top: 15px;
    display:  flex;
    flex-direction: row;
  }

  .search:hover, .search-container:hover {
    background-color : #e4e4e4;
  }

  .search {
    margin-left: 10px;
    border: none;
    font-size: 17px;
    height: 100%;
    width: 97%;
  }

  textarea, select, input, button { outline: none; }

  .search-button {
    width: 50px;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 0px solid grey;
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
  }

  .form-control {
    border: 0px solid grey !important;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
  }

  .nav-button:hover {
    background-color: #0c414f;
  }

  .shopping-cart-text,
  .shopping-cart-text:hover {
    color: white !important;
  }
</style>

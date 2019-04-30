import Vue from 'vue';
import Router from 'vue-router';
import ProductListView from './views/ProductListView.vue';
import ProductView from './views/ProductView.vue';
import SellView from './views/SellView.vue';
import CartView from './views/CartView.vue';
import SellConfirmView from './views/SellConfirmView.vue';
import ThankYouView from './views/ThankYouView.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'ProductListView',
            component: ProductListView,
            meta: {
                layout: 'full',
            }
        },
        {
          name: 'ProductView',
          path: '/product/:id',
          component: ProductView
        },
        {
          name: 'SellView',
          path: '/sell',
          component: SellView
        },
        {
          name: 'SellConfirmView',
          path: '/sell/confirm',
          component: SellConfirmView
        },
        {
          name: 'CartView',
          path: '/cart',
          component: CartView
        },
        {
          name: 'ThankYouView',
          path: '/thanks',
          component: ThankYouView
        },

    ]
});

import Vue from 'vue';
import Router from 'vue-router';
import ProductListView from './views/ProductListView.vue';
import ProductView from './views/ProductView.vue';
import SellView from './views/SellView.vue';
import CartView from './views/CartView.vue';
import SellConfirmView from './views/SellConfirmView.vue';
import QuestionDetailView from './views/QuestionDetailView.vue';
import QuestionListView from './views/QuestionListView.vue';
import AddQuestionView from './views/AddQuestionView.vue';

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
            path: '/questions/create',
            name: 'AddQuestionView',
            component: AddQuestionView,
            props: true
        },
        {
            name: 'QuestionListView',
            path: '/questions',
            component: QuestionListView
        },
        {
            name: 'QuestionDetailView',
            path: '/question/:id',
            component: QuestionDetailView
        },
    ]
});

import { createApp } from 'vue';
import App from './App.vue';
import dayjs from 'dayjs';
import { createRouter, createWebHistory } from 'vue-router';
import OrdersView from './views/OrdersView.vue';
import ProductsView from './views/ProductsView.vue';
import IndevelopmentView from './views/IndevelopmentView.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/orders',
      component: OrdersView,
    },
    {
      path: '/groups',
      component: IndevelopmentView,
    },
    {
      path: '/products',
      component: ProductsView,
    },
    {
      path: '/users',
      component: IndevelopmentView,
    },
    {
      path: '/settings',
      component: IndevelopmentView,
    },
  ],
});

app.use(router);

app.use(dayjs);

app.mount('#app');

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import home from './components/index/home'
import Goodshop from './components/goodshop/goodshop.vue'
import Goodproduct from './components/goodproduct/goodproduct.vue'

Vue.use(VueResource);
Vue.use(VueRouter);



const routes = [
  { path: '/Home', component: home },
  { path: '/goodshop', component: Goodshop },
  { path: '/goodproduct', component: Goodproduct}

];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
router.push('/Home');


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app');



<template>
  <div id="app">
     <v-header></v-header>
     <v-logo></v-logo>
     <v-nav></v-nav>
     <router-view></router-view>
     <v-footer></v-footer>
  </div>
</template>

<script>
  import header from  './components/header/head.vue';
  import logo from './components/logo/logo.vue';
  import nav from './components/Navigation/nav.vue';
  import footer from './components/footer/footer.vue';

  export default {
      data() {
         return {
         }
      },
     components: {
       'v-header':header,     //注册组件
       'v-logo':logo,
       'v-nav':nav,
       'v-footer':footer
     }
  }
</script>


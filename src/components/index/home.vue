<template>
  <div>
    <banner></banner>
    <v-fourcon></v-fourcon>
    <v-time></v-time>
    <v-prolist></v-prolist>
    <v-catlist></v-catlist>
  </div>
</template>

<script>
   import banner from  '../../components/Navigation/banner.vue';
   import Fourcon from  '../../components/index/SecondaryNav.vue'
   import timer from  '../../components/other/CountDown.vue'
   import prolist from '../../components/list/productlist.vue'
   import catlist from '../../components/list/catlist.vue'
    export default {
      components: {
       'banner':banner,
       'v-fourcon':Fourcon,
       'v-time':timer,
       'v-prolist':prolist,
       'v-catlist': catlist
       }
    };
</script>

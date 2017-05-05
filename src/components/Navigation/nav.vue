<template>
  <div class="indexCon">
    <div class="indexCenter">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="list in listTitle">
          <router-link  :to='list.link'>{{ list.name }}</router-link>
        </li>
        <!--<li><router-link to="/Home">Home</router-link></li>-->
        <!--<li><router-link to="/goodshop">goodshop</router-link></li>-->
        <!--<li><router-link to="/goodproduct">goodproduct</router-link></li>-->
      </ul>
    </div>
  </div>
</template>


<style>
.indexCon{ height: 40px; border-bottom: solid 1px #FF3366}
.indexCenter{ width: 1200px; margin: 0 auto}
.indexCenter h3{
    height:40px; line-height: 40px;
    color: #fff; background: #FF3366; width: 285px; text-align: center; font-weight: 400; font-size: 14px; float: left; margin-right: 3%}
.indexCenter ul{display: inline-block}
.indexCenter ul li{ display:block; width:auto; float:left;
    height:40px; line-height: 40px;}
.indexCenter ul li a{
    color: #666666; width:100%; padding:0 40px}

    .router-link-active{
     color:#FF3366 !important
    }
</style>


<script>

    export default{
        data(){
            return{
               title:'全部商品',
			         listTitle:[
			        	{name:"主页",link:"/Home"},
                {name:"风格好店",link:"/goodshop"},
                {name:"好物",link:"/goodproduct"}
			]
            }
        }
    }
</script>

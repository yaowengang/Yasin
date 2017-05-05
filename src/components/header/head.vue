<template>
  <div id="headerCon" :style="[HeaderCon]">
    <ol :class="headerConOl">
      <li v-for="todo in todos" :style="{display:Dip}">
        <a v-bind:href="todo.text.link" :class="headerConOlLiA">{{ todo.text.name }}</a>
      </li>
    </ol>
  </div>
</template>


<style>
.headerCon-ol{ width: 1200px; margin:0 auto; height: auto; text-align: right; }
.headerCon-ol-li-a{padding:0px 20px; color: #666; font-size: 12px; display:block; height: 13px; line-height: 13px;border-left: dotted 1px #ccc; }
.headerCon-ol li:first-child a{border: none}
a:hover{color: #FF3366; }
</style>

<script>
  export default {
    data (){
       return {
            todos:[
                {text:{name:'微信登录',link:'#1'}},
		{text:{name:'QQ登录',link:'#2'}},
		{text:{name:'登录',link:'#3'}},
		{text:{name:'注册',link:'#4'}},
		{text:{name:'我的收藏',link:'#5'}},
		{text:{name:'我的购物车',link:'#6'}},
		{text:{name:'我的订单',link:'#7'}},
		{text:{name:'帮助中心',link:'#8'}},
		{text:{name:'商家后台',link:'#9'}}
                ],
                HeaderCon:{
            height: "auto",
            overflow: "hidden",
            background: "#F8F8F8",
            padding:"5px 0"
		},
		headerConOl:"headerCon-ol",
		Dip:"inline-block",
		headerConOlLiA:"headerCon-ol-li-a"
       }
    }
  };


</script>

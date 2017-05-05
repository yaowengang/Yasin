<template>
  <div :class="LogoCon">
    <img :src="logoImg"  class="logo">
    <div class="search">
      <div id="tab">
        <span @click="add($event)" class="this-active">{{ classification.commodity }}</span>
        <span @click="add($event)">{{ classification.shop }}</span>
      </div>
      <div class="searchInp">
        <input type="text" :placeholder="'搜索'+ SearchType" ><button></button>
      </div>
      <ul>
        <li v-for="Prolist in RecommendedProducts" :style="[RecommendedProductsStyle]" >
          <a :href="Prolist.text.link" :class="Prolist.text.Recommend" :style="RecommendedProductsA">{{ Prolist.text.name }}</a>
        </li>
      </ul>
    </div>
    <img :src="QRcode" class="QRcode">
  </div>
</template>



<style>
.Logo-Con{ width:1200px; margin: 0 auto; height:122px; }
.Logo-Con .logo{ float: left; margin-top: 40px;}
.search{ width: 520px;  height: auto;
    float: left; margin-left: 14%}
#tab{ margin-top: 20px; height:auto; overflow:hidden; background:#fff}
.search span{line-height: 24px; width: 56px; font-size: 12px; text-align: center;  display: inline-block; background: #f2f2f2; cursor: pointer;
    color: #666666; float:left}
.searchInp{padding: 2px; background: #FF3366}
.searchInp input{ padding: 5px 8px; width: 83% }
.searchInp button{ width: 13%; float: right; background: url("/static/images/btnbgimg.png") no-repeat center; padding: 13px 0}
.red{ color: #FF3366 !important}
.QRcode{float: right; margin-top: 4px}
.this-active{background:#FF3366 !important;color:#fff !important}
</style>



<script>
    export default{
           data() {
               return {
                  LogoCon:"Logo-Con",
			            logoImg:"/static/images/182326981374.png",
                   QRcode:"/static/images/QRcode.gif",
                  classification:{
                            commodity:"商品",
		                             shop:"店铺"
	                     		},
            SearchType:"商品",
            RecommendedProducts:[
				{text:{name:'裤头',link:'#11'}},
                {text:{name:'大衣',link:'#12',Recommend:'red'}},
                {text:{name:'毛裤',link:'#13'}},
                {text:{name:'高领毛衣',link:'#15'}},
                {text:{name:'套装',link:'#16',Recommend:'red'}},
                {text:{name:'围巾',link:'#17'}},
                {text:{name:'帽子',link:'#18'}},
                {text:{name:'打底裤',link:'#19'}},
                {text:{name:'棉秋裤',link:'#20',Recommend:'red'}},
                {text:{name:'iPhone7免费送',link:'#20',Recommend:'red'}},
                {text:{name:'棉卫衣',link:'#20'}}
			],
            RecommendedProductsStyle:{
            	display:'inline-block',
			      	paddingRight:'10px',
				      paddingTop:'8px',
			      	fontSize:"12px"
			},
            RecommendedProductsA:{
            	color:"#666"
            }
               }
           },
           methods:{
		add:function(e){
		         return this.SearchType=e.currentTarget.innerHTML
		}
	},
	mounted:function(){
           var Tab = document.getElementById("tab");
           var Btn = Tab.getElementsByTagName("span");
           for(var i=0; i<Btn.length; i++){
                Btn[i].onclick = function(){
                for(i=0;i<Btn.length;i++)
                {
                Btn[i].className=''
                 }
                this.className='this-active'
                }
           }
		}
        }
</script>

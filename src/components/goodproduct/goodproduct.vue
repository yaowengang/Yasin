<template>
  <div >
    <ul id="goodpro">
      <li class="Active"><a @click="add($event)"liType="">全部</a></li>
      <li><a @click="add($event)"liType="Outfit">穿搭</a></li>
      <li><a @click="add($event)"liType="Clothes">服饰</a></li>
      <li><a @click="add($event)"liType="ShoesHats">鞋包配</a></li>
      <li><a @click="add($event)"liType="LifeStyle">生活方式</a></li>
      <li><a @click="add($event)"liType="Beauty">美容美妆</a></li>
      <li><a @click="add($event)"liType="brand">品牌</a></li>
    </ul>
    <div id="staggered-list-demo">
      <input v-model="query" >
      <transition-group tag="ul" name="staggered-fade">
        <li
          v-for="(item, index) in computedList"
          :key="item.type"
          :data-index="index"
          class="lilist"
        >
          <div class="btimg">
            <img :src="item.BtImg">
            <div class="btbg">
              <h2><a>{{ item.H2title }}</a></h2>
              <h5><a>{{ item.CommodityNum + "款商品" }}</a></h5>
            </div>
          </div>
          <div class="twiimg">
        <ul>
          <li v-for="twiimg in item.twiImg">
            <div class="imgcon">
              <p>
                <img :src="twiimg.twiImglsrc" class="hidden">
                <img :src="twiimg.twiImglsrc">
              </p>
            </div>
            <p>{{ "￥" + twiimg.money }}</p>

          </li>
        </ul>
            </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>


<style>
  #goodpro{
   width:1200px; margin:0 auto; text-align:center
  }
  #goodpro li{ display:inline-block; width:111px; height:80px; text-align:center; }
  #goodpro li > a{ display:block; line-height:80px; cursor: pointer}
  #staggered-list-demo > ul{ width:1000px; height:auto; overflow:hidden; margin:0 auto}
 #staggered-list-demo .lilist{width:490px; height:502px; float:left; border:solid 1px #eee; margin-bottom:18px}
 #staggered-list-demo input{display:none}
#staggered-list-demo .lilist:nth-child(2n){ float:right}
.btimg{ width:100%; height:302px; overflow:hidden; position:relative }
.btimg img{ width:100%; display:block; transition:all 0.3s; position:absolute}
.btimg:hover img{-webkit-transform:scale(1.08,1.08);
    -moz-transform:scale(1.08,1.08);
    -transform:scale(1.08,1.08);}
 .btimg h2{position:absolute; bottom:20%; width:100%; text-align:center;font-size: 24px;  font-weight:500}
 .btimg h5{position:absolute; bottom:5%; width:100%; text-align:center;font-size: 14px; font-weight:400;}
 .btimg h2 a, .btimg h5 a{color:#fff;}
 .btbg{ width:100%; height:302px; background:url("/static/gpdimg/gpdbg.png") center bottom no-repeat ; position:absolute}
 .btbg a{ display:inline-block}

 .twiimg{ width:100%; height:auto; overflow:hidden}
 .twiimg li{ width:142px; height:171px; float:left; margin:16px 0 0 16px }
 .twiimg li p{    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: #333;}
 .twiimg li .imgcon{ width:142px; height:142px; position:relative;overflow:hidden;}
 .twiimg li .imgcon p{position:absolute;top:50%;left:50%;margin:0;padding:0;}
 .twiimg li .imgcon p img{position:absolute;top:-50%;left:-50%;display:block; width:145px}
 .twiimg li .imgcon p img.hidden{visibility:hidden;position:static;}
#goodpro .Active a{color:#FF3366 }

</style>
<script>
    export default{
        data(){
            return{
                query: '',
                 list: [
                      {
                      type: 'Outfit ShoesHats brand',
                      BtImg:'/static/gpdimg/goodpruduct1.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/goodpruduct1-2.png',money:'228'},
                       {twiImglsrc:'/static/gpdimg/goodpruduct1-3.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/goodpruduct1-4.jpg',money:'228'},
                      ]
                       },

                      { type: 'Beauty Chan Clothes',
                       BtImg:'/static/gpdimg/gpd2.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd2-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd2-2.png',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd2-3.png',money:'228'},
                      ]
                       },

                      { type: 'ShoesHats LifeStyle',
                       BtImg:'/static/gpdimg/gpd3.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd3-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd3-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd3-3.png',money:'228'},
                      ]
                       },

                      { type: 'ShoesHats Outfit Clothes',
                       BtImg:'/static/gpdimg/gpd4.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd4-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd4-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd4-3.jpg',money:'228'},
                      ]
                       },

                      { type: 'Beauty brand',
                       BtImg:'/static/gpdimg/gpd5.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd5-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd5-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd5-3.jpg',money:'228'},
                      ]
                       },
                       { type: 'ShoesHats brand LifeStyle Outfit',
                       BtImg:'/static/gpdimg/gpd6.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd6-1.png',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd6-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd6-3.jpg',money:'228'},
                      ]
                       },
                       { type: 'LifeStyle brand',
                       BtImg:'/static/gpdimg/gpd7.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd7-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd7-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd7-3.jpg',money:'228'},
                      ]
                       },
                       { type: 'Outfit Beauty',
                       BtImg:'/static/gpdimg/gpd8.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd8-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd8-2.png',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd8-3.jpg',money:'228'},
                      ]
                       },
                       { type: 'Clothes brand',
                       BtImg:'/static/gpdimg/gpd9.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd9-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd9-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd9-3.png',money:'228'},
                      ]
                       },
                       { type: 'Outfit Beauty',
                       BtImg:'/static/gpdimg/gpd10.png',
                      H2title:'额妈说，麻麻说 好女孩要配一双好鞋包',
                      CommodityNum:'666',
                      twiImg:[
                       {twiImglsrc:'/static/gpdimg/gpd10-1.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd10-2.jpg',money:'228'},
                       {twiImglsrc:'/static/gpdimg/gpd10-3.jpg',money:'228'},
                      ]
                       },

    ]
            }
        },
        computed: {
            computedList: function () {
                  var vm = this
                  return this.list.filter(function (item) {
                        return item.type.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
                           })
                        }
                   },
        methods: {
                beforeEnter: function (el) {
                    el.style.opacity = 0
                    el.style.height = 0
                                         },
                 add: function(e){
                 var vm = this
                   var sx =  e.currentTarget.getAttribute("liType")
                   return vm.query = sx
                 }
                 },
         mounted:function(){
           var Tab = document.getElementById("goodpro");
           var Btn = Tab.getElementsByTagName("li");
           for(var i=0; i<Btn.length; i++){
                Btn[i].onclick = function(){
                for(i=0;i<Btn.length;i++)
                {
                Btn[i].className=''
                 }
                this.className='Active'
                }
           }
		}
    }



</script>

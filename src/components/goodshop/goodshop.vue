<template>
     <div id="StoreRrecomm">
          <h3><span>品牌上新 · NEW ARRIVAL</span></h3>
       <ul>
         <li v-for="catList in CatList">
           <a id="logImg" href="http://s.meilishuo.com/16mo9lo?ptp=1.iCX4jb.brandonnew_mls__cici-shop官方旗舰店.1.5CVxl&shopapptag=1&mt=12.12593.r227871.29350&acm=3.mce.2_10_19rp2.12593.0.qCEq7XRMQrR.m_227871_29350" >
             <img :src="catList.logImg">
           </a>
           <ul class="catlist-right-ul">
             <li v-for="catli in catList.list">
                 <a id="catliImg" >
                    <img :src="catli.CatliImg">
                 </a>
                 <a id="catliImgBt">{{ catli.name }}</a>
               <div>
                 <span class="PresentPrice"> {{  catli.Money | currency }}</span>
                 <s class="oldPrice">{{ catli.oldMoney | currency }}</s>
               </div>
             </li>
           </ul>
         </li>
       </ul>
     </div>
</template>

<style>
#StoreRrecomm a{ display:block; cursor: pointer; transition:all 0.3s; overflow:hidden}
#StoreRrecomm img{transition:all 0.3s;}
#StoreRrecomm img:hover{-webkit-transform:scale(1.08,1.08);
    -moz-transform:scale(1.08,1.08);
    -transform:scale(1.08,1.08);}
#StoreRrecomm{ width:1200px; height:auto; margin:0 auto}
#StoreRrecomm img{ width:100%}
#StoreRrecomm h3{ width:365px; height:22px; margin:36px auto 50px; text-align:center; color:#666; font-size:24px; font-weight:400; border-bottom:solid 2px #666}
#StoreRrecomm h3 span{ display:inline-block; padding:10px 20px; background:#fff}
#StoreRrecomm ul{ height:auto; overflow:hidden;}
#StoreRrecomm ul li{height:auto; overflow:hidden;}
#StoreRrecomm ul li #logImg{ width:360px; height:738px; display:block;float:left}
.catlist-right-ul li{ width:190px; height:auto; margin-left:20px; margin-bottom:30px; float:left}
#catliImg{ width:190px; height:285px;}
#catliImgBt{width: 167px;
    padding: 15px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;}
.PresentPrice{font-size: 22px;
    color: #ff3366;
    margin-right: 4px;}
.oldPrice{
    color: #999;
font-size: 10px}
</style>

<script>
    export default{
       data (){
           return {
           CatList:[
                   {
                   logImg:'/static/catimg/catlist1.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist1-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist1-2.jpg",name:"秋冬新款呢子大衣女时尚简约百搭翻领毛呢外套女7394",oldMoney:"699",Money:"259"},
                      {CatliImg:"/static/catimg/catlist1-3.jpg",name:"早秋新款吊带连衣裙 中长款复古简约连衣裙女7119",oldMoney:"580.50",Money:"419"},
                      {CatliImg:"/static/catimg/catlist1-4.jpg",name:"早秋新款复古宽松猫咪图案毛衣女7133",oldMoney:"999",Money:"399"},
                      {CatliImg:"/static/catimg/catlist1-5.jpg",name:"早秋新款套头毛衣女复古绣花简约圆领长袖毛衣女7141",oldMoney:"788.50",Money:"380.50"},
                      {CatliImg:"/static/catimg/catlist1-6.jpg",name:"秋冬新款白衬衫女 长袖百搭简约时尚长袖衬衣女7300",oldMoney:"745.00",Money:"199"},
                      {CatliImg:"/static/catimg/catlist1-7.jpg",name:"秋冬新款针织毛衣女套头复古百搭高领条纹毛衣女7473",oldMoney:"1445.50",Money:"899"},
                      {CatliImg:"/static/catimg/catlist1-8.jpg",name:"秋冬新款百搭复古红双排扣修身呢子大衣女7262",oldMoney:"600.00",Money:"399"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist2.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"秋冬新款文艺海军领系带蝴蝶结毛呢外套中长款纯色长袖翻领呢大衣",oldMoney:"1445.50",Money:"999.99"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"宿本冬装新款文艺刺绣立领长袖棉衣女长款加厚棉服棉袄显瘦棉外套",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"绘本家冬装新款文艺简约娃娃领长袖系带呢大衣女中长茧型毛呢外套",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"宿本冬装新款文艺复古长袖单排扣连帽格子呢大衣女显瘦中长款外套",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"绘本家冬装新款文艺修身黑色轻薄款小圆领加长款棉衣棉袄外套棉服",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"绘本冬装新款文艺宽松西装领呢子大衣中长款军绿色毛呢外套女纯色",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"宿本冬装新款文艺娃娃领喇叭袖单排扣中长款羊毛呢大衣女呢子外套",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"流苏拼接黑白格子中长款衬衫裙黑色西装领马甲背心套装休闲套装",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist3.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist4.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist5.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist6.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist7.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   },
                   {
                   logImg:'/static/catimg/catlist8.jpg',
                   list:[
                      {CatliImg:"/static/catimg/catlist2-1.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-2.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-3.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-4.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-5.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-6.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-7.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                      {CatliImg:"/static/catimg/catlist2-8.jpg",name:"早秋新款复古运动拼色条纹毛衣连衣裙女7134",oldMoney:"1445.50",Money:"999"},
                   ]
                   }
                 ]

           }
       },
       filters:{
               currency: function (value){
                    var reg = /.*\..*/
                     if (!value){ return ''}
                     if(!reg.test(value)){
                      return value = "￥"+value+".00"
                     } else {
                      return value = "￥"+ value
                     }
               }
          }
    }
</script>

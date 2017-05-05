<template>
  <div id="list-complete-demo" class="demo" >
    <button class="change" @click="shuffle">换一批</button>
     <transition-group name="list-complete" tag="ul">
        <li
          :key="item"
          v-for="item in items"
          v-if="item.id < 21"
          class="list-complete-item"
        >
						<span class="youxuan">
							<img src="/static/images/youxuan.png" alt="">
						</span>
          <a id="prolistImg"><img :src="'/static/images/chanpin'+item.id+'.webp'" alt=""></a>
          <a class="titleBt">{{ item.title }}</a>
          <div>
            <span class="PresentPrice"> {{  item.Money | currency }}</span>
            <s class="oldPrice">{{ item.oldMoney | currency }}</s>
          </div>
          <div class="purchase">
            <div class="TheRemain">
              <p>{{ "仅剩" + item.Surplus + "件" }}</p>
              <div class="SurplusK"></div>
            </div>
            <button class="purchaseBtn">立即抢购</button>
          </div>
        </li>
          </transition-group>

  </div>

</template>
<style>
.bounce-transition {
    display: inline-block; /* 否则 scale 动画不起作用 */
}

#list-complete-demo{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    margin-top: 21px;
}
#list-complete-demo ul{
    width: 103%;
    height: 1950px;
}
#prolistImg{
   display:block;
   width:224px;
   height:340px;
   overflow:hidden;
   cursor: pointer
}

#prolistImg img{ transition:all 0.3s;}
#prolistImg img:hover{-webkit-transform:scale(1.08,1.08);
    -moz-transform:scale(1.08,1.08);
    -transform:scale(1.08,1.08);}


.TheRemain{ width: 96px;
    height:auto;
   float: left;
}

.TheRemain p{ font-size: 10px;
    color: #ff3366; margin-top: 5px; margin-bottom: 4px}

.SurplusK{
    width: 100%;
    height: 5px;
    border:solid 1px #FFA811;
    border-radius:5px
}

.titleBt{
    display: block;
    padding: 15px 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
}

.PresentPrice{font-size: 22px;
    color: #ff3366;
    margin-right: 4px;}
.oldPrice{
    color: #999;
font-size: 10px}

.youxuan{ width: 38px; display: inline-block; position: absolute; left: 15px; z-index:1}
.youxuan img{ width: 100%}

.purchaseBtn{    float: right;
    width: 96px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    background-color: #ff3366;
    -webkit-border-radius: 36px;
    border-radius: 36px;
    font-size: 14px;
    cursor: pointer;
}

.purchase{
 padding-bottom: 10px;
    height:auto;
    margin-top: 10px;
    overflow: hidden;
}

.change{ position: absolute; top: -69px; right: 0; background: #fff; border: solid 1px #ccc; color: #ccc; padding: 5px 15px; border-radius:25px; transition:all 0.6s}
.change:hover { background: #ff3366;
    color: #fff; border: solid 1px #ff3366}

#list-complete-demo li{
    width: 224px;
    margin-right: 21px;
    position: relative;
    margin-bottom: 20px;
}


.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}


.bounce-enter {
    animation: bounce-in .5s;
}
.bounce-leave {
    animation: bounce-out .5s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
</style>
<script>
    export default{
        data(){
            return{
               items: [
                {id:1,title:'冬季订制撞色立体字母工艺设计感卫衣',Money:'155',oldMoney:'249',Surplus:'100'},
                {id:2,title:'2016秋冬ASM/ 百搭水洗蓝 小阔腿毛边8分牛仔裤',Money:'199',oldMoney:'249',Surplus:'66'},
                {id:3,title:'【小番茄同款】2016韩国冬季百搭短款加厚保暖棉衣',Money:'68',oldMoney:'249',Surplus:'30'},
                {id:4,title:'2016秋冬ASM/ 百搭水洗蓝 小阔腿毛边8分牛仔裤',Money:'99',oldMoney:'249',Surplus:'50'},
                {id:5,title:'【柚子夫人同款】冬装中长款韩版连帽大毛领加棉米白色毛呢大衣',Money:'229',oldMoney:'249',Surplus:'98'},
                {id:6,title:'2016冬新品加厚粗线高领长袖针织套头毛衣',Money:'49',oldMoney:'249',Surplus:'162'},
                {id:7,title:'【ANNA同款】2016秋冬气质金棕色睡袍款腰带双面全毛大衣',Money:'179',oldMoney:'249',Surplus:'148'},
                {id:8,title:'2016新款韩版宽松套头刺绣中长款毛衣',Money:'190',oldMoney:'249',Surplus:'203'},
                {id:9,title:'2016冬季新款韩版纯色光板打底套头圆领T',Money:'299',oldMoney:'249',Surplus:'15'},
                {id:10,title:'鱼尾高腰裙复古荷叶边显瘦包臀裙',Money:'229',oldMoney:'249',Surplus:'196'},
                {id:11,title:'2016冬新款韩版字母长袖加绒套头卫衣',Money:'69',oldMoney:'249',Surplus:'196'},
                {id:12,title:'【小番茄同款】2016 秋冬韩版半高领圆领套头紧身毛衣',Money:'75',oldMoney:'249',Surplus:'196'},
                {id:13,title:'2016秋冬新品韩版百搭纯色宽松纹理V领针织毛衣',Money:'155',oldMoney:'249',Surplus:'196'},
                {id:14,title:'【sennos zhou同款】百搭纯色口袋羊毛超长呢大衣',Money:'128',oldMoney:'249',Surplus:'196'},
                {id:15,title:'【粗跟真皮】加绒保暖软牛皮缝线装饰粗跟后拉链及踝靴短靴女',Money:'88',oldMoney:'249',Surplus:'196'},
                {id:16,title:'秋冬加厚高领套头黑色新款钉珠中长款宽松打底针织衫',Money:'165',oldMoney:'249',Surplus:'196'},
                {id:17,title:'2016纯色欧美经典无领暗扣宽版羊毛呢外套',Money:'249',oldMoney:'249',Surplus:'196'},
                {id:18,title:'【钱夫人同款】CHINSTUDIO秋冬新款宽松老虎头毛衣',Money:'309',oldMoney:'249',Surplus:'196'},
                {id:19,title:'【sennos zhou同款】粗花呢编织肌理金属扣圆领大衣',Money:'250',oldMoney:'249',Surplus:'196'},
                {id:20,title:'【MALI同款】宫廷感花边纯色立领纹路衬衫',Money:'159',oldMoney:'249',Surplus:'196'},
                {id:21,title:'【钱夫人同款】围巾女冬季新款英伦风长款百搭学生格子披肩两用',Money:'155',oldMoney:'249',Surplus:'100'},
                {id:22,title:'2016冬季灯芯绒羊羔毛夹克韩版甜美宽松加厚棉衣外套女',Money:'199',oldMoney:'249',Surplus:'66'},
                {id:23,title:'2016新款秋冬季欧美撞色毛呢子单肩鲶鱼包',Money:'68',oldMoney:'249',Surplus:'30'},
                {id:24,title:'【小番茄定制】2016冬季新款贴身舒适打底短裤',Money:'99',oldMoney:'249',Surplus:'50'},
                {id:25,title:'【新款欧美燕子单排扣毛呢大衣',Money:'229',oldMoney:'249',Surplus:'98'},
                {id:26,title:'糖果色球球收腰显瘦超大毛领白鸭绒加厚羽绒服人造毛领',Money:'49',oldMoney:'249',Surplus:'162'},
                {id:27,title:'2016韩国秋冬季东大门新款条纹麻花女式毛衣',Money:'179',oldMoney:'249',Surplus:'148'},
                {id:28,title:'【小番茄同款】2016秋冬修身绑带刺绣五角星皮衣外套',Money:'190',oldMoney:'249',Surplus:'203'},
                {id:29,title:'2016冬季新款韩版大毛领加厚棉服',Money:'299',oldMoney:'249',Surplus:'15'},
                {id:30,title:'【sennos zhou同款】2016脚口开叉萝卜九分西装裤',Money:'229',oldMoney:'249',Surplus:'196'},
                {id:31,title:'2016冬纯色欧美高领立体浪漫木耳边连衣裙',Money:'69',oldMoney:'249',Surplus:'196'},
                {id:32,title:'2016冬季韩版新款连帽加厚过膝中长款棉服',Money:'75',oldMoney:'249',Surplus:'196'},
                {id:33,title:'秋冬新款韩版宽松学院收腰款羊毛呢外套',Money:'155',oldMoney:'249',Surplus:'196'},
                {id:34,title:'2016韩国中长拉链棉衣燕尾下摆真毛领可拆卸',Money:'128',oldMoney:'249',Surplus:'196'},
                {id:35,title:'秋冬新款圆领长袖修身打底毛衣',Money:'88',oldMoney:'249',Surplus:'196'},
                {id:36,title:'秋冬加厚高领套头黑色新款钉珠中长款宽松打底针织衫',Money:'165',oldMoney:'249',Surplus:'196'},
                {id:37,title:'2016纯色欧美经典无领暗扣宽版羊毛呢外套',Money:'249',oldMoney:'249',Surplus:'196'},
                {id:38,title:'【钱夫人同款】CHINSTUDIO秋冬新款宽松老虎头毛衣',Money:'309',oldMoney:'249',Surplus:'196'},
                {id:39,title:'【sennos zhou同款】粗花呢编织肌理金属扣圆领大衣',Money:'250',oldMoney:'249',Surplus:'196'},
                {id:40,title:'2016秋冬新款韩版宽松长袖显瘦打底必备针织衫',Money:'159',oldMoney:'249',Surplus:'196'}
                ],
            show: true,
            transitionName: 'fade'
            }
            },
          methods: {
              shuffle:function(){
                 this.items = _.shuffle(this.items)
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

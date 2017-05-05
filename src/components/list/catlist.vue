<template>
  <div id='Classification'>
  <ul>
    <li >
      <h4>{{ Btname }}</h4>
      <span class="fgxian"></span>
      <div class="CficCon">
        <ul>
          <li v-for="Cficlist in MensWear" :class="Cficlist.class">
            <a :href="Cficlist.href" :style="Cficlist.Bg" v-if="Cficlist.href!='/'"></a><div v-else><ul class="cpList">
            <a :href="chanpinList.link" v-for="chanpinList in Cficlist.CficConlist">{{chanpinList.name}}</a>
          </ul></div>
          </li>
        </ul>
      </div>
    </li>

    <li>
      <h4>{{ MensWearBt }}</h4>
      <span class="fgxian"></span>
      <div class="CficCon">
        <ul>
          <li v-for="Cficlist in CficCon" :class="Cficlist.class">
            <a :href="Cficlist.href" :style="Cficlist.Bg" v-if="Cficlist.href!='/'"></a><div v-else><ul class="cpList">
            <a :href="chanpinList.link" v-for="chanpinList in Cficlist.CficConlist">{{chanpinList.name}}</a>
          </ul></div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  </div>
</template>


<style>
#Classification{ width: 1200px; margin: 0 auto; margin-top:15px}
#Classification ul{ width: 100%;}
#Classification li h4{ margin-top: 20px; text-align: center; font-size: 24px;
    color: #666; font-weight: 500}
.fgxian{ display: block; margin: 0 auto; width:33px; height: 2px; margin-top: 15px; background: #ccc}
.CficCon{ margin-top: 35px;
    height:auto; overflow: hidden}
.CficCon ul{ width: 102% !important;}
.CficCon li{ display: inline-block; margin-bottom: 19px; float: left}
.CficCon li > a{ display: block; width: 100%; height: 100%}
.CficCon li div{display: block; height: 200px;     background-color: #F9F9F9;
    padding: 10px 20px;}
.CficCon li.li-w1{ width: 184px ; height:284px; margin-left: 19px}
.CficCon li.li-w2{ width: 285px; height:220px; margin-right: 19px}
.CficCon li.li-w3{ width: 590px ; height:284px;}
.cpList a{ display: inline-block; width: 81px; height: 20px; line-height: 20px; text-align: left; margin: 10px 0;
    }

</style>


<script>
    export default{
       data(){
            return {
            Btname:'时髦美裙',
            MensWearBt:'精品家居',
            CficCon:[
                {Bg:"background: url('/static/images/image1-1.png')",class:'li-w3',href:"http://www.meilishuo.com/search/catalog/10057100?action=home&mt=12.13052.r128080.16261&acm=3.mce.2_10_182pc.13052.0.9ulq5Bm6gfz.m_188348&ptp=1.zfrD1b.indexhotcate_mls_%20_%E7%A7%8B%E5%86%AC%E7%B2%BE%E9%80%89%E5%9B%9B%E4%BB%B6%E5%A5%97.1.zHm8a"},
                {Bg:"background: url('/static/images/image1-2.webp')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10057137?action=home&mt=12.13052.r128084.16261&acm=3.mce.2_10_182pe.13052.0.9ulq5Bm6gfA.m_188349"},
                {Bg:"background: url('/static/images/image1-3.webp')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10058706?action=home&mt=12.13052.r128085.16261&acm=3.mce.2_10_182pg.13052.0.9ulq5Bm6gfB.m_188350"},
                {Bg:"background: url('/static/images/image1-4.png')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10057133?action=home&mt=12.13052.r128086.16261&acm=3.mce.2_10_182pi.13052.0.9ulq5Bm6gfC.m_188351"},
                {Bg:"/",class:'li-w2',href:"/",CficConlist:[
                    {name:'地毯地垫',link:'#q1'},
                    {name:'墙贴',link:'#q2'},
                    {name:'玩具公仔',link:'#q3'},
                    {name:'梳妆小物',link:'#q4'},
                    {name:'小礼物',link:'#q5'},
                    {name:'香薰用品',link:'#q6'},
                    {name:'洗漱用品',link:'#q7'},
                    {name:'绿植盆栽',link:'#q8'},
                    {name:'餐饮用具',link:'#q9'},
                    {name:'收纳盒',link:'#q10'},
                    {name:'文具',link:'#q11'},
                    {name:'衣柜',link:'#q12'},
                    {name:'抱枕',link:'#q13'},
                    {name:'厨房电器',link:'#q14'},
                    {name:'装逼神器',link:'#q15'},
                ]},
                {Bg:"background: url('/static/images/image1-5.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10058365?action=home&mt=12.13052.r128088.16261&acm=3.mce.2_10_182pk.13052.0.9ulq5Bm6gfD.m_188352"},
                {Bg:"background: url('/static/images/image1-6.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10059653?action=home&mt=12.13052.r128094.16261&acm=3.mce.2_10_182pm.13052.0.9ulq5Bm6gfE.m_188353"},
                {Bg:"background: url('/static/images/image1-7.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10057059?action=home&mt=12.13052.r128095.16261&acm=3.mce.2_10_182po.13052.0.9ulq5Bm6gfF.m_188354"}
            ],

            MensWear:[
                {Bg:"background: url('/static/images/skirt1.png')",class:'li-w3',href:"http://www.meilishuo.com/search/catalog/10057100?action=home&mt=12.13052.r128080.16261&acm=3.mce.2_10_182pc.13052.0.9ulq5Bm6gfz.m_188348&ptp=1.zfrD1b.indexhotcate_mls_%20_%E7%A7%8B%E5%86%AC%E7%B2%BE%E9%80%89%E5%9B%9B%E4%BB%B6%E5%A5%97.1.zHm8a"},
                {Bg:"background: url('/static/images/skirt2.png')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10057137?action=home&mt=12.13052.r128084.16261&acm=3.mce.2_10_182pe.13052.0.9ulq5Bm6gfA.m_188349"},
                {Bg:"background: url('/static/images/skirt3.png')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10058706?action=home&mt=12.13052.r128085.16261&acm=3.mce.2_10_182pg.13052.0.9ulq5Bm6gfB.m_188350"},
                {Bg:"background: url('/static/images/skirt4.png')",class:'li-w1',href:"http://www.meilishuo.com/search/catalog/10057133?action=home&mt=12.13052.r128086.16261&acm=3.mce.2_10_182pi.13052.0.9ulq5Bm6gfC.m_188351"},
                {Bg:"/",class:'li-w2',href:"/",CficConlist:[
                    {name:'针织美裙',link:'#q1'},
                    {name:'牛仔半身裤',link:'#q2'},
                    {name:'毛衣裙',link:'#q3'},
                    {name:'小黑裙',link:'#q4'},
                    {name:'长裙',link:'#q5'},
                    {name:'高腰裙',link:'#q6'},
                    {name:'蕾丝裙',link:'#q7'},
                    {name:'伞裙',link:'#q8'},
                    {name:'包臀裙',link:'#q9'},
                    {name:'显瘦连衣裙',link:'#q10'},
                    {name:'蓬蓬裙',link:'#q11'},
                    {name:'A字群',link:'#q12'},
                    {name:'半身裙',link:'#q13'},
                    {name:'荷叶边美裙',link:'#q14'},
                    {name:'礼服裙',link:'#q15'}
                ]},
                {Bg:"background: url('/static/images/skirt5.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10058365?action=home&mt=12.13052.r128088.16261&acm=3.mce.2_10_182pk.13052.0.9ulq5Bm6gfD.m_188352"},
                {Bg:"background: url('/static/images/skirt6.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10059653?action=home&mt=12.13052.r128094.16261&acm=3.mce.2_10_182pm.13052.0.9ulq5Bm6gfE.m_188353"},
                {Bg:"background: url('/static/images/skirt7.png')",class:'li-w2',href:"http://www.meilishuo.com/search/catalog/10057059?action=home&mt=12.13052.r128095.16261&acm=3.mce.2_10_182po.13052.0.9ulq5Bm6gfF.m_188354"}
            ]
                }
            }
    }
</script>

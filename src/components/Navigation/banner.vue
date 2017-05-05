<template>
  <div class="banner">
    <div class="labelCon">
      <ul class="Labelul">
        <li  v-for="LableH3 in LableList" @mouseover="Bomb($event)" @mouseout="Remove($event)">
          <div class="LabelUlCon">
            <h3>{{ LableH3.bt }}</h3>
            <a :href="listLabel.link" :class="listLabel.Recommend" v-for="listLabel in LableH3.datalist">{{ listLabel.name }}</a>
          </div>
          <ul class="Detailed-list" >
            <li>
              <div class="ReLable1">
                <h3 >{{ LableH3.Subtitle }}</h3>
                <div class="ReLable1Con">
                  <a :href="listLabelT.link" :class="listLabelT.Recommend" v-for="listLabelT in LableH3.DetailedList">{{ listLabelT.name }}</a>
                </div>
              </div>
              <div class="ReLable2">
                <h3 >{{ LableH3.RecommendedLabel }}</h3>
                <div class="ReLable1Con">
                  <a :href="listLabelT.link" :class="listLabelT.Recommend" v-for="listLabelT in LableH3.DetailedList">{{ listLabelT.name }}</a>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div id="bannerCon">
      <div id="bannerImg">
        <ul>
          <li v-for="bannerImg in BannerList">
          <a href="#"><img :src="bannerImg.link" alt=""></a>
          </li>
        </ul>
        <a id="prev"></a>
        <a id="next"></a>
      </div>
      <ul class="sliderCon">
        <li class="cur"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>

  </div>
</template>


<style>
.banner{width: 1200px;
    height:auto;
   margin: 0 auto}
.labelCon{ width: 283px;
    float: left;
    height:auto;
    border: solid 1px #FF3366;
    border-top: none;
}
.Labelul{ width: 100%;
   }
.LabelUlCon{padding: 10.8px 0px; width: 90%;
    margin:0 auto; border-bottom: dashed 1px #ccc; background: url("/static/images/idid_ifrtom3dmqygcojumezdambqhayde_6x10.png") 245px no-repeat; }

.Labelul li{ width: 100%;
    color: #666; position: relative}
.Labelul li:first-child .LabelUlCon{border-top: none }
.Labelul li a{ display: inline-block; margin-right: 10px; font-size: 12px}
.Labelul li:last-child > div{ border-bottom: none;}
.Labelul li:first-child .active{border-top:none}
.Labelul li:last-child.active { border-bottom: none;}

.Detailed-list{position: absolute;
    z-index: 9;
    right: -237px;
    top: -1px;
    display: none;
    width: 238px;
    height:auto;
    background: #fff;
    border: solid 1px #FF3366;
}
.Detailed-list li{ background: #fff}
.ReLable1 h3{ padding: 11px 0; padding-left: 21px; display: block !important; margin-left: -1px; background: #fff}
.ReLable2 h3{ padding: 11px 0; padding-left: 20px; display: block !important; background: #fff}
.ReLable1Con{ padding: 0 20px; padding-bottom: 20px; padding-right: 0px}
.active{ width: 101% !important; background: #fff; margin-top: -1px; border-top: solid 1px #FF3366; border-bottom: solid 1px #FF3366}
.active .LabelUlCon{ border: none}
.active .Detailed-list{ display: block}

.ReLable1Con a{padding: 3px 0; margin-left: 5px}
.Labelul li h3{ display: inline-block; font-size: 14px; font-weight: 400; margin-right: 19px}


/*banner开始*/
.banner{ min-height: 468px;  margin-bottom: 20px}
#bannerCon{ width: 896px;
    height:447px;  float: right; margin-top: 21px; position: relative;
   }
#bannerImg{ width: 896px;
    height:447px;
    position: absolute;
    overflow: hidden;
}
#bannerImg li{ float: left}
#bannerImg ul{ position:relative; height: 447px}
#bannerImg li img{width: 896px;}
.sliderCon{ display: block;  bottom: 22px; text-align: center; position: relative; top: 419px}
.sliderCon li{ display: inline-block; margin: 0 3px; height: 10px; width: 10px; background: rgba(255,255,255,0.8); border-radius:10px; transition: all 0.3s; cursor: pointer}
.sliderCon li.cur{ width: 20px;}

#prev{width:36px;height: 44px; opacity: 0; background:url("/static/images/left.png") no-repeat;display: block;position: absolute;  top:46%; left: 0px; transition: all 0.6s}
#next{width:36px;height: 44px; opacity: 0; background:url("/static/images/right.png") no-repeat;display: block;position: absolute; top:46%; right: 0px; transition: all 0.6s}

#bannerImg:hover #next{opacity: 1}
#bannerImg:hover #prev{opacity: 1}
</style>






<script>

    export default{
        data(){
            return{
            LableList:[
                {
                    bt:'上衣',
                    // 副标题
                    Subtitle:'新品发布',
                    RecommendedLabel:'人气热销',
                    // 主分类
                    datalist:[
                        {name:'棉大衣',link:"#c2",Recommend:'red'},
                        {name:'卫衣',link:"#c3"},
                        {name:'棉服',link:"#c3",Recommend:'red'},
                        {name:'套装',link:"#c3"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'羽绒服',link:'#e2'},
                        {name:'运动衫',link:'#e2',Recommend:'red'},
                        {name:'V领上衣',link:'#e2'},
                        {name:'风衣',link:'#e2'},
                        {name:'牛仔外套',link:'#e2',Recommend:'red'},
                        {name:'衬衫',link:'#e2'},
                        {name:'毛衣',link:'#e2',Recommend:'red'},
                        {name:'长款T恤',link:'#e2',Recommend:'red'},
                        {name:'长款外套',link:'#e2'},
                        {name:'蕾丝衫',link:'#e2',Recommend:'red'},
                        {name:'貂皮大衣',link:'#e2'}

                    ]
                },
                {
                    bt:'裙子',
                    // 副标题
                    Subtitle:'应季裙子',
                    RecommendedLabel:'经典必备',
                    // 主分类
                    datalist:[
                        {name:'连衣裙',link:"#c4"},
                        {name:'冬季美裙',link:"#c5",Recommend:'red'},
                        {name:'衣裙套装',link:"#c3"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'吊带裙',link:'#e2'},
                        {name:'不规则裙',link:'#e2',Recommend:'red'},
                        {name:'蕾丝裙',link:'#e2'},
                        {name:'包臀裙',link:'#e2'},
                        {name:'一字领',link:'#e2',Recommend:'red'},
                        {name:'碎花裙',link:'#e2'},
                        {name:'假两件美裙',link:'#e2',Recommend:'red'},
                        {name:'针织美裙',link:'#e2',Recommend:'red'},
                        {name:'牛仔半身裙',link:'#e2'},
                        {name:'小黑裙',link:'#e2',Recommend:'red'},
                        {name:'貂皮大衣',link:'#e2'},

                    ]
                },
                {
                    bt:'裤子',
                    // 副标题
                    Subtitle:'应季新品',
                    RecommendedLabel:'畅销特卖',
                    // 主分类
                    datalist:[
                        {name:'牛仔裤',link:"#c4"},
                        {name:'毛裤',link:"#c5",Recommend:'red'},
                        {name:'秋裤',link:"#c3"},
                        {name:'打底裤',link:"#c3",Recommend:'red'}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'高腰阔腿裤',link:'#e2'},
                        {name:'破洞牛仔裤',link:'#e2',Recommend:'red'},
                        {name:'黑色小脚裤',link:'#e2'},
                        {name:'高腰裤',link:'#e2'},
                        {name:'西装裤',link:'#e2',Recommend:'red'},
                        {name:'衣裤套装',link:'#e2'},
                        {name:'连体裤',link:'#e2',Recommend:'red'},
                        {name:'牛仔裤',link:'#e2',Recommend:'red'}
                    ]
                },
                {
                    bt:'鞋子',
                    // 副标题
                    Subtitle:'畅销热卖',
                    RecommendedLabel:'潮品速递',
                    // 主分类
                    datalist:[
                        {name:'冬季新品',link:"#c4"},
                        {name:'短靴',link:"#c5",Recommend:'red'},
                        {name:'单鞋',link:"#c4"},
                        {name:'小白鞋',link:"#c4"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'长靴',link:'#e2'},
                        {name:'雪地靴',link:'#e2',Recommend:'red'},
                        {name:'冬季新品',link:'#e2'},
                        {name:'短靴',link:'#e2'},
                        {name:'踝靴',link:'#e2',Recommend:'red'},
                        {name:'小白鞋',link:'#e2'},
                        {name:'粗跟鞋',link:'#e2',Recommend:'red'},
                        {name:'高跟鞋',link:'#e2',Recommend:'red'},
                        {name:'单鞋',link:'#e2'},
                        {name:'运动鞋',link:'#e2',Recommend:'red'},
                        {name:'厚底鞋',link:'#e2'},

                    ]
                },
                {
                    bt:'配饰',
                    // 副标题
                    Subtitle:'当季新品',
                    RecommendedLabel:'畅销特卖',
                    // 主分类
                    datalist:[
                        {name:'手表',link:"#c4"},
                        {name:'耳饰',link:"#c5",Recommend:'red'},
                        {name:'锁骨链',link:"#c3",Recommend:'red'}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'手套',link:'#e2'},
                        {name:'堆堆袜',link:'#e2',Recommend:'red'},
                        {name:'披肩',link:'#e2'},
                        {name:'短袜',link:'#e2'},
                        {name:'渔夫帽',link:'#e2',Recommend:'red'},
                        {name:'发誓',link:'#e2'},
                        {name:'宽毡帽',link:'#e2',Recommend:'red'},
                        {name:'冬季围巾',link:'#e2',Recommend:'red'},
                        {name:'指甲贴',link:'#e2'},
                        {name:'棒球帽',link:'#e2',Recommend:'red'}
                    ]
                },
                {
                    bt:'美妆',
                    // 副标题
                    Subtitle:'面部护肤',
                    RecommendedLabel:'香水',
                    // 主分类
                    datalist:[
                        {name:'眉笔眉粉',link:"#c4"},
                        {name:'面膜',link:"#c5",Recommend:'red'},
                        {name:'洁面',link:"#c3"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'面膜',link:'#e2'},
                        {name:'爽肤水',link:'#e2',Recommend:'red'},
                        {name:'精华',link:'#e2'},
                        {name:'洁面',link:'#e2'},
                        {name:'眼霜',link:'#e2',Recommend:'red'},
                        {name:'防晒霜',link:'#e2'},
                        {name:'护肤套装',link:'#e2',Recommend:'red'}
                    ]
                },
                {
                    bt:'内衣',
                    // 副标题
                    Subtitle:'应季新品',
                    RecommendedLabel:'畅销特卖',
                    // 主分类
                    datalist:[
                        {name:'内衣套装',link:"#c4"},
                        {name:'袜子',link:"#c5",Recommend:'red'},
                        {name:'文胸',link:"#c3",Recommend:'red'},
                        {name:'裹胸',link:"#c3"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'聚拢内衣',link:'#e2'},
                        {name:'保暖内衣',link:'#e2',Recommend:'red'},
                        {name:'无痕内衣',link:'#e2'},
                        {name:'前扣内衣',link:'#e2'},
                        {name:'性感睡衣',link:'#e2',Recommend:'red'},
                        {name:'蕾丝内衣',link:'#e2'},
                        {name:'薄款内衣',link:'#e2',Recommend:'red'},
                        {name:'比基尼',link:'#e2',Recommend:'red'}
                    ]
                },
                {
                    bt:'包包',
                    // 副标题
                    Subtitle:'人气精选',
                    RecommendedLabel:'畅销热卖',
                    // 主分类
                    datalist:[
                        {name:'锁链包',link:"#c4"},
                        {name:'斜挎包',link:"#c5",Recommend:'red'},
                        {name:'迷你包',link:"#c3"},
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'手拿包',link:'#e2'},
                        {name:'手提包',link:'#e2',Recommend:'red'},
                        {name:'双肩包',link:'#e2'},
                        {name:'单肩包',link:'#e2'},
                        {name:'大包',link:'#e2',Recommend:'red'},
                        {name:'小包',link:'#e2'},
                        {name:'零钱包',link:'#e2',Recommend:'red'},
                        {name:'钱包',link:'#e2',Recommend:'red'},
                        {name:'斜挎包',link:'#e2'},
                        {name:'行李箱',link:'#e2',Recommend:'red'},
                        {name:'帆布包',link:'#e2'},
                        {name:'收纳包',link:'#e2'},
                        {name:'化妆包',link:'#e2'}

                    ]
                },
                {
                    bt:'男友',
                    // 副标题
                    Subtitle:'应季潮品',
                    RecommendedLabel:'鞋包服饰',
                    // 主分类
                    datalist:[
                        {name:'冬季新品',link:"#c4",Recommend:'red'},
                        {name:'卫衣',link:"#c5"},
                        {name:'牛仔裤',link:"#c3",Recommend:'red'}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'外套',link:'#e2'},
                        {name:'套装',link:'#e2',Recommend:'red'},
                        {name:'针织衫',link:'#e2'},
                        {name:'休闲裤',link:'#e2'},
                        {name:'牛仔裤',link:'#e2',Recommend:'red'},
                        {name:'衬衫',link:'#e2'},
                        {name:'风衣',link:'#e2',Recommend:'red'},
                        {name:'棒球衫',link:'#e2',Recommend:'red'}
                    ]
                },
                {
                    bt:'童装',
                    // 副标题
                    Subtitle:'新品发布',
                    RecommendedLabel:'人气热销',
                    // 主分类
                    datalist:[
                        {name:'女童套装',link:"#c4"},
                        {name:'男童套装',link:"#c5",Recommend:'red'},
                        {name:'冬季新品',link:"#c3"}
                    ],
                    // 副分类
                    DetailedList:[
                        {name:'羽绒服',link:'#e2'},
                        {name:'运动衫',link:'#e2',Recommend:'red'},
                        {name:'V领上衣',link:'#e2'},
                        {name:'风衣',link:'#e2'},
                        {name:'牛仔外套',link:'#e2',Recommend:'red'},
                        {name:'衬衫',link:'#e2'},
                        {name:'毛衣',link:'#e2',Recommend:'red'},
                        {name:'长款T恤',link:'#e2',Recommend:'red'},
                        {name:'长款外套',link:'#e2'},
                        {name:'蕾丝衫',link:'#e2',Recommend:'red'},
                        {name:'貂皮大衣',link:'#e2'},

                    ]
                },
                {
             bt:'家居',
             // 副标题
             Subtitle:'新品发布',
             RecommendedLabel:'人气热销',
             // 主分类
                 datalist:[
             {name:'四件套',link:"#c4",Recommend:'red'},
             {name:'衣柜',link:"#c5"},
             {name:'收纳盒',link:"#c3"}
         ],
             // 副分类
             DetailedList:[
                 {name:'羽绒服',link:'#e2'},
                 {name:'运动衫',link:'#e2',Recommend:'red'},
                 {name:'V领上衣',link:'#e2'},
                 {name:'风衣',link:'#e2'},
                 {name:'牛仔外套',link:'#e2',Recommend:'red'},
                 {name:'衬衫',link:'#e2'},
                 {name:'毛衣',link:'#e2',Recommend:'red'},
                 {name:'长款T恤',link:'#e2',Recommend:'red'},
                 {name:'长款外套',link:'#e2'},
                 {name:'蕾丝衫',link:'#e2',Recommend:'red'},
                 {name:'貂皮大衣',link:'#e2'},
             ]
         }
            ],
            BannerList:[
                {link:'/static/images/banner1.png'},
                {link:'/static/images/banner2.jpg'},
                {link:'/static/images/banner3.png'},
                {link:'/static/images/banner1.png'},
                {link:'/static/images/banner2.jpg'}
            ]
            }
        },
        methods:{
        Bomb:function(e){
           e.currentTarget.setAttribute('class','active');
        },
        Remove:function(e){
           e.currentTarget.setAttribute('class','');
        }
        },
        mounted:function(){
             var n = 1
            $(".sliderCon li").click(function(){
                $(".sliderCon li").removeClass("cur");
                $(this).addClass("cur");
                var index = $(this).index(".sliderCon li");
                $("#bannerImg li").fadeOut(100);
                $("#bannerImg li").eq(index).fadeIn(100);
            });
            function auto(){
                $(".sliderCon li").eq(n).trigger("click");
                 n++;
                if(n==5){
                  return n=0
                }
            };
            $("#next").on("click",function(){
                $(".sliderCon li").eq(n).trigger("click");
                 n++
                if(n>=5){
                   return n=0
                }
            });
            $("#prev").on("click",function(){
                n--
                $(".sliderCon li").eq(n).trigger("click");

                if(n<=0){
                      n=5
                }
            });
            var Ks = setInterval(auto,3500)
            $("#bannerImg").hover(function(){
                clearInterval(Ks)
            },function(){
                Ks = setInterval(auto,3500)
            })
        }

    }
</script>




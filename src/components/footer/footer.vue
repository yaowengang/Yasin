<template>
  <div class="footer_con">
    <div class="footer_cen">
      <div class="foot_ulCon">
        <ul v-for="Footul in footUl" :class="Footul.UlaClass">
          <h3>{{ Footul.footUltit }}</h3>
          <li v-for="Footli in Footul.footList">
            <a href="#" v-if="Footli.footListName != '/'"><span :class="Footul.spanClass" :style="Footli.BgImage"></span>{{ Footli.footListName }}</a><img :src="Footli.ImgSrc" v-else>
          </li>
        </ul>
      </div>
      <p>{{ beian }}</p>
      <p>{{ beian2 }}</p>
    </div>
  </div>
</template>

<style>
.footer_con{ height: auto; overflow: hidden; border-top: 1px solid #ddd; background: #f5f5f5;padding-top: 30px; padding-bottom:20px}
.footer_cen{ width: 1200px; margin: 0 auto; height: auto; overflow: hidden}
.footer_cen p{ text-align: center; font-size: 12px; color:#666; padding-top: 10px}
.foot_ulCon{ height: auto; overflow: hidden; border-bottom: solid 1px #e6e6e6; padding-bottom: 24px}
.foot_ulCon ul{ float: left; margin-left: 104px;}
.foot_ulCon ul:first-child{ margin: 0}
.foot_ulCon ul h3{ color: #666}
.foot_ulCon ul li{ margin-top: 20px; font-size: 12px}
.li_span{ width: 18px; height: 18px; display: inline-block;float: left; margin-right: 5px; margin-top: 2px }
.fl_r{ float: right !important;}
.fl_r img{ display: block; margin: 0 auto}
</style>

<script>
    export default{
        data(){
            return{
                footUl:[
                  {
                  footUltit:"买家帮助",
                  show:1,
                  footList:[
                      {footListName:"新手指南"},
                      {footListName:"服务保障"},
                      {footListName:"常见问题"},
                      {footListName:"风险检测"}
                      ]
                  },

                  {
                      footUltit:"商家帮助",
                      show:1,
                      footList:[
                          {footListName:"商家入驻"},
                          {footListName:"商家后台"}
                      ]
                  },
                  {
                      footUltit:"关于我们",
                      show:1,
                      footList:[
                          {footListName:"关于美丽说"},
                          {footListName:"联系我们"}
                      ]
                  },
                  {
                      footUltit: "关注我们",
                      show:1,
                      spanClass: "li_span",
                      footList: [
                          {footListName: "新浪微博",BgImage: "background: url(/static/images/bgimg.png) 0px 0px no-repeat"},
                          {footListName: "QQ空间",BgImage: "background: url(/static/images/bgimg.png) -28px 0px no-repeat"},
                          {footListName: "腾讯微博",BgImage: "background: url(/static/images/bgimg.png) -56px 0px no-repeat"}
                      ]
                  },
                  {
                      footUltit:"美丽说微信服务号",
                      UlaClass:'fl_r',
                      show:1,
                      footList:[
                          {footListName:"/",ImgSrc:"/static/images/erweim.png"}
                      ]
                  },
                  {
                      footUltit:"美丽说客户端下载",
                      UlaClass:'fl_r',
                      show:0,
                      footList:[
                          {footListName:"/",ImgSrc:"/static/images/erweim2.png"}
                      ]
                  }
              ],
            beian:"Copyright ©2016 Meilishuo.com  电信与信息服务业务经营许可证100798号 经营性网站备案信息",
            beian2:"京ICP备11031139号  京公网安备110108006045   客服电话：4000-800-577  文明办网文明上网举报电话：010-82615762  违法不良信息举报中心"
            }
        }
    }
</script>

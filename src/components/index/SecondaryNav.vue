<template>
  <div class="fourCon">
    <ul class="fourimg">
      <li v-for="fourImg in FourImage">
        <a :href="fourImg.link"><img :src="fourImg.src" alt=""></a>
      </li>
    </ul>
    <!--广告副-->
    <a :href="Advertisement.link" class="guanggao">
      <img :src="Advertisement.src" alt="">
    </a>
  </div>
  <!--广告副-->

</template>
<style>
 .fourCon{ width: 1200px; height: auto;  margin: 0 auto}
.fourimg{ width: 105%}
.fourimg li{ display: inline-block; margin-right: 20px}
.guanggao{ width: 1200px;  display: block; margin: 0px auto; margin-top: 20px}
</style>
<script>

    export default{
          data() {
               return {
               FourImage:[
                {src:'/static/images/image1.webp',link:'#img1'},
                {src:'/static/images/image2.webp',link:'#img2'},
                {src:'/static/images/image3.webp',link:'#img3'},
                {src:'/static/images/image4.webp',link:'#img4'}
                ],
            Advertisement:{
                src:'/static/images/guanggao.jpg',
                link:'#guanggao1'
            }
               }
               }
    }
</script>

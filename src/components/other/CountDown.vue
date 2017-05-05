<template>
    <div id="timeCon">
      <p class="timer">
        距离结束还有
        <span>{{ Day }}</span>天
        <span>{{ Hour }}</span>时
        <span>{{ Min }}</span>分
        <span>{{ Second }}</span>秒
      </p>
    </div>
</template>

<style>
.timer{ width: 1200px; margin: 0 auto;
    height:68px; line-height: 68px; font-size: 18px;
    color: #666; padding-left: 10px; border-bottom: solid 1px #eee}
.timer span{  padding:0 4px; background: #000;
    color: #fff; margin: 0 10px; border-radius:4px;}
</style>

<script>
    export default{
          data(){
             return {
              TotalTime:'6000',
              Day:'',
              Hour:'',
              Min:'',
              Second:''
             }
          },
             mounted:function(){
                  var _this=this;
                  Start();

        function Start(){
            _this.TotalTime--;
            _this.Second = _this.TotalTime%60;
            _this.Day = Math.floor(_this.TotalTime/(24*60*60*6));
            _this.Hour = Math.floor((_this.TotalTime-_this.Day*24*60*60)/3600);
            _this.Min = Math.floor((_this.TotalTime-_this.Day*24*60*60-_this.Hour*3600)/60);
            _this.Second < 10 ? _this.Second="0"+ _this.TotalTime%60:_this;
            _this.Min < 10 ? _this.Min="0"+ Math.floor((_this.TotalTime-_this.Day*24*60*60-_this.Hour*3600)/60):_this;
            _this.Hour < 10 ? _this.Hour="0"+ Math.floor((_this.TotalTime-_this.Day*24*60*60)/3600):_this;
            _this.Day < 10 ? _this.Day="0"+ Math.floor(_this.TotalTime/(24*60*60*6)):_this;

            if(_this.TotalTime < 1){
                 stop();
                alert("快抢！快抢！赶快抢！！！")
            }
        }

        var Timer = setInterval(Start,1000);

        function stop(){
            clearInterval(Timer)
        }
             }

    }
</script>

$(document).ready(function(e) {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/integralCenter/luckWheel.css');
    require('../../ui/awardRotate.js');
    var awardAlert = require('../../ui/Alert.js');
    var turnplate={
            restaraunts:["30M流量", "30元话费", "400积分", "300积分", "5元现金券", "0.5%加息券"],               //大转盘奖品名称
            colors:["#efe3fa", "#f7f2ff", "#efe3fa", "#f7f2ff","#efe3fa", "#f7f2ff"],                    //大转盘奖品区块对应背景颜色
            outsideRadius:170,          //大转盘外圆的半径
            textRadius:140,             //大转盘奖品位置距离圆心的距离
            insideRadius:50,            //大转盘内圆的半径
            startAngle:0,               //开始角度
            bRotate:false,               //false:停止;ture:旋转
            alertInfo: [
              function info30m(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-30m"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中30M流量！</p>')
              },
              function info30y(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-30y"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中30元话费！</p>')
              },
              function info400f(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-400f"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中400积分！</p>')
              },
              function info300f(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-300f"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中300积分！</p>')
              },
              function info5q(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-5q"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中5元现金券一张！</p>')
              },
              function info05q(){
                return $('<em class="award-star"></em>'+
                          '<span class="ico-05q"></span>'+
                          '<h2 class="award-suc">抽中奖品！</h2>'+
                          '<p class="award-about">恭喜您抽中0.5%加息券一张！</p>')
              }
            ]
    };
    function drawRouletteWheel() {    
      var canvas = document.getElementById("wheelcanvas");    
      if (canvas.getContext) {
          //根据奖品个数计算圆周角度
          var arc = Math.PI / (turnplate.restaraunts.length/2);
          var ctx = canvas.getContext("2d");
          //在给定矩形内清空一个矩形
          ctx.clearRect(0,0,370,370);
          //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  
          ctx.strokeStyle = "#e8defc";
          //font 属性设置或返回画布上文本内容的当前字体属性
          ctx.font = '16px Microsoft YaHei';      
          for(var i = 0; i < turnplate.restaraunts.length; i++) {       
              var angle = turnplate.startAngle + i * arc;
              ctx.fillStyle = turnplate.colors[i];
              ctx.beginPath();
              //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）    
              ctx.arc(186, 186, turnplate.outsideRadius, angle, angle + arc, false);    
              ctx.arc(186, 186, turnplate.insideRadius, angle + arc, angle, true);
              ctx.stroke();  
              ctx.fill();
              //锁画布(为了保存之前的画布状态)
              ctx.save();   
              
              //----绘制奖品开始----
              ctx.fillStyle = "#8141eb";
              var text = turnplate.restaraunts[i];

              //translate方法重新映射画布上的 (0,0) 位置
              ctx.translate(186 + Math.cos(angle + arc / 2) * turnplate.textRadius, 186 + Math.sin(angle + arc / 2) * turnplate.textRadius);
              
              //rotate方法旋转当前的绘图
              ctx.rotate(angle + arc / 2 + Math.PI / 2);

              ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
              
              //添加对应图标
              if(text.indexOf("30M流量") == 0){
                  var img= $("#m30-img").get(0);
                  ctx.drawImage(img,-25,8);  
              }else if(text.indexOf('30元话费') == 0){
                var img = $('#y30-img').get(0);
                ctx.drawImage(img,-15,8);
              }else if(text.indexOf('400积分') == 0){
                var img = $('#f400-img').get(0);
                ctx.drawImage(img,-30,8);
              }else if(text.indexOf('300积分') == 0){
                var img = $('#f300-img').get(0);
                ctx.drawImage(img,-30,8);
              }else if(text.indexOf('5元现金券') == 0){
                var img = $('#q5-img').get(0);
                ctx.drawImage(img,-36,8);
              }else if(text.indexOf('0.5%加息券') == 0){
                var img = $('#q05-img').get(0);
                ctx.drawImage(img,-35,8);
              }
              //把当前画布返回（调整）到上一个save()状态之前 
              ctx.restore();
              //----绘制奖品结束----
          }     
      } 
    }
    
    //转盘进行渲染
    drawRouletteWheel();

    function rnd(n, m){
      var random = Math.floor(Math.random()*(m-n+1)+n);
      return random;
      
    }
    //旋转转盘 item:奖品位置; txt：提示语;
    var rotateFn = function (item, txt){
      var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
      if(angles<270){
        angles = 270 - angles; 
      }else{
        angles = 360 - angles + 270;
      }
      $('#wheelcanvas').stopRotate();
      $('#wheelcanvas').rotate({
        angle:0,
        animateTo:angles+1800,
        duration:8000,
        callback:function (){
          var award = new awardAlert({
            titleHtml : txt(),
            btnHtml : '知道啦'
          });
          award.open();
          turnplate.bRotate = !turnplate.bRotate;
        }
      });
    };

    $('.pointer').on('click',function (){
      if(turnplate.bRotate)return;
      turnplate.bRotate = !turnplate.bRotate;

      //获取随机数(奖品个数范围内)
      var item = rnd(1,turnplate.restaraunts.length);

      //奖品数量等于6,指针落在对应奖品区域的中心角度[240, 180, 120, 60, 360, 300]
      rotateFn(item, turnplate.alertInfo[item-1]);
      console.log(item);
    });

    
});
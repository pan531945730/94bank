;
$(function() {
    require('../../common/layout.css');
    //require('../../common/layout.js');
    require('../../css/activity/activityCountdown.css');
   
    //倒计时
    function addzero(a){
        if(a<10){
            return a='0'+a;
        }else{return a}
    }
    function caculateDate(time){
        var d = parseInt(time/86400);
        var h = parseInt((time%86400)/3600);
        var m = parseInt(((time%86400)%3600)/60);
        var s = parseInt(((time%86400)%3600)%60);
        var t = '<span class="day">'+addzero(d)+'</span><span class="hours">'+addzero(h)+'</span><span class="minute">'+addzero(m)+'</span>';
        return t;
    }
    function countDownFun(nowTime,endTime,Time){
        var time =(Date.parse(endTime) - Date.parse(nowTime))/1000;
        if(time <= 0){
            return;
        }
        Time.html(caculateDate(time));
        var clearTime = setInterval(function(){
            time -= 1;
            Time.html(caculateDate(time));
            if(time <= 0){
                clearInterval(clearTime)
            }
        },1000);
    }
    
    var endTime= new Date('2017/02/18 00:00:00'),
        nowTime = new Date(),
        countDownMod = $('.atcd-mod');
    countDownFun(nowTime,endTime,countDownMod);
});
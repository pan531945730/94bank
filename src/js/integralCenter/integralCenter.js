;
$(function() {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/integralCenter/integralCenter.css'); 
    require('../../component/website/Load.css');
    var alert = require('../../ui/Alert.js');
    var signAlert = new alert({
        titleHtml : '<div class="integral">+<span>5</span>积分</div>'
                        +'<div class="suc-ico"></div>'
                        +'<p class="suc">签到成功</p>'
                        +'<p class="goon">恭喜您获得5积分,明天继续来签到</p>',
        btnHtml: '知道啦'
    });
    
    var mbLoad = $('.load'),
        earnTip = $('.earn-tip i'),
        tipText = $('.earn-tip em'),
        allPrice = $('#all_price'),
        earnPrice = $('#earn_price'),
        signBtn = $('#sign-btn');

    var baseDate = {
        data : {},
        mFun : 'GetMemberAccount',
        beforeFun : function(){
            mbLoad.show();
        },
        sucFun : function(v){
            allPrice.html(v.regularAmountText);
            earnPrice.html(v.dingqiCount);
        },
        unusualFun : function(v){
            mbLoad.hide();
        }

    }; 
    JSBK.Utils.postAjax(baseDate);
    signBtn.on('click',function(){
        signAlert.open();
    })
    earnTip.on('click',function(e){
        tipText.show();
        e.stopPropagation();
    });

    $(document).on('touchstart',function(e){
        tipText.hide();
        e.stopPropagation();
    })

    //模板
    function htmlTep(dd,arr){
        $.each(dd,function(i,v){
            var html = '';
            html += '<li><div class="ic-lab"><i class="newreg"></i></div>';
            html += '<div class="ic-sty"><p>新手注册</p>';
            html += '<p><span class="fc01">积分</span><span class="fc02">+1000</span></p></div>';
            html += '<a href="javascript:void(0);" class="ic-link">领取</a></li>';
            arr.push(html);
        })
    }

    //初始化
    var sfData = {
        data: {
            'PageIndex': 1,
            'PageSize' : 10
        },
        mFun: 'GetMyRegularProductData',
        beforeFun : function(){
            mbLoad.show();
        },
        sucFun : function(v){
            var arr = [] ;
            mbLoad.hide();
            
            if(!v || v.length == 0){
               
            }
            htmlTep(v,arr);
            $('.sf-info').append(arr.join(''));
            if(v.length >= 10){
                new GetMoreMb();
            }   
        },
        unusualFun : function(v){
            mbLoad.hide();
            
        }
    }
    JSBK.Utils.postAjax(sfData);  

});
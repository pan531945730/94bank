;
$(function() {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/integralCenter/integralRecord.css'); 
    require('../../component/website/Load.css');
    
    var mbLoad = $('.load');
    var baseDate = {
        data : {},
        mFun : 'GetMemberAccount',
        beforeFun : function(){
            mbLoad.show();
        },
        sucFun : function(v){
           
        },
        unusualFun : function(v){
            mbLoad.hide();
        }

    }; 
    JSBK.Utils.postAjax(baseDate);

    //模板
    function htmlTep(dd,arr){
        $.each(dd,function(i,v){
            var html = '';
                
            html += '<li><em class="ir-ico"></em>'; 
            html += '<div class="ir-tit"><p>签到</p><span>2016-10-21</span></div>';
            html += '<div class="ir-num">+5</div>';
            html += '</li>';
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
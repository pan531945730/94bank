;
$(function() {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/accountCenter/steward.css'); 
    require('../../component/website/Load.css');
    var mbNone = $('.none-info'),
        mbLoad = $('.load'),
        redeem = $('#redeem'),
        allPrice = $('#all_price'),
        earnPrice = $('#earn_price');

    var baseDate = {
        data : {},
        mFun : 'GetMemberAccount',
        beforeFun : function(){
            mbLoad.show();
        },
        sucFun : function(v){
            allPrice.html(v.currentAmountText);
            earnPrice.html(v.yesterdayEarn);
        },
        unusualFun : function(v){
            mbLoad.hide();
        }

    }; 
    JSBK.Utils.postAjax(baseDate);  
    
    //初始化
    var sfData = {
        data: {},
        mFun: 'GetMyCurrentProductData',
        beforeFun : function(){
            mbLoad.show();
        },
        sucFun : function(v){
            var arr = [],
                list = v.myCurrentProductData;
            mbLoad.hide();
            mbNone.hide();
            if(v.redeemTotalAmount > 0){
                redeem.html(v.redeemTotalAmountText+'元');
            }else{
                $('.sf-bot').hide();
            }
            
            if(!list || list.length == 0){
                mbNone.show();
                return;
            }

            $.each(list,function(i,v){
                var html = '';
                    
                html += '<li><h2>'+v.title;
                if (v.redeemStatus == 0){
                    html += '<a href="/Order/ProductRansom?productid='+v.id+'&producttypeid='+v.typeId+'&tradingid='+v.tradingID+'&type=2" class="get-btn">赎回</a>';
                }
                html += '</h2>'
                html += '<a href="MyCurrentProductDataDetail?tradingid='+v.tradingID+'&productId='+v.id+'" class="info-mod"><div class="m-price">';
                html += '<p>'+v.totalProductPriceText+'</p><span>在投金额</span></div>';
                html += '<div class="m-earn"><p class="earn-f">'+v.interestText+'</p><span>昨日收益</span></div>';
                html += '<div class="m-time"><p>'+v.yesterdayInterestRateText+'</p><span>昨日年化收益率</span></div></a></li>'
                arr.push(html);
            })
            
            $('.sf-info').append(arr.join(''));   
        },
        unusualFun : function(v){
            mbLoad.hide();
            mbNone.show();
        }
    }
    JSBK.Utils.postAjax(sfData);  

});
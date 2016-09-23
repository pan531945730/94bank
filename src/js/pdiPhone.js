;
$(function() {
    require('../common/layout.css');
    require('../common/layout.js');
    require('../css/pdiPhone.css');        

    var productId = JSBK.Utils.GetUrlSearch().ProductId,
        pdLoad = $('.pd-load');
    $.ajax({
        url: 'http://d.94bank.com/ProductDetail/GetProductDetail',
        type: 'get',
        jsonp: 'callback',
        dataType: 'jsonp',
        data: {
            "productId": productId
        },
        beforeSend : function(xhr,settings){
            pdLoad.show();
        },
        success: function(data) {
            if (data != null) {
                pdLoad.hide();
                $('#tit').html(data.Title);
                $('#earn').html(data.InterestRateText);
                $('#limit').html(data.InvestmentTimeText);
                $('#amount').html(data.StartAmount + '元');
                $('.rule').html(data.SaleRule);
                $('.describe').html(data.ProjectDetail);
                $('.security').html(data.FundSecurityDetail);
                var des = "";
                if (productId == "41") {
                    des = "每日收益到账";
                } else if (productId == "2011") {
                    des = "次日收益到账";
                } else {
                    des = "到期后返还本金收益";
                }
                $('#way').html(des);
            }
        },
        error: function(text) {
            pdLoad.hide();
        }
    });
})
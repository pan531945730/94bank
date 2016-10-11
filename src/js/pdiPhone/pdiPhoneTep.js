;
$(function() {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/pdiPhone/pdiPhoneTep.css');        
    
    String.prototype.temp = function(obj) {
        return this.replace(/\$\w+\$/gi, function(matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];       
            return (returns + "") == "undefined"? "": returns;
        });
        
    }
    
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
        beforeSend: function(xhr,settings){
            pdLoad.show();
        },
        success: function(data) {
            if (data != null) {
                pdLoad.hide();

                if (productId == "41") {
                    data.des = "每日收益到账";
                } else if (productId == "2011") {
                    data.des = "次日收益到账";
                } else {
                    data.des = "到期后返还本金收益";
                }

                var htmlList = '',
                    htmlTemp = $("textarea").val();

                htmlList = htmlTemp.temp(data);
                pdLoad.before(htmlList);
            }
        },
        error: function(text) {
            pdLoad.hide();
        }
    });
})
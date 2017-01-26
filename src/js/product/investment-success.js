$(document).ready(function(e) {
	require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/product/investment-success.css');
	var endDay = $('.endDay'),
		regularProductDataDetail = $('#RegularProductDataDetail'),
		load = $('.pd-load'),
		timeLi = $('.time-line li');
	$('#signNow').attr('href','/Order/Signature?tradingId='+JSBK.Utils.GetQueryString('TradingId')+'&productID='+JSBK.Utils.GetQueryString('ProductID'));
    var productID = JSBK.Utils.GetQueryString('ProductID');
    var GetBillDetail = {
		data:{
			TradingId:JSBK.Utils.GetQueryString('TradingId'),
			TradingType:1,
			OperateSource:1
		},
		mFun:'GetBillDetail',
		beforeFun:function(){
			load.show();
		},
		sucFun:function(res){
			load.hide();
			if(res.payInterestMode == 0){
				endDay.text('收益到账日');
			}else{
				endDay.text('回款日期');
			}
			var accountDetailID = res.accountDetailID,
				memberProductID = res.memberProductID;

			if(accountDetailID>0){ //精选
				regularProductDataDetail.attr('href','/order/MyRegularProductDataDetail?tradingid='+accountDetailID + '&productId=' + productID);
			}else{ //94
				regularProductDataDetail.attr('href','/order/MyCurrentProductDataDetail?tradingid='+memberProductID + '&productId=' + productID);
			}
			timeLi.eq(0).find('.date').text(res.tradingTime);
			timeLi.eq(1).find('.date').text(res.interestStarDate);
			timeLi.eq(2).find('.date').text(res.interestRecieveDate);
			$('#money').text(res.tradingAmountText);
		}
		
	}
	JSBK.Utils.postAjax(GetBillDetail);

	//刮刮乐
	var scratch = require('../../ui/scratch.js');    
	$('#scratch').scratch({
	  img : '#fdad3c',
	  width:224,
	  height:110,
	  checkRange:[0,0,224,110]
	});

	var initMask = function(){
		var masker = {};
		masker._box = $('.scratch-mask');
		masker._text = $('.scratch-text');
		masker._gold = $('.scratch-gold');
		masker.init = function(){
			this._box.show();
			this._text.show();
		}
		masker.hide = function(){
			this._box.hide();
			this._text.hide();
			this._gold.hide();
		}
		masker.result = function(data){
			this.hide();
			var dom = this._gold;
			dom.find('em').html(data.getgold);
			dom.show();
			this._box.show();
		}
		masker.init();
		return masker;
	}

	var masker = initMask();

	$('.scratch-text').on('touchstart',function(){
		masker.hide();
	});

	var data = {
		getgold: '100'
	}

	var isGetting = false;
	$('#scratch').scratch('on','finish',function(){
	    if(isGetting){ return }
	    isGetting = true;
	    masker.result(data);
	});
});
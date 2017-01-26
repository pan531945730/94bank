/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;
	$(document).ready(function(e) {
	    __webpack_require__(1);
	    __webpack_require__(5);
	    __webpack_require__(40);
	    __webpack_require__(37);
	    __webpack_require__(236); 
	    var Blink = __webpack_require__(235);
	    var fmPrice = $('.fm-price'),
	        fmSum = $('.fm-sum'),
	        sumEar = fmSum.find('em'),
	        fmLogin = $('.fm-login'),
	        fmCard = $('.fm-card'),
	        fmEarn = $('.fm-earn'),
	        earnVal = fmEarn.find('em'),
	        buyBtn = $('#buy_btn'),
	        date = $('#date'),
	        payments = $('#payments'),
	        description = $('.description'),
	        guarantee = $('.guarantee'),
	        redemption = $('.redemption'),
	        redemptionSta = redemption.find('span'),
	        protocol = $('.pdd-protocol'),
	        preVal = 0,
	        accountBalance = 0,
	        qtje = 0,
	        cpsyfe = 0,
	        unitPrice = 0,
	        jsje = 0,
	        maxBuy = 0,
	        typeId = 0,
	        load = $('.load');
	    
	    var cardId = 0,
	        cardVal = 0,
	        cardType = 0,
	        defaultVal = 0,
	        proType2Id = 0,
	        nonuseFlag = true,
	        productId = JSBK.Utils.GetQueryString("ProductId"),
	        productTypeId = JSBK.Utils.GetQueryString("ProductTypeId");

	    //优惠券模板
	    function htmlTep(dd,arr){
	        $.each(dd,function(i,v){
	            var html = '',
	                liSty = '',
	                styPrice = '';
	                
	            if(v.CouponType == 1){
	                liSty = 'fanxian';
	                styPrice = '￥<em>'+v.CouponValue+'</em>';
	            }else{
	                liSty = 'jiaxi';
	                styPrice = '<em>'+v.CouponValue+'</em>%';
	            }
	            html += '<li class="'+liSty+'" data-type="'+v.CouponType+'" data-value="'+v.CouponValue+'" data-id="'+v.ID+'">';
	            html += '<div class="cp-price" style="background-color:'+v.IosColor+'">';
	            html += '<p>'+styPrice+'</p>';
	            html += '<span>'+v.MinMaxBuyPriceStr+'</span>';
	            html += '</div><div class="cp-info">';
	            html += '<div class="info-head"><h2>'+v.Title+'</h2><p>'+v.ApplyProductRemark+'</p></div>';
	            html += '<p class="info-time">有效期'+v.UseRemark+'</p>';
	            html += '</div></li>';
	            arr.push(html);
	        })        
	    }
	    //上滑加载更多
	    var GetMoreMb = function(op){
	        this.op = {
	            cont : $('.coupon-container'),
	            myLoad : $('.load'),
	            mbBot : $('.bot'),
	            getNextStatus : true,
	            page : 2 
	        };
	        this.init();
	    }
	    GetMoreMb.prototype.init = function(){
	        var self = this;
	        function checkGetNextPage() {
	            var winHeight = $(window).height(),
	                listHeight = self.op.cont.height(),
	                listTop = self.op.cont.offset().top,
	                scrollTop = $(window).scrollTop();
	            if (winHeight + scrollTop >= listTop + listHeight && self.op.getNextStatus === true) {
	                return true;
	            }
	            return false;
	        }

	        $(window).on('scroll',function(){
	            getNextPage();
	        })

	        function getNextPage(){
	            if (!checkGetNextPage()) {
	                return;
	            }
	            self.op.getNextStatus = false;
	            var mbLoadData = {
	                data: {
	                    'GetMemberCardCouponList': self.op.page,
	                    'PageSize' : 10
	                },
	                mFun: 'GetUsableCardCouponList',
	                beforeFun : function(){
	                    self.op.myLoad.show();
	                },
	                sucFun : function(v){
	                    var arr = [] ,
	                        length = v.length;
	                    
	                    self.op.myLoad.hide();
	                    noneInfo.hide();
	                    htmlTep(v,arr);
	                    self.op.cont.find('.coupon-cont').append(arr.join(''));   
	                    
	                    if(length >= 10){
	                        self.op.getNextStatus = true;
	                    }else{
	                        self.op.mbBot.show();
	                    }
	                    self.op.page = self.op.page + 1;
	                },
	                unusualFun : function(v){
	                    self.op.mbBot.show();
	                }
	            }
	            JSBK.Utils.postAjax(mbLoadData);                        
	        }
	    }    
	    //初始页面
	    fmPrice.on('input',function(){
	        var val = $(this).val();
	        val = parseInt(val.toString().substring(0,10));
	        $(this).val(val);
	    })
	    var productDetailData = {
	        data:{
	            'ProductId': productId,
	            'ProductTypeId': productTypeId
	        },
	        mFun:'GetProductDetail',
	        beforeFun : function(){
	            load.show();
	        },
	        sucFun: function(v){
	            load.hide();
	            var yue = Math.floor(v.accountBalance);
	                qtje = v.startAmount;
	                cpsyfe = v.remainingAmount;
	                unitPrice = v.unitPrice;
	                jsje = v.remainingAmount;
	                maxBuy = v.maxBuyPrice,
	                typeId = v.typeId,
	                proType2Id = v.productType2Id;

	            //默认投资金额
	            if(yue < qtje){
	                defaultVal = 0;
	            }else{
	                var je = yue - qtje;
	                var maxPrice = Math.floor(je / unitPrice) * unitPrice + qtje;
	                defaultVal = Math.min(maxPrice,maxBuy,cpsyfe);
	            }

	            //预期收益金额
	            function preEarnPrice (defaultVal,plusCardValue){
	                var yqdqsy = 0;
	                if(!defaultVal){
	                    return yqdqsy;
	                }
	                var rate = v.interestRate;
	                var exStr = 0;
	                if(rate <= 0 || (v.typeId == 9 && v.minInterestRate > 0 && v.maxInterestRate > 0)
	                    || v.typeId == 11){
	                    rate = v.minInterestRate;
	                    exStr = '+浮动';
	                }
	                // 添加加息券利率
	                if(plusCardValue > 0){
	                    rate = rate + plusCardValue;
	                }
	                function bit(n){
	                    return n.toString().replace(/(\.\d{2})\d+$/,"$1")
	                }
	                if(v.investmentTime<=0){//活期
	                    if(v.maxInterestRate==0.0||v.minInterestRate==0.0){
	                        yqdqsy=bit((v.interestRate/36500)*defaultVal);
	                    }else{
	                        yqdqsy=bit((v.minInterestRate/36500)*defaultVal)+"~"+bit((v.maxInterestRate/36500)*defaultVal);
	                    }
	                    return yqdqsy;
	                }
	                var day = parseInt((Date.parse(v.endTime) - (Date.parse(v.interstStartDateText))) / 86400000);
	                if(day > 0){
	                    day = new Date().getHours() > 22 ? day - 1 : day;
	                    day = day > v.investmentTime ? v.investmentTime : day;
	                    var profit = (defaultVal * rate / 100) * (day / 365);
	                    yqdqsy = profit ? bit(((Math.floor(profit * 100) / 100).toFixed(2)).toString() + exStr) : 0;
	                }else{
	                    yqdqsy = 0.00;
	                }
	                return yqdqsy;
	            }
	            
	            if(defaultVal != 0){
	                fmPrice.val(defaultVal);
	            }
	            
	            preVal = preEarnPrice(defaultVal);
	            earnVal.html(preVal);
	            if(v.isLogin == 1){ //登录
	               fmSum.show();
	               fmLogin.hide(); 
	               accountBalance = v.accountBalance;
	               sumEar.html(v.accountBalanceText);
	               //是否有卡券
	               var getCardData = {
	                   data:{
	                       'BuyAmount': defaultVal,
	                       'ProductId': productId,
	                       'ProductType2ID' : proType2Id
	                   },
	                   mFun:'GetMemberCardOptimal',
	                   sucFun: function(v){
	                       if(v){
	                           cardId = v.ID;
	                           cardVal = v.CouponValue;
	                           cardType = v.CouponType;
	                           var cardText;
	                           if(cardType == 1){
	                               cardText = '返现券 '+cardVal+'元';
	                           }else{
	                               cardText = '加息券 '+cardVal+'%';
	                               preVal = preEarnPrice(defaultVal,cardVal);
	                               earnVal.html(preVal);
	                           }
	                           fmCard.html(cardText).show();
	                       }else{
	                           fmCard.html('选择卡券').show();
	                           cardId = 0;
	                           cardVal = 0;
	                           cardType = 0;
	                       }

	                       var couponData = {
	                           data:{
	                               'PageIndex':1,
	                               'PageSize': 10,
	                               'ProductType2ID':proType2Id,
	                               'BuyAmount':defaultVal
	                           },
	                           mFun:'GetUsableCardCouponList',
	                           sucFun:function(v){
	                               var arr = [],
	                                   length = v.length;
	                               if(!v || length == 0){
	                                   $('.coupon-cont').empty();
	                                   noneInfo.show();
	                                   return;
	                               }
	                               noneInfo.hide();
	                               htmlTep(v,arr);
	                               $('.coupon-cont').append(arr.join(''));
	                               if(length >= 10){
	                                   new GetMoreMb();
	                               }
	                           },
	                           unusualFun :function(){
	                               noneInfo.show();
	                           }

	                       }
	                       JSBK.Utils.postAjax(couponData);
	                   }
	                   
	               }
	               var couponData = {
	                   data:{
	                       'PageIndex':1,
	                       'PageSize': 10,
	                       'ProductType2ID':-1
	                   },
	                   mFun:'GetMemberCardCouponList',
	                   sucFun:function(v){
	                       var arr = [],
	                           length = v.length;
	                       load.hide();
	                       if(!v || length == 0){
	                            fmCard.hide();
	                            return;
	                       }else{
	                            JSBK.Utils.postAjax(getCardData);
	                            fmPrice.on('input',function(){
	                                defaultVal = $(this).val();
	                                getCardData.data.BuyAmount = defaultVal;
	                                if(nonuseFlag){
	                                    JSBK.Utils.postAjax(getCardData);
	                                }                
	                            })
	                       }
	                       
	                   }

	               }
	               JSBK.Utils.postAjax(couponData);
	               
	               fmPrice.on('input',function(){
	                   defaultVal = $(this).val();
	                   preVal = preEarnPrice(defaultVal);
	                   earnVal.html(preVal);
	               })

	            }else{ //未登录
	                fmLogin.show();
	                fmSum.hide(); 
	                fmLogin.attr('href','/member/login?returl='+escape(window.location.href));
	                buyBtn.attr('href','/member/login?returl='+escape(window.location.href));
	                fmCard.hide();
	                earnVal.html('0.00');
	            }

	            if(v.minInterestRate == v.maxInterestRate){
	                $('#earn').html(v.interestRate);
	            }else{
	                var html = '<span>'+v.minInterestRate+'</span>%<span>～</span>';
	                html += '<span>'+v.maxInterestRate+'</span>%';
	                $('#earn').parents('p').html(html);
	            }

	            if(v.redeemType == 0){
	                $('#day').parents('p').html('<span>'+v.investmentTimeText+'</span>');
	            }else{
	                $('#day').html(v.investmentTimeText.replace("天",''));
	            }
	            if(v.appTemplateType != 8){
	                fmPrice.attr('placeholder',v.startAmount+'元起投，'+unitPrice+'元的整数倍');
	            }else{
	                fmPrice.attr('placeholder','最高可购买'+v.startAmount+'元');
	            }
	            
	            date.html(v.interstStartDateText);
	            payments.html(v.earningsModeText);
	            $('.record').attr('href','/Order/ProductRecord?ProductId='+productId);
	            description.attr('href','/Product/ProductDetailInfo?ProductId='+productId+'#projectDetail');
	            guarantee.attr('href','/Product/ProductDetailInfo?ProductId='+productId+'#securityDetail');
	            protocol.find('a').attr('href','http://d.94bank.com/productdetail/GetProductBuyContract?productId='+productId+'&v=12345')
	            if(v.status == 1){//倒计时
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
	                    var t = d+'天'+addzero(h)+':'+addzero(m)+':'+addzero(s);
	                    return t;
	                }
	                function countDownFun(date,curData,Time){
	                    var time =(Date.parse(date.replace(/-/g,'/')) - Date.parse(curData.replace(/-/g,'/')))/1000;
	                    Time.html(caculateDate(time));
	                    var clearTime = setInterval(function(){
	                        time -= 1;
	                        Time.html(caculateDate(time));
	                        if(time == 0){
	                            location.reload();
	                        }
	                    },1000);
	                }
	                buyBtn.addClass('btn-count');
	                countDownFun(v.startTimeText,v.serverTimeText,buyBtn);

	            }else if(v.status == 2){ //已售罄
	                buyBtn.html('已售罄').addClass('btn-no');
	                fmPrice.val('');
	            }else{
	                buyBtn.html('购 买(仅剩'+v.remainingAmountText+')');
	                //购买协议
	                protocol.find('i').on('click',function(){
	                    var that = $(this);
	                    if(that.hasClass('pt-arr')){
	                        that.removeClass('pt-arr');
	                        buyBtn.addClass('btn-no');
	                    }else{
	                        that.addClass('pt-arr'); 
	                        buyBtn.removeClass('btn-no');
	                    }
	                    
	                })
	            }
	            
	            switch (v.appTemplateType){
	                case 1: //9盈宝_定期
	                redemption.css('display','none');
	                break;
	                case 2: //基金宝
	                var GetjjbPointData = {
	                        data:{
	                            'ProductId':v.id
	                        },
	                        mFun:'GetProductPointData',
	                        beforeFun : function(){
	                            load.show();
	                        },
	                        sucFun: function(res){
	                            load.hide();
	                            var canvas = document.getElementById('vca');
	                            var ctx = canvas.getContext('2d');
	                            ctx.fillStyle="#fff";
	                            ctx.lineWidth = 1;
	                            ctx.beginPath();
	                            ctx.strokeStyle = '#f2f2f2'; 
	                            ctx.fillRect(0,0,canvas.width,canvas.height);
	                            ctx.font = '12px Arial';
	                            ctx.fillStyle = '#333';
	                            ctx.fillText('七日年化收益率(%)', 10, 20);
	                            ctx.fillStyle = '#aaa';
	                            for(var i=0;i<res.y.length;i++){
	                                ctx.fillText(res.y[i],10,40+i*18);
	                                ctx.moveTo(50,35+i*18);
	                                ctx.lineTo(290,35+i*18);
	                                ctx.stroke();
	                            }
	                            for(var i=0;i<res.x.length;i++){
	                                ctx.fillText(res.x[i],35+i*40,180);
	                                ctx.moveTo(50+i*40,35);
	                                ctx.lineTo(50+i*40,160);
	                                ctx.stroke();
	                            }
	                            ctx.save();
	                            ctx.beginPath();
	                            ctx.strokeStyle = '#ff6b80';
	                            var d = res.y[7];
	                            var x = res.y[0]-d;
	                            ctx.moveTo(50,(1-(res.points[0].interestRateText-d)/x)*126+35);
	                            for(var i=1;i<7;i++){
	                                ctx.lineTo(50+i*40,(1-(res.points[i].interestRateText-d)/x)*126+35);
	                            }
	                            ctx.stroke();
	                            ctx.fillStyle = '#999';
	                            ctx.fillText('昨日年化收益率', 120, 70);
	                            ctx.font = '22px Arial';
	                            ctx.fillStyle = '#f00';
	                            ctx.fillText(res.points[6].interestRateText+'%', 120, 100);
	                        }
	                        
	                }
	                JSBK.Utils.postAjax(GetjjbPointData);

	                $('.pdd-head').hide();
	                $('.jjb-head').show();
	                guarantee.css('display','none');
	                redemptionSta.html('T+2到账，节假日顺延');
	                break;
	                case 3: //优选计划
	                redemption.css('display','none');
	                break;
	                case 8: //新手宝
	                description.css('display','none');
	                guarantee.css('display','none');
	                redemption.css('display','none');
	                break;
	                case 4: //银行宝
	                redemptionSta.html('随时提现');
	                break;
	                //case 5: //月薪计划
	                //case 6: //阳光私募
	                case 7: //180~365九盈宝
	                redemptionSta.html('满180天可提前赎回，手续费3%。');
	                break;
	            }
	            //点击优惠券
	            var couponContainer = $('.coupon-container'),
	                noneInfo = $('.none-info'),
	                windowH = $(window).height(),
	                bodyH = $('body').height();
	            couponContainer.css('min-height',Math.max(windowH,bodyH));
	            fmCard && fmCard.on('click',function(){
	                couponContainer.addClass('coupon-show');
	            });
	            $('.coupon-container').on('click','.cp-back',function(){
	                couponContainer.removeClass('coupon-show');
	            })

	            $('.coupon-container').on('click','.cp-nonuse',function(){
	                nonuseFlag = false;
	                cardVal = 0;
	                cardType = 0;
	                cardId = 0;
	                preVal = preEarnPrice(defaultVal);
	                earnVal.html(preVal);
	                couponContainer.removeClass('coupon-show');
	                fmCard.html('选择卡券').show();
	            })
	            $('.coupon-cont').on('click','li',function(){
	                var that = $(this),
	                    cardText;
	                cardVal = that.data('value');
	                cardType = that.data('type');
	                cardId = that.data('id');
	                var pValue = 0;
	                if(cardType == 1){
	                    cardText = '返现券 '+cardVal+'元';
	                }else{
	                    cardText = '加息券 '+cardVal+'%';
	                    pValue = cardVal;
	                }
	                preVal = preEarnPrice(defaultVal,pValue);
	                earnVal.html(preVal);
	                fmCard.html(cardText).show();
	                couponContainer.removeClass('coupon-show');
	            })

	        },
	        unusualFun : function(){
	            load.hide();
	        }
	        
	    }
	    JSBK.Utils.postAjax(productDetailData);

	    //点击抢购
	    var Confirm = __webpack_require__(21);
	    var qtjeTip,unitPriceTip,jsConfirm,rechargeConfirm,maxBuyTip,pwdConfirm,wdpwdVal,errorTip;
	    buyBtn.on('click',function(e){
	        var that = $(this);
	        if(that.hasClass('btn-no') || that.hasClass('btn-count')){
	            e.preventDefault();
	            return;
	        }else{
	            if(cpsyfe >= qtje || defaultVal < cpsyfe){
	                if(defaultVal<qtje){
	                    if(!qtjeTip){
	                        qtjeTip = new Blink({
	                            'blinkHtml' : '该产品起投金额为'+qtje+'元'
	                        }) 
	                    }
	                    qtjeTip.open();  
	                    return;
	                }
	            }
	            if(defaultVal>qtje && defaultVal%unitPrice != 0){
	                if(!unitPriceTip){
	                    unitPriceTip = new Blink({
	                        'blinkHtml' : '该产品的投资金额为'+unitPrice+'的整数倍'
	                    }) 
	                }
	                unitPriceTip.open(); 
	                return;
	            }

	            if(defaultVal > maxBuy){
	                if(!maxBuyTip){
	                    maxBuyTip = new Blink({
	                        'blinkHtml' : '该产品的投资上限为'+maxBuy+'元'
	                    }) 
	                }
	                maxBuyTip.open();  
	                return;
	            }

	            if(defaultVal > jsje){
	                if(!jsConfirm){
	                    jsConfirm = new Confirm({
	                        titleHtml : '',
	                        confirmBtnHtml : '投满它',
	                        cancleBtnHtml : '改金额',
	                        infoHtml : function(){
	                            return $('<p class="pddcon">本期产品仅剩'+jsje+'元啦</p>');
	                        },
	                        confirmCallback : function(){
	                            fmPrice.val(jsje);
	                            jsConfirm.dialog.close();
	                            defaultVal = jsje;
	                        },
	                        cancleCallback : function(){
	                            fmPrice.val('');
	                            fmPrice.focus();
	                            fmPrice.trigger('focus');
	                            jsConfirm.dialog.close();
	                        }
	                    })
	                }
	                jsConfirm.open();
	                return;
	            }

	            if(defaultVal>accountBalance){
	                if(!rechargeConfirm){
	                    rechargeConfirm = new Confirm({
	                        titleHtml : '',
	                        confirmBtnHtml : '去充值',
	                        cancleBtnHtml : '改金额',
	                        infoHtml : function(){
	                            return $('<p class="pddcon">可用余额不足，请前往充值</p>');
	                        },
	                        confirmCallback : function(){

	                            var rechargeData = {
	                                data : {
	                                    "CallerType" : 2,
	                                    "Param" : ''
	                                },
	                                mFun : 'RouteAPI',
	                                sucFun : function(v){
	                                    if(v.ReturnType == 0){ //成功
	                                        location.href = '/pay/MemberRecharge';
	                                    }else{ //失败
	                                        location.href = v.CurrentUrl+'?returl='+v.ReturnUrl;
	                                    }
	                                }
	                            }
	                            JSBK.Utils.postAjax(rechargeData);
	                        },
	                        cancleCallback : function(){
	                            fmPrice.val('');
	                            fmPrice.focus();
	                            fmPrice.trigger('focus');
	                            rechargeConfirm.dialog.close();
	                        }
	                    })
	                }
	                rechargeConfirm.open();
	                return;
	            }

	            var pwdData = {
	                data : {
	                    "CallerType" : 1,
	                    "Param" : '?ProductId='+productId+'&ProductTypeId='+productTypeId
	                },
	                mFun : 'RouteAPI',
	                sucFun : function(v){
	                    if(v.ReturnType == 0){ //成功
	                        //确认交易密码
	                        if(!pwdConfirm){
	                            pwdConfirm = new Confirm({
	                                titleHtml : '交易密码',
	                                infoHtml : function(){
	                                    return $('<input type="password" placeholder="请输入您的交易密码" value="" class="dialog-inp" id="wd-pwd">'+
	                                        '<p class="error-tip"><span></span></p>');
	                                },
	                                confirmCallback : function(){
	                                    wdpwdVal = $('#wd-pwd').val();
	                                    errorTip = $('.error-tip');
	                                    if(wdpwdVal == null || wdpwdVal == ''){
	                                        errorTip.html('请输入您的交易密码');
	                                        return false;
	                                    }
	                                    //购买
	                                    var buyData = {
	                                        data:{
	                                            'ProductID': productId,
	                                            'ProductTypeId': typeId,
	                                            'TradePassword': wdpwdVal,
	                                            'BuyProductPrice': defaultVal,
	                                            'DeviceType' : 4,
	                                            'CouponType' : cardType,
	                                            'CardCouponID' : cardId,
	                                            'FaceValue' : cardVal
	                                        },
	                                        mFun:'BuyProduct',
	                                        sucFun: function(v){
	                                            location.href = '/Product/InvestmentSuccess?TradingId='+v.TradingID+'&ProductID='+productId+'&productType2Id='+proType2Id;
	                                        },
	                                        unusualFun : function(v){
	                                            errorTip.html(v.ES);
	                                        }
	                                        
	                                    }
	                                    JSBK.Utils.postAjax(buyData);
	                                }
	                            });
	                        }
	                        $('#wd-pwd').val('');
	                        errorTip && errorTip.html('');
	                        pwdConfirm.open();
	                    }else{ //失败
	                        location.href = v.CurrentUrl+'?returl='+v.ReturnUrl;
	                    }
	                }
	            }
	            JSBK.Utils.postAjax(pwdData);
	            
	        }
	    })

	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	;
	(function(win, doc, $) {

	    var jsbk = win.JSBK || {};

	    jsbk.Utils = {

	        // http://techpatterns.com/downloads/javascript_cookies.php
	        setCookie: function(name, value, expires, path, domain, secure) {
	            // set time, it's in milliseconds
	            var today = new Date();
	            today.setTime(today.getTime());
	            /*
	                if the expires variable is set, make the correct
	                expires time, the current script below will set
	                it for x number of days, to make it for hours,
	                delete * 24, for minutes, delete * 60 * 24
	            */
	            if (expires) {
	                expires = expires * 1000 * 60 * 60 * 24;
	            }
	            var expires_date = new Date(today.getTime() + (expires));

	            doc.cookie = name + "=" + escape(value) +
	                ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
	                ((path) ? ";path=" + path : "") +
	                ((domain) ? ";domain=" + domain : "") +
	                ((secure) ? ";secure" : "");
	        },

	        // this fixes an issue with the old method, ambiguous values
	        // with this test document.cookie.indexOf( name + "=" );
	        getCookie: function(check_name) {
	            // first we'll split this cookie up into name/value pairs
	            // note: document.cookie only returns name=value, not the other components
	            var a_all_cookies = doc.cookie.split(';'),
	                a_temp_cookie = '',
	                cookie_name = '',
	                cookie_value = '',
	                length,
	                b_cookie_found = false; // set boolean t/f default f

	            for (i = 0, length = a_all_cookies.length; i < length; i++) {
	                // now we'll split apart each name=value pair
	                a_temp_cookie = a_all_cookies[i].split('=');
	                // and trim left/right whitespace while we're at it
	                cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

	                // if the extracted name matches passed check_name
	                if (cookie_name == check_name) {
	                    b_cookie_found = true;
	                    // we need to handle case where cookie has no value but exists (no = sign, that is):
	                    if (a_temp_cookie.length > 1) {
	                        cookie_value = decodeURIComponent(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
	                    }
	                    // note that in cases where cookie is initialized but no value, null is returned
	                    return cookie_value;
	                    break;
	                }
	                a_temp_cookie = null;
	                cookie_name = '';
	            }
	            if (!b_cookie_found) {
	                return null;
	            }
	        },

	        // this deletes the cookie when called
	        deleteCookie: function(name, path, domain) {
	            if (this.getCookie(name)) {
	                doc.cookie = name + "=" +
	                    ((path) ? ";path=" + path : "") +
	                    ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	            }
	        },

	        LocalStorageHelper: function(action, key, val) {
	            try {
	                if (action == "setItem") {
	                    localStorage[action](key, val);
	                    return true;
	                } else {
	                    var result = localStorage[action](key);
	                    return result;
	                }
	            } catch (e) {
	                return false;
	            }
	        },

	        //获取url中"returl"符后的字串 
	        GetUrlSearch: function(returl) {
	            var url = location.search; 
	            var strs = url.split(returl);
	            if(strs.length>1){
	                return strs[1];
	            }else{
	                return '';
	            }
	        },
			
			GetQueryString: function(name) {//获取指定name的url参数
				 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				 var r = window.location.search.substr(1).match(reg);
				 if(r!=null)return  unescape(r[2]); return null;
			},

	        connectWebViewJavascriptBridge: function (callback) {
	            if (window.WebViewJavascriptBridge) {
	                callback(WebViewJavascriptBridge)
	            } else {
	                window.WVJBCallbacks = [callback];
	                var WVJBIframe = document.createElement('iframe');
	                WVJBIframe.style.display = 'none';
	                WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
	                document.documentElement.appendChild(WVJBIframe);
	                setTimeout(function () {
	                    document.documentElement.removeChild(WVJBIframe)
	                }, 0)
	                document.addEventListener('WebViewJavascriptBridgeReady', function () {
	                    callback(WebViewJavascriptBridge)
	                }, false)
	            }
	        },
	        
	        postAjax : function(d){
	            $.ajax({
	                type: 'post',
	                dataType: 'json',
	                url: d.url || window.Zepto.setUrl+'/api/Ajax',
	                data: { D: JSON.stringify(d.data), M: d.mFun },
	                beforeSend: function(){
	                   d.beforeFun && d.beforeFun();
	                },
	                //请求成功时执行
	                success: function(v) {
	                    
	                    if(v.S === 0){
	                        // 正常处理
	                        var dd = $.parseJSON(v.D);
	                        d.sucFun && d.sucFun(dd);
	                    }else if(v.S === 101){
	                        // 登录超时
	                        if(d.mFun == 'GetMemberAccount'){
	                            // 异常处理
	                            d.unusualFun && d.unusualFun(v);
	                        }else{
	                            var Alert = __webpack_require__(6);
	                            var overTime = new Alert({
	                                titleHtml : v.ES,
	                                clickBtnCallback : function(){
	                                    location.href = window.Zepto.setUrl+"/member/login?returl="+location.href;
	                                }
	                            });
	                            overTime.open();
	                        }
	                    }else{
	                        // 异常处理
	                        d.unusualFun && d.unusualFun(v);
	                    }
	                },
					complete: d.comFun,
	                //请求失败遇到异常触发
	                error: function() {
	                    d.errFun && d.errFun();
	                } 
	            });
	        }

	    };

	    //H5处理逻辑
	    win.getUserSuc = function (callback) {
	        callback('user-h5');
	    }

	    win.getHongbao = function(callback){
	        callback('hongbao');
	    }

	    win.getDetail = function(callback){
	        callback('detail');
	    }

	    var detailData = {
	        'jijinbao' : {
	            'id': 2011,
	            'appTemplateType': 2
	        },
	        'yinhangbao' : {
	            'id' : 41,
	            'appTemplateType' : 4
	        },
	        'yangguangsimu' : {
	            'id' : 2301,
	            'appTemplateType' : 6
	        }
	    }
	    //console.log(detailData.yinhangbao);
	    //app处理逻辑
	    jsbk.Utils.connectWebViewJavascriptBridge(function (bridge) {

	        bridge.init(function (message, responseCallback) {
	            /*alert('JS got a message', message)
	            var data = { 'Javascript Responds':'Wee!' }
	            alert('JS responding with', data)
	            responseCallback(data)*/
	        })

	        win.getUserSuc = function (callback) {
	            bridge.callHandler('com.hongzhe.bank94.getToken', null, function (response) {
	                callback(response);
	            })
	        };

	        window.getHongbao = function(callback) {
	            bridge.callHandler('com.hongzhe.bank94.requestCheckTickets', null, function(response) {
	                callback(response);
	            })
	        };

	        window.getDetail = function(callback) {
	            bridge.callHandler('com.hongzhe.bank94.requestProductDetail', detailData.yinhangbao, function(response) {
	                callback(response);
	            })
	        };

	    })

	    jsbk.isToken = true;
	    jsbk.bindToken = function (sucFun,unusualFun) {
	        
	        getUserSuc(function (token) {
	            if (token == 'user-h5') {
	                sucFun && sucFun();
	            }else{
	                //获取token后所做的逻辑
	                var tokenData = {
	                    data: {
	                        'ToKen': token
	                    },
	                    mFun: 'SetToken',
	                    beforeFun : function(){
	                    },
	                    sucFun : function(v){
	                        sucFun && sucFun();
	                        jsbk.isToken = false;
	                    },
	                    unusualFun : function(v){
	                        unusualFun && unusualFun();
	                    }
	                }        
	        
	                if(jsbk.isToken){
	                    jsbk.Utils.postAjax(tokenData);
	                }else{
	                    sucFun && sucFun();
	                }
	            }
	        });
	    }

	    jsbk.bindHongbao = function(){
	        getHongbao(function(v){
	            $('#get_hongbao').html(v);
	        })
	    }

	    jsbk.bindDetail = function(){
	        getDetail(function(v){
	            $('#get_detail').html(v);
	        })
	    }

	    //微信配置接口
	    var wxFlag;
	    var wxAjax = function(ops){
	        $.ajax({
	            url: "/Other/GetWeChatShareJs",
	            type: "get",
	            data: { "url": window.location.href },
	            dataType: "json",
	            success: function (jdata) {
	                if (jdata != '' && jdata != null) {
	                    wx.config({
	                        debug: false,
	                        appId: jdata.AppId,
	                        timestamp: jdata.TimeStamp,
	                        nonceStr: jdata.NonceStr,
	                        signature: jdata.Signature,
	                        jsApiList: [
	                            'onMenuShareTimeline',
	                            'onMenuShareAppMessage',
	                            'onMenuShareQQ',
	                            'onMenuShareWeibo',
	                            'hideMenuItems',
	                            'showMenuItems',
	                            'chooseImage',
	                            'previewImage',
	                            'uploadImage',
	                            'downloadImage',
	                            'getNetworkType',
	                            'openLocation',
	                            'getLocation',
	                            'hideOptionMenu',
	                            'showOptionMenu',
	                            'scanQRCode'
	                        ]
	                    });
	                }
	            },
	            error : function(){
	                console.log('weixin error');
	            }
	        });
	        wx.ready(function () {
	            var shareData = {
	                title: ops.title,
	                desc: ops.desc,
	                link: ops.link,
	                imgUrl: ops.imgUrl,
	                trigger: function (res) {
	                },
	                success: function (res) {
	                },
	                cancel: function (res) {
	                },
	                fail: function (res) {
	                    alert(JSON.stringify(res));
	                }
	            };
	            wx.onMenuShareAppMessage(shareData);
	            wx.onMenuShareTimeline(shareData);
	        });
	    }
	    jsbk.shareWinxin = function(ops){
	        //微信js库引用
	        var s = document.createElement('script');
	        s.type = 'text/javascript';
	        s.async = true;
	        s.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js?v=E8EB1875417F4E398111-90AFF3378C30';
	        var b = document.body;
	        s.onload = function(){
	            wxAjax(ops);
	        }
	        if(!wxFlag){
	            b.appendChild(s);
	            wxFlag = true;
	        }else{
	            wxAjax(ops);
	        }            
	    }
	    
	    win.JSBK = jsbk;
	})(window, document, Zepto);

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	;
	(function($) {
	    var Alert = function(op) {
	        var self = this;
	        var defaults = {
	            centerTitle : false, // title是否居中
	            bgClose     : false,
	            titleHtml   : "成功！",
	            btnHtml     : "确定",
	            select      : self.getSelect(),
	            clickBtnCallback : null
	        };
	        this.ops = $.extend(defaults, op);
	        this.dialog = null;
	        this.init();
	    }

	    Alert.prototype.init = function() {
	        var self = this;
	        self.setHtml();
	        __webpack_require__(7);
	        var Dialog = __webpack_require__(9);
	        self.dialog = new Dialog( self.ops );
	        self.bindEvent();
	    }

	    Alert.prototype.open = function() {
	        this.dialog.open();
	    }

	    Alert.prototype.bindEvent = function() {
	        var self = this;
	        self.ops.select.on("click", ".btn", function(e) {
	            e.stopPropagation();
	            if( self.ops.clickBtnCallback ) {
	                self.ops.clickBtnCallback(self);
	            } else {
	                self.dialog.close();
	            }
	        });
	    }

	    Alert.prototype.setHtml = function() {
	        var self = this;
	        if(self.ops.centerTitle) {
	            self.ops.select.addClass( "center-title" );
	        }
	        self.ops.select.find(".title").html( self.ops.titleHtml );
	        self.ops.select.find(".btn").html( self.ops.btnHtml );
	    }

	    Alert.prototype.getSelect = function() {
	        return $('<div class="dialog-mod dialog-alert">' +
	                    '<p class="title"></p>' +
	                    '<div class="btn-wrap">' +
	                        '<span class="btn"></span>' +
	                    '</div>' +
	                '</div>');
	    }

	    module.exports = Alert;
	})(Zepto);


/***/ },

/***/ 7:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	;
	(function($) {
	    var Observer = __webpack_require__(10);
	    var Dialog = function(opt) {
	        var defaults = {
	            className: 'g-d-dialog',
	            actionEvent: 'click',
	            bgClose: false,
	            targetNode: ''
	        };
	        this.ops = $.extend(defaults, opt);
	        this.dom = {};
	        Observer.addPublisher(this);
	        this.init();
	    };

	    Dialog.prototype = {
	        constructor: Dialog,
	        init: function() {
	            var frame = $(document.createDocumentFragment()),
	                _this = this,
	                content,
	                div = $('<div></div>');
	            div.addClass(this.ops.className);
	            frame.append(div);
	            if(this.ops.select){
	                content = $(this.ops.select);
	            }
	            div.append(content||'');
	            $('body').append(frame);
	            this.dom.dialog = div;

	            // 禁止弹层上面的touchmove
	            this.dom.dialog.on('touchmove', function(e) {
	                e.preventDefault();
	            });

	            // 关闭按钮
	            $(this.ops.closeSelect).click(function(event) { // 初始化关闭按钮
	                event.stopPropagation();
	                _this.trigger('dialogClose');
	                _this.close();
	            });

	            // 点击背景关闭
	            if (this.ops.bgClose) {
	                div.click(function(event) { // 点击背景关闭
	                    if (event.target === this) {
	                        event.stopPropagation();
	                        _this.trigger('bgClose');
	                        _this.close();
	                    }
	                });
	            }

	            // 输入框
	            div.find('input').blur(function(event) {
	                event.stopPropagation();
	                _this.fixDrawSlow();
	            });

	            // 打开弹框
	            if (this.ops.targetNode) {
	                $(this.ops.targetNode).on(this.ops.actionEvent, function(event) {
	                    event.stopPropagation();
	                    var arr = [].slice.call(arguments);
	                    _this.open(arr.slice(1));
	                });
	            }
	        },
	        open: function(arg) {
	            this.trigger('open', arg);
	            this.dom.dialog.css('display', '-webkit-box');
	            this.trigger('afteropen', arg);
	        },
	        close: function(arg) {
	            this.dom.dialog.hide();
	            this.trigger('close', arg);
	        },
	        getDialog: function() {
	            return this.dom.dialog;
	        },
	        fixDrawSlow: function() {
	            var top = $(window).scrollTop();
	            setTimeout(function() {
	                $(window).scrollTop(top + 1);
	                setTimeout(function() {
	                    $(window).scrollTop(top);
	                }, 10);
	            }, 1);
	        },
	    };

	    module.exports = Dialog;
	})(Zepto);


/***/ },

/***/ 10:
/***/ function(module, exports) {

	;
	(function() {
	    var Observer = {
	        ob: {

	        },
	        on: function(eventNames, callback) {
	            var _events = eventNames.split(' ');
	            for (var i = 0; i < _events.length; i++) {
	                if (!this.ob[_events[i]]) {
	                    this.ob[_events[i]] = [];
	                }
	                this.ob[_events[i]].push(callback);
	            }
	        },
	        off: function(eventNames) {
	            var _events = eventNames.split(' ');
	            for (var i = 0; i < _events.length; i++) {
	                this.ob[_events[i]] = [];
	            };
	        },
	        trigger: function(eventName, args) {
	            var r;
	            if (!this.ob[eventName]) {
	                return r;
	            }
	            var _arg = args || [];
	            for (var i = 0; this.ob[eventName] && i < this.ob[eventName].length; i++) {
	                r = this.ob[eventName][i].apply(this, _arg);
	                if (r === false) {
	                    continue;
	                }
	            }
	            return r
	        }
	    };
	    Observer.addPublisher = function(o) {
	        $.extend(true, o, Observer);
	    };

	    module.exports = Observer;
	})(Zepto);

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	;
	(function($) {
	    var Confirm = function(op) {
	        var self = this;
	        var defaults = {
	            bgClose         : false,
	            titleHtml       : "标题",
	            infoHtml        : null,
	            cancleBtnHtml   : "取消",
	            confirmBtnHtml  : "确定",
	            select          : self.getSelect(),
	            cancleCallback  : null,
	            confirmCallback : null
	        };
	        this.ops = $.extend(defaults, op);
	        this.dialog = null;
	        this.init();
	    }

	    Confirm.prototype.init = function() {
	        var self = this;
	        self.setHtml();
	        __webpack_require__(7);
	        var Dialog = __webpack_require__(9);
	        self.dialog = new Dialog( self.ops );
	        self.bindEvent();
	    }

	    Confirm.prototype.open = function() {
	        this.dialog.open();
	    }

	    Confirm.prototype.bindEvent = function() {
	        var self = this;

	        // 绑定： 点击“取消”
	        self.ops.select.on("click", ".cancle-btn", function(e) {
	            e.stopPropagation();
	            if( self.ops.cancleCallback ) {
	                self.ops.cancleCallback(self);
	            } else {
	                self.dialog.close();
	            }
	        });

	        // 绑定： 点击“确定”
	        self.ops.select.on("click", ".confirm-btn", function(e) {
	            e.stopPropagation();
	            if( self.ops.confirmCallback ) {
	                self.ops.confirmCallback(self);
	            } else {
	                self.dialog.close();
	            }
	        });
	    }

	    Confirm.prototype.setHtml = function() {
	        var self = this;
	        self.ops.select.find(".title").html( self.ops.titleHtml );
	        self.ops.select.find(".info").html( self.ops.infoHtml );
	        self.ops.select.find(".cancle-btn").html( self.ops.cancleBtnHtml );
	        self.ops.select.find(".confirm-btn").html( self.ops.confirmBtnHtml );
	    }

	    Confirm.prototype.getSelect = function() {
	        return $('<div class="dialog-mod dialog-confirm">' +
	                    '<p class="title"></p>' +
	                    '<div class="info"></div>'+
	                    '<div class="btn-wrap">' +
	                        '<span class="btn cancle-btn"></span>' +
	                        '<span class="btn confirm-btn"></span>' +
	                    '</div>' +
	                '</div>');
	    }

	    module.exports = Confirm;

	})(Zepto);


/***/ },

/***/ 37:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	;
	$(function(){
	    __webpack_require__(41);
	    
	    var Confirm = __webpack_require__(21);
	    var contactDia = new Confirm({
	        titleHtml : '客服电话',
	        confirmBtnHtml : '呼叫',
	        infoHtml : function(){
	            return $('<p>400-969-0390</p><p>服务时间：09:00-19:00</p>');
	        },
	        confirmCallback : function(){
	            window.location.href = 'tel:4009690390';
	        }
	    });
	    
	    $('#contact_us').on('click',function(){
	        contactDia.open();
	    })


	})

/***/ },

/***/ 41:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	;
	(function($) {
	    var Blink = function(op) {
	        var self = this;
	        var defaults = {
	            className   : "g-d-dialog blink-mod",
	            bgClose     : false,
	            select      : self.getSelect(),
	            blinkHtml   : "blink blink",
	            intervaltime : 3000    // 多长时间之后消失
	        };
	        this.ops = $.extend(defaults, op);
	        this.dialog = null;
	        this.init();
	    }

	    Blink.prototype.init = function() {
	        var self = this;
	        self.setHtml();
	        __webpack_require__(7);
	        var Dialog = __webpack_require__(9);
	        self.dialog = new Dialog( self.ops );
	    }

	    Blink.prototype.open = function(callback) {
	        var self = this;
	        self.dialog.open();
	        setTimeout(function() {
	            if( self.ops.timeoutCallback ) {
	                self.ops.timeoutCallback(self);
	            } else {
	                self.dialog.close();
	                callback && callback()
	            }
	        }, self.ops.intervaltime);
	    }

	    Blink.prototype.setHtml = function() {
	        var self = this;
	        self.ops.select.find(".blink-content").html( self.ops.blinkHtml );
	    }

	    Blink.prototype.setDoc = function(doc) {
	        var self = this;
	        self.dialog.dom.dialog.find(".blink-content").empty().append(doc);
	    }

	    Blink.prototype.getSelect = function() {
	        return $('<div class="dialog-mod dialog-blink">' +
	                    '<p class="blink-content"></p>' +
	                '</div>');
	    }
	    
	    module.exports = Blink;
	})(Zepto);








/***/ },

/***/ 236:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
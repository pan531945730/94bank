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
	$(function() {
	    __webpack_require__(1);
	    __webpack_require__(5);
	    __webpack_require__(68); 
	    __webpack_require__(37);
	    __webpack_require__(71);
	    var IScroll = __webpack_require__(72);
	    var listWrap = $('.list-wrap'),
	        multislterMask = $('.multislter-mask'),
	        multislterCont = $('.multislter-cont'),
	        cancleBtn = $('.cancle-btn'),
	        confirmBtn = $('.confirm-btn'),
	        pageCont = $('.page-cont'),
	        searchCont = $('.search-cont'),
	        bankSelect = $('.fm-input'),
	        load = $('.load'),
	        openBank = $('#open_bank'),
	        searchInfo = $('.search-info'),
	        sbHead = $('.sb-head'),
	        isOpenAccount,
	        tradeToken;

	    //获取支行信息
	    var bankData = {
	        data: {},
	        mFun: 'GetMemberInfo',
	        beforeFun : function(){
	            load.show();
	        },
	        sucFun : function(v){
	            load.hide();
	            if (v.bankCardAuthen == 1){
	                switch (v.bankCode){
	                    case '102': //中国工商银行
	                    case '308': //招商银行
	                    case '304': //华夏银行
	                    case '302': //中信银行
	                    case '104': //中国银行
	                    sbHead.attr("class","sb-head red");
	                    break;
	                    case '303': //中国光大银行
	                    sbHead.attr("class","sb-head purple");
	                    break;
	                    case '307': //平安银行
	                    case '310': //上海浦东发展银行
	                    sbHead.attr("class","sb-head yellow");
	                    break;
	                    case '403': //中国邮政储蓄银行
	                    case '103': //中国农业银行
	                    sbHead.attr("class","sb-head green");
	                    break;
	                    case '309': //兴业银行
	                    case '105': //中国建设银行
	                    sbHead.attr("class","sb-head blue");
	                    break;
	                    default:
	                    sbHead.attr("class","sb-head red");
	                }
	                $('.hd-logo img').attr('src',v.tieOnCardIcon);
	                $('#bank_name').html(v.bankName);
	                $('.hd-num').html(v.bankCardId);
	                $('#cardholder').html(v.realName);
	                isOpenAccount = v.existsOpenAccountName;
	                if( isOpenAccount == false){
	                    openBank.html('点击设置开户支行');
	                }else{
	                    openBank.html(v.openAccountName);
	                }
	            }else{
	                location.href = '/Member/Identification';
	            }
	            
	        }, 
	        unusualFun : function(v){
	            
	        }
	    }
	    JSBK.Utils.postAjax(bankData);  

	    //隐藏城市选择
	    function maskHid(){
	        multislterCont.removeClass('multislter-show');
	        setTimeout(function(){
	           multislterMask.addClass('none');
	        },300)
	    }

	    //显示省份城市
	    function maskShow(){
	        multislterMask.removeClass('none');
	        setTimeout(function(){
	            multislterCont.addClass('multislter-show');
	        },0)

	        new IScroll($('#provinceName')[0],{
	            tap: true        
	        })
	    }

	    //交易密码弹窗
	    var Confirm = __webpack_require__(21);
	    var openConfirm = new Confirm({
	        titleHtml : '交易密码',
	        infoHtml : function(){
	            return $('<input type="password" placeholder="请输入您的交易密码" value="" class="dialog-inp" id="trade_pwd">'+
	                '<p class="error-tip"><span></span></p>');
	        },
	        confirmCallback : function(){
	            var wdpwdVal = $('#trade_pwd').val(),
	                errorTip = $('.error-tip');
	            if(wdpwdVal == null || wdpwdVal == ''){
	                errorTip.html('请输入您的交易密码');
	                return false;
	            }

	            var sucData = {
	                data: {
	                    'TradePassword' : wdpwdVal
	                },
	                mFun: 'ValidateTradePassword',
	                sucFun : function(v){
	                    tradeToken = v.message;
	                    maskShow();
	                    $('.g-d-dialog').hide();
	                },
	                unusualFun : function(v){
	                    errorTip.html(v.ES);
	                }
	            }        
	            
	            JSBK.Utils.postAjax(sucData)
	        }
	    });
	    
	    //点击开户支行
	    openBank.on('click',function(){
	        if(isOpenAccount != false){
	            openConfirm.open();
	        }else{
	            maskShow();
	        }
	    })

	    //点击取消
	    cancleBtn.on('click',function(){
	        maskHid();
	    })

	    //点击确定
	    var provinceId,citySelect,cityCode,cityId,bankObj;
	    confirmBtn.on('click',function(){
	        maskHid();
	        provinceId = $('#provinceName li.selected').data('provinceid'),
	        citySelect = $('#citylist li.selected'),
	        cityCode = citySelect.data('citycode'),
	        cityId = citySelect.data('cityid');
	        pageCont.addClass('none');
	        searchCont.removeClass('none');
	        var getBankData = {
	            data: {
	                'CityCode' : cityCode
	            },
	            mFun: 'GetBankSubList',
	            beforeFun : function(){
	                load.show();
	            },
	            sucFun : function(v){
	                load.hide();
	                var bankArr = [];
	                    bankObj = v;
	                $.each(v,function(i,v){
	                    var bankHtml = '';
	                    bankHtml += '<li data-bankid="'+v.BankSubID+'">'+v.OpenAccountName+'</li>';
	                    bankArr.push(bankHtml);
	                })
	                searchInfo.html(bankArr.join(''));
	                
	            },
	            unusualFun : function(v){
	                load.hide();
	            }
	        } 

	        JSBK.Utils.postAjax(getBankData);

	    })

	    //初始化省份城市
	    var provinceInfo = $('#provinceName ul');
	    var cityInfo = $('#citylist ul');
	    var provinceArr = [];
	    var cityArr = [];
	    
	    $.each(JSBK.cityData,function(i,v){
	        var provinceHtml = '';
	        if(i == 0){
	            provinceHtml += '<li class="selected" data-index="'+i+'" data-provinceid="'+v.ProvinceID+'">'+v.ProvinceName+'</li>';

	            $.each(v.CityList,function(index,val){
	                var cityHtml = '';
	                if(index == 0){
	                    cityHtml += '<li class="selected" data-cityid="'+val.CityID+'" data-citycode="'+val.CityCode+'">'+val.CityName+'</li>';
	                }else{
	                    cityHtml += '<li data-cityid="'+val.CityID+'" data-citycode="'+val.CityCode+'">'+val.CityName+'</li>';
	                }
	                cityArr.push(cityHtml);
	            })
	            cityInfo.html(cityArr.join('')); 

	        }else{
	            provinceHtml += '<li data-index="'+i+'" data-provinceid="'+v.ProvinceID+'">'+v.ProvinceName+'</li>';
	        }
	        provinceArr.push(provinceHtml);        
	    })
	    provinceInfo.html(provinceArr.join(''));

	    //点击省份切换城市
	    $('#provinceName').on('tap','li',function(e){
	        $(this).addClass('selected');
	        $(this).siblings('li').removeClass('selected');

	        var index = $(this).data('index');
	        var selectCityArr = [];
	        $.each(JSBK.cityData[index].CityList,function(i,v){
	            
	            var cityHtml = '';
	            if(i == 0){
	                cityHtml += '<li class="selected" data-cityid="'+v.CityID+'" data-citycode="'+v.CityCode+'">'+v.CityName+'</li>';
	            }else{
	                cityHtml += '<li data-cityid="'+v.CityID+'" data-citycode="'+v.CityCode+'">'+v.CityName+'</li>';
	            }                
	            selectCityArr.push(cityHtml);
	        })
	        cityInfo.html(selectCityArr.join(''));
	        new IScroll($('#citylist')[0], {
	            tap: true        
	        })
	    })

	    //点击城市
	    $('#citylist').on('tap','li',function(e){
	        $(this).addClass('selected');
	        $(this).siblings('li').removeClass('selected');
	    })

	    //搜索
	    var searchHead = $('.search-head'),
	        searchInput = searchHead.find('input'),
	        searchBtn = $('.search-btn'),
	        bankName = '',
	        bankSubId;
	    var h = $(window).height() - searchHead.height();
	    searchInfo.css({'max-height':h,'overflow-y':'scroll'});

	    searchInfo.on('click','li',function(){
	        $(this).addClass('focus');
	        $(this).siblings('li').removeClass('focus');
	        bankName = $(this).text();
	        bankSubId = $(this).data('bankid');
	        searchInput.val(bankName);
	    })

	    var Alert = __webpack_require__(6);
	    var openAlert = new Alert({
	            titleHtml : '请输入支行名称或关键字'
	        });

	    searchBtn.on('click',function(){
	        if(searchInput.val() != ''){
	            searchCont.addClass('none');
	            pageCont.removeClass('none');

	            var selectBankData = {
	                data: {
	                    'BankSubID' : bankSubId,
	                    'OpenAccountName' : bankName,
	                    'ProvinceID' : provinceId,
	                    'CityID' : cityId,
	                    'TradeToken' : tradeToken || ''
	                },
	                mFun: 'ModifyBankSub',
	                sucFun : function(v){
	                    var retUrl = JSBK.Utils.GetUrlSearch('returl=');
	                        if (retUrl.length > 1){
	                            location.href = unescape(retUrl);
	                        }else{
	                            location.href = '/Member/AccountCenter';
	                        }
	                },
	                unusualFun : function(v){
	                    //console.log('异常');
	                }
	            }

	            JSBK.Utils.postAjax(selectBankData);  
	            openBank.html(bankName);
	        }else{
	            openAlert.open();
	        }
	    })

	    
	    //匹配支行名称
	    $('#search_bank').on('keyup',function(v){
	        var kw = $.trim($(this).val());
	        var selectBankArr = [];
	        $.each(bankObj,function(i,v){
	            var html = '';
	            if(v.OpenAccountName.indexOf(kw) >= 0){
	                html += '<li data-bankid="'+v.BankSubID+'">'+v.OpenAccountName.replace(eval("/"+kw+"/g"),"<span>"+kw+"</span>")+'</li>';
	                selectBankArr.push(html);
	            }
	        })
	        searchInfo.html(selectBankArr.join(''));
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

/***/ 68:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 71:
/***/ function(module, exports) {

	
	window.JSBK.cityData = [{"ProvinceID":1,"ProvinceCode":11,"ProvinceName":"北京","CityList":[{"CityID":1,"CityCode":1100,"CityName":"北京市","ProvinceCode":11}]},{"ProvinceID":2,"ProvinceCode":12,"ProvinceName":"天津","CityList":[{"CityID":2,"CityCode":1200,"CityName":"天津市","ProvinceCode":12}]},{"ProvinceID":3,"ProvinceCode":13,"ProvinceName":"河北省","CityList":[{"CityID":3,"CityCode":1301,"CityName":"石家庄市","ProvinceCode":13},{"CityID":4,"CityCode":1302,"CityName":"唐山市","ProvinceCode":13},{"CityID":5,"CityCode":1303,"CityName":"秦皇岛市","ProvinceCode":13},{"CityID":6,"CityCode":1304,"CityName":"邯郸市","ProvinceCode":13},{"CityID":7,"CityCode":1305,"CityName":"邢台市","ProvinceCode":13},{"CityID":8,"CityCode":1306,"CityName":"保定市","ProvinceCode":13},{"CityID":9,"CityCode":1307,"CityName":"张家口市","ProvinceCode":13},{"CityID":10,"CityCode":1308,"CityName":"承德市","ProvinceCode":13},{"CityID":11,"CityCode":1309,"CityName":"沧州市","ProvinceCode":13},{"CityID":12,"CityCode":1310,"CityName":"廊坊市","ProvinceCode":13},{"CityID":13,"CityCode":1311,"CityName":"衡水市","ProvinceCode":13}]},{"ProvinceID":4,"ProvinceCode":14,"ProvinceName":"山西省","CityList":[{"CityID":14,"CityCode":1401,"CityName":"太原市","ProvinceCode":14},{"CityID":15,"CityCode":1402,"CityName":"大同市","ProvinceCode":14},{"CityID":16,"CityCode":1403,"CityName":"阳泉市","ProvinceCode":14},{"CityID":17,"CityCode":1404,"CityName":"长治市","ProvinceCode":14},{"CityID":18,"CityCode":1405,"CityName":"晋城市","ProvinceCode":14},{"CityID":19,"CityCode":1406,"CityName":"朔州市","ProvinceCode":14},{"CityID":20,"CityCode":1407,"CityName":"晋中市","ProvinceCode":14},{"CityID":21,"CityCode":1408,"CityName":"运城市","ProvinceCode":14},{"CityID":22,"CityCode":1409,"CityName":"忻州市","ProvinceCode":14},{"CityID":23,"CityCode":1410,"CityName":"临汾市","ProvinceCode":14},{"CityID":24,"CityCode":1411,"CityName":"吕梁市","ProvinceCode":14}]},{"ProvinceID":5,"ProvinceCode":15,"ProvinceName":"内蒙古自治区","CityList":[{"CityID":25,"CityCode":1501,"CityName":"呼和浩特市","ProvinceCode":15},{"CityID":26,"CityCode":1502,"CityName":"包头市","ProvinceCode":15},{"CityID":27,"CityCode":1503,"CityName":"乌海市","ProvinceCode":15},{"CityID":28,"CityCode":1504,"CityName":"赤峰市","ProvinceCode":15},{"CityID":29,"CityCode":1505,"CityName":"通辽市","ProvinceCode":15},{"CityID":30,"CityCode":1506,"CityName":"鄂尔多斯市","ProvinceCode":15},{"CityID":31,"CityCode":1507,"CityName":"呼伦贝尔市","ProvinceCode":15},{"CityID":32,"CityCode":1508,"CityName":"巴彦淖尔市","ProvinceCode":15},{"CityID":33,"CityCode":1509,"CityName":"乌兰察布市","ProvinceCode":15},{"CityID":34,"CityCode":1522,"CityName":"兴安盟","ProvinceCode":15},{"CityID":35,"CityCode":1525,"CityName":"锡林郭勒盟","ProvinceCode":15},{"CityID":36,"CityCode":1529,"CityName":"阿拉善盟","ProvinceCode":15}]},{"ProvinceID":6,"ProvinceCode":21,"ProvinceName":"辽宁省","CityList":[{"CityID":37,"CityCode":2101,"CityName":"沈阳市","ProvinceCode":21},{"CityID":38,"CityCode":2102,"CityName":"大连市","ProvinceCode":21},{"CityID":39,"CityCode":2103,"CityName":"鞍山市","ProvinceCode":21},{"CityID":40,"CityCode":2104,"CityName":"抚顺市","ProvinceCode":21},{"CityID":41,"CityCode":2105,"CityName":"本溪市","ProvinceCode":21},{"CityID":42,"CityCode":2106,"CityName":"丹东市","ProvinceCode":21},{"CityID":43,"CityCode":2107,"CityName":"锦州市","ProvinceCode":21},{"CityID":44,"CityCode":2108,"CityName":"营口市","ProvinceCode":21},{"CityID":45,"CityCode":2109,"CityName":"阜新市","ProvinceCode":21},{"CityID":46,"CityCode":2110,"CityName":"辽阳市","ProvinceCode":21},{"CityID":47,"CityCode":2111,"CityName":"盘锦市","ProvinceCode":21},{"CityID":48,"CityCode":2112,"CityName":"铁岭市","ProvinceCode":21},{"CityID":49,"CityCode":2113,"CityName":"朝阳市","ProvinceCode":21},{"CityID":50,"CityCode":2114,"CityName":"葫芦岛市","ProvinceCode":21}]},{"ProvinceID":7,"ProvinceCode":22,"ProvinceName":"吉林省","CityList":[{"CityID":51,"CityCode":2201,"CityName":"长春市","ProvinceCode":22},{"CityID":52,"CityCode":2202,"CityName":"吉林市","ProvinceCode":22},{"CityID":53,"CityCode":2203,"CityName":"四平市","ProvinceCode":22},{"CityID":54,"CityCode":2204,"CityName":"辽源市","ProvinceCode":22},{"CityID":55,"CityCode":2205,"CityName":"通化市","ProvinceCode":22},{"CityID":56,"CityCode":2206,"CityName":"白山市","ProvinceCode":22},{"CityID":57,"CityCode":2207,"CityName":"松原市","ProvinceCode":22},{"CityID":58,"CityCode":2208,"CityName":"白城市","ProvinceCode":22},{"CityID":59,"CityCode":2224,"CityName":"延边朝鲜族自治州","ProvinceCode":22}]},{"ProvinceID":8,"ProvinceCode":23,"ProvinceName":"黑龙江省","CityList":[{"CityID":60,"CityCode":2301,"CityName":"哈尔滨市","ProvinceCode":23},{"CityID":61,"CityCode":2302,"CityName":"齐齐哈尔市","ProvinceCode":23},{"CityID":62,"CityCode":2303,"CityName":"鸡西市","ProvinceCode":23},{"CityID":63,"CityCode":2304,"CityName":"鹤岗市","ProvinceCode":23},{"CityID":64,"CityCode":2305,"CityName":"双鸭山市","ProvinceCode":23},{"CityID":65,"CityCode":2306,"CityName":"大庆市","ProvinceCode":23},{"CityID":66,"CityCode":2307,"CityName":"伊春市","ProvinceCode":23},{"CityID":67,"CityCode":2308,"CityName":"佳木斯市","ProvinceCode":23},{"CityID":68,"CityCode":2309,"CityName":"七台河市","ProvinceCode":23},{"CityID":69,"CityCode":2310,"CityName":"牡丹江市","ProvinceCode":23},{"CityID":70,"CityCode":2311,"CityName":"黑河市","ProvinceCode":23},{"CityID":71,"CityCode":2312,"CityName":"绥化市","ProvinceCode":23},{"CityID":72,"CityCode":2327,"CityName":"大兴安岭地区","ProvinceCode":23}]},{"ProvinceID":9,"ProvinceCode":31,"ProvinceName":"上海","CityList":[{"CityID":73,"CityCode":3100,"CityName":"上海市","ProvinceCode":31}]},{"ProvinceID":10,"ProvinceCode":32,"ProvinceName":"江苏省","CityList":[{"CityID":74,"CityCode":3201,"CityName":"南京市","ProvinceCode":32},{"CityID":75,"CityCode":3202,"CityName":"无锡市","ProvinceCode":32},{"CityID":76,"CityCode":3203,"CityName":"徐州市","ProvinceCode":32},{"CityID":77,"CityCode":3204,"CityName":"常州市","ProvinceCode":32},{"CityID":78,"CityCode":3205,"CityName":"苏州市","ProvinceCode":32},{"CityID":79,"CityCode":3206,"CityName":"南通市","ProvinceCode":32},{"CityID":80,"CityCode":3207,"CityName":"连云港市","ProvinceCode":32},{"CityID":81,"CityCode":3208,"CityName":"淮安市","ProvinceCode":32},{"CityID":82,"CityCode":3209,"CityName":"盐城市","ProvinceCode":32},{"CityID":83,"CityCode":3210,"CityName":"扬州市","ProvinceCode":32},{"CityID":84,"CityCode":3211,"CityName":"镇江市","ProvinceCode":32},{"CityID":85,"CityCode":3212,"CityName":"泰州市","ProvinceCode":32},{"CityID":86,"CityCode":3213,"CityName":"宿迁市","ProvinceCode":32}]},{"ProvinceID":11,"ProvinceCode":33,"ProvinceName":"浙江省","CityList":[{"CityID":87,"CityCode":3301,"CityName":"杭州市","ProvinceCode":33},{"CityID":88,"CityCode":3302,"CityName":"宁波市","ProvinceCode":33},{"CityID":89,"CityCode":3303,"CityName":"温州市","ProvinceCode":33},{"CityID":90,"CityCode":3304,"CityName":"嘉兴市","ProvinceCode":33},{"CityID":91,"CityCode":3305,"CityName":"湖州市","ProvinceCode":33},{"CityID":92,"CityCode":3306,"CityName":"绍兴市","ProvinceCode":33},{"CityID":93,"CityCode":3307,"CityName":"金华市","ProvinceCode":33},{"CityID":94,"CityCode":3308,"CityName":"衢州市","ProvinceCode":33},{"CityID":95,"CityCode":3309,"CityName":"舟山市","ProvinceCode":33},{"CityID":96,"CityCode":3310,"CityName":"台州市","ProvinceCode":33},{"CityID":97,"CityCode":3311,"CityName":"丽水市","ProvinceCode":33}]},{"ProvinceID":12,"ProvinceCode":34,"ProvinceName":"安徽省","CityList":[{"CityID":98,"CityCode":3401,"CityName":"合肥市","ProvinceCode":34},{"CityID":99,"CityCode":3402,"CityName":"芜湖市","ProvinceCode":34},{"CityID":100,"CityCode":3403,"CityName":"蚌埠市","ProvinceCode":34},{"CityID":101,"CityCode":3404,"CityName":"淮南市","ProvinceCode":34},{"CityID":102,"CityCode":3405,"CityName":"马鞍山市","ProvinceCode":34},{"CityID":103,"CityCode":3406,"CityName":"淮北市","ProvinceCode":34},{"CityID":104,"CityCode":3407,"CityName":"铜陵市","ProvinceCode":34},{"CityID":105,"CityCode":3408,"CityName":"安庆市","ProvinceCode":34},{"CityID":106,"CityCode":3410,"CityName":"黄山市","ProvinceCode":34},{"CityID":107,"CityCode":3411,"CityName":"滁州市","ProvinceCode":34},{"CityID":108,"CityCode":3412,"CityName":"阜阳市","ProvinceCode":34},{"CityID":109,"CityCode":3413,"CityName":"宿州市","ProvinceCode":34},{"CityID":110,"CityCode":3414,"CityName":"巢湖市","ProvinceCode":34},{"CityID":111,"CityCode":3415,"CityName":"六安市","ProvinceCode":34},{"CityID":112,"CityCode":3416,"CityName":"亳州市","ProvinceCode":34},{"CityID":113,"CityCode":3417,"CityName":"池州市","ProvinceCode":34},{"CityID":114,"CityCode":3418,"CityName":"宣城市","ProvinceCode":34}]},{"ProvinceID":13,"ProvinceCode":35,"ProvinceName":"福建省","CityList":[{"CityID":115,"CityCode":3501,"CityName":"福州市","ProvinceCode":35},{"CityID":116,"CityCode":3502,"CityName":"厦门市","ProvinceCode":35},{"CityID":117,"CityCode":3503,"CityName":"莆田市","ProvinceCode":35},{"CityID":118,"CityCode":3504,"CityName":"三明市","ProvinceCode":35},{"CityID":119,"CityCode":3505,"CityName":"泉州市","ProvinceCode":35},{"CityID":120,"CityCode":3506,"CityName":"漳州市","ProvinceCode":35},{"CityID":121,"CityCode":3507,"CityName":"南平市","ProvinceCode":35},{"CityID":122,"CityCode":3508,"CityName":"龙岩市","ProvinceCode":35},{"CityID":123,"CityCode":3509,"CityName":"宁德市","ProvinceCode":35}]},{"ProvinceID":14,"ProvinceCode":36,"ProvinceName":"江西省","CityList":[{"CityID":124,"CityCode":3601,"CityName":"南昌市","ProvinceCode":36},{"CityID":125,"CityCode":3602,"CityName":"景德镇市","ProvinceCode":36},{"CityID":126,"CityCode":3603,"CityName":"萍乡市","ProvinceCode":36},{"CityID":127,"CityCode":3604,"CityName":"九江市","ProvinceCode":36},{"CityID":128,"CityCode":3605,"CityName":"新余市","ProvinceCode":36},{"CityID":129,"CityCode":3606,"CityName":"鹰潭市","ProvinceCode":36},{"CityID":130,"CityCode":3607,"CityName":"赣州市","ProvinceCode":36},{"CityID":131,"CityCode":3608,"CityName":"吉安市","ProvinceCode":36},{"CityID":132,"CityCode":3609,"CityName":"宜春市","ProvinceCode":36},{"CityID":133,"CityCode":3610,"CityName":"抚州市","ProvinceCode":36},{"CityID":134,"CityCode":3611,"CityName":"上饶市","ProvinceCode":36}]},{"ProvinceID":15,"ProvinceCode":37,"ProvinceName":"山东省","CityList":[{"CityID":135,"CityCode":3701,"CityName":"济南市","ProvinceCode":37},{"CityID":136,"CityCode":3702,"CityName":"青岛市","ProvinceCode":37},{"CityID":137,"CityCode":3703,"CityName":"淄博市","ProvinceCode":37},{"CityID":138,"CityCode":3704,"CityName":"枣庄市","ProvinceCode":37},{"CityID":139,"CityCode":3705,"CityName":"东营市","ProvinceCode":37},{"CityID":140,"CityCode":3706,"CityName":"烟台市","ProvinceCode":37},{"CityID":141,"CityCode":3707,"CityName":"潍坊市","ProvinceCode":37},{"CityID":142,"CityCode":3708,"CityName":"济宁市","ProvinceCode":37},{"CityID":143,"CityCode":3709,"CityName":"泰安市","ProvinceCode":37},{"CityID":144,"CityCode":3710,"CityName":"威海市","ProvinceCode":37},{"CityID":145,"CityCode":3711,"CityName":"日照市","ProvinceCode":37},{"CityID":146,"CityCode":3712,"CityName":"莱芜市","ProvinceCode":37},{"CityID":147,"CityCode":3713,"CityName":"临沂市","ProvinceCode":37},{"CityID":148,"CityCode":3714,"CityName":"德州市","ProvinceCode":37},{"CityID":149,"CityCode":3715,"CityName":"聊城市","ProvinceCode":37},{"CityID":150,"CityCode":3716,"CityName":"滨州市","ProvinceCode":37},{"CityID":151,"CityCode":3717,"CityName":"菏泽市","ProvinceCode":37}]},{"ProvinceID":16,"ProvinceCode":41,"ProvinceName":"河南省","CityList":[{"CityID":152,"CityCode":4101,"CityName":"郑州市","ProvinceCode":41},{"CityID":153,"CityCode":4102,"CityName":"开封市","ProvinceCode":41},{"CityID":154,"CityCode":4103,"CityName":"洛阳市","ProvinceCode":41},{"CityID":155,"CityCode":4104,"CityName":"平顶山市","ProvinceCode":41},{"CityID":156,"CityCode":4105,"CityName":"安阳市","ProvinceCode":41},{"CityID":157,"CityCode":4106,"CityName":"鹤壁市","ProvinceCode":41},{"CityID":158,"CityCode":4107,"CityName":"新乡市","ProvinceCode":41},{"CityID":159,"CityCode":4108,"CityName":"焦作市","ProvinceCode":41},{"CityID":160,"CityCode":4109,"CityName":"濮阳市","ProvinceCode":41},{"CityID":161,"CityCode":4110,"CityName":"许昌市","ProvinceCode":41},{"CityID":162,"CityCode":4111,"CityName":"漯河市","ProvinceCode":41},{"CityID":163,"CityCode":4112,"CityName":"三门峡市","ProvinceCode":41},{"CityID":164,"CityCode":4113,"CityName":"南阳市","ProvinceCode":41},{"CityID":165,"CityCode":4114,"CityName":"商丘市","ProvinceCode":41},{"CityID":166,"CityCode":4115,"CityName":"信阳市","ProvinceCode":41},{"CityID":167,"CityCode":4116,"CityName":"周口市","ProvinceCode":41},{"CityID":168,"CityCode":4117,"CityName":"驻马店市","ProvinceCode":41}]},{"ProvinceID":17,"ProvinceCode":42,"ProvinceName":"湖北省","CityList":[{"CityID":169,"CityCode":4201,"CityName":"武汉市","ProvinceCode":42},{"CityID":170,"CityCode":4202,"CityName":"黄石市","ProvinceCode":42},{"CityID":171,"CityCode":4203,"CityName":"十堰市","ProvinceCode":42},{"CityID":172,"CityCode":4205,"CityName":"宜昌市","ProvinceCode":42},{"CityID":173,"CityCode":4206,"CityName":"襄樊市","ProvinceCode":42},{"CityID":174,"CityCode":4207,"CityName":"鄂州市","ProvinceCode":42},{"CityID":175,"CityCode":4208,"CityName":"荆门市","ProvinceCode":42},{"CityID":176,"CityCode":4209,"CityName":"孝感市","ProvinceCode":42},{"CityID":177,"CityCode":4210,"CityName":"荆州市","ProvinceCode":42},{"CityID":178,"CityCode":4211,"CityName":"黄冈市","ProvinceCode":42},{"CityID":179,"CityCode":4212,"CityName":"咸宁市","ProvinceCode":42},{"CityID":180,"CityCode":4213,"CityName":"随州市","ProvinceCode":42},{"CityID":181,"CityCode":4228,"CityName":"恩施土家族苗族自治州","ProvinceCode":42},{"CityID":182,"CityCode":4290,"CityName":"省直辖行政单位","ProvinceCode":42}]},{"ProvinceID":18,"ProvinceCode":43,"ProvinceName":"湖南省","CityList":[{"CityID":183,"CityCode":4301,"CityName":"长沙市","ProvinceCode":43},{"CityID":184,"CityCode":4302,"CityName":"株州市","ProvinceCode":43},{"CityID":185,"CityCode":4303,"CityName":"湘潭市","ProvinceCode":43},{"CityID":186,"CityCode":4304,"CityName":"衡阳市","ProvinceCode":43},{"CityID":187,"CityCode":4305,"CityName":"邵阳市","ProvinceCode":43},{"CityID":188,"CityCode":4306,"CityName":"岳阳市","ProvinceCode":43},{"CityID":189,"CityCode":4307,"CityName":"常德市","ProvinceCode":43},{"CityID":190,"CityCode":4308,"CityName":"张家界市","ProvinceCode":43},{"CityID":191,"CityCode":4309,"CityName":"益阳市","ProvinceCode":43},{"CityID":192,"CityCode":4310,"CityName":"郴州市","ProvinceCode":43},{"CityID":193,"CityCode":4311,"CityName":"永州市","ProvinceCode":43},{"CityID":194,"CityCode":4312,"CityName":"怀化市","ProvinceCode":43},{"CityID":195,"CityCode":4313,"CityName":"娄底市","ProvinceCode":43},{"CityID":196,"CityCode":4331,"CityName":"湘西土家族苗族自治州","ProvinceCode":43}]},{"ProvinceID":19,"ProvinceCode":44,"ProvinceName":"广东省","CityList":[{"CityID":197,"CityCode":4401,"CityName":"广州市","ProvinceCode":44},{"CityID":198,"CityCode":4402,"CityName":"韶关市","ProvinceCode":44},{"CityID":199,"CityCode":4403,"CityName":"深圳市","ProvinceCode":44},{"CityID":200,"CityCode":4404,"CityName":"珠海市","ProvinceCode":44},{"CityID":201,"CityCode":4405,"CityName":"汕头市","ProvinceCode":44},{"CityID":202,"CityCode":4406,"CityName":"佛山市","ProvinceCode":44},{"CityID":203,"CityCode":4407,"CityName":"江门市","ProvinceCode":44},{"CityID":204,"CityCode":4408,"CityName":"湛江市","ProvinceCode":44},{"CityID":205,"CityCode":4409,"CityName":"茂名市","ProvinceCode":44},{"CityID":206,"CityCode":4412,"CityName":"肇庆市","ProvinceCode":44},{"CityID":207,"CityCode":4413,"CityName":"惠州市","ProvinceCode":44},{"CityID":208,"CityCode":4414,"CityName":"梅州市","ProvinceCode":44},{"CityID":209,"CityCode":4415,"CityName":"汕尾市","ProvinceCode":44},{"CityID":210,"CityCode":4416,"CityName":"河源市","ProvinceCode":44},{"CityID":211,"CityCode":4417,"CityName":"阳江市","ProvinceCode":44},{"CityID":212,"CityCode":4418,"CityName":"清远市","ProvinceCode":44},{"CityID":213,"CityCode":4419,"CityName":"东莞市","ProvinceCode":44},{"CityID":214,"CityCode":4420,"CityName":"中山市","ProvinceCode":44},{"CityID":215,"CityCode":4451,"CityName":"潮州市","ProvinceCode":44},{"CityID":216,"CityCode":4452,"CityName":"揭阳市","ProvinceCode":44},{"CityID":217,"CityCode":4453,"CityName":"云浮市","ProvinceCode":44}]},{"ProvinceID":20,"ProvinceCode":45,"ProvinceName":"广西壮族自治区","CityList":[{"CityID":218,"CityCode":4501,"CityName":"南宁市","ProvinceCode":45},{"CityID":219,"CityCode":4502,"CityName":"柳州市","ProvinceCode":45},{"CityID":220,"CityCode":4503,"CityName":"桂林市","ProvinceCode":45},{"CityID":221,"CityCode":4504,"CityName":"梧州市","ProvinceCode":45},{"CityID":222,"CityCode":4505,"CityName":"北海市","ProvinceCode":45},{"CityID":223,"CityCode":4506,"CityName":"防城港市","ProvinceCode":45},{"CityID":224,"CityCode":4507,"CityName":"钦州市","ProvinceCode":45},{"CityID":225,"CityCode":4508,"CityName":"贵港市","ProvinceCode":45},{"CityID":226,"CityCode":4509,"CityName":"玉林市","ProvinceCode":45},{"CityID":227,"CityCode":4510,"CityName":"百色市","ProvinceCode":45},{"CityID":228,"CityCode":4511,"CityName":"贺州市","ProvinceCode":45},{"CityID":229,"CityCode":4512,"CityName":"河池市","ProvinceCode":45},{"CityID":230,"CityCode":4513,"CityName":"来宾市","ProvinceCode":45},{"CityID":231,"CityCode":4514,"CityName":"崇左市","ProvinceCode":45}]},{"ProvinceID":21,"ProvinceCode":46,"ProvinceName":"海南省","CityList":[{"CityID":232,"CityCode":4601,"CityName":"海口市","ProvinceCode":46},{"CityID":233,"CityCode":4602,"CityName":"三亚市","ProvinceCode":46},{"CityID":234,"CityCode":4690,"CityName":"直辖县级行政单位","ProvinceCode":46}]},{"ProvinceID":22,"ProvinceCode":50,"ProvinceName":"重庆","CityList":[{"CityID":235,"CityCode":5000,"CityName":"重庆市","ProvinceCode":50}]},{"ProvinceID":23,"ProvinceCode":51,"ProvinceName":"四川省","CityList":[{"CityID":236,"CityCode":5101,"CityName":"成都市","ProvinceCode":51},{"CityID":237,"CityCode":5103,"CityName":"自贡市","ProvinceCode":51},{"CityID":238,"CityCode":5104,"CityName":"攀枝花市","ProvinceCode":51},{"CityID":239,"CityCode":5105,"CityName":"泸州市","ProvinceCode":51},{"CityID":240,"CityCode":5106,"CityName":"德阳市","ProvinceCode":51},{"CityID":241,"CityCode":5107,"CityName":"绵阳市","ProvinceCode":51},{"CityID":242,"CityCode":5108,"CityName":"广元市","ProvinceCode":51},{"CityID":243,"CityCode":5109,"CityName":"遂宁市","ProvinceCode":51},{"CityID":244,"CityCode":5110,"CityName":"内江市","ProvinceCode":51},{"CityID":245,"CityCode":5111,"CityName":"乐山市","ProvinceCode":51},{"CityID":246,"CityCode":5113,"CityName":"南充市","ProvinceCode":51},{"CityID":247,"CityCode":5114,"CityName":"眉山市","ProvinceCode":51},{"CityID":248,"CityCode":5115,"CityName":"宜宾市","ProvinceCode":51},{"CityID":249,"CityCode":5116,"CityName":"广安市","ProvinceCode":51},{"CityID":250,"CityCode":5117,"CityName":"达州市","ProvinceCode":51},{"CityID":251,"CityCode":5118,"CityName":"雅安市","ProvinceCode":51},{"CityID":252,"CityCode":5119,"CityName":"巴中市","ProvinceCode":51},{"CityID":253,"CityCode":5120,"CityName":"资阳市","ProvinceCode":51},{"CityID":254,"CityCode":5132,"CityName":"阿坝藏族羌族自治州","ProvinceCode":51},{"CityID":255,"CityCode":5133,"CityName":"甘孜藏族自治州","ProvinceCode":51},{"CityID":256,"CityCode":5134,"CityName":"凉山彝族自治州","ProvinceCode":51}]},{"ProvinceID":24,"ProvinceCode":52,"ProvinceName":"贵州省","CityList":[{"CityID":257,"CityCode":5201,"CityName":"贵阳市","ProvinceCode":52},{"CityID":258,"CityCode":5202,"CityName":"六盘水市","ProvinceCode":52},{"CityID":259,"CityCode":5203,"CityName":"遵义市","ProvinceCode":52},{"CityID":260,"CityCode":5204,"CityName":"安顺市","ProvinceCode":52},{"CityID":261,"CityCode":5222,"CityName":"铜仁地区","ProvinceCode":52},{"CityID":262,"CityCode":5223,"CityName":"黔西南布依族苗族自治州","ProvinceCode":52},{"CityID":263,"CityCode":5224,"CityName":"毕节地区","ProvinceCode":52},{"CityID":264,"CityCode":5226,"CityName":"黔东南苗族侗族自治州","ProvinceCode":52},{"CityID":265,"CityCode":5227,"CityName":"黔南布依族苗族自治州","ProvinceCode":52}]},{"ProvinceID":25,"ProvinceCode":53,"ProvinceName":"云南省","CityList":[{"CityID":266,"CityCode":5301,"CityName":"昆明市","ProvinceCode":53},{"CityID":267,"CityCode":5303,"CityName":"曲靖市","ProvinceCode":53},{"CityID":268,"CityCode":5304,"CityName":"玉溪市","ProvinceCode":53},{"CityID":269,"CityCode":5305,"CityName":"保山市","ProvinceCode":53},{"CityID":270,"CityCode":5306,"CityName":"昭通市","ProvinceCode":53},{"CityID":271,"CityCode":5307,"CityName":"丽江市","ProvinceCode":53},{"CityID":272,"CityCode":5308,"CityName":"思茅市","ProvinceCode":53},{"CityID":273,"CityCode":5309,"CityName":"临沧市","ProvinceCode":53},{"CityID":274,"CityCode":5323,"CityName":"楚雄彝族自治州","ProvinceCode":53},{"CityID":275,"CityCode":5325,"CityName":"红河哈尼族彝族自治州","ProvinceCode":53},{"CityID":276,"CityCode":5326,"CityName":"文山壮族苗族自治州","ProvinceCode":53},{"CityID":277,"CityCode":5328,"CityName":"西双版纳傣族自治州","ProvinceCode":53},{"CityID":278,"CityCode":5329,"CityName":"大理白族自治州","ProvinceCode":53},{"CityID":279,"CityCode":5331,"CityName":"德宏傣族景颇族自治州","ProvinceCode":53},{"CityID":280,"CityCode":5333,"CityName":"怒江傈僳族自治州","ProvinceCode":53},{"CityID":281,"CityCode":5334,"CityName":"迪庆藏族自治州","ProvinceCode":53}]},{"ProvinceID":26,"ProvinceCode":54,"ProvinceName":"西藏自治区","CityList":[{"CityID":282,"CityCode":5401,"CityName":"拉萨市","ProvinceCode":54},{"CityID":283,"CityCode":5421,"CityName":"昌都地区","ProvinceCode":54},{"CityID":284,"CityCode":5422,"CityName":"山南地区","ProvinceCode":54},{"CityID":285,"CityCode":5423,"CityName":"日喀则地区","ProvinceCode":54},{"CityID":286,"CityCode":5424,"CityName":"那曲地区","ProvinceCode":54},{"CityID":287,"CityCode":5425,"CityName":"阿里地区","ProvinceCode":54},{"CityID":288,"CityCode":5426,"CityName":"林芝地区","ProvinceCode":54}]},{"ProvinceID":27,"ProvinceCode":61,"ProvinceName":"陕西省","CityList":[{"CityID":289,"CityCode":6101,"CityName":"西安市","ProvinceCode":61},{"CityID":290,"CityCode":6102,"CityName":"铜川市","ProvinceCode":61},{"CityID":291,"CityCode":6103,"CityName":"宝鸡市","ProvinceCode":61},{"CityID":292,"CityCode":6104,"CityName":"咸阳市","ProvinceCode":61},{"CityID":293,"CityCode":6105,"CityName":"渭南市","ProvinceCode":61},{"CityID":294,"CityCode":6106,"CityName":"延安市","ProvinceCode":61},{"CityID":295,"CityCode":6107,"CityName":"汉中市","ProvinceCode":61},{"CityID":296,"CityCode":6108,"CityName":"榆林市","ProvinceCode":61},{"CityID":297,"CityCode":6109,"CityName":"安康市","ProvinceCode":61},{"CityID":298,"CityCode":6110,"CityName":"商洛市","ProvinceCode":61}]},{"ProvinceID":28,"ProvinceCode":62,"ProvinceName":"甘肃省","CityList":[{"CityID":299,"CityCode":6201,"CityName":"兰州市","ProvinceCode":62},{"CityID":300,"CityCode":6202,"CityName":"嘉峪关市","ProvinceCode":62},{"CityID":301,"CityCode":6203,"CityName":"金昌市","ProvinceCode":62},{"CityID":302,"CityCode":6204,"CityName":"白银市","ProvinceCode":62},{"CityID":303,"CityCode":6205,"CityName":"天水市","ProvinceCode":62},{"CityID":304,"CityCode":6206,"CityName":"武威市","ProvinceCode":62},{"CityID":305,"CityCode":6207,"CityName":"张掖市","ProvinceCode":62},{"CityID":306,"CityCode":6208,"CityName":"平凉市","ProvinceCode":62},{"CityID":307,"CityCode":6209,"CityName":"酒泉市","ProvinceCode":62},{"CityID":308,"CityCode":6210,"CityName":"庆阳市","ProvinceCode":62},{"CityID":309,"CityCode":6211,"CityName":"定西市","ProvinceCode":62},{"CityID":310,"CityCode":6212,"CityName":"陇南市","ProvinceCode":62},{"CityID":311,"CityCode":6229,"CityName":"临夏回族自治州","ProvinceCode":62},{"CityID":312,"CityCode":6230,"CityName":"甘南藏族自治州","ProvinceCode":62}]},{"ProvinceID":29,"ProvinceCode":63,"ProvinceName":"青海省","CityList":[{"CityID":313,"CityCode":6301,"CityName":"西宁市","ProvinceCode":63},{"CityID":314,"CityCode":6321,"CityName":"海东地区","ProvinceCode":63},{"CityID":315,"CityCode":6322,"CityName":"海北藏族自治州","ProvinceCode":63},{"CityID":316,"CityCode":6323,"CityName":"黄南藏族自治州","ProvinceCode":63},{"CityID":317,"CityCode":6325,"CityName":"海南藏族自治州","ProvinceCode":63},{"CityID":318,"CityCode":6326,"CityName":"果洛藏族自治州","ProvinceCode":63},{"CityID":319,"CityCode":6327,"CityName":"玉树藏族自治州","ProvinceCode":63},{"CityID":320,"CityCode":6328,"CityName":"海西蒙古族藏族自治州","ProvinceCode":63}]},{"ProvinceID":30,"ProvinceCode":64,"ProvinceName":"宁夏回族自治区","CityList":[{"CityID":321,"CityCode":6401,"CityName":"银川市","ProvinceCode":64},{"CityID":322,"CityCode":6402,"CityName":"石嘴山市","ProvinceCode":64},{"CityID":323,"CityCode":6403,"CityName":"吴忠市","ProvinceCode":64},{"CityID":324,"CityCode":6404,"CityName":"固原市","ProvinceCode":64},{"CityID":325,"CityCode":6405,"CityName":"中卫市","ProvinceCode":64}]},{"ProvinceID":31,"ProvinceCode":65,"ProvinceName":"新疆维吾尔自治区","CityList":[{"CityID":326,"CityCode":6501,"CityName":"乌鲁木齐市","ProvinceCode":65},{"CityID":327,"CityCode":6502,"CityName":"克拉玛依市","ProvinceCode":65},{"CityID":328,"CityCode":6521,"CityName":"吐鲁番地区","ProvinceCode":65},{"CityID":329,"CityCode":6522,"CityName":"哈密地区","ProvinceCode":65},{"CityID":330,"CityCode":6523,"CityName":"昌吉回族自治州","ProvinceCode":65},{"CityID":331,"CityCode":6527,"CityName":"博尔塔拉蒙古自治州","ProvinceCode":65},{"CityID":332,"CityCode":6528,"CityName":"巴音郭楞蒙古自治州","ProvinceCode":65},{"CityID":333,"CityCode":6529,"CityName":"阿克苏地区","ProvinceCode":65},{"CityID":334,"CityCode":6530,"CityName":"克孜勒苏柯尔克孜自治州","ProvinceCode":65},{"CityID":335,"CityCode":6531,"CityName":"喀什地区","ProvinceCode":65},{"CityID":336,"CityCode":6532,"CityName":"和田地区","ProvinceCode":65},{"CityID":337,"CityCode":6540,"CityName":"伊犁哈萨克自治州","ProvinceCode":65},{"CityID":338,"CityCode":6542,"CityName":"塔城地区","ProvinceCode":65},{"CityID":339,"CityCode":6543,"CityName":"阿勒泰地区","ProvinceCode":65},{"CityID":340,"CityCode":6590,"CityName":"省直辖行政单位","ProvinceCode":65}]}]

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}

			return false;
		})();

		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime () { return new Date().getTime(); };

		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;

			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;

					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }

					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
				ev;

			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
				// initMouseEvent is deprecated.
				ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
				ev.initEvent('click', true, true);
				ev.view = e.view || window;
				ev.detail = 1;
				ev.screenX = target.screenX || 0;
				ev.screenY = target.screenY || 0;
				ev.clientX = target.clientX || 0;
				ev.clientY = target.clientY || 0;
				ev.ctrlKey = !!e.ctrlKey;
				ev.altKey = !!e.altKey;
				ev.shiftKey = !!e.shiftKey;
				ev.metaKey = !!e.metaKey;
				ev.button = 0;
				ev.relatedTarget = null;
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance

		this.options = {

	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}

		// https://github.com/cubiq/iscroll/issues/1029
		if (!this.options.useTransition && !this.options.useTransform) {
			if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
				this.scrollerStyle.position = "relative";
			}
		}

	// INSERT POINT: NORMALIZATION

		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

	// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScroll.prototype = {
		version: '5.2.0',

		_init: function () {
			this._initEvents();

	// INSERT POINT: _init

		},

		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},

		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}

			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}

			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}

			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				pos;

			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this.startTime = utils.getTime();

			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;

			this.pointX		= point.pageX;
			this.pointY		= point.pageY;

			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}

			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);

	/* REPLACE START: _move */

			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

	/* REPLACE END: _move */

		},

		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}

			this.scrollTo(newX, newY);	// ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}

				if ( this.options.click ) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}

	// INSERT POINT: _end

			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
				y = this.y;

			time = time || 0;

			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			if ( x == this.x && y == this.y ) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow

			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;

	/* REPLACE START: refresh */

			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;

			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

	/* REPLACE END: refresh */

			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();

	// INSERT POINT: _refresh

		},

		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}

			var i = 0,
				l = this._events[type].length;

			if ( !l ) {
				return;
			}

			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if ( !el ) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			if (!this.options.useTransition) {
				return;
			}
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if(!durationProp) {
				return;
			}

			this.scrollerStyle[durationProp] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}

	// INSERT POINT: _transitionTime

		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

	// INSERT POINT: _transitionTimingFunction

		},

		_translate: function (x, y) {
			if ( this.options.useTransform ) {

	/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

	/* REPLACE END: _translate */

			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;

	// INSERT POINT: _translate

		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}

			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;

			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;

				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);

				if ( that.isAnimating ) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	IScroll.utils = utils;

	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}

	})(window, document, Math);


/***/ }

/******/ });
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
	    __webpack_require__(195); 
	    
	    var regTel = $('#reg_tel'),
	        regPwd = $('#reg_pwd'),
	        regImgcode = $('#reg_imgcode'),
	        form = $('.form'),
	        telCode = $('#freg-telcode'),
	        imgCode = $('.img-code'),
	        errorTip = $('.error-tip').find('span'),
	        bdInp = $('.form input'),
	        clear = $('.clear'),
	        eyes = $('.eyes'),
	        getTelcode = $('.freg-getcode'),
	        fregSec = $('.freg-sec'),
	        friendMemberId = JSBK.Utils.GetQueryString('friendMemberId'),
	        friendName = JSBK.Utils.GetQueryString('name');
	    
	    $('#friend-name').html(friendName);
	    
	    regTel.focus()
	    regTel.trigger('focus');

	    var imgCodeId;
	    var imgUrl = window.Zepto.setUrl+'/Member/YZM?randNum=';
	    var imgCodeShow = function (){
	        imgCodeId = Math.round(Math.random()*1000);
	        imgCode.attr('src',imgUrl+imgCodeId);
	    };
	    imgCodeShow();
	    //点击更换图形验证码    
	    imgCode.on('click',function(){
	        imgCodeShow();
	    }) 
	    
	    bdInp.on('input',function(){
	        errorTip.html('');
	    })

	    //清除按钮交互
	    bdInp.on('focus',function(){
	        if($(this).val() != ''){
	            $(this).next('.clear').css('display', 'block');
	        }
	    })

	    bdInp.on('input',function(){
	        $(this).next('.clear').css('display', 'block');
	    })

	    bdInp.on('blur',function(){
	        var _this = $(this);
	        setTimeout(function(){
	             _this.next('.clear').css('display', 'none');
	         },200)       
	    })

	    clear.on('click',function(){
	        $(this).prev('input').val('');
	        $(this).css('display', 'none');
	    })

	    //密码明暗码交互
	    eyes.on('click',function(){
	        $(this).toggleClass('open-eyes');
	        if (regPwd.attr('type') == 'password') {
	            regPwd.prop('type', 'text');
	        } else {
	            regPwd.prop('type', 'password');
	        }
	    })

	    // ajax判断手机号
	    form.on('click','.fir-btn',function(){
	        var telVal = regTel.val(),
	            that = this;
	        if(telVal == null || telVal == ''){
	            errorTip.html('请输入手机号');
	            return false;
	        }else if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(telVal)) {
	            errorTip.html('请输入正确的手机号');
	            return false;
	        }
	        var checktel = {
	            data: {'phone': telVal},
	            mFun: 'CheckPhone',
	            sucFun : function(v){
	                if(v.Success == true){
	                    var confirm = __webpack_require__(21);
	                    var alreadyUser = new confirm({
	                        titleHtml : '手机号已注册',
	                        infoHtml  : '您已混得脸熟，将机会留给新人吧',
	                        cancleBtnHtml : '换个号码',
	                        confirmBtnHtml : '立即登录',
	                        confirmCallback : function(){
	                            window.location.href = '/member/login';
	                        }
	                    });
	                    alreadyUser.open();
	                }else{
	                    fregSec.show();
	                    $(that).addClass('sec-btn').removeClass('fir-btn'); 
	                }                
	            },
	            unusualFun : function(v){
	                errorTip.html(v.ES);
	            }
	        }
	        JSBK.Utils.postAjax(checktel);
	    })

	    //获取验证码    
	    getTelcode.on('click',function(){
	        if ($(this).hasClass('freg-setime')){
	            return false;
	        }
	        var telVal = regTel.val(),
	            imgCodeVal = regImgcode.val(),
	            telTip = telVal.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');

	        if(telVal == null || telVal == ''){
	            errorTip.html('请输入手机号');
	            return false;
	        }else if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(telVal)) {
	            errorTip.html('请输入正确的手机号');
	            return false;
	        }else if(imgCodeVal == null || imgCodeVal == ''){
	            errorTip.html('请输入图片验证码');
	            return false;
	        }else{
	            var getTelData = {
	                data: {
	                    'phone': telVal,
	                    'VCodeRnm' : imgCodeId,
	                    'IdentifyCode' : imgCodeVal,
	                    'Type' : 1
	                },
	                mFun: 'GetVCode',
	                beforeFun : function(){
	                    getTelcode.addClass('freg-setime');
	                },
	                sucFun : function(v){
	                        setTimeout(function(){
	                            errorTip.html(v.message);
	                        },1000)

	                        var time = 60;
	                        var interId = setInterval(function() {
	                            time--;
	                            getTelcode.addClass('freg-setime').html(time + 'S');

	                            if (time === 0) {
	                                clearInterval(interId);
	                                errorTip.html('');
	                                getTelcode.removeClass('freg-setime').html('获取验证码');
	                            }
	                        }, 1000);
	                                   
	                },
	                unusualFun : function(v){
	                    getTelcode.removeClass('freg-setime');
	                    errorTip.html(v.ES);
	                    imgCodeShow();
	                }
	            }
	            JSBK.Utils.postAjax(getTelData);
	        }
	    })

	    //注册成功
	    var sucAlert = function(op){
	        this.ops = {
	            select : $('.reg_suc')
	        };
	        this.dialog = null;
	        this.init();
	    }
	    sucAlert.prototype.init = function(){
	        __webpack_require__(7);
	        var Dialog = __webpack_require__(9);
	        this.dialog = new Dialog( this.ops );
	        this.bindEvent();
	    }
	    sucAlert.prototype.open = function(){
	        this.dialog.open();
	        this.ops.select.show();
	    }
	    sucAlert.prototype.bindEvent = function() {
	        var self = this;
	        this.ops.select.on("click", function(e) {
	            e.stopPropagation();
	            self.dialog.close();
	        });
	    }
	    var sucAdAlert = new sucAlert();
	 
	    //完成注册
	    form.on('click','.sec-btn',function(){
	        var telVal = regTel.val(),
	            pwdVal = regPwd.val(),
	            telCodeVal = telCode.val(),
	            imgCodeVal = regImgcode.val();

	        if(pwdVal == null || pwdVal == ''){
	            errorTip.html('请设置登录密码');
	            return false;
	        }else if(!/^[a-zA-Z0-9]{6,16}$/.test(pwdVal)){
	            errorTip.html('密码由6-16位数字和字母组成');
	            return false;
	        }    
	        var regNextData = {
	            data: {
	                'phone': telVal,
	                'VCodeRnm' : imgCodeId,
	                'IdentifyCode' : imgCodeVal,
	                'VCode' : telCodeVal
	            },
	            mFun: 'CheckVCode',
	            sucFun : function(v){
	                ajaxPid = v.pid;
	                var regData = {
	                    data: {
	                        'DeviceId' : '',
	                        'DeviceInfo' : '',
	                        'DeviceType' : 0,
	                        //'FriendPhone' : inviterVal,
	                        'phone': telVal,
	                        'Pid' : v.pid,
	                        'RegistIp' : '',
	                        'Pswd' : pwdVal,
	                        'Domain' : '',
	                        'FriendMemberId' : friendMemberId
	                    },
	                    mFun: 'Regist',
	                    sucFun : function(v){
	                        sucAdAlert.open();
	                    },
	                    unusualFun : function(v){
	                        errorTip.html(v.ES);
	                    }
	                }
	                JSBK.Utils.postAjax(regData);
	            },
	            unusualFun : function(v){
	                if(v.S != 1){
	                    imgCodeShow();
	                }
	                errorTip.html(v.ES);
	            }
	        }
	        JSBK.Utils.postAjax(regNextData);
	    })
	    
	    var swipe = __webpack_require__(206);
	    //滚动公司背景
	     new swipe($('#swipe_wrap')[0], {
	          startSlide: 0,
	          speed: 0,
	          auto: false,
	          continuous: false,
	          disableScroll: false,
	          stopPropagation: false,
	          callback: function(index, elem) {
	              var dotList = $('#pnav').find('li');
	              $(dotList[index]).addClass('focus').siblings().removeClass('focus');
	          }
	      });
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

/***/ 195:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 206:
/***/ function(module, exports) {

	;
	(function($) {
	 var Swipe = function(container, options) {
	    var noop = function() {};
	    var offloadFn = function(fn) {
	        setTimeout(fn || noop, 0)
	    };
	    var browser = {
	        addEventListener: !!window.addEventListener,
	        touch: ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
	        transitions: (function(temp) {
	            var props = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
	            for (var i in props) {
	                if (temp.style[props[i]] !== undefined) {
	                    return true
	                }
	            }
	            return false
	        })(document.createElement("swipe"))
	    };
	    if (!container) {
	        return
	    }
	    var element = container.children[0];
	    var slides, slidePos, width, length;
	    options = options || {};
	    var index = parseInt(options.startSlide, 10) || 0;
	    var speed = options.speed || 300;
	    options.continuous = options.continuous !== undefined ? options.continuous : true;

	    function setup() {
	        slides = element.children;
	        length = slides.length;
	        if (slides.length < 2) {
	            options.continuous = false
	        }
	        if (browser.transitions && options.continuous && slides.length < 3) {
	            element.appendChild(slides[0].cloneNode(true));
	            element.appendChild(element.children[1].cloneNode(true));
	            slides = element.children
	        }
	        slidePos = new Array(slides.length);
	        width = container.getBoundingClientRect().width || container.offsetWidth;
	        element.style.width = (slides.length * width) + "px";
	        var pos = slides.length;
	        while (pos--) {
	            var slide = slides[pos];
	            slide.style.width = width + "px";
	            slide.setAttribute("data-index", pos);
	            if (browser.transitions) {
	                slide.style.left = (pos * -width) + "px";
	                move(pos, index > pos ? -width : (index < pos ? width : 0), 0)
	            }
	        }
	        if (options.continuous && browser.transitions) {
	            move(circle(index - 1), -width, 0);
	            move(circle(index + 1), width, 0)
	        }
	        if (!browser.transitions) {
	            element.style.left = (index * -width) + "px"
	        }
	        container.style.visibility = "visible"
	    }

	    function prev() {
	        if (options.continuous) {
	            slide(index - 1)
	        } else {
	            if (index) {
	                slide(index - 1)
	            }
	        }
	    }

	    function next() {
	        if (options.continuous) {
	            slide(index + 1)
	        } else {
	            if (index < slides.length - 1) {
	                slide(index + 1)
	            }
	        }
	    }

	    function circle(index) {
	        return (slides.length + (index % slides.length)) % slides.length
	    }

	    function slide(to, slideSpeed) {
	        if (index == to) {
	            return
	        }
	        if (browser.transitions) {
	            var direction = Math.abs(index - to) / (index - to);
	            if (options.continuous) {
	                var natural_direction = direction;
	                direction = -slidePos[circle(to)] / width;
	                if (direction !== natural_direction) {
	                    to = -direction * slides.length + to
	                }
	            }
	            var diff = Math.abs(index - to) - 1;
	            while (diff--) {
	                move(circle((to > index ? to : index) - diff - 1), width * direction, 0)
	            }
	            to = circle(to);
	            move(index, width * direction, slideSpeed || speed);
	            move(to, 0, slideSpeed || speed);
	            if (options.continuous) {
	                move(circle(to - direction), -(width * direction), 0)
	            }
	        } else {
	            to = circle(to);
	            animate(index * -width, to * -width, slideSpeed || speed)
	        }
	        index = to;
	        offloadFn(options.callback && options.callback(index, slides[index]))
	    }

	    function move(index, dist, speed) {
	        translate(index, dist, speed);
	        slidePos[index] = dist
	    }

	    function translate(index, dist, speed) {
	        var slide = slides[index];
	        var style = slide && slide.style;
	        if (!style) {
	            return
	        }
	        style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + "ms";
	        style.webkitTransform = "translate(" + dist + "px,0)" + "translateZ(0)";
	        style.msTransform = style.MozTransform = style.OTransform = "translateX(" + dist + "px)"
	    }

	    function animate(from, to, speed) {
	        if (!speed) {
	            element.style.left = to + "px";
	            return
	        }
	        var start = +new Date;
	        var timer = setInterval(function() {
	            var timeElap = +new Date - start;
	            if (timeElap > speed) {
	                element.style.left = to + "px";
	                if (delay) {
	                    begin()
	                }
	                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
	                clearInterval(timer);
	                return
	            }
	            element.style.left = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + "px"
	        }, 4)
	    }
	    var delay = options.auto || 0;
	    var interval;

	    function begin() {
	        interval = setTimeout(next, delay)
	    }

	    function stop() {
	        delay = 0;
	        clearTimeout(interval)
	    }
	    var start = {};
	    var delta = {};
	    var isScrolling;
	    var events = {
	        handleEvent: function(event) {
	            switch (event.type) {
	                case "touchstart":
	                    this.start(event);
	                    break;
	                case "touchmove":
	                    this.move(event);
	                    break;
	                case "touchend":
	                    offloadFn(this.end(event));
	                    break;
	                case "webkitTransitionEnd":
	                case "msTransitionEnd":
	                case "oTransitionEnd":
	                case "otransitionend":
	                case "transitionend":
	                    offloadFn(this.transitionEnd(event));
	                    break;
	                case "resize":
	                    offloadFn(setup.call());
	                    break
	            }
	            if (options.stopPropagation) {
	                event.stopPropagation()
	            }
	        },
	        start: function(event) {
	            var touches = event.touches[0];
	            start = {
	                x: touches.pageX,
	                y: touches.pageY,
	                time: +new Date
	            };
	            isScrolling = undefined;
	            delta = {};
	            element.addEventListener("touchmove", this, false);
	            element.addEventListener("touchend", this, false)
	        },
	        move: function(event) {
	            if (event.touches.length > 1 || event.scale && event.scale !== 1) {
	                return
	            }
	            if (options.disableScroll) {
	                event.preventDefault()
	            }
	            var touches = event.touches[0];
	            delta = {
	                x: touches.pageX - start.x,
	                y: touches.pageY - start.y
	            };
	            if (typeof isScrolling == "undefined") {
	                isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y))
	            }
	            if (!isScrolling) {
	                event.preventDefault();
	                stop();
	                if (options.continuous) {
	                    translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
	                    translate(index, delta.x + slidePos[index], 0);
	                    translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0)
	                } else {
	                    delta.x = delta.x / ((!index && delta.x > 0 || index == slides.length - 1 && delta.x < 0) ? (Math.abs(delta.x) / width + 1) : 1);
	                    translate(index - 1, delta.x + slidePos[index - 1], 0);
	                    translate(index, delta.x + slidePos[index], 0);
	                    translate(index + 1, delta.x + slidePos[index + 1], 0)
	                }
	            }
	        },
	        end: function(event) {
	            var duration = +new Date - start.time;
	            var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 2;
	            var isPastBounds = !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
	            if (options.continuous) {
	                isPastBounds = false
	            }
	            var direction = delta.x < 0;
	            if (!isScrolling) {
	                if (isValidSlide && !isPastBounds) {
	                    if (direction) {
	                        if (options.continuous) {
	                            move(circle(index - 1), -width, 0);
	                            move(circle(index + 2), width, 0)
	                        } else {
	                            move(index - 1, -width, 0)
	                        }
	                        move(index, slidePos[index] - width, speed);
	                        move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
	                        index = circle(index + 1)
	                    } else {
	                        if (options.continuous) {
	                            move(circle(index + 1), width, 0);
	                            move(circle(index - 2), -width, 0)
	                        } else {
	                            move(index + 1, width, 0)
	                        }
	                        move(index, slidePos[index] + width, speed);
	                        move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
	                        index = circle(index - 1)
	                    }
	                    options.callback && options.callback(index, slides[index])
	                } else {
	                    if (options.continuous) {
	                        move(circle(index - 1), -width, speed);
	                        move(index, 0, speed);
	                        move(circle(index + 1), width, speed)
	                    } else {
	                        move(index - 1, -width, speed);
	                        move(index, 0, speed);
	                        move(index + 1, width, speed)
	                    }
	                }
	            }
	            element.removeEventListener("touchmove", events, false);
	            element.removeEventListener("touchend", events, false)
	        },
	        transitionEnd: function(event) {
	            if (parseInt(event.target.getAttribute("data-index"), 10) == index) {
	                if (delay) {
	                    begin()
	                }
	                options.transitionEnd && options.transitionEnd.call(event, index, slides[index])
	            }
	        }
	    };
	    setup();
	    if (delay) {
	        begin()
	    }
	    if (browser.addEventListener) {
	        if (browser.touch) {
	            element.addEventListener("touchstart", events, false)
	        }
	        if (browser.transitions) {
	            element.addEventListener("webkitTransitionEnd", events, false);
	            element.addEventListener("msTransitionEnd", events, false);
	            element.addEventListener("oTransitionEnd", events, false);
	            element.addEventListener("otransitionend", events, false);
	            element.addEventListener("transitionend", events, false)
	        }
	        window.addEventListener("resize", events, false)
	    } else {
	        window.onresize = function() {
	            setup()
	        }
	    }
	    return {
	        setup: function() {
	            setup()
	        },
	        slide: function(to, speed) {
	            stop();
	            slide(to, speed)
	        },
	        prev: function() {
	            stop();
	            prev()
	        },
	        next: function() {
	            stop();
	            next()
	        },
	        getPos: function() {
	            return index
	        },
	        getNumSlides: function() {
	            return length
	        },
	        kill: function() {
	            stop();
	            element.style.width = "auto";
	            element.style.left = 0;
	            var pos = slides.length;
	            while (pos--) {
	                var slide = slides[pos];
	                slide.style.width = "100%";
	                slide.style.left = 0;
	                if (browser.transitions) {
	                    translate(pos, 0, 0)
	                }
	            }
	            if (browser.addEventListener) {
	                element.removeEventListener("touchstart", events, false);
	                element.removeEventListener("webkitTransitionEnd", events, false);
	                element.removeEventListener("msTransitionEnd", events, false);
	                element.removeEventListener("oTransitionEnd", events, false);
	                element.removeEventListener("otransitionend", events, false);
	                element.removeEventListener("transitionend", events, false);
	                window.removeEventListener("resize", events, false)
	            } else {
	                window.onresize = null
	            }
	        }
	    }
	}

	module.exports = Swipe;

	})(Zepto);

/***/ }

/******/ });
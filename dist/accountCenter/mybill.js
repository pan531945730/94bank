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
	    __webpack_require__(48); 
	    __webpack_require__(37);
	    var mbNone = $('.none-info'),
	        mbLoad = $('.load');

	    //模板
	    function htmlTep(dd,arr){
	        $.each(dd,function(i,v){
	            var html = '',
	                priceSty = '',
	                sty = '';
	                switch(v.typeId){
	                    case 1001:
	                    case 2:
	                    case 3:
	                    case 10:
	                    case 14:
	                    priceSty = 'redu';
	                    break;
	                    default:
	                    priceSty = 'incr';
	                }
	            html += '<li><div class="mb-main">';
	            html += '<p>'+v.titleText+'</p><span>'+v.tradingTime+'</span>';
	            html += '</div><div class="mb-side">';
	            html += '<p class="'+priceSty+'">'+v.tradingAmountText+'元</p><span>'+v.StatusText+'</span></div></li>';
	            arr.push(html);
	        })
	    }

	    //初始化
	    var mbData = {
	        data: {
	            'PageIndex': 1,
	            'PageSize' : 15
	        },
	        mFun: 'GetBill',
	        beforeFun : function(){
	            mbLoad.show();
	        },
	        sucFun : function(v){
	            var arr = [] ,
	                length = v.RecordList.length;

	            mbLoad.hide();
	            mbNone.hide();
	            if(length == 0){
	                mbNone.show();
	            }
	            htmlTep(v.RecordList,arr);
	            $('.mb-info').append(arr.join(''));   
	            if(length >= 15){
	                var moreIscroll = __webpack_require__(52);
	                new moreIscroll();
	            }
	        },
	        unusualFun : function(v){
	            mbLoad.hide();
	            mbNone.show();
	        }
	    }
	    JSBK.Utils.postAjax(mbData);  

	    //上滑加载更多
	    /*var GetMoreMb = function(op){
	        this.op = {
	            cont : $('.mb-cont'),
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
	                    'PageIndex': self.op.page,
	                    'PageSize' : 15
	                },
	                mFun: 'GetBill',
	                beforeFun : function(){
	                    self.op.myLoad.show();
	                },
	                sucFun : function(v){
	                    var arr = [] ,
	                        length = v.RecordList.length;
	                    
	                    self.op.myLoad.hide();
	                    mbNone.hide();
	                    htmlTep(v.RecordList,arr);

	                    self.op.cont.find('.mb-info').append(arr.join(''));   
	                    
	                    if(length >= 15){
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
	    }*/
	    
	    
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

/***/ 37:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 48:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 52:
/***/ function(module, exports) {

	;
	(function($){
	    var moreIscroll = function(op){
	        this.op = {
	            cont : $('.mb-cont'),
	            info : $('.mb-info'),
	            myLoad : $('.load'),
	            mbBot : $('.bot'),
	            getNextStatus : true,
	            ajaxFun : 'GetBill',
	            ajaxData : {
	                page : 2 ,
	                pageSize: 15
	            }            
	        };
	        this.init();
	    }
	    moreIscroll.prototype.init = function(){
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
	                data: self.op.ajaxData,
	                mFun: self.op.ajaxFun,
	                beforeFun : function(){
	                    self.op.myLoad.show();
	                },
	                sucFun : function(v){
	                    var arr = [] ,
	                        length = v.RecordList.length;
	                    
	                    self.op.myLoad.hide();
	                    mbNone.hide();
	                    htmlTep(v.RecordList,arr);

	                    self.op.info.append(arr.join(''));   
	                    
	                    if(length >= self.op.ajaxData.pageSize){
	                        self.op.getNextStatus = true;
	                    }else{
	                        self.op.mbBot.show();
	                    }
	                    self.op.ajaxData.page = self.op.ajaxData.page + 1;
	                },
	                unusualFun : function(v){
	                    self.op.mbBot.show();
	                }
	            }
	            JSBK.Utils.postAjax(mbLoadData);                        
	        }
	    }    
	    module.exports = moreIscroll;
	})(Zepto)

/***/ }

/******/ });
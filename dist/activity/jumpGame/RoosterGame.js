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

	/*
	 *  游戏活动的逻辑代码
	 *  日期：2017/1/18.
	 *  作者：Math
	 * */
	;
	__webpack_require__(5);
	__webpack_require__(133);
	var loginRegist = __webpack_require__(161);
	(function(window, document, $, bk) {
	    'use strict';
	    //游戏背景图片
	    var path = window.Zepto.linkUrl + '/dist/Activity/img/20170126/jumpGame/',
	        bg = {
	            home: path + 'home-bg.png',
	            start: path + 'start-bg.png'
	        };
	    var local = document.location,
	        domain = local.protocol + '//' + local.host,
	        apiUrl = domain + '/api/ajax';
	    //判断是否为微信
	    var ua = navigator.userAgent.toLowerCase();
	    var isWeixin = ua.indexOf('micromessenger') != -1;
	    //初始化dom
	    var $gameCanvas = $('#gameCanvas'),
	        $gameBg = $('#gameBg'),
	        $gameOver = $('#gameOver'),
	        $shareTip = $('#shareTip'),
	        $rule = $('#rule'),
	        $howPlay = $('#howPlay'),
	        $login = $('#login'),
	        time = 300; //弹层显示动画时间
	    $.fn.fadeIn = function(time) {
	        $(this).css('opacity','0').show().animate({
	            opacity: 1
	        },time);
	    };
	    $.fn.fadeOut = function() {
	        var $this = $(this);
	        $this.animate({
	            opacity: 0
	        },time, 'linear', function() {
	            $this.hide();
	        });
	    };
	    function log(msg) {
	        console.log(msg);
	    }
	    $('#loading').css('opacity', '1');
	    /*
	    * 提示框
	    * @param msg 提示文字
	    * @param time 显示时间
	    * */
	    $.toast = (function() {
	        var $toast = $('<div id="toast">');
	        $('body').append($toast);
	        return function(msg, time) {
	            if (!msg) return;
	            if ($toast.css('display') !== 'none') {
	                return;
	            }
	            time = time || 3000;
	            var fontSize = '0.36rem';
	            if (msg.length > 8) {
	                fontSize = '0.24rem';
	            }
	            $toast.css('font-size', fontSize).html(msg).fadeIn(300);
	            setTimeout(function() {
	                $toast.fadeOut(300);
	            }, time);
	        };
	    }());
	    /*
	    * 游戏的操作
	    *
	    * */
	    var rankData = [0, 12, 21, 35, 47, 59, 62, 68, 71, 87, 92, 96, 99]; //排行数据
	    var redbagData = [0, 1, 2, 3, 5, 6, 8, 10, 12]; //红包数据
	    function rank(num) { //游戏排行
	        var html = '';
	        num = ~~num;
	        if (num > rankData.length -1) {
	            num = rankData[rankData.length -1];
	        } else {
	            num = rankData[num];
	        }
	        num += '';
	        for (var i= 0,len=num.length; i<len; i++) {
	            html += '<i class="num num-'+ num.charAt(i) +'"></i>';
	        }
	        html += '<i class="num num-a"></i>';
	        return html;
	    }
	    function redbag(num) { //红包金额
	        var html = '';
	        num = ~~num;
	        if (num > redbagData.length -1) {
	            num = redbagData[redbagData.length -1];
	        } else {
	            num = redbagData[num];
	        }
	        num += '';
	        for (var i= 0,len=num.length; i<len; i++) {
	            html += '<i class="num num-'+ num.charAt(i) +'"></i>';
	        }
	        return html;
	    }
	    window.game = {
	        getScore: function() { //获得分数
	            var score;
	            if (window.localStorage.getItem('game_over')*1 === 1) {
	                score = window.localStorage.getItem('score_game_over') || '0';
	            } else {
	                score = window.localStorage.getItem('best_score_dragon_up') || '0';
	            }
	            return score*1;
	        },
	        ruleOpen: function() { //查看规则
	            $rule.fadeIn(time);
	        },
	        howPlay: function() { //玩法
	            $howPlay.fadeIn(time);
	        },
	        homeSceneCallback: function() { //游戏初始化完成
	            $gameBg.show();
	            $gameCanvas.css('opacity', 1);
	        },
	        gameStartCallback: function() { //开始游戏
	            $gameBg.css('background-image', 'url('+ bg.start +')');
	        },
	        gameRetryCallback: function() { //游戏结束再来一次
	            $gameBg.css('background-image', 'url('+ bg.start +')');
	            $gameOver.hide();
	        },
	        share: function() { //分享提示
	            $shareTip.fadeIn(time);
	        },
	        goBack: function() { //返回主页
	            $gameBg.css('background-image', 'url('+ bg.home +')');
	            $gameOver.fadeOut(time);
	            $login.fadeOut(time);
	        },
	        gameOverCallback: function(score) { //游戏结束
	            var score = score || this.getScore();
	            $gameOver.find('.rank').find('span').html(rank(score));
	            $gameOver.find('.redbag').find('span').html(redbag(score));
	            $gameOver.fadeIn(time);
	        }
	    };
	    $rule.add($rule).add($howPlay).add($shareTip).click(function() {
	        $(this).fadeOut(time);
	    });
	    //进入页面判断登录情况
	    bk.bindToken(function() {
	        //console.log('ok');
	    }, function() {
	        //console.log('fail');
	    });
	    //领取优惠券
	    var getStatus = true,
	        getRedbag = function(login) {
	            var score = game.getScore();
	            var data = {
	                "AID": "20170126",
	                "SourceType": score,
	                "BelongType": "1"
	            };
	            var friendMemberId = bk.Utils.GetQueryString('friendMemberId');
	            if (friendMemberId && !login) { //被邀请人
	                data.BelongType = 2;
	                data.MemberID = friendMemberId;
	            }
	            if (score <= 0) {
	                $.toast('您要加油啦');
	                return;
	            }
	            if (!getStatus) {
	                return;
	            }
	            getStatus = false;
	            $.ajax({
	                type: 'post',
	                dataType: 'json',
	                url: apiUrl,
	                data: { D: JSON.stringify(data), M: 'RoosterGameDraw' },
	                success: function(res) {
	                    getStatus = true;
	                    if (res.S === 0) {
	                        var data;
	                        try {
	                            data = JSON.parse(res.D);
	                        } catch(e) {
	                            $.toast('数据加载失败');
	                            return;
	                        }
	                        if (data.Status == 3) {
	                            $.toast('请在微信浏览器领取');
	                            return;
	                        }
	                        if (data.Status == 2) {
	                            $.toast('已经帮好友领过了');
	                            return;
	                        }
	                        if (data.Status == 1) {
	                            $.toast('领取成功');
	                            return;
	                        }
	                        if (data.Status == -2) {
	                            $.toast('活动已结束');
	                            return;
	                        }
	                        if (data.Status == -1) {
	                            $.toast('活动未开始');
	                            return;
	                        }
	                        if (data.Status === 0) {
	                            $.toast('您已领取过了');
	                            return;
	                        }
	                        $.toast('领取失败,请重试');
	                        return;
	                    }
	                    if (res.S == -4) {
	                        $.toast('请在微信浏览器领取');
	                        return;
	                    }
	                    if (res.S == -3) {
	                        $.toast('不能邀请自己');
	                        return;
	                    }
	                    if (res.S == -2) {
	                        $.toast('您要加油啦');
	                        return;
	                    }
	                    if (res.S == -1) {
	                        $.toast('活动已结束');
	                        return;
	                    }
	                    if (res.S == 101) { //登录框弹出
	                        $login.fadeIn(time);
	                        return;
	                    }
	                    $.toast('领取失败,请重试');
	                },
	                error: function() {
	                    getStatus = true;
	                    $.toast('领取失败,请重试');
	                }
	            });
	        }
	    $gameOver.on('click', 'button', function() {
	        getRedbag();
	    });
	    /*
	    * 登录注册功能
	    *
	    * */
	    //tab切换
	    $login.on('click', '.title span', function() {
	        var $this = $(this),
	            index = $this.index();
	        $this.addClass('on').siblings().removeClass('on');
	        $login.find('.content').eq(index).show().siblings('.content').hide();
	    });
	    $login.on('click', '.cancel', function() {
	        $login.fadeOut(time);
	    });
	    //获取分享数据
	    function getShare(){
	        $.ajax({
	            url: "/Other/GetShareData",
	            type: "get",
	            dataType: "json",
	            success: function (jdata) {
	                if (jdata !== '' && jdata != null) {
	                    var objData = jdata,
	                        link = 'http://np.94bank.com/Activity/RoosterGame20170126?';
	                    if (!objData.friendMemberId) {
	                        objData.friendMemberId = bk.Utils.GetQueryString('friendMemberId');
	                    }
	                    if (objData.friendMemberId) {
	                        link += 'friendMemberId=' + objData.friendMemberId;
	                    }
	                    bk.shareWinxin({
	                        'title': '玩游戏领百万年终奖！',
	                        'desc': '1月26至1月30日，畅玩94鸡年步步高小游戏可获得超值年终奖，邀请好友福利再上一层楼，快来吧~',
	                        'link': link,
	                        'imgUrl': path + 'share-jumpgame.jpg'
	                    });
	                }
	            }
	        });
	    }
	    getShare();
	    //登录成功后的回调方法
	    $.loginCallback = function() {
	        $login.fadeOut(time);
	        getRedbag('login');
	        getShare();
	    };

	    //登录注册
	    new loginRegist();
	}(window, document, Zepto, JSBK));

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

/***/ 133:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 161:
/***/ function(module, exports) {

	;
	(function($) {
	    var member = function(op){
	        var self = this;
	        var defaults = {
	            loginTel : $('#lMobile'),
	            loginPwd : $('#lPassword'),
	            imgCodMod : $('#imgcod_mod'),
	            loginImgCode : $('#lCodePic'),
	            registImgCode : $('#rCodePic'),
	            loginImgSrc : $('#imgSrc'),
	            registImgSrc : $('#reg_imgSrc'),
	            loginImgReload : $('#img_reload'),
	            registImgReload : $('#reg_img_reload'),
	            loginOkBtn : $('#login_ok'),
	            registTel : $('#rMobile'),
	            registOkBtn : $('#regist_ok'),
	            telCode : $('.code-text'),
	            telCodeVal : $('#rCodeText'),
	            registPwd : $('#rPassword'),
	            imgCodeId : 0,
	            imgUrl : window.Zepto.setUrl+'/Member/YZM?randNum='
	        };
	        this.ops = $.extend(defaults,op);
	        this.init();
	    }
	    member.prototype.init = function(){
	        var self = this;
	        self.bindEvent();
	        self.imgCodeFn(self.ops.registImgSrc,self.ops.registImgCode);
	    }
	    member.prototype.bindEvent = function(){
	        var self = this;

	        self.ops.loginTel.on('blur',function(){
	            self.checkTelWrong();
	        })

	        self.ops.loginTel.on('input',function(){
	            self.imgCodeHid();
	        })
	        self.ops.loginImgReload.on('click',function(){
	            self.imgCodeFn(self.ops.loginImgSrc,self.ops.loginImgCode);
	        })

	        self.ops.registImgReload.on('click',function(){
	            self.imgCodeFn(self.ops.registImgSrc,self.ops.registImgCode);
	        })

	        self.ops.loginOkBtn.on('click',function(){
	            self.loginSubmitFn();
	        })

	        self.ops.registTel.on('blur',function(){
	            self.checkRegistTel();
	        })

	        self.ops.telCode.on('click',function(){
	            self.getTelCode();
	        })

	        self.ops.registOkBtn.on('click',function(){
	            self.registSubmitFn();
	        })
	    }
	    member.prototype.imgCodeHid = function(){
	        var self = this;
	        self.ops.imgCodMod.hide();
	    }
	    //图片验证码
	    member.prototype.imgCodeFn = function(img,elem){
	        var self = this;
	        self.ops.imgCodeId = Math.round(Math.random()*1000);
	        img.attr('src',self.ops.imgUrl + self.ops.imgCodeId);
	        elem.val('');
	    }
	    //手机号码输错多次显示图形验证码
	    member.prototype.checkTelWrong = function(){
	        var self = this;
	        var logintelVal = self.ops.loginTel.val();
	        if(logintelVal == null || logintelVal == ''){
	            $.toast('请输入手机号');
	            return false;
	        }else if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(logintelVal)) {
	            $.toast('请输入正确的手机号');
	            return false;
	        }else{
	            // ajax判断手机号
	            var telWrongData = {
	                data: {'phone': logintelVal},
	                mFun: 'CheckLoginNeedVCode',
	                sucFun : function(v){
	                    if (v.needVCode === true){
	                        self.imgCodeFn(self.ops.loginImgSrc,self.ops.loginImgCode);
	                        self.ops.imgCodMod.show();
	                    }                    
	                },
	                unusualFun : function(v){
	                    $.toast(v.ES);
	                }
	            }
	            JSBK.Utils.postAjax(telWrongData);
	        }
	    }

	    //手机号是否注册
	    member.prototype.checkRegistTel = function(){
	        var self = this;
	        var telVal = self.ops.registTel.val();
	        if(telVal == null || telVal == ''){
	            $.toast('请输入手机号');
	            return false;
	        }else if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(telVal)) {
	            $.toast('请输入正确的手机号');
	            return false;
	        }
	        var registTelData = {
	            data: {'phone': telVal},
	            mFun: 'CheckPhone',
	            sucFun : function(v){
	                if(v.Success == true){
	                    $.toast('手机号已注册');
	                }                
	            },
	            unusualFun : function(v){
	                $.toast(v.ES);
	            }
	        }
	        JSBK.Utils.postAjax(registTelData);
	    }

	    //获取验证码
	    member.prototype.getTelCode = function(){
	        var self = this;
	        if(self.ops.telCode.html() != '获取验证码'){
	            return false;
	        }
	        var registTel = self.ops.registTel.val(),
	            imgCodeVal = self.ops.registImgCode.val();

	        if(registTel == null || registTel == ''){
	            $.toast('请输入手机号');
	            return false;
	        }else if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(registTel)) {
	            $.toast('请输入正确的手机号');
	            return false;
	        }else if(imgCodeVal == null || imgCodeVal == ''){
	            $.toast('请输入图片验证码');
	            return false;
	        }else{
	            var getTelData = {
	                data: {
	                    'phone': registTel,
	                    'VCodeRnm' : self.ops.imgCodeId,
	                    'IdentifyCode' : imgCodeVal,
	                    'Type' : 1
	                },
	                mFun: 'GetVCode',
	                beforeFun : function(){
	                    //self.ops.telCode.html('');
	                },
	                sucFun : function(v){
	                        setTimeout(function(){
	                            $.toast(v.message);
	                        },1000)

	                        var time = 60;
	                        var interId = setInterval(function() {
	                            time--;
	                            self.ops.telCode.html(time + 'S');

	                            if (time === 0) {
	                                clearInterval(interId);
	                                self.ops.telCode.html('获取验证码');
	                            }
	                        }, 1000);
	                                   
	                },
	                unusualFun : function(v){
	                    self.ops.telCode.html('获取验证码');
	                    $.toast(v.ES);
	                    self.imgCodeFn(self.ops.registImgSrc,self.ops.registImgCode);
	                }
	            }
	            JSBK.Utils.postAjax(getTelData);
	        }

	    }
	    member.prototype.registSubmitFn= function(){
	        var self = this;
	        var registTelVal = self.ops.registTel.val(),
	            registPwdVal = self.ops.registPwd.val(),
	            telCodeVal = self.ops.telCodeVal.val(),
	            imgCodeVal = self.ops.registImgCode.val();
	        if(registTelVal == null || registTelVal == ''){
	            $.toast('请输入手机号');
	            return false;
	        }else if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(registTelVal)) {
	            $.toast('请输入正确的手机号');
	            return false;
	        }else if(imgCodeVal == null || imgCodeVal == ''){
	            $.toast('请输入图片验证码');
	            return false;
	        }else if(telCodeVal == null || telCodeVal ==''){
	            $.toast('请输入手机验证码');
	            return false;
	        }else if(registPwdVal == null || registPwdVal == ''){
	            $.toast('请设置登录密码');
	            return false;
	        }else if(!/^[a-zA-Z0-9]{6,16}$/.test(registPwdVal)){
	            $.toast('密码由6-16位数字和字母组成');
	            return false;
	        }    
	        var regNextData = {
	            data: {
	                'phone': registTelVal,
	                'VCodeRnm' : self.ops.imgCodeId,
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
	                        'phone': registTelVal,
	                        'Pid' : v.pid,
	                        'RegistIp' : '',
	                        'Pswd' : registPwdVal,
	                        'Domain' : ''
	                        //'FriendMemberId' : friendMemberId
	                    },
	                    mFun: 'Regist',
	                    sucFun : function(v){
	                        //注册成功
	                        $.loginCallback();
	                    },
	                    unusualFun : function(v){
	                        $.toast(v.ES);
	                    }
	                }
	                JSBK.Utils.postAjax(regData);
	            },
	            unusualFun : function(v){
	                if(v.S != 1){
	                    self.imgCodeFn(self.ops.registImgSrc,self.ops.registImgCode);
	                }
	                $.toast(v.ES);
	            }
	        }
	        JSBK.Utils.postAjax(regNextData);
	    }
	    member.prototype.loginSubmitFn = function(){
	        var self = this;
	        var logintelVal = self.ops.loginTel.val();
	            loginpwdVal =self.ops.loginPwd.val(),
	            loginimgCodeVal = self.ops.loginImgCode.val();

	        if(logintelVal == null || logintelVal == ''){
	            $.toast('请输入手机号');
	            return false;
	        }else if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(logintelVal)) {
	            $.toast('请输入正确的手机号');
	            return false;
	        }

	        if(loginpwdVal == null || loginpwdVal == ''){
	            $.toast('请输入登录密码');
	            return false;
	        }

	        if (self.ops.imgCodMod.css('display') == "block"){
	            if(loginimgCodeVal == null || loginimgCodeVal == ''){
	                $.toast('请输入图片验证码');
	                return false;
	            }
	        }
	        
	        // ajax立即登录
	        var sucData = {
	            data: {
	                    'phone': logintelVal,
	                    'Pswd' : loginpwdVal,
	                    'VCodeRnm' : self.ops.imgCodeId,
	                    'IdentifyCode' : loginimgCodeVal
	            },
	            mFun: 'MemberLogin',
	            sucFun : function(v){
	                    var returl = JSBK.Utils.GetUrlSearch('returl=');
	                    if($.isEmptyObject(returl)){
	                        //location.href = "/Member/AccountCenter" ;
	                        //登录成功调用接口
	                        $.loginCallback();
	                    } else {
	                        location.href = unescape(returl);  
	                    }
	            },
	            unusualFun : function(v){
	                if(v.S != 1){
	                    self.imgCodeFn(self.ops.loginImgSrc,self.ops.loginImgCode);
	                }
	                $.toast(v.ES);
	            }
	        }

	        // ajax判断手机号
	        var isTelData = {
	            data: {
	                'phone': logintelVal
	            },
	            mFun: 'CheckLoginNeedVCode',
	            sucFun : function(v){
	                if (v.needVCode === true){
	                    self.imgCodeFn(self.ops.loginImgSrc,self.ops.loginImgCode);
	                    self.ops.imgCodMod.show();
	                    $.toast('请输入图片验证码');
	                }else{
	                    JSBK.Utils.postAjax(sucData)
	                }                    
	            },
	            unusualFun : function(v){
	                $.toast(v.ES);
	            }
	        }

	        if(self.ops.imgCodMod.css('display') == "none"){
	            JSBK.Utils.postAjax(isTelData);
	        }else{
	            JSBK.Utils.postAjax(sucData)
	        }
	    }

	    module.exports = member;

	})(Zepto);

/***/ }

/******/ });
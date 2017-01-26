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

	$(document).ready(function(e) {
	    __webpack_require__(1);
	    __webpack_require__(5);
	    __webpack_require__(182);
	    __webpack_require__(191);
	    var awardAlert = __webpack_require__(6);
	    var turnplate={
	            restaraunts:["30M流量", "30元话费", "400积分", "300积分", "5元现金券", "0.5%加息券"],               //大转盘奖品名称
	            colors:["#efe3fa", "#f7f2ff", "#efe3fa", "#f7f2ff","#efe3fa", "#f7f2ff"],                    //大转盘奖品区块对应背景颜色
	            outsideRadius:170,          //大转盘外圆的半径
	            textRadius:140,             //大转盘奖品位置距离圆心的距离
	            insideRadius:50,            //大转盘内圆的半径
	            startAngle:0,               //开始角度
	            bRotate:false,               //false:停止;ture:旋转
	            alertInfo: [
	              function info30m(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-30m"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中30M流量！</p>')
	              },
	              function info30y(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-30y"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中30元话费！</p>')
	              },
	              function info400f(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-400f"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中400积分！</p>')
	              },
	              function info300f(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-300f"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中300积分！</p>')
	              },
	              function info5q(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-5q"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中5元现金券一张！</p>')
	              },
	              function info05q(){
	                return $('<em class="award-star"></em>'+
	                          '<span class="ico-05q"></span>'+
	                          '<h2 class="award-suc">抽中奖品！</h2>'+
	                          '<p class="award-about">恭喜您抽中0.5%加息券一张！</p>')
	              }
	            ]
	    };
	    function drawRouletteWheel() {    
	      var canvas = document.getElementById("wheelcanvas");    
	      if (canvas.getContext) {
	          //根据奖品个数计算圆周角度
	          var arc = Math.PI / (turnplate.restaraunts.length/2);
	          var ctx = canvas.getContext("2d");
	          //在给定矩形内清空一个矩形
	          ctx.clearRect(0,0,370,370);
	          //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  
	          ctx.strokeStyle = "#e8defc";
	          //font 属性设置或返回画布上文本内容的当前字体属性
	          ctx.font = '16px Microsoft YaHei';      
	          for(var i = 0; i < turnplate.restaraunts.length; i++) {       
	              var angle = turnplate.startAngle + i * arc;
	              ctx.fillStyle = turnplate.colors[i];
	              ctx.beginPath();
	              //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）    
	              ctx.arc(186, 186, turnplate.outsideRadius, angle, angle + arc, false);    
	              ctx.arc(186, 186, turnplate.insideRadius, angle + arc, angle, true);
	              ctx.stroke();  
	              ctx.fill();
	              //锁画布(为了保存之前的画布状态)
	              ctx.save();   
	              
	              //----绘制奖品开始----
	              ctx.fillStyle = "#8141eb";
	              var text = turnplate.restaraunts[i];

	              //translate方法重新映射画布上的 (0,0) 位置
	              ctx.translate(186 + Math.cos(angle + arc / 2) * turnplate.textRadius, 186 + Math.sin(angle + arc / 2) * turnplate.textRadius);
	              
	              //rotate方法旋转当前的绘图
	              ctx.rotate(angle + arc / 2 + Math.PI / 2);

	              ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
	              
	              //添加对应图标
	              if(text.indexOf("30M流量") == 0){
	                  var img= $("#m30-img").get(0);
	                  ctx.drawImage(img,-25,8);  
	              }else if(text.indexOf('30元话费') == 0){
	                var img = $('#y30-img').get(0);
	                ctx.drawImage(img,-15,8);
	              }else if(text.indexOf('400积分') == 0){
	                var img = $('#f400-img').get(0);
	                ctx.drawImage(img,-30,8);
	              }else if(text.indexOf('300积分') == 0){
	                var img = $('#f300-img').get(0);
	                ctx.drawImage(img,-30,8);
	              }else if(text.indexOf('5元现金券') == 0){
	                var img = $('#q5-img').get(0);
	                ctx.drawImage(img,-36,8);
	              }else if(text.indexOf('0.5%加息券') == 0){
	                var img = $('#q05-img').get(0);
	                ctx.drawImage(img,-35,8);
	              }
	              //把当前画布返回（调整）到上一个save()状态之前 
	              ctx.restore();
	              //----绘制奖品结束----
	          }     
	      } 
	    }
	    
	    //转盘进行渲染
	    drawRouletteWheel();

	    function rnd(n, m){
	      var random = Math.floor(Math.random()*(m-n+1)+n);
	      return random;
	      
	    }
	    //旋转转盘 item:奖品位置; txt：提示语;
	    var rotateFn = function (item, txt){
	      var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
	      if(angles<270){
	        angles = 270 - angles; 
	      }else{
	        angles = 360 - angles + 270;
	      }
	      $('#wheelcanvas').stopRotate();
	      $('#wheelcanvas').rotate({
	        angle:0,
	        animateTo:angles+1800,
	        duration:8000,
	        callback:function (){
	          var award = new awardAlert({
	            titleHtml : txt(),
	            btnHtml : '知道啦'
	          });
	          award.open();
	          turnplate.bRotate = !turnplate.bRotate;
	        }
	      });
	    };

	    $('.pointer').on('click',function (){
	      if(turnplate.bRotate)return;
	      turnplate.bRotate = !turnplate.bRotate;

	      //获取随机数(奖品个数范围内)
	      var item = rnd(1,turnplate.restaraunts.length);

	      //奖品数量等于6,指针落在对应奖品区域的中心角度[240, 180, 120, 60, 360, 300]
	      rotateFn(item, turnplate.alertInfo[item-1]);
	      console.log(item);
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

/***/ 182:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 191:
/***/ function(module, exports) {

	(function($) {

	    // Library agnostic interface
	    $.fn.rotate = function(parameters) {
	        if (this.length === 0 || typeof parameters == "undefined") {
	            return;
	        };
	        if (typeof parameters == "number") {
	            parameters = {
	                angle: parameters
	            }
	        }
	        var returned = [];
	        for (var i = 0, i0 = this.length; i < i0; i++) {
	            var element = this.get(i);
	            if (!element.Wilq32 || !element.Wilq32.PhotoEffect) {

	                var paramClone = $.extend(true, {}, parameters);
	                var newRotObject = new Wilq32.PhotoEffect(element, paramClone)._rootObj;

	                returned.push($(newRotObject));
	            } else {
	                element.Wilq32.PhotoEffect._handleRotation(parameters);
	            }
	        }
	        return returned;
	    }

	    $.fn.getRotateAngle = function() {
	        var ret = [];
	        for (var i = 0, i0 = this.length; i < i0; i++) {
	            var element = this.get(i);
	            if (element.Wilq32 && element.Wilq32.PhotoEffect) {
	                ret[i] = element.Wilq32.PhotoEffect._angle;
	            }
	        }
	        return ret;
	    }

	    $.fn.stopRotate = function() {
	        for (var i = 0, i0 = this.length; i < i0; i++) {
	            var element = this.get(i);
	            if (element.Wilq32 && element.Wilq32.PhotoEffect) {
	                clearTimeout(element.Wilq32.PhotoEffect._timer);
	            }
	        }
	    }

	    var Wilq32 = {};
	    Wilq32.PhotoEffect = (function() {
	        return function(img, parameters) {
	            img.Wilq32 = {
	                PhotoEffect: this
	            };

	            this._img = this._rootObj = this._eventObj = img;
	            this._handleRotation(parameters);
	        }

	    })();

	    Wilq32.PhotoEffect.prototype = {
	        _setupParameters: function(parameters) {
	            this._parameters = this._parameters || {};
	            if (typeof this._angle !== "number") {
	                this._angle = 0;
	            }
	            if (typeof parameters.angle === "number") {
	                this._angle = parameters.angle;
	            }
	            this._parameters.animateTo = (typeof parameters.animateTo === "number") ? (parameters.animateTo) : (this._angle);

	            this._parameters.step = parameters.step || this._parameters.step || null;
	            this._parameters.easing = parameters.easing || this._parameters.easing || function(x, t, b, c, d) {
	                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	            }
	            this._parameters.duration = parameters.duration || this._parameters.duration || 1000;
	            this._parameters.callback = parameters.callback || this._parameters.callback || function() {};
	        },
	        _handleRotation: function(parameters) {
	            this._setupParameters(parameters);
	            if (this._angle == this._parameters.animateTo) {
	                this._rotate(this._angle);
	            } else {
	                this._animateStart();
	            }
	        },

	        _animateStart: function() {
	            if (this._timer) {
	                clearTimeout(this._timer);
	            }
	            this._animateStartTime = +new Date;
	            this._animateStartAngle = this._angle;
	            this._animate();
	        },
	        _animate: function() {
	            var actualTime = +new Date;
	            var checkEnd = actualTime - this._animateStartTime > this._parameters.duration;

	            if (checkEnd) {
	                clearTimeout(this._timer);
	            } else {
	                if (this._canvas || this._vimage || this._img) {
	                    var angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
	                    this._rotate((~~(angle * 10)) / 10);
	                }
	                if (this._parameters.step) {
	                    this._parameters.step(this._angle);
	                }
	                var self = this;
	                this._timer = setTimeout(function() {
	                    self._animate.call(self);
	                }, 10);
	            }

	            // To fix Bug that prevents using recursive function in callback I moved this function to back
	            if (this._parameters.callback && checkEnd) {
	                this._angle = this._parameters.animateTo;
	                this._rotate(this._angle);
	                this._parameters.callback.call(this._rootObj);
	            }
	        },

	        _rotate: (function() {

	            return function(angle) {
	                this._angle = angle;
	                this._img.style.transform = "rotate(" + (angle % 360) + "deg)";
	            }
	        })()
	    }

	})(Zepto);

/***/ }

/******/ });
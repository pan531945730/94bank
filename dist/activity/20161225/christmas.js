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
	    __webpack_require__(91);
	    __webpack_require__(37);

	    //圣诞节弹层
	    var csmsAlert = function(op){
	        var self = this;
	        var defaults = {
	            bgClose : true,
	            closeSelect : $('.csms-close'),
	            select : $('.hdyjs')
	        };
	        this.ops = $.extend(defaults, op);
	        this.dialog = null;
	        this.init();
	    }
	    csmsAlert.prototype.init = function(){
	        __webpack_require__(7);
	        var Dialog = __webpack_require__(9);
	        this.dialog = new Dialog( this.ops );
	    }
	    csmsAlert.prototype.open = function(){
	        this.dialog.open();
	        this.ops.select.show();
	    }
	    var load = $('.load'),
	        jlgzAlert,
	        hdgzAlert,
	        ybwdlgAlert,
	        wwdlgAlert,
	        ywdlgAlert,
	        xxcyAlert,
	        wkycjjhAlert,
	        wkyjhAlert;
	    //点击活动规则
	    $('.csms-hdgz').on('click',function(){
	        if(!hdgzAlert){
	            hdgzAlert = new csmsAlert({
	                select : $('.hdgz')
	            });
	        }
	        hdgzAlert.open();
	    })
	    //点击100万活动规则
	    $('.csms-ybwdlg').on('click',function(){
	        if(!ybwdlgAlert){
	            ybwdlgAlert = new csmsAlert({
	                select : $('.ybwdlg')
	            });
	        }
	        ybwdlgAlert.open();
	    })
	    //点击50000活动规则
	    $('.csms-wwdlg').on('click',function(){
	        if(!wwdlgAlert){
	            wwdlgAlert = new csmsAlert({
	                select : $('.wwdlg')
	            });
	        }
	        wwdlgAlert.open();
	    })
	    //点击10000活动规则
	    $('.csms-ywdlg').on('click',function(){
	        if(!ywdlgAlert){
	            ywdlgAlert = new csmsAlert({
	                select : $('.ywdlg')
	            });
	        }
	        ywdlgAlert.open();
	    })
	    //点击奖励规则
	    $('.csms-rule').on('click',function(){
	        if(!jlgzAlert){
	            jlgzAlert = new csmsAlert({
	                select : $('.jlgz')
	            });
	        }
	        jlgzAlert.open();
	    })

	    //服务器时间
	    var serverTime = '',
	        zwFlag;
	        
	    //增加星星方法
	    var starMod = $('.star-mod'),
	        starNum = $('.star-num');
	    function addStar(index,num){
	        var arr = [],
	            html = '';
	        for(var i = 0;i<index; i++){
	            html += '<img src="'+window.Zepto.linkUrl+'/lib/christmas/csms-star.png" alt="christmas" width="100%" height="auto">';
	        }
	        arr.push(html);
	        starMod.append(arr.join(''));
	        starNum.html(num).show();
	    }

	    //点亮方法
	    function lightFn(ele){
	        ele.find('img').eq(0).hide();
	        ele.find('img').eq(1).show();
	    }

	    function yaobai(){
	        if(j==0){
	            j=1;
	            zwMod.removeClass("rolt").addClass("rort");
	        }else{
	            j=0;
	            zwMod.addClass("rolt").removeClass("rort");
	        }
	    }
	    //初始化接口
	    var initData = {
	        data: {
	            'AID' : 20161225,
	            'Action' : ''
	        },
	        mFun: 'ActivityMain',
	        beforeFun : function(){
	            load.show();
	        },
	        sucFun : function(v){
	            load.hide();
	            serverTime = Date.parse(v.ST);
	            var allCount;
	            //第一层星星数
	            //v.XData_1 = 10000;
	            var Count_1 = parseInt(v.XData_1),
	                Line_1 = Math.floor(Count_1/2000);
	            if(Count_1 > 0 && Count_1 <2000 ){
	                addStar(1,Count_1);
	            }else{
	                addStar(Line_1,Count_1);
	            }
	            
	            if(v.XData_1 == 10000){
	                lightFn(fx);
	                lightFn(cqhb);
	                zwFlag = setInterval(function(){
	                    yaobai();
	                },800);
	            }
	            
	            //第二层星星数
	            //v.XData_2 = 50000;
	            var Count_2 = parseInt(v.XData_2),
	                Line_2 = Math.floor(Count_2/6800),
	            allCount = Count_1 + Count_2;
	            addStar(Line_2,allCount);
	            if(v.XData_2 == 50000){
	                lightFn(ww);
	                lightFn(xgzw);
	                clearInterval(zwFlag);                
	            }
	            //第三层星星数
	            //v.XData_3 = 1000000;
	            var Count_3 = parseInt(v.XData_3),
	                Line_3 = Math.floor(Count_3/140000);
	            allCount = Count_1 + Count_2 + Count_3;
	            addStar(Line_3,allCount);
	            if(v.XData_3 == 1000000){
	                lightFn(ybw);
	                lightFn(jyb);
	                lightFn(zyx);
	            }
	        },
	        unusualFun : function(v){
	            load.hide();
	        }
	    }
	    JSBK.Utils.postAjax(initData);
	    //第一层点亮
	    var startTime = Date.parse('2016/12/22 9:00:00'),//开始时间
	        endTimeFir = Date.parse('2016/12/23 12:00:00'),//第一层结束时间
	        cqhb = $('.csms-cqhb'),
	        fx = $('.csms-fx'),
	        hb3yAlert,
	        hb15yAlert,
	        hb25yAlert,
	        cjwksAlert,
	        hdwksAlert,
	        cjyjsAlert;
	    
	    cqhb.on('click','#cqhb_btn',function(){
	        var cqhbData = {
	            data: {
	                'AID': 20161225,
	                'DrawTimes' : 1,
	                'Type': 1
	            },
	            mFun: 'LotteryDraw',
	            beforeFun : function(){
	                load.show();
	            },
	            sucFun : function(v){
	                load.hide();
	                var result = v.PrizeList[0],
	                    sta = v.Status;
	                //状态(-1:异常;0:中奖;1:未中奖;2:无可用抽奖机会;3:;活动未开始;4:;活动已结束;5:本轮活动已结束;6:本轮活动已参与;)
	                if(sta == 0){
	                    if(result.PrizeLevel == 1){
	                        if(!hb3yAlert){
	                            hb3yAlert = new csmsAlert({
	                                select : $('.hb-3y')
	                            });
	                        }
	                        hb3yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel ==2){
	                        if(!hb15yAlert){
	                            hb15yAlert = new csmsAlert({
	                                select : $('.hb-15y')
	                            });
	                        }
	                        hb15yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 3){
	                        if(!hb25yAlert){
	                            hb25yAlert = new csmsAlert({
	                                select : $('.hb-25y')
	                            });
	                        }
	                        hb25yAlert.open();
	                        return;
	                    }
	                }else if(sta == 1 || sta == 2){//1未中奖 2无可用投资机会
	                    if(!wkycjjhAlert){
	                        wkycjjhAlert = new csmsAlert({
	                            select : $('.wkycjjh')
	                        });
	                    }
	                    wkycjjhAlert.open();
	                    return;
	                }else if(sta == 3){
	                    if(!cjwksAlert){
	                        cjwksAlert = new csmsAlert({
	                            select : $('.cjwks')
	                        });
	                    }
	                    cjwksAlert.open();
	                    return;
	                }else if(sta == 4 || sta == 5){
	                    //活动已结束
	                    if(!cjyjsAlert){
	                        cjyjsAlert = new csmsAlert({
	                            select : $('.hdyjs')
	                        });
	                    }
	                    cjyjsAlert.open();
	                    return
	                }else if(sta == 6){
	                    //本轮活动已参与
	                    if(!xxcyAlert){
	                        xxcyAlert = new csmsAlert({
	                            select : $('.xxcy')
	                        });
	                    }
	                    xxcyAlert.open();
	                    return;
	                }
	                
	            },
	            unusualFun : function(v){
	                load.hide();
	            }
	        }
	        
	        //判断是否登录
	        JSBK.bindToken(function(){
	            //已登录
	            JSBK.Utils.postAjax(cqhbData);
	        });  
	    })

	    //第二层点亮
	    var ww = $('.csms-ww'),
	        zwMod = $('.csms-zw'),
	        xgzw = $('.csms-xgzw'),
	        j = 0,
	        startTimeSec = Date.parse('2016/12/23 12:00:00'),//第一层开始时间
	        endTimeSec = Date.parse('2016/12/23 20:00:00'),//第一层开始时间
	        xx30kAlert,
	        xx50kAlert,
	        xx100kAlert;
	    
	    $('body').on('click','.rort,.rolt',function(){
	        var wwData = {
	            data: {
	                'AID' : 20161225,
	                'Action' : 'getinstar'
	            },
	            mFun: 'ActivityMain',
	            beforeFun : function(){
	                load.show();
	            },
	            sucFun : function(v){
	                load.hide();
	                var starNum = v.StarNum,
	                    sta = v.Status,
	                    Count_1 = parseInt(v.XData_1),
	                    Count_2 = parseInt(v.XData_2),
	                    allCount = Count_1 + Count_2,
	                    Line_2 = Math.floor(Count_2/6800);

	                addStar(Line_2,allCount);
	                if(serverTime < startTimeSec){
	                    if(!hdwksAlert){
	                        hdwksAlert = new csmsAlert({
	                            select : $('.hdwks')
	                        });
	                    }
	                    hdwksAlert.open();
	                }                
	                if (sta == 0){
	                    if(starNum == 30){
	                        if(!xx30kAlert){
	                            xx30kAlert = new csmsAlert({
	                                select : $('.xx-30k')
	                            });
	                        }
	                        xx30kAlert.open();
	                        return;
	                    }else if(starNum == 50){
	                        if(!xx50kAlert){
	                            xx50kAlert = new csmsAlert({
	                                select : $('.xx-50k')
	                            });
	                        }
	                        xx50kAlert.open();
	                        return;
	                    }else if(starNum == 100){
	                        if(!xx100kAlert){
	                            xx100kAlert = new csmsAlert({
	                                select : $('.xx-100k')
	                            });
	                        }
	                        xx100kAlert.open();
	                        return;
	                    }  
	                }else if(sta == -3){
	                    //无可用机会
	                    if(!wkyjhAlert){
	                        wkyjhAlert = new csmsAlert({
	                            select : $('.wkyjh')
	                        });
	                    }
	                    wkyjhAlert.open();
	                    return;
	                }
	                          
	            },
	            unusualFun : function(v){
	                load.hide();
	            }
	        }
	        
	        //判断是否登录
	        JSBK.bindToken(function(){
	            //已登录
	            JSBK.Utils.postAjax(wwData);
	        });  
	    })
	   
	    //第三层点亮
	    var ybw = $('.csms-ybw'),
	        jyb = $('.csms-jyb'),
	        zyx = $('.csms-zyx'),
	        startTimeTri = new Date(Date.parse('2016/12/24 9:00:00')),//第一层结束时间
	        endTimeTri = new Date(Date.parse('2016/12/24 24:00:00')),//第一层结束时间
	        hf2yAlert,
	        hf5yAlert,
	        hf10yAlert,
	        hf20yAlert,
	        hf50yAlert,
	        hf100yAlert;

	    zyx.on('click','#zyx_btn',function(){
	        var zyxData = {
	            data: {
	                'AID': 20161225,
	                'DrawTimes' : 1,
	                'Type': 2
	            },
	            mFun: 'LotteryDraw',
	            beforeFun : function(){
	                load.show();
	            },
	            sucFun : function(v){
	                load.hide();
	                var result = v.PrizeList[0],
	                    sta = v.Status;

	                if(sta == 0){
	                    if(result.PrizeLevel == 1){
	                        if(!hf2yAlert){
	                            hf2yAlert = new csmsAlert({
	                                select : $('.hf-2y')
	                            });
	                        }
	                        hf2yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 2){
	                        if(!hf5yAlert){
	                            hf5yAlert = new csmsAlert({
	                                select : $('.hf-5y')
	                            });
	                        }
	                        hf5yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 3){
	                        if(!hf10yAlert){
	                            hf10yAlert = new csmsAlert({
	                                select : $('.hf-10y')
	                            });
	                        }
	                        hf10yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 4){
	                        if(!hf20yAlert){
	                            hf20yAlert = new csmsAlert({
	                                select : $('.hf-20y')
	                            });
	                        }
	                        hf2yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 5){
	                        if(!hf50yAlert){
	                            hf50yAlert = new csmsAlert({
	                                select : $('.hf-50y')
	                            });
	                        }
	                        hf50yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 6){
	                        if(!hf100yAlert){
	                            hf100yAlert = new csmsAlert({
	                                select : $('.hf-100y')
	                            });
	                        }
	                        hf100yAlert.open();
	                        return;
	                    }else if(result.PrizeLevel == 7){
	                        if(!xxcyAlert){
	                            xxcyAlert = new csmsAlert({
	                                select : $('.xxcy')
	                            });
	                        }
	                        xxcyAlert.open();
	                        return;
	                    }
	                }else if(sta == 1 || sta == 2){//1未中奖 2无可用投资机会
	                    if(!wkycjjhAlert){
	                        wkycjjhAlert = new csmsAlert({
	                            select : $('.wkycjjh')
	                        });
	                    }
	                    wkycjjhAlert.open();
	                    return;
	                }else if(sta == 3){
	                    if(!cjwksAlert){
	                        cjwksAlert = new csmsAlert({
	                            select : $('.cjwks')
	                        });
	                    }
	                    cjwksAlert.open();
	                    return;
	                }else if(sta == 4 || sta == 5){
	                    //活动已结束
	                    if(!cjyjsAlert){
	                        cjyjsAlert = new csmsAlert({
	                            select : $('.hdyjs')
	                        });
	                    }
	                    cjyjsAlert.open();
	                    return
	                }else if(sta == 6){
	                    //本轮活动已参与
	                    if(!xxcyAlert){
	                        xxcyAlert = new csmsAlert({
	                            select : $('.xxcy')
	                        });
	                    }
	                    xxcyAlert.open();
	                    return;
	                }
	            },
	            unusualFun : function(v){
	                load.hide();
	            }
	        }
	        
	        //判断是否登录
	        JSBK.bindToken(function(){
	            //已登录
	            JSBK.Utils.postAjax(zyxData); 
	        });
	    }) 

	    //微信分享
	    JSBK.shareWinxin({
	        'title': '94bank与你一起点亮这个圣诞夜！万元红包、话费大放送！',
	        'desc': '万元话费大放送！圣诞节期间登录94bank，参与万星点亮，12月22至25日惊喜不断闪亮！',
	        'link': 'http://np.94bank.com/Activity/Christmas20161225',
	        'imgUrl': 'http://img.94bank.com/np/dist/Activity/img/20161225/share.jpg'
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

/***/ 37:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 91:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
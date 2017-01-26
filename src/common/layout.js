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
                            var Alert = require('../ui/Alert.js');
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
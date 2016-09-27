webpackJsonp([2,5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;
	$(function() {
	    __webpack_require__(1);
	    __webpack_require__(7);
	    __webpack_require__(12);
	    __webpack_require__(14);
	    var lgTel = $('#lg_tel'),
	        lgPwd = $('#lg_pwd'),
	        lgEyes = $('.lg-eyes'),
	        lgBtn = $('#lg_btn'),
	        errorTip = $('.error-tip').find('span');

	    /*输入文本提示文案消失*/
	    $('#lg_tel, #lg_pwd').on('input', function() {
	        errorTip.html('');
	    })

	    /*点击更改密码显示状态*/
	    lgEyes.on('click', function() {
	        $(this).toggleClass('open-eyes');
	        if (lgPwd.attr('type') == 'password') {
	            lgPwd.prop('type', 'text');
	        } else {
	            lgPwd.prop('type', 'password');
	        }

	    })

	    /*点击登录按钮*/
	    lgBtn.on('click', function() {
	        var telVal = lgTel.val(),
	            pwdVal = lgPwd.val();
	        if (telVal == null || telVal == '') {
	            errorTip.html('请输入手机号');
	            return false;
	        }
	        //格式验证
	        if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(telVal)) {
	            errorTip.html('请输入正确的手机号');
	            return false;
	        }

	        if ($.trim(pwdVal) == '' || pwdVal == null) {
	            errorTip.html('请先输入密码');
	            return false;
	        } else if (pwdVal.length < 6 || pwdVal.length > 16) {
	            errorTip.html('密码长度为：6-16位');
	            return false;
	        }

	        $.ajax({
	            type: 'post',
	            dataType: 'json',
	            url: 'login',
	            data: {
	                'phone': telVal,
	                'password': pwdVal,
	            },
	            //请求成功时执行
	            success: function(data) {
	                if (data.IsSuccess === 1) {
	                    var returnUrl = JSBK.Utils.GetUrlSearch().returnUrl;
	                    location.href = returnUrl;
	                } else {
	                    errorTip.html(data.Result);
	                    return false;
	                }
	            },
	            //请求失败遇到异常触发
	            error: function(xhr, status, e) {
	                errorTip.html('网络堵塞,请稍后重试!');
	            }
	        });

	    })
	})

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	;
	(function(win, doc, $) {

	    var jsbk = win.JSBK || {};

	    function log(params) {
	        var key,
	            arr = [];
	        if (typeof params === 'string') {
	            msg = params;
	        }
	        if (typeof params === 'object') {
	            for (key in params) {
	                if (params.hasOwnProperty(key)) {
	                    arr.push(key + ':' + encodeURIComponent(JSON.stringify(params[key])));
	                }
	            }
	            msg = arr.join(',');
	        }
	        return true;
	    }

	    win.onerror = function(msg, url, line) {
	        log({
	            message: msg,
	            url: url,
	            line: line
	        });
	    }

	    jsbk.Namespace = {
	        register: function(ns) {
	            var nsParts = ns.split("."),
	                root = win,
	                length,
	                i;
	            for (i = 0, length = nsParts.length; i < length; i++) {
	                if (typeof root[nsParts[i]] == "undefined") {
	                    root[nsParts[i]] = {};
	                }
	                root = root[nsParts[i]];
	            }
	            return root;
	        }
	    };

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

	        //获取url中"?"符后的字串 
	        GetUrlSearch: function() {
	            var url = location.search; 
	            var theRequest = new Object();
	            if (url.indexOf("?") != -1) {
	                var str = url.substr(1);
	                strs = str.split("&");
	                for (var i = 0; i < strs.length; i++) {
	                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	                }
	            }
	            return theRequest;
	        }
	    };

	    jsbk.connectWebViewJavascriptBridge = function(callback) {
	        if (window.WebViewJavascriptBridge) {
	            callback(WebViewJavascriptBridge)
	        } else {
	            window.WVJBCallbacks = [callback];
	            var WVJBIframe = document.createElement('iframe');
	            WVJBIframe.style.display = 'none';
	            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
	            document.documentElement.appendChild(WVJBIframe);
	            setTimeout(function() {
	                document.documentElement.removeChild(WVJBIframe)
	            }, 0)
	            document.addEventListener('WebViewJavascriptBridgeReady', function() {
	                callback(WebViewJavascriptBridge)
	            }, false)
	        }
	    }

	    win.JSBK = jsbk;
	})(window, document, Zepto);

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
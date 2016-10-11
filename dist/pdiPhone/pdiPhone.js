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
	    __webpack_require__(19);        

	    var productId = JSBK.Utils.GetUrlSearch().ProductId,
	        pdLoad = $('.pd-load');
	    $.ajax({
	        url: 'http://d.94bank.com/ProductDetail/GetProductDetail',
	        type: 'get',
	        jsonp: 'callback',
	        dataType: 'jsonp',
	        data: {
	            "productId": productId
	        },
	        beforeSend: function(xhr,settings){
	            pdLoad.show();
	        },
	        success: function(data) {
	            if (data != null) {
	                pdLoad.hide();
	                $('#tit').html(data.Title);
	                $('#earn').html(data.InterestRateText);
	                $('#limit').html(data.InvestmentTimeText);
	                $('#amount').html(data.StartAmount + '元');
	                $('.rule').html(data.SaleRule);
	                $('.describe').html(data.ProjectDetail);
	                $('.security').html(data.FundSecurityDetail);
	                var des = "";
	                if (productId == "41") {
	                    des = "每日收益到账";
	                } else if (productId == "2011") {
	                    des = "次日收益到账";
	                } else {
	                    des = "到期后返还本金收益";
	                }
	                $('#way').html(des);
	            }
	        },
	        error: function(text) {
	            pdLoad.hide();
	        }
	    });
	})

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports) {

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

/***/ 19:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
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

    function preventDefault(event) {
        event.preventDefault();
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

        touchClick: function() {
            var status = true;
            $(doc).on('touchmove', function() {
                if (status) {
                    doc.addEventListener('click', preventDefault, true);
                    status = false;
                }
            });

            $(doc).on('touchend', function() {
                doc.removeEventListener('click', preventDefault, true);
                status = true;
            });
        },
        
        /**
         * [getGuid 在统计电话时长的时候为了保持唯一关联性，防止用户间隔时间长或者清除cookie后两个soj无法关联起来]
         * @param  {[String]} sType
         * @return {[String]}
         */
        log: function(params) {
            return log(params);
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
        //替代原生scroll事件
        scrollHelper: function(selector){
            var record = {};
            $('body').on("touchstart", selector, function(e) {
                record.startTop = e.targetTouches[0].screenY; // 触摸开始时触摸点的位置
                record.startScrollTop = $(this).scrollTop();  // 触摸开始时内div的scrollTop
            });
            $('body').on("touchmove", selector, function(e) {
                e.preventDefault();
                var curY = e.targetTouches[0].screenY;
                $(this).scrollTop( record.startScrollTop + record.startTop - curY ); // js控制滚动
            });
        }
    };

    win.JSBK = jsbk;
    win.JS = jsbk.Utils;
})(window, document, Zepto);

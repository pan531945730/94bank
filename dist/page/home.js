webpackJsonp([1],[function(t,n,e){$(function(){function t(){var t=$("#yield_bg").get(0),n=t.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,320,160),n.beginPath(),n.arc(25,13,8.5,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill(),n.beginPath(),n.arc(63,90,33.5,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill(),n.beginPath(),n.arc(145,59,59,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill(),n.beginPath(),n.arc(156,62,62,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.1)",n.fill(),n.beginPath(),n.arc(240,5,4.5,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill(),n.beginPath(),n.arc(243,75,19,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill(),n.beginPath(),n.arc(293,113,7.2,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(246, 106, 106, 0.2)",n.fill()}e(2),e(3),e(6),e(10),new sq.ui.LazyLoadImg({select:".imglazyload"}),e(11),new sq.ui.Swipe($("#swipe_wrap")[0],{startSlide:0,speed:0,auto:1e3,continuous:!0,disableScroll:!1,stopPropagation:!1,callback:function(t,n){var e=$("#pnav").find("li");$(e[t]).addClass("focus").siblings().removeClass("focus")}}),t(),e(5),e(7);new sq.ui.Alert({targetNode:".open-btn"});e(9);new sq.ui.Confirm({targetNode:".yield-info"});e(8);var n=new sq.ui.Blink;n.open()})},function(t,n){JSBK.Namespace.register("sq.ui"),function(t,n){function e(n){t.extend(!0,n,i)}var i={listener:{defaults:[]},on:function(t,n,e){var i,o;"string"!=typeof t&&"undefined"!=typeof t||"function"!=typeof n&&"function"!=typeof e[n]||(i=t||"defaults",o="function"==typeof n?n:e[n],"undefined"==typeof this.listener[i]&&(this.listener[i]=[]),this.listener[i].push({fn:o,context:e||this}))},off:function(t,n,e){var i,o=t||"defaults",s=this.listener[o],a=e||this,r=s?s.length:0;for(i=0;i<r;i++)s[i].fn===n&&s[i].context===a&&s.splice(i,1)},trigger:function(n,e){var i,o,s=n||"defaults",a=this.listener[s],r=a?a.length:0;for(t.isArray(e)||(o=e?[e]:[]),i=0;i<r;i++)a[i].fn.apply(a[i].context,o)}};n.Dialog=function(n){var i={className:"g-d-dialog",actionEvent:"click",bgClose:!1,targetNode:""};this.ops=t.extend(i,n),this.dom={},e(this),this.init()},n.Dialog.prototype={constructor:n.Dialog,init:function(){var n,e=t(document.createDocumentFragment()),i=this,o=t("<div></div>");o.addClass(this.ops.className),e.append(o),this.ops.select&&(n=t(this.ops.select)),o.append(n||""),t("body").append(e),this.dom.dialog=o,this.dom.dialog.on("touchmove",function(t){t.preventDefault()}),t(this.ops.closeSelect).click(function(t){t.stopPropagation(),i.trigger("dialogClose"),i.close()}),this.ops.bgClose&&o.click(function(t){t.target===this&&(t.stopPropagation(),i.trigger("bgClose"),i.close())}),o.find("input").blur(function(t){t.stopPropagation(),i.fixDrawSlow()}),this.ops.targetNode&&t(this.ops.targetNode).on(this.ops.actionEvent,function(t){t.stopPropagation();var n=[].slice.call(arguments);i.open(n.slice(1))})},open:function(t){this.trigger("open",t),this.dom.dialog.css("display","-webkit-box"),this.trigger("afteropen",t)},close:function(t){this.dom.dialog.hide(),this.trigger("close",t)},getDialog:function(){return this.dom.dialog},fixDrawSlow:function(){var n=t(window).scrollTop();setTimeout(function(){t(window).scrollTop(n+1),setTimeout(function(){t(window).scrollTop(n)},10)},1)}}}(Zepto,sq.ui)},function(t,n){},function(t,n){},,function(t,n){},function(t,n){!function(t,n,e){function o(t){var n,e=[];if("string"==typeof t&&(msg=t),"object"==typeof t){for(n in t)t.hasOwnProperty(n)&&e.push(n+":"+encodeURIComponent(JSON.stringify(t[n])));msg=e.join(",")}return!0}function s(t){t.preventDefault()}var a=t.JSBK||{};t.onerror=function(t,n,e){o({message:t,url:n,line:e})},a.Namespace={register:function(n){var e,i,o=n.split("."),s=t;for(i=0,e=o.length;i<e;i++)"undefined"==typeof s[o[i]]&&(s[o[i]]={}),s=s[o[i]];return s}},a.Utils={setCookie:function(t,e,i,o,s,a){var r=new Date;r.setTime(r.getTime()),i&&(i=1e3*i*60*60*24);var l=new Date(r.getTime()+i);n.cookie=t+"="+escape(e)+(i?";expires="+l.toGMTString():"")+(o?";path="+o:"")+(s?";domain="+s:"")+(a?";secure":"")},getCookie:function(t){var e,o=n.cookie.split(";"),s="",a="",r="",l=!1;for(i=0,e=o.length;i<e;i++){if(s=o[i].split("="),a=s[0].replace(/^\s+|\s+$/g,""),a==t)return l=!0,s.length>1&&(r=decodeURIComponent(s[1].replace(/^\s+|\s+$/g,""))),r;s=null,a=""}if(!l)return null},deleteCookie:function(t,e,i){this.getCookie(t)&&(n.cookie=t+"="+(e?";path="+e:"")+(i?";domain="+i:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT")},touchClick:function(){var t=!0;e(n).on("touchmove",function(){t&&(n.addEventListener("click",s,!0),t=!1)}),e(n).on("touchend",function(){n.removeEventListener("click",s,!0),t=!0})},log:function(t){return o(t)},LocalStorageHelper:function(t,n,e){try{if("setItem"==t)return localStorage[t](n,e),!0;var i=localStorage[t](n);return i}catch(o){return!1}},scrollHelper:function(t){var n={};e("body").on("touchstart",t,function(t){n.startTop=t.targetTouches[0].screenY,n.startScrollTop=e(this).scrollTop()}),e("body").on("touchmove",t,function(t){t.preventDefault();var i=t.targetTouches[0].screenY;e(this).scrollTop(n.startScrollTop+n.startTop-i)})}},t.JSBK=a,t.JS=a.Utils}(window,document,Zepto)},function(t,n,e){JSBK.Namespace.register("sq.ui"),function(t,n){n.Alert=function(n){var e=this,i={centerTitle:!1,bgClose:!1,titleHtml:"成功！",btnHtml:"确定",select:e.getSelect(),clickBtnCallback:null};this.ops=t.extend(i,n),this.dialog=null,this.init()},n.Alert.prototype.init=function(){var t=this;t.setHtml(),e(1),t.dialog=new sq.ui.Dialog(t.ops),t.bindEvent()},n.Alert.prototype.open=function(){this.dialog.open()},n.Alert.prototype.bindEvent=function(){var t=this;t.ops.select.on("click",".btn",function(n){n.stopPropagation(),t.ops.clickBtnCallback?t.ops.clickBtnCallback(t):t.dialog.close()})},n.Alert.prototype.setHtml=function(){var t=this;t.ops.centerTitle&&t.ops.select.addClass("center-title"),t.ops.select.find(".title").html(t.ops.titleHtml),t.ops.select.find(".btn").html(t.ops.btnHtml)},n.Alert.prototype.getSelect=function(){return t('<div class="dialog-mod dialog-alert"><p class="title"></p><div class="btn-wrap"><span class="btn"></span></div></div>')}}(Zepto,sq.ui)},function(t,n,e){JSBK.Namespace.register("sq.ui"),function(t,n){n.Blink=function(n){var e=this,i={className:"g-d-dialog blink-mod",bgClose:!1,select:e.getSelect(),blinkHtml:"blink blink",intervaltime:3e3};this.ops=t.extend(i,n),this.dialog=null,this.init()},n.Blink.prototype.init=function(){var t=this;t.setHtml(),e(1),t.dialog=new sq.ui.Dialog(t.ops)},n.Blink.prototype.open=function(t){var n=this;n.dialog.open(),setTimeout(function(){n.ops.timeoutCallback?n.ops.timeoutCallback(n):(n.dialog.close(),t&&t())},n.ops.intervaltime)},n.Blink.prototype.setHtml=function(){var t=this;t.ops.select.find(".blink-content").html(t.ops.blinkHtml)},n.Blink.prototype.setDoc=function(t){var n=this;n.dialog.dom.dialog.find(".blink-content").empty().append(t)},n.Blink.prototype.getSelect=function(){return t('<div class="dialog-mod dialog-blink"><p class="blink-content"></p></div>')}}(Zepto,sq.ui)},function(t,n,e){JSBK.Namespace.register("sq.ui"),function(t,n){n.Confirm=function(n){var e=this,i={bgClose:!1,titleHtml:"确定？",cancleBtnHtml:"取消",confirmBtnHtml:"确定",select:e.getSelect(),cancleCallback:null,confirmCallback:null};this.ops=t.extend(i,n),this.dialog=null,this.init()},n.Confirm.prototype.init=function(){var t=this;t.setHtml(),e(1),t.dialog=new sq.ui.Dialog(t.ops),t.bindEvent()},n.Confirm.prototype.open=function(){this.dialog.open()},n.Confirm.prototype.bindEvent=function(){var t=this;t.ops.select.on("click",".cancle-btn",function(n){n.stopPropagation(),t.ops.cancleCallback?t.ops.cancleCallback(t):t.dialog.close()}),t.ops.select.on("click",".confirm-btn",function(n){n.stopPropagation(),t.ops.confirmCallback?t.ops.confirmCallback(t):t.dialog.close()})},n.Confirm.prototype.setHtml=function(){var t=this;t.ops.select.find(".title").html(t.ops.titleHtml),t.ops.select.find(".cancle-btn").html(t.ops.cancleBtnHtml),t.ops.select.find(".confirm-btn").html(t.ops.confirmBtnHtml)},n.Confirm.prototype.getSelect=function(){return t('<div class="dialog-mod dialog-confirm"><p class="title"></p><div class="btn-wrap"><span class="btn cancle-btn"></span><span class="btn confirm-btn"></span></div></div>')}}(Zepto,sq.ui)},function(t,n){JSBK.Namespace.register("sq.ui"),function(t,n){n.LazyLoadImg=function(n){var e={min:0,max:-1,select:"img",attr:"data-src",ratioAttr:"origin",isClip:!1,imgRange:1};this.ops={},t.extend(this.ops,e,n),this.init()},n.LazyLoadImg.prototype={constructor:n.LazyLoadImg,init:function(){function n(){var n=t(window),e=i.ops.min,s=i.ops.max,a=n.height(),r=n.scrollTop();i.ops.min<r&&(e=r),(i.ops.max===-1||a*i.ops.imgRange+r<i.ops.max)&&(s=a*i.ops.imgRange+r),i.refreshImg(e,s),o=!1}function e(){o!==!0&&(o=!0,rAf(n))}var i=this,o=!1;rAf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},t(window).scroll(e),t(document).on("touchmove",e),t(window).trigger("scroll")},refreshImg:function(n,e){var i,o,s=this;i=this.ops.select.replace(".",""),t(this.ops.select).each(function(a,r){var l=t(r);o=l.offset().top,o>=n&&o<=e&&(s.imgReplace(l,s.ops.attr,s.ops.ratioAttr,s.ops.isClip),l.removeClass(i))})},imgReplace:function(t,n,e,i){var o,s=n||"data-src",a=t.attr(s);a&&a&&(o=new Image,o.onerror=function(){return!1},o.onload=function(){t.attr("src",a)},o.src=a)}}}(Zepto,sq.ui)},function(t,n){JSBK.Namespace.register("sq.ui"),function(t,n){n.Swipe=function(t,n){function e(){g=w.children,b=g.length,g.length<2&&(n.continuous=!1),h.transitions&&n.continuous&&g.length<3&&(w.appendChild(g[0].cloneNode(!0)),w.appendChild(w.children[1].cloneNode(!0)),g=w.children),m=new Array(g.length),v=t.getBoundingClientRect().width||t.offsetWidth,w.style.width=g.length*v+"px";for(var e=g.length;e--;){var i=g[e];i.style.width=v+"px",i.setAttribute("data-index",e),h.transitions&&(i.style.left=e*-v+"px",r(e,y>e?-v:y<e?v:0,0))}n.continuous&&h.transitions&&(r(s(y-1),-v,0),r(s(y+1),v,0)),h.transitions||(w.style.left=y*-v+"px"),t.style.visibility="visible"}function i(){n.continuous?a(y-1):y&&a(y-1)}function o(){n.continuous?a(y+1):y<g.length-1&&a(y+1)}function s(t){return(g.length+t%g.length)%g.length}function a(t,e){if(y!=t){if(h.transitions){var i=Math.abs(y-t)/(y-t);if(n.continuous){var o=i;i=-m[s(t)]/v,i!==o&&(t=-i*g.length+t)}for(var a=Math.abs(y-t)-1;a--;)r(s((t>y?t:y)-a-1),v*i,0);t=s(t),r(y,v*i,e||k),r(t,0,e||k),n.continuous&&r(s(t-i),-(v*i),0)}else t=s(t),c(y*-v,t*-v,e||k);y=t,d(n.callback&&n.callback(y,g[y]))}}function r(t,n,e){l(t,n,e),m[t]=n}function l(t,n,e){var i=g[t],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+n+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+n+"px)")}function c(t,e,i){if(!i)return void(w.style.left=e+"px");var o=+new Date,s=setInterval(function(){var a=+new Date-o;return a>i?(w.style.left=e+"px",E&&u(),n.transitionEnd&&n.transitionEnd.call(event,y,g[y]),void clearInterval(s)):void(w.style.left=(e-t)*(Math.floor(a/i*100)/100)+t+"px")},4)}function u(){x=setTimeout(o,E)}function p(){E=0,clearTimeout(x)}var f=function(){},d=function(t){setTimeout(t||f,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(t){var n=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in n)if(void 0!==t.style[n[e]])return!0;return!1}(document.createElement("swipe"))};if(t){var g,m,v,b,w=t.children[0];n=n||{};var y=parseInt(n.startSlide,10)||0,k=n.speed||300;n.continuous=void 0===n.continuous||n.continuous;var x,T,E=n.auto||0,C={},S={},P={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":d(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":d(this.transitionEnd(t));break;case"resize":d(e.call())}n.stopPropagation&&t.stopPropagation()},start:function(t){var n=t.touches[0];C={x:n.pageX,y:n.pageY,time:+new Date},T=void 0,S={},w.addEventListener("touchmove",this,!1),w.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){n.disableScroll&&t.preventDefault();var e=t.touches[0];S={x:e.pageX-C.x,y:e.pageY-C.y},"undefined"==typeof T&&(T=!!(T||Math.abs(S.x)<Math.abs(S.y))),T||(t.preventDefault(),p(),n.continuous?(l(s(y-1),S.x+m[s(y-1)],0),l(y,S.x+m[y],0),l(s(y+1),S.x+m[s(y+1)],0)):(S.x=S.x/(!y&&S.x>0||y==g.length-1&&S.x<0?Math.abs(S.x)/v+1:1),l(y-1,S.x+m[y-1],0),l(y,S.x+m[y],0),l(y+1,S.x+m[y+1],0)))}},end:function(t){var e=+new Date-C.time,i=Number(e)<250&&Math.abs(S.x)>20||Math.abs(S.x)>v/2,o=!y&&S.x>0||y==g.length-1&&S.x<0;n.continuous&&(o=!1);var a=S.x<0;T||(i&&!o?(a?(n.continuous?(r(s(y-1),-v,0),r(s(y+2),v,0)):r(y-1,-v,0),r(y,m[y]-v,k),r(s(y+1),m[s(y+1)]-v,k),y=s(y+1)):(n.continuous?(r(s(y+1),v,0),r(s(y-2),-v,0)):r(y+1,v,0),r(y,m[y]+v,k),r(s(y-1),m[s(y-1)]+v,k),y=s(y-1)),n.callback&&n.callback(y,g[y])):n.continuous?(r(s(y-1),-v,k),r(y,0,k),r(s(y+1),v,k)):(r(y-1,-v,k),r(y,0,k),r(y+1,v,k))),w.removeEventListener("touchmove",P,!1),w.removeEventListener("touchend",P,!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==y&&(E&&u(),n.transitionEnd&&n.transitionEnd.call(t,y,g[y]))}};return e(),E&&u(),h.addEventListener?(h.touch&&w.addEventListener("touchstart",P,!1),h.transitions&&(w.addEventListener("webkitTransitionEnd",P,!1),w.addEventListener("msTransitionEnd",P,!1),w.addEventListener("oTransitionEnd",P,!1),w.addEventListener("otransitionend",P,!1),w.addEventListener("transitionend",P,!1)),window.addEventListener("resize",P,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(t,n){p(),a(t,n)},prev:function(){p(),i()},next:function(){p(),o()},getPos:function(){return y},getNumSlides:function(){return b},kill:function(){p(),w.style.width="auto",w.style.left=0;for(var t=g.length;t--;){var n=g[t];n.style.width="100%",n.style.left=0,h.transitions&&l(t,0,0)}h.addEventListener?(w.removeEventListener("touchstart",P,!1),w.removeEventListener("webkitTransitionEnd",P,!1),w.removeEventListener("msTransitionEnd",P,!1),w.removeEventListener("oTransitionEnd",P,!1),w.removeEventListener("otransitionend",P,!1),w.removeEventListener("transitionend",P,!1),window.removeEventListener("resize",P,!1)):window.onresize=null}}}}}(Zepto,sq.ui)}]);
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
	    __webpack_require__(53); 
	    var recharge = $('#recharge'),
	        confirmBtn = $('#confirm_btn'),
	        errorTip = $('.error-tip').find('span'),
	        fmInp = $('.fm-input input'),
	        clear = $('.clear'),
	        defTip = $('.def-tip');
	    
	    recharge.focus();
	    recharge.trigger('focus');
	        
	    fmInp.on('input',function(){
	        errorTip.html('');
	        defTip.show();
	        $(this).next('.clear').css('display', 'block');
	    })

	    //清除按钮交互
	    fmInp.on('focus',function(){
	        if($(this).val() != ''){
	            $(this).next('.clear').css('display', 'block');
	        }
	    })

	    fmInp.on('blur',function(){
	        var _this = $(this);
	        setTimeout(function(){
	             _this.next('.clear').css('display', 'none');
	         },200)       
	    })

	    clear.on('click',function(){
	        $(this).prev('input').val('');
	        $(this).css('display', 'none');
	        errorTip.html('');
	        defTip.show();
	    })

	    //确定
	    confirmBtn.on('click',function(){
	        var rechargeVal = recharge.val();

	        if(rechargeVal == null || rechargeVal == ''){
	            errorTip.html('充值金额不能为空');
	            defTip.hide();
	            return false;
	        }else if(rechargeVal < 100){
	            errorTip.html('单笔充值金额最低100元起');
	            defTip.hide();
	            return false;
	        }

	        if(rechargeVal.length > 10){
	            errorTip.html('单笔充值金额最多不能超10位数');
	            defTip.hide();
	            return false;
	        }

	    })
	    
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 53:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
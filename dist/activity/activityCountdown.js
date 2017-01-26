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
	    //require('../../common/layout.js');
	    __webpack_require__(106);
	   
	    //倒计时
	    function addzero(a){
	        if(a<10){
	            return a='0'+a;
	        }else{return a}
	    }
	    function caculateDate(time){
	        var d = parseInt(time/86400);
	        var h = parseInt((time%86400)/3600);
	        var m = parseInt(((time%86400)%3600)/60);
	        var s = parseInt(((time%86400)%3600)%60);
	        var t = '<span class="day">'+addzero(d)+'</span><span class="hours">'+addzero(h)+'</span><span class="minute">'+addzero(m)+'</span>';
	        return t;
	    }
	    function countDownFun(nowTime,endTime,Time){
	        var time =(Date.parse(endTime) - Date.parse(nowTime))/1000;
	        if(time <= 0){
	            return;
	        }
	        Time.html(caculateDate(time));
	        var clearTime = setInterval(function(){
	            time -= 1;
	            Time.html(caculateDate(time));
	            if(time <= 0){
	                clearInterval(clearTime)
	            }
	        },1000);
	    }
	    
	    var endTime= new Date('2017/02/18 00:00:00'),
	        nowTime = new Date(),
	        countDownMod = $('.atcd-mod');
	    countDownFun(nowTime,endTime,countDownMod);
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 106:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
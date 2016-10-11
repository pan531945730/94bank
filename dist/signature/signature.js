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
	    __webpack_require__(24);

	    var canvas = null,
	        context = null;

	    function resetCanvas() {
	        canvas = $('#simple').get(0);
	        context = canvas.getContext('2d');
	    }

	    resetCanvas();
	    canvas.addEventListener('touchstart', function(evt) {
	        evt.preventDefault();
	        context.beginPath();
	        context.moveTo(evt.touches[0].pageX, evt.touches[0].pageY);
	        redraw();
	    }, false);
	    canvas.addEventListener('touchmove', function(evt) {
	        context.lineTo(evt.touches[0].pageX, evt.touches[0].pageY);
	        context.stroke();
	    }, false);
	    canvas.addEventListener('touchend', function(evt) {}, false);

	    function redraw() {
	        context.strokeStyle = "#df4b26";
	        context.lineJoin = "round";
	        context.lineCap = "round";
	        context.lineWidth = 2;
	    };

	    $('#btn_export').on('click',function(){
	        $.ajax({
	            url: 'http://d.94bank.com/ProductDetail/GetProductDetail',
	            jsonp: 'callback',
	            dataType: 'jsonp',
	            data: {
	                'productId': 41,
	                'img': canvas.toDataURL("image/png")
	            },
	            success: function(data){
	                console.log(data);
	            }
	        })
	        $("#qmimg").attr("src", canvas.toDataURL("image/png"));
	    })

	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 24:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
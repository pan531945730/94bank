webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	$(function(){
	    __webpack_require__(10);

	    var JSON = {
	        url: "ajax.php?author=www.zhangxinxu.com",
	        data: [{
	            couponid: "111",
	            imgsrc: "test1.JPG",
	            resname: "俏江南 仙乐斯广场",
	            traffic: "肇嘉浜路沿线",
	            buynum: 180,
	            cost: 100,
	            discount: 8.5,
	            price: 85
	        }, {
	            couponid: "222222",
	            imgsrc: "222222.jpg",
	            resname: "申城五月天",
	            traffic: "静安寺",
	            buynum: 0,
	            cost: 100,
	            discount: 8.0,
	            price: 80
	        }, {
	            couponid: "3",
	            imgsrc: "go-baby.jpg",
	            resname: "申城五月天",
	            traffic: "静安寺",
	            buynum: 0,
	            cost: 100,
	            discount: 8.0,
	            price: 80
	        }]
	    };

	    String.prototype.temp = function(obj) {
	        return this.replace(/\$\w+\$/gi, function(matchs) {
	            var returns = obj[matchs.replace(/\$/g, "")];       
	            return (returns + "") == "undefined"? "": returns;
	        });
	    }

	    var htmlList = ''
	         // textarea中的模板HTML
	        , htmlTemp = $("textarea").val();

	    JSON.data.forEach(function(object) {
	        htmlList += htmlTemp.temp(object);
	    });

	    // htmlList就是我们需要的HTML代码啦！
	    $("ul").html(htmlList);
	})

/***/ },

/***/ 10:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
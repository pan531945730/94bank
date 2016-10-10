;
$(function() {
    require('../common/layout.css');
    require('../css/home.css');
    require('../common/layout.js');
    /*图片懒加载*/
    require('../ui/LazyLoadImg.js');
    new sq.ui.LazyLoadImg({
        select: '.imglazyload'
    });

    require('../ui/Swipe.js');
    new sq.ui.Swipe($('#swipe_wrap')[0], {
        startSlide: 0,
        speed: 0,
        auto: 1000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {
            var dotList = $('#pnav').find('li');
            $(dotList[index]).addClass('focus').siblings().removeClass('focus');
        }
    });

    function buildYieldBg() {
        var canvas = $('#yield_bg').get(0);
        var content = canvas.getContext('2d'); //取得图形上下文 graphics context 

        content.fillStyle = '#fff'; //填充canvas的背景颜色 
        content.fillRect(0, 0, 320, 160); //参数分别表示 x轴,y轴,宽度,高度 

        content.beginPath(); //创建路径 
        content.arc(25, 13, 8.5, 0, Math.PI * 2, true); //绘制图形 
        content.closePath(); //关闭路径 
        content.fillStyle = 'rgba(246, 106, 106, 0.2)'; //设置样式 
        content.fill(); //填充 

        content.beginPath();
        content.arc(63, 90, 33.5, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.2)';
        content.fill();

        content.beginPath();
        content.arc(145, 59, 59, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.2)';
        content.fill();

        content.beginPath();
        content.arc(156, 62, 62, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.1)';
        content.fill();

        content.beginPath();
        content.arc(240, 5, 4.5, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.2)';
        content.fill();

        content.beginPath();
        content.arc(243, 75, 19, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.2)';
        content.fill();

        content.beginPath();
        content.arc(293, 113, 7.2, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(246, 106, 106, 0.2)';
        content.fill();
    }

    buildYieldBg();

    $('#open_btn').on('click', function(e) {
        e.preventDefault();
        bindButtonClick();
    })

    function bindButtonClick() {

        getUserSuc(function(token) {
            $('#open_btn').html(token);
        });
    }

    window.getUserSuc = function(callback) {
        callback('123@h5.com');
    }


    $('#check_ticket').on('click', function(e) {
        e.preventDefault();
        bindCheckTicket();
    })

    function bindCheckTicket() {
        getTicket(function(number) {
            $('#check_ticket').html(number);
        })
    }
    window.getTicket = function(callback) {
        callback("hongbaonumber@h5.com")
    }

    $('#product_detail').on('click', function(e) {
        e.preventDefault();
        bindproductDetail();
    })

    function bindproductDetail() {
        getDetail(function(detail) {
            $('#product_detail').html(detail);
        })
    }
    window.getDetail = function(callback) {
        callback("detail@h5.com")
    }


    /*app端*/
    JSBK.connectWebViewJavascriptBridge(function(bridge) {

        bridge.init(function(message, responseCallback) {
            /*alert('JS got a message', message)
            var data = { 'Javascript Responds':'Wee!' }
            alert('JS responding with', data)
            responseCallback(data)*/
        })

        window.getUserSuc = function(callback) {
            bridge.callHandler('com.hongzhe.bank94.getToken', null, function(response) {
                callback(response);
            })
        };

        window.getTicket = function(callback) {
            bridge.callHandler('com.hongzhe.bank94.requestCheckTickets', null, function(response) {
                callback(response);
            })
        };

        window.getDetail = function(callback) {
            bridge.callHandler('com.hongzhe.bank94.requestProductDetail', {
                'proType': '3'
            }, function(response) {
                callback(response);
            })
        };

    })

    $('input').on('keyup', function(v) {

        if ($(this).val().length === 1) {
            $(this).next().focus();
        }
    })
    
});
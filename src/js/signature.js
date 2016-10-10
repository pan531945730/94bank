;
$(function() {
    require('../common/layout.css');
    require('../css/signature.css');

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
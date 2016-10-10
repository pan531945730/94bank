;
$(function() {
    require('../../common/layout.css');
    require('../../common/layout.js');
    require('../../css/account/login.css');
    require('../../css/account/member-default.css');
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
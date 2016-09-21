$(function() {
    require('../common/layout.css');
    require('../common/layout.js');
    require('../css/regist.css');

    var regTel = $('#reg_tel'),
        regCode = $('#reg_code'),
        getCode = $('.reg-getcode'),
        regPwd = $('#reg_pwd'),
        regEyes = $('.reg-eyes'),
        regInviter = $('#reg_inviter'),
        regBtn = $('.reg-btn'),
        telVal;

    /*点击更改密码显示状态*/
    regEyes.on('click', function() {
        $(this).toggleClass('open-eyes');
        if (regPwd.attr('type') == 'password') {
            regPwd.prop('type', 'text');
        } else {
            regPwd.prop('type', 'password');
        }
    })

    /*手机号码验证*/
    function checkTel() {
        telVal = regTel.val();
        //是否为空
        if (telVal == null || telVal == '') {
            alert('请输入手机号');
            return false;
        }
        //格式验证
        if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(telVal)) {
            alert('请输入正确的手机号');
            return false;
        }

        return true;
    }

    /*点击获取验证码*/
    getCode.on('click', function() {

        if (checkTel()) {
            $.ajax({
                type: "post",
                dataType: "json",
                url: "/account/sendCode",
                data: {
                    phone: regTel.val()
                },
                //请求成功时执行
                success: function(data) {
                    if (data.code !== 1) {
                        alert(data.content);
                        return false;
                    }
                    var time = 120;
                    var interId = setInterval(function() {
                        time--;
                        getCode.html(time + "秒后重新发送");
                        if (time === 0) {
                            clearInterval(interId);
                            getCode.html("获取验证码");
                        }
                    }, 1000);

                    return false;
                }
            });
        }
    })

    /*点击注册按钮*/
    regBtn.on('click', function() {
        var codeVal = regCode.val(),
            pwdVal = regPwd.val(),
            inviterVal = regInviter.val();

        var isTel = checkTel();

        if ($.trim(codeVal) == '' || codeVal == null) {
            alert('请先输入验证码');
            return false;
        }
        if ($.trim(pwdVal) == '' || pwdVal == null) {
            alert('请先输入密码');
            return false;
        } else if (pwdVal.length < 6 || pwdVal.length > 16) {
            alert('密码长度为：6-16位');
            return false;
        }

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/h5/regist',
            async: false,
            data: {
                'phone': telVal,
                'code': codeVal,
                'password': pwdVal,
                'inviterPhone': inviterVal
            },
            //请求成功时执行
            success: function(data) {
                if (data.isSuccess === 1) {
                    location.href = "/h5/login";
                } else {
                    alert(data.Result);
                    return false;
                }
            },
            //请求失败遇到异常触发
            error: function() {
                alert("网络堵塞,请稍后重试!");
            }
        });
    })


})
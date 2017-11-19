$(document).ready(function () {
    $('#my-form')
        .bootstrapValidator({
            message: 'This value is not valid',
            //live: 'submitted',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    // message: '',
                    validators: {
                        notEmpty:{
                            message:'用户名不能为空',
                        },
                        stringLength: {
                            min: 2,
                            max: 16,
                            message: '用户名长度为2-16个字符'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: '用户名只能包含大写、小写、数字和下划线'
                        },
                        threshold :  6 , //有6字符以上才发送ajax请求，（input中输入一个字符，插件会向服务器发送一次，设置限制，6字符以上才开始）
                        remote:{
                            url:'../php/testuser.php',
                            message:'用户已存在',//提示信息
                            //delay: 2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                            type:'POST'
                            //自定义提交数据，默认值提交当前input value，我们只校验用户名，所以不需要这个
//                                data:function(validator){
//                                    return {
//
//                                    };
//                                }
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '密码不能为空',
                        },
                        identical:{
                            field:'repassword',
                            message:'密码与确认密码不一致'
                        },
                        stringLength: {
                            min: 6,
                            max: 16,
                            message: '密码长度为6-16个字符'
                        },
                        regexp:{
                            regexp: /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])/,
                            message:'必须同时包含字母、数字、特殊字符',
                        }
                    }
                },
                repassword: {
                    validators: {
                        notEmpty: {
                            message: '请输入确认密码',
                        },
                        identical:{
                            field:'password',
                            message:'与上面密码不一致'
                        },
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: '请输入您的邮箱地址'
                        },
                        regexp: {
                            regexp:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                            message: '邮箱地址格式不正确'
                        }
                    }
                },
                QQ:{
                    validators:{
                        notEmpty:{
                            message:'请输入您的QQ号'
                        },
                        regexp:{
                            regexp:/[1-9][0-9]{4,10}/,//第一位1-9之间的数字，第二位0-9之间的数字，数字范围4-14个之间
                            message:'QQ号码格式不正确'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function (e) {
            // Prevent submit form
            e.preventDefault();

//                var $form = $(e.target),
//                    validator = $form.data('bootstrapValidator');
//                $form.find('.alert').html('Thanks for signing up. Now you can sign in as ' + validator.getFieldElements('username').val()).show();
            var myData={};
            myData={
                username:$("#username").val(),
                password:$("#password").val(),
                email:$("#email").val(),
                qq:$("#QQ").val()
            };
            $.ajax({
                url:'../php/reg.php',
                type:'POST',
                data:myData,
                success:function (data) {
                    var data=JSON.parse(data);
                    if(data.code==1){
                        $(".modal-body").text("注册成功，正在跳转。。。");
                        $("#myModal").modal("show");
                        setTimeout(function () {
                            $("#myModal").modal("hide");
                            location.href="../index.html";
                        },2000)
                    }else{
                        $(".modal-body").text("注册失败，请稍后重试!");
                        $("#myModal").modal("show");
                        setTimeout(function () {
                            $("#myModal").modal("hide");
                            location.reload();
                        },2000)
                    }
                }
            })
        });
});
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
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '密码不能为空',
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function (e) {
            // Prevent submit form
            e.preventDefault();
            var myData={};
            myData={
                username:$("#username").val(),
                password:$("#password").val()
            };
            $.ajax({
                url:'../php/login.php',
                type:'POST',
                dataType:"json",
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
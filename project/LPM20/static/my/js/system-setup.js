$(function(){
    $("#datemin").click(function(){
        WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss'})
    })
    myAjax("http://192.168.43.1:8080/readSystemSetting", {}, function (res) {
        switch (res.voice) {
            case "close":
                $("#close").attr("checked","checked");
                break;
            case "open":
                $("#open").attr("checked","checked");
                break;
            default:
                break;
        }
        $("#datemin").val(res.time);
    })

    //获取当前的数据状态 

    // 修改数据
    $("#form-member-add").validate({
        rules: {
            datemin:{
                required:true
            }
        },
        messages: {
            datemin: {
                required: "请输入系统时间"
            }
        },
        submitHandler: function (form) {
            myAjax("http://192.168.43.1:8080/systemSetting", {
                voice: $(".voice:checked").attr("value"),
                time: $("#datemin").val()
            }, function (res) {
                alert(res);
            })

        }
    })
})
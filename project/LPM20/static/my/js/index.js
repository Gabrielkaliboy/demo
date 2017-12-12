$("#my-menu dd").on("click", "li", function (e) {
    e.preventDefault();
    var sId = $(this).data("id");  //获取data-id的值
    window.location.hash = sId;  //设置锚点
    loadInner(sId);
});


function loadInner(sId) {
    var sId = window.location.hash;
    var pathn, i, mypath;
    switch (sId) {
        case "#power": pathn = "power.html"; i = 0; break;
        case "#power-density": pathn = "power-density.html"; i = 1; break;
        case "#energy": pathn = "energy.html"; i = 2; break;
        case "#energy-density": pathn = "energy-density.html"; i = 3; break;
        case "#peak-power": pathn = "peak-power.html"; i = 4; break;
        case "#peak-power-density": pathn = "peak-power-density.html"; i = 5; break;
        case "#file-list": pathn = "file-list.html"; i = 6; break;
        case "#system-setup": pathn = "system-setup.html"; i = 7; break;
        case "#measure-setting": pathn = "measure-setting.html"; i = 8; break;
        default: pathn = "power.html"; i = 0; break;
    }

    mypath = "html/" + pathn;
    $(".Hui-article-box").load(mypath); //加载相对应的内容
    // $(".userMenu li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
}
var sId = window.location.hash;
loadInner(sId);

function myAjax(url,data,successFunc){
    $.ajax({
        url: url,
        type: "GET",
        // crossDomain: true,
        dataType: "jsonp", // 返回的数据类型，设置为JSONP方式
        jsonp: 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
        jsonpCallback: 'handleResponse', //设置回调函数名
        data: data,
        beforeSend:function(){
            console.log();
        },
        success: successFunc,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}

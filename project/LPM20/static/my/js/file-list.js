//参考校准报告页面
var myData={
    sEcho = 0,
    iTotalRecords = 1,
    iTotalDisplayRecords = 1,
    aaData =[
        {
            "id": 1,
            "name": "设备台账",
            "time": "2017.10.31",
        }, {
            "id": 2,
            "name": "设备台账",
            "time": "2017.10.31",
        }, {
            "id": 3,
            "name": "设备台账",
            "time": "2017.10.31",
        }, {
            "id": 4,
            "name": "设备台账",
            "time": "2017.10.31",
        }, {
            "id": 5,
            "name": "设备台账",
            "time": "2017.10.31",
        },
    ]
}
Mock.mock('http://g.cn', myData);

var oTable = null;
function queryFilesList() {
    var config = {
        "bLengthChange": false, //是否允许自定义每页显示条数.
        'bPaginate': true,  //是否分页。
        "bProcessing": false, //当datatable获取数据时候是否显示正在处理提示信息。
        "bFilter": false,//是否使用内置的过滤功能
        "bSort": false,//支持排序功能
        "sScrollX": "100%", //横向滚动条
        "iDisplayLength": 10,//每页显示10条记录
        "bServerSide": true,//服务端处理分页
        "sAjaxSource": "http://g.cn",
        "fnServerData": myData,
        "bAutoWidth": true,
        "dom": 'Zlfrtip',
        "colResize": {
            "tableWidthFixed": false,
        },
        "aoColumns": [
            { "mData": "id", "sClass": "text-c" },
            { "mData": "name", "sClass": "text-c" },
            { "mData": "time", "sClass": "text-c" },
            { "mData": "id", "sClass": "text-c" }
        ],
        "columnDefs": [
            {
                "targets": [0], // 目标列位置，下标从0开始
                "data": "id", // 数据列名
                "render": function (data, type, full) { // 返回自定义内容
                    "";
                }
            }, {
                "targets": [3], // 目标列位置，下标从0开始
                "data": "id", // 数据列名
                "render": function (data, type, full) { // 返回自定义内容                          
                    return data;
                }
            }],
        "fnDrawCallback": function () {
            var api = this.api();
            if (typeof api.context[0]._iDisplayStart != undefined) {
                var startIndex = api.context[0]._iDisplayStart;//获取本页开始的条数
                api.column(0).nodes().each(function (cell, i) {
                    cell.innerHTML = startIndex + i + 1;
                });
            };
        }
    };
    // var isIE = JudgmentIEVersion();
    // if (isIE) {
    //     delete config.sScrollX;
    // }
    oTable = $('#file-list').dataTable(config);
};
function retrieveData(url, aoData, fnCallback) {
    return $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: {
            sEcho: aoData.sEcho,
            pageIndex: aoData[3].value / aoData[4].value + 1,
            pageSize: aoData[4].value
        },
        success: function (result) {
            fnCallback(result);
        }
    });
};

// 文件下载
function downloadreport(filenewname, filefontname) {
    layer.confirm("是否下载文件?", function (index) {
        document.location.href = "../devicereport/filedownload?fileName=" + filenewname + "&filefontname=" + filefontname + "&callrepair=DeviceReport";
        layer.close(index);
    });
};
// 删除
function delreport(id) {
    layer.confirm("是否删除该文件?", function (index) {
        $.ajax({
            type: "POST",
            url: "../devicereport/delreport?reportid=" + id,
            async: false,
            success: function (data) {
                if (data.error != '') {
                    layer.msg(data.error);
                }
                else {
                    oTable.fnPageChange('previous', true);
                    layer.msg('删除成功');
                }
            }
        });

        layer.close(index);
    });
}

$(function () {
    queryFilesList();
})

$(function () {

    // 模块添加
    function loadMenu() {
        myAjax("http://192.168.43.1:8080/powerRequest?command=power", {}, function (mes) {
            // 筛选状态为1的
            var one = mes.filter(function (value, index, arr) {
                return value.status == 1;
            })

            // 筛选状态为0的
            var zero = mes.filter(function (value, index, arr) {
                return value.status == 0;
            })

            var oneStr = "";
            var zeroStr = "";
            one.forEach(function (value, index, arr) {
                oneStr += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-2"><div class="my-detial" name="' + value.name + '"><div class="my-close"><i class="Hui-iconfont">&#xe6a6;</i></div><div class="my-detial-title">'
                    + value.showName + '</div><div class="my-detial-data">'
                    + value.value + '</div> </div> </div>';
            })

            if (zero.length == 0) {
                $(".my-menu-detial").css("display", "block");
                $("#my-icon-add").css("display", "none");
                zeroStr += '<h3>没有更多项目</h3>';
            } else {
                zeroStr += ' <select id="my-menu-power">';
                zero.forEach(function (value, index, arr) {
                    zeroStr += '<option value="' + value.name + '">' + value.showName + '</option>';
                })
                zeroStr += '</select ><div class="my-select-btn clearfix"><div class="my-select-sure"> 确定</div><div class="my-select-cancel">取消</div></div >';
            }
            $("#my-menu-active").html(oneStr);
            $(".my-menu-select").html(zeroStr);
            afterData();

        });
    }
    loadMenu();


    // 功能加载
    function afterData() {
        $("#my-icon-add").click(function () {
            $(this).css("display", "none");
            $(".my-menu-detial").css("display", "block");
        })
        // 删除按钮
        $(".my-detial").hover(function () {
            if ($(".my-detial").length > 2) {
                $(this).children(".my-close").css("display", "block");
            }
        }, function () {
            $(this).children(".my-close").css("display", "none");
        })

        // 删除图标
        $(".my-close").click(function () {
            var name = $(this).parent().attr("name");
            console.log(name);
            myAjax("http://192.168.43.1:8080/powerSetting?command=power", {
                name: name,
                status: 0
            }, function (mes) {
                loadMenu();
            });
        })
        // 添加里面的确定和取消按钮
        $(".my-select-cancel").click(function () {
            $(".my-menu-detial").css("display", "none");
            $("#my-icon-add").css("display", "block");
        })
        $(".my-select-sure").click(function () {
            $(".my-menu-detial").css("display", "none");
            $("#my-icon-add").css("display", "block");
            myAjax("http://192.168.43.1:8080/powerSetting?command=power", {
                name: $("#my-menu-power option:selected").val(),
                status: 1
            }, function (mes) {
                loadMenu();
            });
        })
    }

    // 图表tab交互按钮控制
    $("#my-charts-btn").on("click", "a", function () {
        $(this).addClass("btn-success").siblings().removeClass("btn-success").addClass("btn-primary");
        var target = this.target;
        $("." + target + "-charts-conatin").css("display", "block").siblings().css("display", "none");
    })

    // 测试按钮加载数据
    $("#test").click(function () {
        myUpdate();
    })

    // 连续测试
    var continuity;
    $("#continuity").click(function () {
        continuity = setInterval(myUpdate, 1000);
        $(this).addClass("my-disabled");
    })
    // 暂停
    $("#pause").click(function () {
        clearInterval(continuity);
        $("#continuity").removeClass("my-disabled");
    })

    //按钮控制加载哪个图形的数据
    function myUpdate() {
        var target = $("#my-charts-btn .btn-success").prop("target");
        console.log(target);
        switch (target) {
            case "wave":
                waveFunc();
                break;
            case "point":
                pointFunc();
            case "average":
                averageFunc();
            default:
                break;
        }
    }



    //point仪表盘数据刷新
    function pointFunc() {
        point.series[0].data[0].update(5);
    }

    //平均功率数据刷新
    function averageFunc() {
        var data = makeData(0, 36.4, 50);
        average.series[0].setData(data);
        average.series[1].setData(data);
        average.series[2].setData(data);
    }


    // 实时波形图量程
    var powerWaveRange;
    // 波形图定时器
    var waveInter;
    myAjax("http://192.168.43.1:8080/readTestSetting", {}, function (res) {
        powerWaveRange = res.time;
    });

    // 开始结束测试
    function waveSwitch(name) {
        //startTest
        myAjax("http://192.168.43.1:8080/test", {
            command: name
        }, function (res) {

        });
    }
    // 数据展示模块加载
    function waveData(start, end, size, func) {
        myAjax("http://192.168.43.1:8080/readWaveData", {
            startTime: start,
            endTime: end,
            size: size,
        }, function (mes) {
            console.log(mes);
            wave.series[0].setData(data);
        });
    }

    // 实时波形图的数据刷新
    function waveFunc() {
        waveSwitch(startTest);
        waveData(0, powerWaveRange, 1000);
    }




    // 造数据
    function makeData(x, y, i) {
        //x,y起始值，xRange为x的取值范围；y值不断增长,i生成个数
        var arr1 = [];
        for (var j = 0; j <= i; j++) {
            var arr2 = [];
            x = x + Math.random() * (Math.random() > 0.5 ? 1 : -1);
            x = x > 0 ? x : x + 1;
            x = x < 30 ? x : x - 1;
            y = y + Math.random();
            arr2 = [parseFloat(y.toFixed(4)), parseFloat(x.toFixed(4))];
            arr1.push(arr2);
        }
        return arr1;
    }

    var data = makeData(0, 370.4, 100);



    // 实时波形
    var wave = Highcharts.chart('wave-charts', {
        chart: {
            type: 'line'
        },
        title: {
            text: '实时波形'
        },
        subtitle: {
            text: '机器实时测量'
        },
        // 版权
        credits: {
            enabled: true,
            text: "17对标平台",//要显示的版权文字
            href: "http://www.17duibiao.com",//点击文字以后的链接地址
            position: {//位置控制
                align: "right",
                verticalAlign: "bottom",
                x: -10,
                y: -10
            },
            style: {
                "cursor": "pointer",
                "fontSize": "10px"
            }
        },
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                '<td style="text-align: right"><b>{point.y} mW</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 2
        },
        xAxis: [{
            crosshair: {//配置跟随鼠标或鼠标滑过点时的十字准星线
                color: "#4A4C4E",
            },
            gridLineDashStyle: "ShortDot",//网格线样式
            gridLineWidth: "2",//网格线宽度
            lineColor: "#e6e6e6",//轴线颜色
            lineWidth: 2,//轴线宽度
            minorGridLineWidth: 0,//因为要显示次刻度线，如果不把网格的线宽设为0,网格就显示出来了
            minorTickInterval: 'auto',//为了显示次刻度线，不加不显示
            minorTickLength: 5,//次刻度线长度
            minorTickPosition: "inside",//次刻度线相对于坐标轴轴线的位置。可用的值有 inside 及 outside。 默认是：outside.
            minorTickWidth: 1,//坐标轴次刻度线的线条宽度。（次刻度线是相对于主刻度线 tick 的） 默认是：0.
            minorTickColor: "#f00",//坐标轴次刻度线颜色。 默认是：#999999.
            // tickAmount: 10,//规定坐标轴上的刻度总数，另外该配置会覆盖 tickPixelInterval 参数。
            tickColor: "#000",//坐标轴刻度线的颜色。
            tickLength: "10",//坐标轴刻度线的长度。 默认是：10.
            tickPosition: "inside",//刻度线相对于轴线的位置，可用的值有 inside 和 outside，分别表示在轴线的内部和外部。 默认是：outside.
            tickWidth: 2,//坐标轴刻度线的宽度，设置为 0 时则不显示刻度线
            showFirstLabel: true,//是否显示坐标轴的第一个标签 默认是：true.
            showLastLabel: true,//是否显示坐标轴的最后一个标签。 默认是：true.

        }],
        yAxis: [{
            crosshair: {//配置跟随鼠标或鼠标滑过点时的十字准星线
                color: "#4A4C4E",
            },
            gridLineDashStyle: "ShortDot",//网格线样式
            gridLineWidth: "2",//网格线宽度
            lineColor: "#e6e6e6",//轴线颜色
            lineWidth: 2,//轴线宽度
            minorGridLineWidth: 0,//因为要显示次刻度线，如果不把网格的线宽设为0,网格就显示出来了
            minorTickInterval: 'auto',//为了显示次刻度线，不加不显示
            minorTickLength: 5,//次刻度线长度
            minorTickPosition: "inside",//次刻度线相对于坐标轴轴线的位置。可用的值有 inside 及 outside。 默认是：outside.
            minorTickWidth: 1,//坐标轴次刻度线的线条宽度。（次刻度线是相对于主刻度线 tick 的） 默认是：0.
            minorTickColor: "#f00",//坐标轴次刻度线颜色。 默认是：#999999.
            tickAmount: 10,//规定坐标轴上的刻度总数，另外该配置会覆盖 tickPixelInterval 参数。
            tickColor: "#000",//坐标轴刻度线的颜色。
            tickLength: "10",//坐标轴刻度线的长度。 默认是：10.
            tickPosition: "inside",//刻度线相对于轴线的位置，可用的值有 inside 和 outside，分别表示在轴线的内部和外部。 默认是：outside.
            tickWidth: 2,//坐标轴刻度线的宽度，设置为 0 时则不显示刻度线
            showFirstLabel: true,//是否显示坐标轴的第一个标签 默认是：true.
            showLastLabel: true,//是否显示坐标轴的最后一个标签。 默认是：true.
            title: {
                text: '功率 (mW)'
            },
        }],
        plotOptions: {
            line: {//只针对line类型
                allowPointSelect: false,//是否允许在点击数据点标记（markers）、柱子（柱形图）、扇区（饼图）时选中该点，选中的点可以通过 Chart.getSelectedPoints 来获取。 默认是：false.
                animation: true,//是否开启数据列初始化显示动画，默认是 true， 可以设置为 false 来关闭动画，该配置还可以设置成对象的形式。
                cursor: "pointer",//指定鼠标滑过数据列时鼠标的形状。当绑定了数据列点击事件时，可以将此参数设置为 "pointer"，用来提醒用户改数据列是可以点击的。
                dataLabels: {//数据标签是指显示在数据点旁边的标签，一般用于显示数据点值或其他少量信息。
                    borderColor: "#f00",
                    enabled: false,
                },
                enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            }
        },
        series: [{
            color: "#16A0F0",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '测量值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: data,
        }, {
            color: "#f00",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '最大值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4, 4], [400, 4]],
        }, {
            color: "#156113",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '最小值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4, 1], [400, 1]],
        }, {
            color: "#ff0",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '平均值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4, 3], [400, 3]],
        }]
    });

    //仪表盘
    //这样写才能拿到他所有的对象，方法，属性
    var point = Highcharts.chart("point-charts", {
        // 图表配置
        chart: {
            type: 'gauge',
            plotBackgroundColor: "#fff",//绘图区背景色
            plotBackgroundImage: null,//绘图区背景图
            plotBorderWidth: 1,//绘图区边框宽度
            plotBorderColor: "#fff",//绘图区边框颜色
            plotShadow: false//绘图区阴影
        },
        // 版权
        credits: {
            enabled: true,
            text: "17对标平台",//要显示的版权文字
            href: "http://www.17duibiao.com",//点击文字以后的链接地址
            position: {//位置控制
                align: "right",
                verticalAlign: "bottom",
                x: -10,
                y: -10
            },
            style: {
                "cursor": "pointer",
                "fontSize": "10px"
            }
        },
        title: {
            text: '激光功率计指针形式'
        },
        // 图例相关
        legend: { //图例说明是包含图表中数列标志和名称的容器
            align: "left",//设定图例在图表区中的水平对齐方式，合法值有left，center 和 right
            verticalAlign: "bottom",//设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom
            layout: "vertical",
            floating: true,
            x: 1,
            y: 1,
            backgroundColor: "#fff", //图例背景色
            title: { //图例上方的标题
                text: "图例", //图例的标题
                style: { //样式
                    "color": "#000"
                }
            },
            borderColor: "#000", //图例的边框颜色
            enabled: true,
            borderWidth: 1, //边框宽度
            borderRadius: 5, //边框圆角
            itemStyle: { //图例项样式
                "color": "#f00",
                "cursor": "pointer",
                "fontSize": "12px",
                "fontWeight": "bold"
            },
            labelFormatter: function () {
                this.legendColor = "#000";
                // console.log(this.index);
                return "<span style='color:#000'>" + this.name + "</span>"
            }
        },

        // 设置绘图区域
        pane: {
            startAngle: -90,//极地图 x 轴或仪表图值轴的结束角度，为角度值，即 0 表示图形的正北方向。默认值为 0。
            endAngle: 90,//极地图 x 轴或仪表图 y 轴（值轴）的结束角度，为角度值，即 0 表示图形的正北方向。默认值是在开始角度（ startAngle）的基础上 + 360度。
            size: "90%",//面板的大小，可以是数值（表示像素值）或百分比字符串（表示相对绘图区的大小）。 默认是：85%.
            background: [{
                backgroundColor: "#fff",//面板的背景颜色，可以是 渐变颜色。
                borderColor: "#fff",//面板的边框颜色 默认是：#cccccc.
                borderWidth: 1,//面板背景边框宽度 默认是：1.
                innerRadius: 0,//面板背景的内半径，可以是数值（像素） 或百分比字符串。 默认是：0.
                outerRadius: "105%",//面板背景外半径，可以是数值（像素）或百分比字符串。 默认是：105%.
                shape: "arc"//面板背景的形状，当值为 solid 时，面板为圆形；当值为 arc 时，面板现实的范围是从坐标轴的最小值到最大值。 默认是：solid
            }]
        },

        // 数据列配置是针对所有数据列及某种数据列有效的通用配置。
        plotOptions: {
            showInLegend: true,
        },

        // y轴
        yAxis: {
            min: 0,
            max: 30,
            minorTickInterval: 'auto',//辅助线多长一条（步进值）
            minorTickWidth: 1,//次刻度线宽度
            minorTickLength: 10,//次刻度线长度
            minorTickPosition: 'inside',//次刻度线位置
            minorTickColor: '#666',//次刻度线颜色
            tickPixelInterval: 30,//像素间隔
            tickWidth: 2,//刻度线宽度
            tickPosition: 'inside',//刻度位置
            tickLength: 15,//刻度线的长度
            tickColor: '#000',//刻度线颜色
            labels: {//轴标签
                step: 2,//步进
                rotation: 'auto'//旋转角度
            },
            title: {//标题
                text: 'mW'
            },
            plotBands: [{//标识区
                from: 0,//开始值
                to: 10,//结束值
                color: '#55BF3B'//样式
            }, {
                from: 10,
                to: 20,
                color: '#DDDF0D'
            }, {
                from: 20,
                to: 30,
                color: '#DF5353'
            }]
        },

        // 数据列
        series: [{//数据列
            name: '当前值',//图例中的名称
            data: [{
                color: "#f00",//鼠标划上以后显示的提示的外边框颜色
                colorIndex: 1,
                dataLabels: {
                    align: "right",
                    verticalAlign: 'top',
                    backgroundColor: "#f6f6f6",
                    borderColor: "#05f",
                    borderWidth: 1,
                    borderRadius: 1,
                    color: "#000",
                    enabled: true,
                    shape: "callout",
                    inside: false,
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 200,
                    y: 90,
                    overflow: true,
                    crop: false,
                    format: '{y} mW'
                },
                y: 1//数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#05f",//图例中的颜色
            dial: {
                backgroundColor: "#05f",//指针颜色
                baseLength: "90%",//从那个位置开始出现箭头
                baseWidth: 10,//指针粗度
                borderColor: "#000",//指针边框颜色
                borderWidth: "1",//指针边框粗度
                radius: "80%",//指针正方向长度
                rearLength: "50%",//指针反方向长度
                topWidth: 1//指针顶部箭头宽度
            },
            zIndex: -8,//用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 1//在图例中的位置

        }, { //数据列
            name: '最大值', //图例中的名称
            data: [{
                color: "#f00", //鼠标划上以后显示的提示的外边框颜色
                colorIndex: 2,
                dataLabels: {
                    align: "right",
                    verticalAlign: 'top',
                    backgroundColor: "#f6f6f6",
                    borderColor: "#f00",
                    borderWidth: 1,
                    borderRadius: 1,
                    color: "#000",
                    enabled: true,
                    shape: "callout",
                    inside: false,
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 125,
                    y: 150,
                    overflow: true,
                    crop: false,
                    format: '{y} mW'
                },
                y: 8 //数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#f00", //图例中的颜色
            dial: {
                backgroundColor: "#f00", //指针颜色
                baseLength: "90%", //从那个位置开始出现箭头
                baseWidth: 10, //指针粗度
                borderColor: "#000", //指针边框颜色
                borderWidth: "1", //指针边框粗度
                radius: "80%", //指针正方向长度
                rearLength: "50%", //指针反方向长度
                topWidth: 1 //指针顶部箭头宽度
            },
            zIndex: -7, //用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 2

        }, { //数据列
            name: '最小值', //图例中的名称
            data: [{
                color: "#f00", //鼠标划上以后显示的提示的外边框颜色
                colorIndex: 3,
                dataLabels: {
                    align: "right",
                    verticalAlign: 'top',
                    backgroundColor: "#f6f6f6",
                    borderColor: "#24FF00",
                    borderWidth: 1,
                    borderRadius: 1,
                    color: "#000",
                    enabled: true,
                    shape: "callout",
                    inside: false,
                    style: {
                        fontWeight: 'bold'
                    },
                    x: -10,
                    y: 150,
                    overflow: true,
                    crop: false,
                    format: '{y} mW'
                },
                y: 15 //数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#24FF00", //图例中的颜色
            dial: {
                backgroundColor: "#24FF00", //指针颜色
                baseLength: "90%", //从那个位置开始出现箭头
                baseWidth: 10, //指针粗度
                borderColor: "#000", //指针边框颜色
                borderWidth: "1", //指针边框粗度
                radius: "80%", //指针正方向长度
                rearLength: "50%", //指针反方向长度
                topWidth: 1 //指针顶部箭头宽度
            },
            zIndex: -6, //用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 3

        }, { //数据列
            name: '平均值', //图例中的名称
            data: [{
                color: "#f00", //鼠标划上以后显示的提示的外边框颜色
                colorIndex: 4,
                dataLabels: {
                    align: "right",
                    verticalAlign: 'top',
                    backgroundColor: "#f6f6f6",
                    borderColor: "#ff0",
                    borderWidth: 1,
                    borderRadius: 1,
                    color: "#000",
                    enabled: true,
                    shape: "callout",
                    inside: false,
                    style: {
                        fontWeight: 'bold'
                    },
                    x: -100,
                    y: 90,
                    overflow: true,
                    crop: false,
                    format: '{y} mW'
                },
                y: 25 //数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#ff0", //图例中的颜色
            dial: {
                backgroundColor: "#ff0", //指针颜色
                baseLength: "90%", //从那个位置开始出现箭头
                baseWidth: 10, //指针粗度
                borderColor: "#000", //指针边框颜色
                borderWidth: "1", //指针边框粗度
                radius: "80%", //指针正方向长度
                rearLength: "50%", //指针反方向长度
                topWidth: 1 //指针顶部箭头宽度
            },
            zIndex: -5, //用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 4

        }]
    });


    // 平均功率统计
    var data1 = makeData(0, 36.4, 50);
    var average = Highcharts.chart("average-charts", {
        chart: {
            type: 'column'
        },
        title: {
            text: '平均功率统计显示'
        },
        // 版权
        credits: {
            enabled: true,
            text: "17对标平台",//要显示的版权文字
            href: "http://www.17duibiao.com",//点击文字以后的链接地址
            position: {//位置控制
                align: "right",
                verticalAlign: "bottom",
                x: -10,
                y: -5
            },
            style: {
                "cursor": "pointer",
                "fontSize": "10px"
            }
        },
        xAxis: [{
            crosshair: {//配置跟随鼠标或鼠标滑过点时的十字准星线
                color: "#4A4C4E",
            },
            gridLineDashStyle: "ShortDot",//网格线样式
            gridLineWidth: "2",//网格线宽度
            lineColor: "#e6e6e6",//轴线颜色
            lineWidth: 2,//轴线宽度
            minorGridLineWidth: 0,//因为要显示次刻度线，如果不把网格的线宽设为0,网格就显示出来了
            minorTickInterval: 'auto',//为了显示次刻度线，不加不显示
            minorTickLength: 5,//次刻度线长度
            minorTickPosition: "inside",//次刻度线相对于坐标轴轴线的位置。可用的值有 inside 及 outside。 默认是：outside.
            minorTickWidth: 1,//坐标轴次刻度线的线条宽度。（次刻度线是相对于主刻度线 tick 的） 默认是：0.
            minorTickColor: "#f00",//坐标轴次刻度线颜色。 默认是：#999999.
            // tickAmount: 10,//规定坐标轴上的刻度总数，另外该配置会覆盖 tickPixelInterval 参数。
            tickColor: "#000",//坐标轴刻度线的颜色。
            tickLength: 5,//坐标轴刻度线的长度。 默认是：10.
            tickPosition: "outside",//刻度线相对于轴线的位置，可用的值有 inside 和 outside，分别表示在轴线的内部和外部。 默认是：outside.
            tickWidth: 2,//坐标轴刻度线的宽度，设置为 0 时则不显示刻度线
            showFirstLabel: true,//是否显示坐标轴的第一个标签 默认是：true.
            showLastLabel: true,//是否显示坐标轴的最后一个标签。 默认是：true.

        }],
        yAxis: [{
            crosshair: {//配置跟随鼠标或鼠标滑过点时的十字准星线
                color: "#4A4C4E",
            },
            min: 0,//最小值
            gridLineDashStyle: "ShortDot",//网格线样式
            gridLineWidth: "2",//网格线宽度
            lineColor: "#e6e6e6",//轴线颜色
            lineWidth: 2,//轴线宽度
            minorGridLineWidth: 0,//因为要显示次刻度线，如果不把网格的线宽设为0,网格就显示出来了
            minorTickInterval: 'auto',//为了显示次刻度线，不加不显示
            minorTickLength: 5,//次刻度线长度
            minorTickPosition: "inside",//次刻度线相对于坐标轴轴线的位置。可用的值有 inside 及 outside。 默认是：outside.
            minorTickWidth: 1,//坐标轴次刻度线的线条宽度。（次刻度线是相对于主刻度线 tick 的） 默认是：0.
            minorTickColor: "#f00",//坐标轴次刻度线颜色。 默认是：#999999.
            tickAmount: 10,//规定坐标轴上的刻度总数，另外该配置会覆盖 tickPixelInterval 参数。
            tickColor: "#000",//坐标轴刻度线的颜色。
            tickLength: "10",//坐标轴刻度线的长度。 默认是：10.
            tickPosition: "inside",//刻度线相对于轴线的位置，可用的值有 inside 和 outside，分别表示在轴线的内部和外部。 默认是：outside.
            tickWidth: 2,//坐标轴刻度线的宽度，设置为 0 时则不显示刻度线
            showFirstLabel: true,//是否显示坐标轴的第一个标签 默认是：true.
            showLastLabel: true,//是否显示坐标轴的最后一个标签。 默认是：true.
            title: {
                text: '功率 (mW)'
            },
            // 柱状堆叠图的顶部显示总量
            stackLabels: {
                enabled: false,
                align: 'center',
                style: { "color": "#000", "fontSize": "11px", "fontWeight": "bold", "textShadow": "1px 1px contrast, -1px -1px contrast, -1px 1px contrast, 1px -1px contrast" }
            }
        }],
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>'
                //  +'总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {//柱状图
                stacking: 'normal',//是否开启堆叠，可用的参数值包括 null（不进行堆叠）、"normal"（普通堆叠） 和 "percent"（百分比堆叠）。
                dataLabels: {//数据标签是指显示在数据点旁边的标签，一般用于显示数据点值或其他少量信息。
                    enabled: false,//不显示数据标签
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                },
                // maxPointWidth:5,//柱状图最大的粗度是多少，null，设置了他记得看pointWidth
                minPointLength: 0,//柱状图最小的高度是多少，默认是0
                pointWidth: 10,//柱状图的粗度
                pointPadding: 0.1,//每个图之间的间隔，默认0.1
                // groupPadding: 0,//如果有一组一组的柱状图的时候，组之间的距离
                borderWidth: 1,//柱状图的边框粗度、
                borderColor: "#ff0",//柱状图边框的颜色
                shadow: false,//是否有阴影效果
            }
        },
        series: [{
            name: '最大值',
            data: data1
        }, {
            name: '最小值',
            data: data1
        }, {
            name: "平均值",
            type: "line",
            data: data1
        }]
    });


})
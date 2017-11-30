function makeData(x, y, i) {
    //x,y起始值，xRange为x的取值范围；y值不断增长,i生成个数
    var arr1 = [];
    for (var j = 0; j <= i; j++) {
        var arr2 = [];
        x=x + Math.random()*(Math.random()>0.5?1:-1);
        x=x>0?x:x+1;
        x=x<30?x:x-1;
        y = y + Math.random();
        arr2 = [parseFloat(y.toFixed(4)),parseFloat(x.toFixed(4))];
        arr1.push(arr2);
    }
    return arr1;
}

var data = makeData(0, 370.4, 50);




var chart = Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: '实时波形'
    },
    subtitle: {
        text: '机器实时测量'
    },
    tooltip:{
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
    yAxis:[{
        crosshair: {//配置跟随鼠标或鼠标滑过点时的十字准星线
            color: "#4A4C4E",
        },
        gridLineDashStyle:"ShortDot",//网格线样式
        gridLineWidth:"2",//网格线宽度
        lineColor:"#e6e6e6",//轴线颜色
        lineWidth:2,//轴线宽度
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
                borderColor:"#f00",
                enabled:false,
            },
            enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
        }
    },
    series: [{
        color: "#16A0F0",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
        name: '测量值',//图例中的名称
        //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
        data:data,
    }, {
            color: "#f00",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '最大值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4,4],[400,4]],
        }, {
            color: "#156113",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '最小值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4, 1], [400, 1]],
        }, {
            color: "#ff0",//数据列的颜色，在线图中，该颜色对线条、数据点（除非单独对某个点指定）生效。在柱形图中，每个柱子的颜色也是这个颜色值（除非对某个柱子单独设置）。数据列的默认值是取自 options.colors 数组。
            name: '平均值',//图例中的名称
            //data: [[370.4,3.110],[374.5,6.120],[378.3,12.00],[382.3,13.652],[382.9,15.684],[386.3,11.586],[390.3,18.458]]
            data: [[370.4, 3], [400,3]],
        }]
});

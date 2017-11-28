//这样写才能拿到他所有的对象，方法，属性
var x=Highcharts.chart("container",{
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
    credits:{
        enabled:true,
        text:"17对标平台",//要显示的版权文字
        href:"http://www.17duibiao.com",//点击文字以后的链接地址
        position:{//位置控制
            align:"right",
            verticalAlign:"bottom",
            x:-10,
            y:-10
        },
        style:{
            "cursor": "pointer", 
            "color": "#f00",
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
        layout:"vertical",
        floating: true,
        x: 1,
        y: 1,
        backgroundColor: "#fff", //图例背景色
        title: { //图例上方的标题
            text: "图例", //图例的标题
            style: { //样式
                "color":"#000"
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
        labelFormatter:function(){
            this.legendColor = "#000";
            console.log(this.index);
            return "<span style='color:#000'>" + this.name+"</span>"
        }
    }, 

    // 设置绘图区域
    pane: {
        startAngle: -90,//极地图 x 轴或仪表图值轴的结束角度，为角度值，即 0 表示图形的正北方向。默认值为 0。
        endAngle: 90,//极地图 x 轴或仪表图 y 轴（值轴）的结束角度，为角度值，即 0 表示图形的正北方向。默认值是在开始角度（ startAngle）的基础上 + 360度。
        size: "90%",//面板的大小，可以是数值（表示像素值）或百分比字符串（表示相对绘图区的大小）。 默认是：85%.
        background:[{
            backgroundColor: "#fff",//面板的背景颜色，可以是 渐变颜色。
            borderColor: "#fff",//面板的边框颜色 默认是：#cccccc.
            borderWidth: 1,//面板背景边框宽度 默认是：1.
            innerRadius: 0,//面板背景的内半径，可以是数值（像素） 或百分比字符串。 默认是：0.
            outerRadius: "105%",//面板背景外半径，可以是数值（像素）或百分比字符串。 默认是：105%.
            shape: "arc"//面板背景的形状，当值为 solid 时，面板为圆形；当值为 arc 时，面板现实的范围是从坐标轴的最小值到最大值。 默认是：solid
        }]
    },

    // 数据列配置是针对所有数据列及某种数据列有效的通用配置。
    plotOptions:{
        showInLegend:true,
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
            color:"#f00",//鼠标划上以后显示的提示的外边框颜色
            colorIndex:1,
            dataLabels:{
                align:"right",
                verticalAlign: 'top',
                backgroundColor:"#f6f6f6",
                borderColor:"#05f",
                borderWidth:1,
                borderRadius:1,
                color:"#000",
                enabled: true,
                shape:"callout",
                inside:false,
                style: {
                    fontWeight: 'bold'
                },
                x:200,
                y:90,
                overflow: true,
                crop: false,
                format: '{y} mW'
            },
            y:1//数据
        }],
        tooltip: {
            valueSuffix: 'mW'
        },
        color:"#05f",//图例中的颜色
        dial:{
            backgroundColor:"#05f",//指针颜色
            baseLength:"90%",//从那个位置开始出现箭头
            baseWidth:10,//指针粗度
            borderColor:"#000",//指针边框颜色
            borderWidth:"1",//指针边框粗度
            radius:"80%",//指针正方向长度
            rearLength:"50%",//指针反方向长度
            topWidth:1//指针顶部箭头宽度
        },
        zIndex:-8,//用来设置谁在上面，谁在下面
        showInLegend: true, // 是否显示图例
        legendIndex:1

    }, {//数据列
        name: '最大值',//图例中的名称
        data: [{
            color: "#f90",//鼠标划上以后显示的提示的外边框颜色
            y: 4//数据
        }],
        tooltip: {
            valueSuffix: 'mW'
        },
        color: "#ff0",
        dial: {
            backgroundColor: "#f00",//指针颜色
            baseLength: "1%",
            baseWidth: 10,//指针粗度
            borderColor: "#009",//指针边框颜色
            borderWidth: "2",//指针边框粗度
            radius: "80%",//指针正方向长度
            rearLength: "20%",//指针反方向长度
            topWidth: 1//指针顶部箭头宽度
        },
        zIndex: -8,//用来设置谁在上面，谁在下面
        showInLegend: true, // 是否显示图例
        legendIndex: 2

        }, {//数据列
            name: '最小值',//图例中的名称
            data: [{
                color: "#f90",//鼠标划上以后显示的提示的外边框颜色
                y: 24//数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#ff0",
            dial: {
                backgroundColor: "#f00",//指针颜色
                baseLength: "1%",
                baseWidth: 10,//指针粗度
                borderColor: "#009",//指针边框颜色
                borderWidth: "2",//指针边框粗度
                radius: "80%",//指针正方向长度
                rearLength: "20%",//指针反方向长度
                topWidth: 1//指针顶部箭头宽度
            },
            zIndex: -8,//用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 2

        }, {//数据列
            name: '平均值',//图例中的名称
            data: [{
                color: "#f90",//鼠标划上以后显示的提示的外边框颜色
                y: 14//数据
            }],
            tooltip: {
                valueSuffix: 'mW'
            },
            color: "#ff0",
            dial: {
                backgroundColor: "#f00",//指针颜色
                baseLength: "1%",
                baseWidth: 10,//指针粗度
                borderColor: "#009",//指针边框颜色
                borderWidth: "2",//指针边框粗度
                radius: "80%",//指针正方向长度
                rearLength: "20%",//指针反方向长度
                topWidth: 1//指针顶部箭头宽度
            },
            zIndex: -8,//用来设置谁在上面，谁在下面
            showInLegend: true, // 是否显示图例
            legendIndex: 2

        }]
},
// function (chart) {
//         if (!chart.renderer.forExport) {
//             setInterval(function () {
//                 var point = chart.series[0].points[0],
//                     newVal,
//                     inc = Math.round((Math.random() - 0.5) * 20);
//                 newVal = point.y + inc;
//                 if (newVal <
//                     0 || newVal > 200) {
//                     newVal = point.y - inc;
//                 }
//                 point.update(newVal);
//             }, 3000);
//         }
//     }
);
console.log(x);
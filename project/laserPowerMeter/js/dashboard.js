
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'gauge',
            plotBackgroundColor: "#fff",//绘图区背景色
            plotBackgroundImage: null,//绘图区背景图
            plotBorderWidth: 0,//绘图区边框宽度
            plotShadow: false//绘图区阴影
        },
        title: {
            text: '激光功率计指针形式'
        },  
        pane: {
            startAngle: -90,
            endAngle: 90,
            background:"#fff"
        },
        yAxis: {
            min: 0,
            max: 200,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B'
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D'
            }, {
                from: 160,
                to: 200,
                color: '#DF5353'
            }]
        },
        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    }, // Add some life
        function (chart) {
            if (!chart.renderer.forExport) {
                setInterval(function () {
                    var point = chart.series[0].points[0],
                        newVal,
                        inc = Math.round((Math.random() - 0.5) * 20);
                    newVal = point.y + inc;
                    if (newVal <
                        0 || newVal > 200) {
                        newVal = point.y - inc;
                    }
                    point.update(newVal);
                }, 3000);
            }
        });
});
$(function () {
    // 表单提交
    myAjax("http://192.168.43.1:8080/readTestSetting", {}, function (res) {
        console.log(res);
        $("#measureMode").val(res.measureMode);
        $("#waveLengthSelect").val(res.waveLengthSelect);
        $("#inputDiameter").val(res.inputDiameter);
        $("#range").val(res.range);
        $("#effectiveDigit").val(res.effectiveDigit);
        $("#sampleRate").val(res.sampleRate);
        $("#sampleTime").val(res.sampleTime);
        $("#correctionSetting").val(res.correctionSetting);
    })
    $("#form-measure-setting").validate({
        rules: {
            measureMode: {
                required: true
            },
            waveLengthSelect: {
                required: true,
            },
            inputDiameter: {
                required: true,
                range: [0.1, 10]
            },
            range: {
                required: true,
            },
            effectiveDigit: {
                required: true,
                range: [1, 5]
            },
            sampleRate: {
                required: true,
            },
            sampleTime: {
                required: true,
                range: [0.1, 100]
            },
            correctionSetting: {
                required: true,
            }
        },
        messages: {
            measureMode: {
                required: "请选择测量模式"
            },
            waveLengthSelect: {
                required: "请选择波长",
            },
            inputDiameter: {
                required: "请输入输入直径",
                range: "数值范围为0.1mm-10mm",
            },
            range: {
                required: "请选择量程",
            },
            effectiveDigit: {
                required: "请输入有效位数",
                range: "有效位数范围为1-5"
            },
            sampleRate: {
                required: "请选择采样频率",
            },
            sampleTime: {
                required: "请选择采样时长",
                range: "范围为0.1s-100s"
            },
            correctionSetting: {
                required: "请选择校正设置",
            }

        },
        submitHandler: function (form) {
            myAjax("http://192.168.43.1:8080/testSetting", {
                measureMode: $("#measureMode option:selected").val(),
                waveLengthSelect: $("#waveLengthSelect").val(),
                inputDiameter: $("#inputDiameter").val(),
                range: $("#range option:selected").val(),
                effectiveDigit: $("#effectiveDigit").val(),
                sampleRate: $("#sampleRate option:selected").val(),
                sampleTime: $("#sampleTime").val(),
                correctionSetting: $("#correctionSetting option:selected").val()
            }, function (res) {
                // 1成功，0失败
                console.log(res);
                alert(res);
            })

        }
    })
})
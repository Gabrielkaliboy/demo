<?php
//多维数组混合声明
header('Content-Type:application/json; charset=utf-8');
$arr=array("status"=>2,"message"=>"数据传输成功","data"=>array("tom","jarry","小红"));
$a=json_encode($arr);

//前端拿到 {status: 2, message: "数据传输成功", data: ["tom", "jarry", "小红"]} 对象
echo "$a";
?>
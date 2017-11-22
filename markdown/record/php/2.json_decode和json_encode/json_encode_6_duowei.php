<?php
//多维数组普通声明
header('Content-Type:application/json; charset=utf-8');
//$arr=array("jerry","tom","李明");
$arr=array("status"=>2,"message"=>"数据传输成功","data"=>array("name"=>"李明","age"=>23,"country"=>"China"));
$a=json_encode($arr);

//前端拿到的是 {status: 2, message: "数据传输成功", data: {name: "李明", age: 23, country: "China"}} 对象
echo "$a";
?>
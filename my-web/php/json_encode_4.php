<?php
header('Content-Type:application/json; charset=utf-8');
//$arr=array("jerry","tom","李明");
$arr=array(1=>"jarry",2=>"tom",3=>"李明");
$a=json_encode($arr);

//前端拿到的是 {1: "jarry", 2: "tom", 3: "李明"}
echo "$a";
?>
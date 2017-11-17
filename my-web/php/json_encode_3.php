<?php
header('Content-Type:application/json; charset=utf-8');
$arr=array("jerry","tom","李明");
$a=json_encode($arr);
//前端拿到的是["jerry", "tom", "李明"]对象
echo "$a";
?>
<?php
header('Content-Type:application/json; charset=utf-8');
$arr=array('a'=>1,'b'=>2,'c'=>3,'d'=>'jerry');
$a=json_encode($arr);
//有header,接口拿到的是 {a: 1, b: 2, c: 3, d: "jerry"}对象，html里面console看不出来
//在处理的时候不用再将字符串转为对象
echo "$a";
?>
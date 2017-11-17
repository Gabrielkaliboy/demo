<?php
$arr=array('a'=>1,'b'=>2,'c'=>3,'d'=>'jerry');
$a=json_encode($arr);
//没有header,接口拿到的是 '{a: 1, b: 2, c: 3, d: "jerry"}'字符串，html里面console看不出来
//但是在处理的时候必须先将字符串转为对象，比如eval，JSON.parse();
echo "$a";
?>
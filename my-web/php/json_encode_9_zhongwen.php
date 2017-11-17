<?php
//只是这么写不好使
//header("Content-type:text/html;charset=utf-8");

//必须这么写
header('Content-Type:application/json; charset=utf-8');

$arr=array(array(1,2,3),array("banana","orange","apple"),array("李明","jarry","piter"));
$a=json_encode($arr);

// 前端返回[[1, 2, 3], ["banana", "orange", "apple"], ["李明", "jarry", "piter"]] 对象
echo "$a";
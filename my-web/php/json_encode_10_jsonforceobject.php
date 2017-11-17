<?php
header("Content-type:application/json;charset=utf-8");
$arr1=array("jarry","susam","李明");
$a1=json_encode($arr1,JSON_FORCE_OBJECT);
// 后台是返回是{"0":"jarry","1":"susam","2":"\u674e\u660e"}
//但是前端可以拿到{0: "jarry", 1: "susam", 2: "李明"} 也就是可以直接读取Unicode
echo "$a1";
?>
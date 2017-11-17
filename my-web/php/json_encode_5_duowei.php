<?php
//多维数组普通声明
header('Content-Type:application/json; charset=utf-8');
//$arr=array("jerry","tom","李明");
$arr=array(array('李明','王美丽','李三','王五'),array(122,333,444,555),array('china','america','canada'));
$a=json_encode($arr);

//前端拿到的是 [["李明", "王美丽", "李三", "王五"], [122, 333, 444, 555], ["china", "america", "canada"]] 对象
echo "$a";
?>
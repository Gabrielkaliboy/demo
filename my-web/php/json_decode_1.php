<?php
header("Content-type:text/html;charset=utf-8");
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/16
 * Time: 10:31
 */
$json='{"name":"jarry","age":12,"sex":"boy"}';
$a=json_decode($json);//$a是对象
$b=json_decode($json,true);//$b是数组
var_dump($a);
var_dump($b);
echo  "$a->name"."<br>";//jarry，对象的调用方法
echo "$b[name]"//jarry,数组的调用方法
?>
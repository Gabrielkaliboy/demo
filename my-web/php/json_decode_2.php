<?php
header("Content-type:text/html;charset=utf-8");
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/16
 * Time: 10:31
 */
//数组包含许多json的字符串
$json='[{"Name":"a1","Number":"123","Contno":"000","QQNo":""},{"Name":"a1","Number":"123","Contno":"000","QQNo":""},{"Name":"a1","Number":"123","Contno":"000","QQNo":""}]';
$a=json_decode($json);//$a是数组，数组里面放的json对象
$b=json_decode($json,true);//$b是关联数组
var_dump($a);
var_dump($b);
$c=$a[0]->Name;
@$d=$b[0][Name];
echo  "$c"."<br>";//a1，对象的调用方法
echo "$d"//a1,数组的调用方法
?>
<?php
/*
eval()函数调用简单但是不安全
eval('$obj = new '.$name.'Model()');
可用下面代码代替：
$model = $name.'Model';
$obj = new $Model();
     */
//控制器调用函数
function C($name, $method){//两个参数分别表示控制器名称和要执行的函数名称
    require_once($name.'Controller.php');
    eval('$obj = new '.$name.'Controller();$obj->'.$method.'();');//eval函数用来将字符串转化为可执行的代码
}
//模型调用函数
function M($name){//参数是模型文件的名称
    require_once($name.'Model.php');
    eval('$obj = new '.$name.'Model();');
    return $obj;
}
//视图调用函数
function V($name){//参数是视图文件的名称
    require_once($name.'View.php');
    eval('$obj = new '.$name.'View();');//视图类实例化
    return $obj;
}
?>
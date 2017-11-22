<?php
//url形式   index.php?controller=控制器名&method=方法名
//http://localhost/mvc/test/index.php?controller=test&method=show
require_once('function.php');
$controller = $_GET['controller'];
$method = $_GET['method'];
//echo $controller;
C($controller, $method);//调用控制器函数
?>
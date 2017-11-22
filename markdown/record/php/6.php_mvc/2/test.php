<?php
require_once("testController.php");
require_once("testModel.php");
require_once("testView.php");
$testController = new testController();//控制器实例化
$testController->show();//调用函数
?>
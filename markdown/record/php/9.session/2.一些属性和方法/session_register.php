<?php
session_start();
$name="这是一个而例子";
//session_register这个函数已经被弃用了,所以按着下面的写法会报错
//session_register($name);
//现在都是直接赋值
$_session['name']="李明";
echo $_session['name'];
?>
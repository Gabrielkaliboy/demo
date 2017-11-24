<?php
// 设置一个存放目录,这个目录一定要存在，否则报错，可以尝试打开生成的文件看看
$savePath = "../session_save_dir/";
// 保存一天
$lifeTime = 24 * 3600;
session_save_path($savePath);
session_set_cookie_params($lifeTime);
session_start();
$_SESSION["admin"] = true;
?>
<?php
//session_start();    //启动Session
//注册一个名为username变量
$_SESSION["username"]="nostop";
echo '登记的用户：'.$_SESSION['username'].'<br>';    //登记的用户：nostop   读取Session变量
$_SESSION['age']=23;    //声明一个名为age的变量，并赋值
echo '年龄：'.$_SESSION['age'].'<br>'; //年龄：23

session_unset('username'); //注销Session变量
if(!isset($_SESSION['username'])){
    echo"没有username这个值".'<br>';
}

//unset($_SESSION['age']); //注销Session变量
//if(!isset($_SESSION['age'])){
//    echo"没有age这个值".'<br>';
//}

?>
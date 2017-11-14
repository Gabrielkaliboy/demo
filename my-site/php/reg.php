<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/14
 * Time: 15:52
 */
//如果不加@符号，PHP会显示建议，建议变量先声明在使用
$username=@$_POST[username];
$password=@$_POST[password];
$email=@$_POST[email];
$qq=@$_POST[qq];
//数据库连接文件
include ('conn.php');

//检测用户名是否存在
$check_query = mysqli_query($conn,"select username from user where username='$username' limit 1");
if(mysqli_fetch_array($check_query)){
    echo '错误：用户名 ',$username,' 已存在。<a href="javascript:history.back(-1);">返回</a>';
    exit;
}
//写入数据
$password = MD5($password);
$sql = "INSERT INTO user(username,password,email,qq)VALUES('$username','$password','$email','$qq')";
if(mysqli_query($conn,$sql)){
    exit('用户注册成功！点击此处 <a href="login.html">登录</a>');
} else {
    echo '抱歉！添加数据失败：',mysql_error(),'<br />';
    echo '点击此处 <a href="javascript:history.back(-1);">返回</a> 重试';
}
?>
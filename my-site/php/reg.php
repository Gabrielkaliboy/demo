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
//写入数据
$password = MD5($password);
$sql = "INSERT INTO user(username,password,email,qq)VALUES('$username','$password','$email','$qq')";
if(mysqli_query($conn,$sql)){
//    注册成功
    exit('2');
} else {
//注册失败
    echo '3';
}
?>
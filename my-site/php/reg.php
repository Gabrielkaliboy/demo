<?php
if(!isset($_SERVER['HTTP_REFERER'])){
    echo "非法访问";
    exit;
}
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
//返回的数据
$regiser=new Response();
if(mysqli_query($conn,$sql)){
//    注册成功
    $regiser->json(1,'注册成功',array());
} else {
//注册失败
    $regiser->json(2,"注册失败",array());
    echo '3';
}
mysqli_close($conn);
?>
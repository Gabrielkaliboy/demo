<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/14
 * Time: 15:52
 */
if( $_SERVER['REQUEST_METHOD'] !=="POST"){
    exit('非法访问!');
}
//如果不加@符号，PHP会显示建议，建议变量先声明在使用
$username=@$_POST[username];
//数据库连接文件
include ('conn.php');

//检测用户名是否存在
$check_query = mysqli_query($conn,"select username from user where username='$username' limit 1");
if(mysqli_fetch_array($check_query)){
//    用户名存在返回0
    $cunzai=json_encode(array("valid"=>"false"),JSON_FORCE_OBJECT);
    echo "$cunzai";
    exit;
}else{
//用户名不存在返回
    $bucunzai=json_encode(array("valid"=>"true"),JSON_FORCE_OBJECT);
    echo $bucunzai;
    exit;
}
?>
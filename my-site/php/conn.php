<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/14
 * Time: 14:44
 */
$dbhost='qdm179472315.my3w.com:3306';//mysql服务器主机地址
$dbuser='qdm179472315';//mysql用户名
$dbpass='woaini116';//mysql密码
//连接数据库
$conn=@mysqli_connect($dbhost,$dbuser,$dbpass);
if(!$conn){
    die("连接错误：".mysqli_connect_error());
}
echo '链接数据库成功';
mysqli_select_db($conn,"qdm179472315_db");
?>
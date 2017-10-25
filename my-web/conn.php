<?php
$dbhost = 'qdm179472315.my3w.com:3306';  // mysql服务器主机地址
$dbuser = 'qdm179472315';            // mysql用户名
$dbpass = 'woaini116';          // mysql用户名密码
$conn = @mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('连接错误: ' . mysqli_error($conn));
}
mysqli_select_db($conn, 'qdm179472315_db' );
//字符转换，读库
mysqli_query($conn,"set character set 'gbk'");
//写库
mysqli_query($conn,"set names 'gbk'");
?>
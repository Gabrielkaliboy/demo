<?php
$dbhost = 'qdm179472315.my3w.com:3306';  // mysql服务器主机地址
$dbuser = 'qdm179472315';            // mysql用户名
$dbpass = 'woaini116';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('连接错误: ' . mysqli_error($conn));
}
echo '连接成功<br />';

$sql = "CREATE TABLE  runoob_tbl( ".
        "runoob_id INT NOT NULL AUTO_INCREMENT, ".
        "runoob_title VARCHAR(100) NOT NULL, ".
        "runoob_author VARCHAR(40) NOT NULL, ".
        "submission_date DATE, ".
        "PRIMARY KEY ( runoob_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
		
//选择数据库
mysqli_select_db($conn, 'qdm179472315_db' );


//创建数据库表
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('数据表创建失败: ' . mysqli_error($conn));
}
echo "数据表创建成功\n";

//断开连接
mysqli_close($conn);
?>
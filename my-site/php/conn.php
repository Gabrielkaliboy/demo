<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2017/11/14
 * Time: 14:44
 */
if(!isset( $_SERVER['HTTP_REFERER']))
{
    echo"非法访问";
    exit;
}
$dbhost='qdm179472315.my3w.com:3306';//mysql服务器主机地址
$dbuser='qdm179472315';//mysql用户名
$dbpass='woaini116';//mysql密码
//连接数据库
$conn=@mysqli_connect($dbhost,$dbuser,$dbpass);
if(!$conn){
//    die("连接错误：".mysqli_connect_error());
    die("连接错误");
    $conn_mess=new Response();
    $conn_mess->json(0,'系统内部错误',array());
}
mysqli_select_db($conn,"qdm179472315_db");
class Response{
    public  function json($code,$message="",$data=array()){
        $result=array(
          'code'=>$code,
          'message'=>$message,
          'data'=>$data
        );
        //输出json
        echo json_encode($result,JSON_FORCE_OBJECT);
        exit;
    }
}
function myuser($username,$password,$status){
    return array(
        'username'=>$username,
        'password'=>$password,
        'status'=>$status
    );
}
?>
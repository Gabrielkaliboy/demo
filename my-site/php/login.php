<?php
if(!isset($_SERVER['HTTP_REFERER'])){
    echo "非法访问";
    exit;
}
$username=@$_POST["username"];
$password=@$_POST["password"];
include_once ("conn.php");
$password=MD5($password);
$sql="select username from user WHERE  username='$username' AND  password='$password'";
$query=mysqli_query($conn,$sql);
$mes=new Response();
if($row=mysqli_fetch_array($query)){
//    print_r($row);
    //开始session
    session_start();
    $user=myuser($username,$password,true);
    $_SESSION['user']=$user;
    $mes->json("1","登陆成功",array());
}else{
    $mes->json("0","用户名或密码错误",array());
}
mysqli_close($conn);
?>
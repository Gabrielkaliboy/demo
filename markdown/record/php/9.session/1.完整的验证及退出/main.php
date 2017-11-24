<?php
session_start();
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
if(isset($_SESSION['username']))
{
    $conn=mysqli_connect("localhost:3366", "root","root");
    if(!$conn){
        die("连接错误");
        $conn_mess=new Response();
        $conn_mess->json(0,'系统内部错误',array());
    };
    mysqli_select_db($conn,"test");
    //获取Session
    $username = $_SESSION['username'];
    //执行SQL语句获得userflag的值
    $sql="select userflag from users " ."where username = '$username'";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);
    //判断当前数据库中的权限信息与Session中的信息比较，如果不同则更新Session的信息
    if($row['userflag'] != $_SESSION['userflag'])
    {
        $_SESSION['userflag'] = $row['userflag'];
    }
    //根据Session的值输出不同的欢迎信息
    if($_SESSION['userflag'] == 1)
        echo "欢迎管理员".$_SESSION['username']."登录系统";
    if($_SESSION['userflag'] == 0)
        echo "欢迎用户".$_SESSION['username']."登录系统";
    echo "<a href='logout.php'>注销</a>";
}
else
{
    echo "您没有权限访问本页面";
}
?>
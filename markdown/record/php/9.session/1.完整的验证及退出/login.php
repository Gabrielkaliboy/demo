<?php
$dbhost='localhost:3366';//mysql服务器主机地址
$dbuser='root';//mysql用户名
$dbpass='root';//mysql密码
//连接数据库
$conn=@mysqli_connect($dbhost,$dbuser,$dbpass);
if(!$conn){
//    die("连接错误：".mysqli_connect_error());
    die("连接错误");
    $conn_mess=new Response();
    $conn_mess->json(0,'系统内部错误',array());
}
mysqli_select_db($conn,"test");
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
//如果不加@符号，PHP会显示建议，建议变量先声明在使用
$username=@$_POST["username"];
$password=@$_POST["password"];

//写入数据
$sql="select username,userflag from users where username='$username' and password='$password'";
$query=mysqli_query($conn,$sql);
if( $row=mysqli_fetch_array($query)){
    session_start();                            //标志Session的开始
    //判断用户的权限信息是否有效，如果为1或0则说明有效
    if($row['userflag'] == 1 or $row['userflag'] == 0)
    {
        $_SESSION['username'] = $row['username'];
        $_SESSION['userflag'] = $row['userflag'];
        echo '<a href="main.php">欢迎登录，点击此处进入欢迎界面</a>';
    }
    else                                    //如果权限信息无效输出错误信息
    {
        echo "用户权限信息不正确";
    }
}else                                        //如果用户名和密码不正确，则输出错误
{
    echo "用户名或密码错误";
}
mysqli_close($conn);
?>
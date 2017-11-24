<?php
session_start();
$sessionName = session_name();   //取得当前 Session 名，默认为 PHPSESSID
if(isset($_GET[$sessionName])){
    echo $_GET[$sessionName];
}elseif(isset($_POST[$sessionName])){
    echo $_POST[$sessionName];
}elseif (isset($_COOKIE[$sessionName])){
    echo $_COOKIE[$sessionName]; //我当前的PHPSESSID对应的value是svq1v1r4d2rfsn02lftne4ile0
}else{
    echo "没有".$sessionName.'这个sessionId';
}
session_id("kaliboy");      //使用 session_id() 设置获得的 Session ID
echo "<br>".session_id();//kaliboy
?>
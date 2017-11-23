<?php
if(!isset($_SERVER['HTTP_REFERER'])){
    echo "非法访问";
    exit;
}
$username=@$_POST[username];
$password=@$_POST["password"];

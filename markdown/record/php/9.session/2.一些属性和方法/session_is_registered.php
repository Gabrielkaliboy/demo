<?php
session_start();
$_SESSION['username']='李明';
if(isset($_SESSION['username'])){
    echo "$_SESSION[username]";
}
session_unset('username');
if(!isset($_SESSION['username'])){
    echo "username已经被删除";
}
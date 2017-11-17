<?php
$arr=array(array(1,2,3),array("banana","orange","apple"),array("李明","jarry","piter"));
$a=json_encode($arr);

//接口拿到的是[[1,2,3],["banana","orange","apple"],["\u674e\u660e","jarry","piter"]] 字符串,并且数据里面的中文是Unicode格式
echo "$a";
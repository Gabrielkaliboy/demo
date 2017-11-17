<?php
echo "连续数组".PHP_EOL;
//这种数组声明不强制转换，json_encode以后得到数组
$sequential = array("foo", "bar", "baz", "blong");
var_dump(
    $sequential,
    json_encode($sequential)
);

echo PHP_EOL."非连续数组".PHP_EOL;
//这种数组声明不强制转换，json_encode以后得到对象
$nonsequential = array(1=>"foo", 2=>"bar", 3=>"baz", 4=>"blong");
var_dump(
    $nonsequential,
    json_encode($nonsequential)
);

echo PHP_EOL."删除一个连续数组值的方式产生的非连续数组".PHP_EOL;
//如果正常声明的数组中删除一项，之后再json_encode以后，得到对象形式
unset($sequential[1]);
var_dump(
    $sequential,
    json_encode($sequential)
);
?>
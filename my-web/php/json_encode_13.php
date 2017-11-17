<?php
@$obj->Name= 'a1';$obj->Number ='123';
$obj->Contno= '000';
//输出：{"Name":"a1","Number":"123","Contno":"000"}
echo json_encode($obj);
?>
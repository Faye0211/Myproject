<?php
    include_once '../tool/tools.php';
    header('content-type:text/html;charset=utf-8');

    $userName = $_REQUEST['userName'];
    $password = $_REQUEST['password'];
    $repassword = $_REQUEST['repassword'];
    // var_dump($password);
    $sql = "insert into faye (user_name,user_pass) values ('$userName','$password')";

    $rowNum = my_ZSG($sql);
    //var_dump($rowNum);
    if ($rowNum == 1) {
        echo "注册成功";
    } else {
        echo "未知错误,请联系管理员";
    }

?>
<?php
    include_once '../tool/tools.php';  
    header('content-type:text/html;charset=utf-8');  

    $userName = $_REQUEST['userName'];
    $password = $_REQUEST['password'];

    $sql = "select * from faye where user_name='$userName' and user_pass='$password' ";

    $data = my_SELECT($sql);
    //var_dump($data);

    if(count($data)==1){
        session_start();
        $_SESSION['userInfo'] = $data;
        echo '登录成功';
        echo  '<a href="../index.php">点我跳转</a>';
        //  header("location:../index.php");
    }else{
        echo "登陆失败";
    }

?>
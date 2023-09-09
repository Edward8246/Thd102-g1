<?php
     include("../Lib/Util.php");

     //從localstorage取出
     $login_account = $_POST['login_account']; 

     $sql ="select id
     from boxfood.customers
     where email = ? 
     ;"; //抓到抓到customer_id

    

     $statement = getPDO() -> prepare($sql);
     $statement->bindParam(1, $login_account);
     $statement -> execute();
     $data = $statement->fetchAll();
     


     echo json_encode($data);


?>
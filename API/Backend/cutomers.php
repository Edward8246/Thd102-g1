<?php    
   include("../Lib/Util.php");	

    //建立SQL
    $sql = "SELECT email,name,phone,address,CreateDate FROM customers ORDER BY id ASC";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>
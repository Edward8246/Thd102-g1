<?php

    include("../Lib/Util.php");

    //從POST數據中獲取(原本存在localstorage)
    $customer_id = $_POST['customer_id']; 

    //查customer_id的最新一筆訂單編號
    $sql ="
        SELECT orders_num 
        FROM orders
        WHERE customer_id = ?
        ORDER BY created_date DESC
        LIMIT 1;
    "; 

    
    $statement = getPDO() -> prepare($sql);
    $statement ->bindParam(1, $customer_id);
    $statement -> execute();
    $data = $statement->fetchAll();
    
    echo json_encode($data);


?>
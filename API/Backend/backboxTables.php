<?php    
   include("../Lib/Util.php");
   include("../Lib/picB.php");

    //建立SQL
    $sql = "SELECT id, name,unit_price,stock,photo_url,Status FROM products  WHERE Status > 0 AND category='盒子'  ORDER BY ID ASC";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>
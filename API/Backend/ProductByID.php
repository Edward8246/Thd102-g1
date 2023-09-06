<?php    
      include("../Lib/Util.php");
      include("../Lib/picB.php");

    //取得POST過來的值
    $PID = $_POST["PID"]; //PK

    //建立SQL
    $sql = "SELECT * FROM products WHERE id = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);    
    $statement->bindValue(1 , $PID);    
    $statement->execute();
    $data = $statement->fetchAll();    

    //回傳json
    echo json_encode($data);
?>
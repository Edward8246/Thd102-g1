<?php
     include("../Lib/Util.php");	    

     
     $sql = "SELECT * FROM products
            JOIN products_activity_detail as detail
                ON products.id = detail.products_id
            WHERE category = '活動'";

     $statement = getPDO() -> prepare($sql);
     $statement->execute();
     $data = $statement->fetchAll();
     

     //$data2 = array("a" => "蘋果", "b" => "Ball", "c" => "Cat");

     echo json_encode($data);


?>
<?php

  include("../Lib/Util.php");     


  $sql = 
    "SELECT 
    products.id-8 as id,  #商品id
    products.name, #商品名稱
    products.photo_url as img #圖片路徑

    FROM boxfood.products as products

    LEFT JOIN products_box_detail as box_detail
        ON  box_detail.products_id = products.id

    WHERE category = '盒子';
    ";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);


?>


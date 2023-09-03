<?php

  include("../Lib/Util.php");     


  $sql = 
  "SELECT 
    products.id,  # 商品id
    products.name, #商品名稱
    products.photo_url, #圖片路徑
    box_cata.box_category_id, #盒子種類id
    box_cata_name.box_category_name, #盒子種類名稱
    box_detail.box_time #烹調時間

    FROM boxfood.products as products

    LEFT JOIN box_category_to_products as box_cata
      ON  products.id = box_cata.products_id
      
    LEFT JOIN box_category as box_cata_name
      ON  box_cata.box_category_id = box_cata_name.id

    LEFT JOIN products_box_detail as box_detail
      ON  box_detail.products_id = products.id

    WHERE category = '盒子';
    ";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);


?>
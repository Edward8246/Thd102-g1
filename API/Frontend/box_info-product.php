<?php

  include("../Lib/Util.php");    
  
  $sql = 
  "SELECT 
    products.id-8 as products_id,  #商品id
    products.name, #商品名
    products.unit_price, #商品價格
    products.description, #商品描述
    products.photo_url, #商品圖片
    box_detail.box_time, #烹調時間
    box_detail.box_tool #烹調方式
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
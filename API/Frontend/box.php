<?php

  include("../Lib/Util.php");     


  $sql = "SELECT products.id, products.name, products.photo_url, bcp.box_category_id, bc.box_category_name, pbd.box_time  
        FROM products 
    JOIN box_category_to_products as bcp
  on products.id = bcp.products_id
    JOIN box_category as bc
  ON  bcp.box_category_id = bc.id
    JOIN products_box_detail as pbd
  ON products.id = pbd.products_id
  
  where category = '盒子'";
  // "SELECT p.id, p.name, p.photo_url, box_cata.box_category_id, box_cata_name.box_category_name, box_detail.box_time FROM boxfood.products as p

  //  JOIN box_category_to_products as box_cata
  //     ON  p.id = box_cata.products_id
      
  //  JOIN box_category as box_cata_name
  //     ON  box_cata.box_category_id = box_cata_name.id

  //  JOIN products_box_detail as box_detail
  //     ON  box_detail.products_id = p.id

  //   WHERE category = '盒子' and Status = 1;
  //   ";

  

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();

  if($data){

    // print_r($data);
    echo json_encode($data);
  }else{
    echo "NO";
  }


?>
<?php

  include("../Lib/Util.php");    
  
  $sql = "SELECT 
    detail.products_id-8 as products_id,  #商品id(從1排列)
    chef.id as chef_id, #廚師id
    chef.box_chef_name as chef_name, #廚師名
    chef.box_chef_detail as chef_info, #廚師描述
    chef.box_chef_photo_name as chef_photo #廚師照片
    FROM products_box_detail as detail 
    LEFT JOIN box_chef as chef  
    ON  detail.box_chef_id = chef.id;
  ";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);

?>



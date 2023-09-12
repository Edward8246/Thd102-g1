<?php

  include("../Lib/Util.php");     


  $sql = 
  "SELECT p.id, p.name, p.photo_url
  FROM products as p
  join products_box_detail as pbd
    on pbd.products_id = p.id
  where category = '盒子' and status = 1;
    ";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);


?>


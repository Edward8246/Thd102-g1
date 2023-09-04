<?php

  include("../Lib/Util.php");    
  
  $sql = "SELECT 
    products_id-8 as products_id,
    tip 
    FROM boxfood.box_tip;
  ";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);

?>


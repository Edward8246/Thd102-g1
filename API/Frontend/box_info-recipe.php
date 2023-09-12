<?php

  include("../Lib/Util.php");    
  
  $sql = "SELECT 
  products_id-8 as products_id,
  receipt,
  receipt_detail
  FROM products_receipt;";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);

?>
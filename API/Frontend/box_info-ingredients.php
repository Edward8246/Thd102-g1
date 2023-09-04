<?php

  include("../Lib/Util.php");    
  
  $sql = "SELECT
    products_id-8 as products_id,
    ingredients,
    ingredients_detail
  FROM boxfood.products_ingredients;";

  $statement = getPDO() -> prepare($sql);
  $statement->execute();
  $data = $statement->fetchAll();


  echo json_encode($data);

?>
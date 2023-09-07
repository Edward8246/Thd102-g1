<?php
     include("../Lib/Util.php");	    

     
     $sql = "";

     $statement = getPDO() -> prepare($sql);
     $statement->execute();
     $data = $statement->fetchAll();
     


     echo json_encode($data);


?>
<?php
     include("../Lib/Util.php");	    

     if(isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["name"])){
        
     $accountW = htmlspecialchars($_POST["email"]);
     $passwordW = htmlentities($_POST["password"]);
     $nameW = htmlentities($_POST["name"]);
    //建立SQL
    $sql = "INSERT INTO customers(email, password, name, CreateDate) VALUES (?,?,?,NOW())";

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $accountW);
    $statement->bindValue(2,  $passwordW);
    $statement->bindValue(3,  $nameW);
    $statement->execute();

//     echo "加入成功，請重新登入!"; 
          echo true; 
     }
?>
<?php
   include("../Lib/Util.php");	

   if(isset($_POST["account"]) && isset($_POST["pwd"])){
  
    $accountE = htmlspecialchars($_POST["account"]);
    $passwordE = htmlentities($_POST["pwd"]);

    $sql = "SELECT * FROM administrator WHERE  account = ? and password = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);    
    $statement->bindValue(1, $accountE);
    $statement->bindValue(2, $passwordE);
    $statement->execute();
    $data = $statement->fetchAll();


    $BackendUserID = "";

    foreach($data as $index => $row){
        $BackendUserID = $row["account"];
      
    }


    if($BackendUserID != "" ){

        include("../Lib/Member.php");        
    
        //將會員資訊寫入session
        setSessionB($BackendUserID);

        //登入成功        
        echo "Y"; 
        // header("Location: ../../backCustomerTables.html");

    }else{

        //登入失敗
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../Backlogin.html';</script>";
        
    }



    // //依資料筆數判斷是否為會員
    // if(count($data) > 0){

    //     include("../Lib/Member.php");

    //     //將登入資訊寫入session
    //     setSessionB($_POST["account"]);

    //     //導回後台首頁        
    //     header("Location: ../../backCustomerTables.html");

    // }else{

    //     //跳出提示停留在後台登入頁
    //     echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../Backlogin.html';</script>"; 

    // }

}
?>
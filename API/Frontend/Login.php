<?php
//盒食
    include("../Lib/Util.php");	


    if(isset($_POST["account"]) && isset($_POST["pwd"])){
        $accountQ = htmlspecialchars($_POST["account"]);
        $passwordQ = htmlentities($_POST["pwd"]);

    //建立SQL
    $sql = "SELECT * FROM customers WHERE email = ? and password = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $accountQ);
    $statement->bindValue(2, $passwordQ);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["id"];
        $memberName = $row["email"];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){

        include("../Lib/Member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberID, $memberName);

        //登入成功        
        echo "Y"; 

    }else{

        //登入失敗
        echo "N"; 
        
    }
}
?>
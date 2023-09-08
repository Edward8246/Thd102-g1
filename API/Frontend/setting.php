<?php
include("../Lib/Util.php");	

$input = $_GET['account'];

try {
    // 讀取資料庫中的會員資料
    $sql = "SELECT 
	`name`,
    phone,
    `password`,
    email,
    `address`
    FROM customers
    WHERE email = :EMAIL;";
    
    $stmt = getPDO()->prepare($sql);
    $stmt->bindParam(':EMAIL', $input, PDO::PARAM_STR);
    $stmt->execute();

    $resultArray = [];

    // 檢查是否只有一條紀錄
    if ($stmt->rowCount() == 1) {
        $member = $stmt->fetch(PDO::FETCH_ASSOC);

        // 整理結果為關聯數
        $resultArray[] = [
            'name' => $member['name'],
            'phone' => $member['phone'],
            'password' => $member['password'],
            'email' => $member['email'],
            'address' => $member['address']
        ];

        // 轉換為 JSON 格式
        $jsonResult = json_encode($resultArray);

        // 輸出 JSON 數據
        echo $jsonResult;
    } else {
        echo json_encode(['error' => "找不到或存在多個匹配紀錄"]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => "發生數據庫錯誤" . $e->getMessage()]);
}


?>
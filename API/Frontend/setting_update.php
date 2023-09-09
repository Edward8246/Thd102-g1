<?php
include("../Lib/Util.php");

$data = json_decode(file_get_contents('php://input'), true); // Read raw POST data and decode it into an array
$input = $data['account']; // Corrected variable name
$newData = $data['userData'];

try {
    // Read member data from the database
    $sql = "UPDATE customers 
    SET
        `name` = :name,
        phone = :phone,
        `password` = :password,
        email = :email,
        `address` = :address
        WHERE email = :email;"; // Corrected placeholder name

    $stmt = getPDO()->prepare($sql);
    $stmt->bindParam(':name', $newData['name'], PDO::PARAM_STR);
    $stmt->bindParam(':phone', $newData['phone'], PDO::PARAM_STR);
    $stmt->bindParam(':password', $newData['password'], PDO::PARAM_STR);
    $stmt->bindParam(':address', $newData['address'], PDO::PARAM_STR);
    $stmt->bindParam(':email', $input, PDO::PARAM_STR); // Corrected placeholder name
    $stmt->execute();

    echo json_encode(['message' => "更新成功"]);
} catch (PDOException $e) {
    echo json_encode(['error' => "發生數據庫錯誤" . $e->getMessage()]);
}
?>
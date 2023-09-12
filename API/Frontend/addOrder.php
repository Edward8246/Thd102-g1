<?php
include("../Lib/Util.php");	 

$customer_id = $_POST['customer_id'];
//input中的值
$recipient_name = $_POST['recipient_name']; 
$recipient_phone = $_POST['recipient_phone']; 
$shipping_addr = $_POST['shipping_addr']; 

$sql = "INSERT INTO orders (customer_id, created_date, orders_num, recipient_name, recipient_phone, shipping_addr)
        VALUES (?, NOW(), DATE_FORMAT(NOW(), '%Y%m%d%H%i%s'), ?, ?, ?)";

//执行插入操作
$pdo = getPDO();
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $customer_id);
$statement->bindParam(2, $recipient_name);
$statement->bindParam(3, $recipient_phone);
$statement->bindParam(4, $shipping_addr);
$statement->execute();

// 获取最后插入的自动生成的ID
$lastInsertId = $pdo->lastInsertId();

// 验证ID是否正确
if ($lastInsertId <= 0) {
    // 插入ID不正确，执行额外的SELECT查询来获取正确的ID
    $selectSql = "SELECT id FROM orders WHERE customer_id = ? AND recipient_name = ? AND recipient_phone = ? AND shipping_addr = ? ORDER BY id DESC LIMIT 1";
    $selectStatement = $pdo->prepare($selectSql);
    $selectStatement->bindParam(1, $customer_id);
    $selectStatement->bindParam(2, $recipient_name);
    $selectStatement->bindParam(3, $recipient_phone);
    $selectStatement->bindParam(4, $shipping_addr);
    $selectStatement->execute();

    $selectedData = $selectStatement->fetch();

    if ($selectedData) {
        // 获取正确的ID
        $lastInsertId = $selectedData['id'];
    }
    
}

// 将ID返回给前端
echo json_encode(['id' => $lastInsertId]);
?>

<?php
include("../Lib/Util.php");	 
//存在localstorage的資料
$order_id = $_POST['order_id'];
$product_name = $_POST['product_name']; 
$product_quantity = $_POST['quantity']; 

// STEP1 先透過產品名稱查詢product_id
$sql = "SELECT id as product_id
        FROM products
        WHERE name = ?";

//执行插入操作
$statement = getPDO() ->prepare($sql);
$statement->bindParam(1, $product_name); 
$statement->execute();

$productData = $statement->fetchAll();

//STEP2 透過回傳product_id執行insert其他資料
if($productData){ //有查到product_id
    $product_id = $productData[0]['product_id']; //回傳的資料
    $insertSql = "
    INSERT INTO order_detail (order_id, product_id, quantity)
    VALUES (?, ?, ?)
    ";
    $insertStatement = getPDO()->prepare($insertSql);
    $insertStatement->bindParam(1, $order_id);
    $insertStatement->bindParam(2, $product_id);
    $insertStatement->bindParam(3, $product_quantity);
    $insertStatement->execute();

    // 成功則回傳
    echo json_encode(['message' => 'Order detail inserted successfully']);
}else {
    // 如果未找到产品，返回错误响应
    echo json_encode(['error' => 'Product not found']);
}

?>
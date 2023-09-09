<?php    
	include("../Lib/Member.php");
    include("../Lib/Util.php");

    //建立SQL
    $sql = "SELECT orders.created_date,orders.orders_num,SUM(unit_price*quantity) AS total_price
    FROM orders 
    left JOIN customers on orders.customer_id = customers.id 
    left JOIN order_detail on orders.id = order_detail.order_id
    left JOIN products on order_detail.product_id = products.id
    WHERE customer_id = ? 
    GROUP BY orders.id
    ORDER BY orders.created_date DESC";
        
    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , getMemberID()); 
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>
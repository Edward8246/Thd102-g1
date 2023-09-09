<?php    
    include("../Lib/Util.php");
    include("../Lib/Member.php");

    //建立SQL
    $sql = "SELECT orders.id,orders.created_date, customers.email, customers.name,SUM(unit_price*quantity) AS total_price
    FROM orders 
    left JOIN customers on orders.customer_id = customers.id 
    left JOIN order_detail on orders.id = order_detail.order_id
    left JOIN products on order_detail.product_id = products.id
    GROUP BY orders.id
    ORDER BY orders.customer_id ASC";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>
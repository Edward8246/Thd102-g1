<?php    
	include("../Lib/Member.php");
	include("../Lib/Util.php");

	//取得訂單列表--------------------------------------------

	$orderID = isset($_POST["OID"]) ? $_POST["OID"] : "";
	

	//建立SQL
	$sql = "SELECT
	products.id,
	products.name ,
	products.category,
	products.unit_price,
	order_detail.quantity
	FROM products
	left JOIN  order_detail on products.id = order_detail.product_id
	left JOIN  orders on order_detail.order_id = orders.id
	where orders.id = ? and orders.customer_id= ?
	ORDER BY products.id ASC
	";
	
	//執行
	$statement = getPDO()->prepare($sql);

	//給值
	$statement->bindValue(1 , $orderID);
	$statement->bindValue(2 , getMemberID()); 
	$statement->execute();
	$data = $statement->fetchAll();

	//回傳json
	echo json_encode($data);








?>



<?php
 include("../Lib/Member.php");	     

// 	//顯示會員資訊
    // $str = getMemberName();
	// // echo $str == "" ? "<a href='index.html'>登入</a>" : "Hello~".$str."&nbsp;&nbsp;&nbsp;<a href='API/Logout.php'>登出</a>";
	// echo $str == "" ? "<a>登入</a>" : "<a href='API/Logout.php'>登出</a>";



	// 顯示登入或登出按鈕
    $str = getMemberName();
   
   if ($str !== "") {
	   echo $login = true;
   }else{
	   echo $login = false;
   }

	// $login = false;

	// if ($str == "") {
	// 	$string.= "<div class='btn_white user login -none' id='user_login'>";
	// 	$string.="<i class='fa-solid fa-user'></i>";
	// 	$string.="<span>登入</span>";
	// 	$string.="</div>";
	// } else {
	// 	$string.= "<a href='API/Frontend/Logout.php'>";
	// 	$string.= "<div class='btn_white user logout -none' id='user_logout'>";
	// 	$string.= "<i class='fa-solid fa-arrow-right-from-bracket'></i>";
	// 	// $string.= "<div>Hello~" . getMemberName() . "&nbsp;&nbsp;&nbsp;<a href='API/Frontend/Logout.php'>登出</a></div>";
	// 	$string.= "<span>登出</span>";
	// 	$string.= "</div>";
	// 	$string.= "</a>";
	// 	$login = true;
	// }

	// $array = array(
	// 	'text'=>$string,
	// 	'login'=>$login,
	// );

	// echo json_encode($array);




	




?>
<?php
 include("../Lib/Member.php");	     

// 	//顯示會員資訊
    // $str = getMemberName();
	// // echo $str == "" ? "<a href='index.html'>登入</a>" : "Hello~".$str."&nbsp;&nbsp;&nbsp;<a href='API/Logout.php'>登出</a>";
	// echo $str == "" ? "<a>登入</a>" : "<a href='API/Logout.php'>登出</a>";



	// 顯示登入或登出按鈕
    $str = getMemberName();
	if ($str == "") {
		// echo "<div class='btn_white user login' id='user_login'>";
		// echo "    <i class='fa-solid fa-user'></i>";
		echo "    <div>登入</div>";
		// echo "</div>";
	} else {
		echo "<a href='API/Frontend/Logout.php'>";
		echo "<div class='btn_white user logout' id='user_logout'>";
		echo "    <i class='fa-solid fa-arrow-right-from-bracket'></i>";
		// echo "    <div>Hello~" . getMemberName() . "&nbsp;&nbsp;&nbsp;<a href='API/Frontend/Logout.php'>登出</a></div>";
		echo "    <div>登出</a></div>";
		echo "</div>";
		echo "</a>";
	}




?>
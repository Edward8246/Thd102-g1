<?php
//  include("../Lib/Util.php");	   

// 	//顯示會員資訊
//     $str = getMemberName();
// 	echo $str == "" ? "<a href='index.html'>登入</a>" : "Hello~".$str."&nbsp;&nbsp;&nbsp;<a href='API/Logout.php'>登出</a>";



	include("../Lib/Util.php");

	// 顯示登入或登出按鈕
	if (getMemberName() == "") {
		echo "<div class='btn_white user login' id='user_login'>";
		echo "    <i class='fa-solid fa-user'></i>";
		echo "    <h7><a href='index.html'>登入</a></h7>";
		echo "</div>";
	} else {
		echo "<div class='btn_white user logout -none' id='user_logout'>";
		echo "    <i class='fa-solid fa-arrow-right-from-bracket'></i>";
		echo "    <h7>Hello~" . getMemberName() . "&nbsp;&nbsp;&nbsp;<a href='API/Logout.php'>登出</a></h7>";
		echo "</div>";
	}





?>
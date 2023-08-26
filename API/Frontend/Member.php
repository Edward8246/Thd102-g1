<?php
 include("../Lib/Util.php");	   

	//顯示會員資訊
    $str = getMemberName();
	echo $str == "" ? "<a href='index.html'>登入</a>" : "Hello~".$str."&nbsp;&nbsp;&nbsp;<a href='API/Logout.php'>登出</a>";
?>
<?php    
      include("../Lib/Util.php");
      include("../Lib/picA.php");

    //取得POST過來的值
    $PID = $_POST["PID"]; //PK
    $ProductName = $_POST["ProductName"]; //商品名稱
    $Price = $_POST["Price"];   //售價
    $Status = $_POST["Status"];   //狀態  1:上架, 2:下架
    $PictureName = $_POST["PictureName"];   //原本的商品圖片名稱
    
    //返回訊息文字
    $message = "修改成功!";

    //先判斷是否更新(上傳)商品圖?
    if(isset($_FILES["ProductImage"])){
        
        //判斷圖片是否上傳成功?
        if($_FILES["ProductImage"]["error"] > 0){
    
            //返回訊息文字
            $message = "上傳失敗: 錯誤代碼".$_FILES["ProductImage"]["error"];

        }else{

            //Server上的暫存檔路徑含檔名
            $filePath_Temp = $_FILES["ProductImage"]["tmp_name"];

            //欲放置的檔案路徑
            $filePath = getFilePath().$_FILES["ProductImage"]["name"];

            //將暫存檔搬移到正確位置
            if(copy($filePath_Temp, $filePath)){

                //修改後的商品圖片名稱
                $PictureName = $_FILES["ProductImage"]["name"];

            }else{

                $message = "拷貝/移動上傳圖片失敗";

            }
        }
    }

    //建立SQL
    $sql = "UPDATE products set  name = ?, unit_price = ?, Status = ?, photo_url = ? WHERE id = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);     
    $statement->bindValue(1 , $ProductName);
    $statement->bindValue(2 , $Price);
    $statement->bindValue(3 , $Status);
    $statement->bindValue(4 , $PictureName);
    $statement->bindValue(5 , $PID);
    $statement->execute();
    
    //導頁    
    echo $message;
?>
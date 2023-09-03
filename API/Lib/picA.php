<?php



    //上傳檔案的放置位置(路徑)
    function getFilePathA(){        

        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //Apache根目錄之下的檔案存放路徑
        $filePath = "/images/activity/";
        
        return $ServerRoot.$filePath;

    }

?>
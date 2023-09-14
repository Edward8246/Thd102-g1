  //登入檢查
    function loginCheck(){    
        $.ajax({            
            method: "POST",
            url: "API/Frontend/LoginCheck.php",
            data:{},            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                    //尚未登入->前往Login.php
                    alert('請先登入，將前往登入頁'); 
                    location.href = 'Login.html';
                }else{
                    getData()
                }              
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    }
    loginCheck();

    //------------------------------------------------------------------------

    //取得訂單資訊
    function getData(){
        
        //在html頁面上取得GET(QueryString)的值
        var OID = (new URL(location.href)).searchParams.get('OID');
        
        $.ajax({            
            method: "POST",
            url: "API/Frontend/OrderDetail.php",
            data:{OID: OID},         
            dataType: "json",
            success: function (response) {
                display(response);
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    }

    //顯示訂單資訊
    function display(response) {
        //更新html內容(透過jQuery跑迴圈取值)
        $.each(response, function (index, row) {
        $("#result").append("<tr>" + "<td class='td' align='center'>" + row.id + "</td>" + "<td class='td' align='center'>" + row.category + "</td>" + "<td class='td' align='center'>" + row.name + "</td>" + "<td class='td' align='center'>" + row.unit_price + "</td>" + "<td class='td' align='center'>" + row.quantity + "</td>" + "</tr>");
        });
    }


//取得訂單資訊


function getData() {
    $.ajax({
      method: "POST",
      url: "API/Frontend/OrderHistory.php",
      data: {},
      dataType: "json",
      success: function (response) {
        display(response);
      },
      error: function error(exception) {
        alert("數據載入失敗: " + exception.status);
      }
    });
  }
  
  
  
  
  
  function display(response) {
    // 更新 html 内容（通过 jQuery 跑循环取值）
    $.each(response, function (index, row) {
      $("#table_imfo").append(
        "<tr>" 
        + "<td>" + row.orders_num + "</td>" 
        + "<td>" + row.created_date + "</td>" 
        + "<td>" + row.total_price + "</td>" 
        + "<td><a href='OrderDetail.html?OID=" + row.id + "'>明細</a></td>"
        + "</tr>"
      );
    });
    
  }
  
  getData();
  
  //顯示訂單資訊
  // function display(response) {
  //   //更新html內容(透過jQuery跑迴圈取值)
  //   $.each(response, function (index, row) {
  //     $("#table_imfo")
  //     .append("<tr>" 
  //     + "<td><a href='OrderDetail.html?OID=" + row.id + "'>" + row.orders_num + "</a></td>" 
  //     + "<td>" + row.created_date + "</td>" 
  //     + "<td>" + row.total_price + "</td>" + 
  //     "</tr>");
  //   });
  // }
  
  
  
  
  
  
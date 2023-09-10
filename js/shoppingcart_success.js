"use strict";

$(function () {
  
  //清空localstorage購物車資料指定key的value資料
  localStorage.removeItem('cart_box');
  localStorage.removeItem('cart_act');
  //清空購物車數字
  let cartNum = document.getElementsByClassName("quantity_cart")[0];
  cartNum.style.display = "none";
  //產生單號放入html中===================================== 
  let orderNumber = document.getElementById("orderNumber");
  //登入者的id
  // localstorage資料
  let login_account = localStorage.getItem('user');
  console.log(login_account); //登入的帳號

  $.ajax({
    method: "POST",
    url: "/thd102/g1/API/Frontend/getLoginCustomerId.php",
    data: {
      login_account: login_account
    },
    dataType: "text",
    success: function success(response) {
      if (response !== "") {
        //有資料
        var data = JSON.parse(response);
        if (data.length > 0) {
          var id = data[0].id; //登入者的id
          console.log("抓到的id:", id);
          // 使用id查找單號
          getOrderNum(id);
          
        }
      } else {
        //沒資料
        console.log("没有匹配的id");
      }
    },
    error: function error(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });
  //--------------------------------------------
  function getOrderNum(id){
    $.ajax({
      method: "POST",
      url: "/thd102/g1/API/Frontend/getOrderNum.php",
      //查找訂單編號
      data: {
        customer_id: id
      },

      dataType: "text",
      success: function success(response) {
        if (response !== "") {
          //有資料
          let data = JSON.parse(response);
          let getOrderNum = "";
          //取得orders_num
          if (data.length > 0) {
            getOrderNum = data[0].orders_num; // 订单号码
            console.log("orderNum: " + getOrderNum);
            // 使用 orderNum 后执行以下操作
          }
          // 使用該訂單後執行以下
          orderNumber.textContent="這是您的單號 : "+ getOrderNum;
          //??????????????????????????
        } else {
          //沒資料
          console.log("資料錯誤");
        }
      },
      error: function error(exception) {
        alert("數據載入失敗: " + exception.status);
      }
    });
  }
//=============================================            

  $(window).scroll(function () {
    //console.log($(this).scrollTop());
    var move = $(this).scrollTop();
    if (move >= 500) {
      $('.success-food1').addClass('foodmove1');
      $('.success-food2').addClass('foodmove2');
      $('.success-food3').addClass('foodmove3');
      $('.success-food4').addClass('foodmove4');
      $('.success-food5').addClass('foodmove5');
      $('.success-food6').addClass('foodmove6');
      setTimeout(function () {
        $('.success-box-top').css('opacity', '1');
        $('.success-box-top').addClass('boxtoprun');
      }, 3000);
      setTimeout(function () {
        $('.success-animation').addClass('runend');
      }, 6000);
      setTimeout(function () {
        $(".success-animation").remove();
      }, 7000);
      setTimeout(function () {
        $(".success-animation-wrapper").animate({
          height: '50px'
        });
      }, 8000);
      setTimeout(function () {
        $(".shoppinrcart-success-button").animate({
          opacity: '1'
        });
      }, 8500);
    }
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.getElementsByClassName("card-number");
  var carddate = document.getElementsByClassName("pay-carddate");
  var chipNumber = document.getElementsByClassName("chip-number");
  var phoneNumber = document.getElementById("inputPhone");
  var inputEmail = document.getElementById("inputEmail");
  // console.log(chipNumber);

  for (var i = 0; i < cards.length; i++) {
    //-------------------------------------刪除時---------------------------------------------- 
    cards[i].addEventListener("keydown", function (e) {
      if (e.which >= 48 && e.which <= 57 || e.which == 8) {
        if (e.target.value.length === 0 && e.which == 8) {
          var currentIndex = Array.from(cards).indexOf(e.target);
          var prevIndex = currentIndex - 1;
          if (prevIndex >= 0) {
            var prevInput = cards[prevIndex];
            prevInput.focus();
          }
        }
      } else {
        e.preventDefault();
      }
    });
    // -----------------------------------輸入時-------------------------------------------------
    cards[i].addEventListener("keyup", function (e) {
      var str = e.target.value;
      var input = e.target;
      str = str.replace(/\D/g, "");
      e.target.value = str;
      if (str.length == 4) {
        var currentIndex = Array.from(cards).indexOf(e.target);
        var nextIndex = currentIndex + 1;
        if (nextIndex < cards.length) {
          cards[nextIndex].focus();
        }
      }
    });
    //-----------------------卡片日期

    for (var _i = 0; _i < carddate.length; _i++) {
      carddate[_i].addEventListener("keydown", function (e) {
        if (e.which >= 48 && e.which <= 57 || e.which == 8) {
          if (e.target.value.length === 0 && e.which == 8) {
            var carddateIndex = Array.from(carddate).indexOf(e.target);
            var prevcarddateIndex = carddateIndex - 1;
            if (prevcarddateIndex >= 0) {
              var prevcarddateInput = carddate[prevcarddateIndex];
              prevcarddateInput.focus();
            }
          }
        } else {
          e.preventDefault();
        }
      });
      carddate[_i].addEventListener("keyup", function (e) {
        var str = e.target.value;
        str = str.replace(/\D/g, "");
        e.target.value = str;
        if (str.length == 2) {
          var currentIndex = Array.from(carddate).indexOf(e.target);
          var nextIndex = currentIndex + 1;
          if (nextIndex < carddate.length) {
            carddate[nextIndex].focus();
          }
        }
      });
    }
    ;
    //--------------------------------------------------電話
    phoneNumber.addEventListener("keyup", function (e) {
      var str = e.target.value;
      var input = e.target;
      str = str.replace(/\D/g, "");
      e.target.value = str;
    });
    //--------------------------------------------------信箱

    //--------------------------------------------------卡片末三碼
    chipNumber[0].addEventListener("keyup", function (e) {
      var str = e.target.value;
      var input = e.target;
      str = str.replace(/\D/g, "");
      e.target.value = str;
    });
  }
});

//---------------------下一步

// console.log($(".card-number"));
$(function () {
  $("#inputUser").blur(function () {
    var user = $(this).val();
    if (user === "") {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  $("#inputPhone").blur(function () {
    var phone = $(this).val();
    if (phone === "") {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  $("#inputEmail").blur(function () {
    var mail = $(this).val();
    if (mail === "") {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  $("#inputAddress").blur(function () {
    var address = $(this).val();
    if (address === "") {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  //-----信用卡
  $(".card-number").blur(function () {
    var cardNumber = $(this).val();
    // console.log(cardNumber);
    console.log(cardNumber.length);
    if (cardNumber === "" || cardNumber.length !== 4) {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  $("#pay-carddatem").blur(function () {
    var carddate = $(this).val();
    // 如果卡片日期不是兩位數，就在前面補零
    if (carddate.length === 1) {
      carddate = "0" + carddate;
      $(this).val(carddate);
    }
    carddate = parseInt(carddate, 10); // 將輸入值轉換為整數
    if (isNaN(carddate) || carddate > 12 || carddate < 1 || carddate === "") {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
  });
  $("#pay-carddatey").blur(function () {
    var carddatey = $("#pay-carddatey").val();
    var carddatem = $("#pay-carddatem").val();
    if (carddatey == 23 && carddatem < 9) {
      $("#pay-carddatey").css('border', '1px solid red');
      $("#pay-carddatem").css('border', '1px solid red');
      // console.log(this);
      alert("這張卡片過期囉!!");
    } else {
      $(this).css('border', '');
    }
    ;
    if (carddatey === "" || carddatey.length === 1 || carddatey < 23) {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '');
    }
    ;
  });
  $(".chip-number").blur(function () {
    var chipNumber = $(this).val();

    // console.log(cardnumber.length);
    if (chipNumber === "" || chipNumber.length != 3) {
      $(this).css('border', '1px solid red');
      // console.log(cardNumber);
    } else {
      $(this).css('border', '');
    }
  });
  $(function () {
    $("#checkBox").click(function () {
      var isChecked = $("#checkBox").is(":checked");
      if (isChecked) {
        // checkbox 被選中
        $("#checkBoxText").css('color', '');
        $(".terms").css('color', '');
        $(".terms").css('border-bottom', '');
        console.log("有打勾");
      } else {
        $("#checkBoxText").css('color', 'red');
        $(".terms").css('color', 'red');
        $(".terms").css('border-bottom', '1px solid red');
        console.log("沒打勾");
      }
      ;
    });
  });

  //--------------------------------------------按下送出
  $("#nextsubmit").click(function (e) {
    e.preventDefault();
    var user = $("#inputUser").val(); // 获取输入框的值
    var phone = $("#inputPhone").val();
    var mail = $("#inputEmail");
    var address = $("#inputAddress").val();
    var cards_el = $(".card-number");
    var payCarDdate = $(".pay-carddate").val();
    var chipNumber = $(".chip-number").val();
    var sendData = true; // 新增的变量，用于跟踪是否已经触发了警告

    //------------------------------------------------------------判斷姓名 
    if (user === "") {
      $("#inputUser").css('border', '1px solid red');
      sendData = false;
    }

    //------------------------------------------------------------判斷電話
    if (phone === "" || phone.length !== 10) {
      sendData = false;
      $("#inputPhone").css('border', '1px solid red');
    }
    

    //------------------------------------------------------------判斷信箱 
    var email = $("#inputEmail").val();
    
    if (!is.email(email)) {
      sendData = false;
      
      mail.css('border', '1px solid red');
      
    }

    //------------------------------------------------------------判斷地址
    if (address === "") {
      $("#inputAddress").css('border', '1px solid red');
      sendData = false;
    }

    //------------------------------------------------------------判斷信用卡卡號
    var cards_str = "";
    for (var i = 0; i < cards_el.length; i++) {
      cards_str += cards_el.eq(i).val();
    }
    ;
    //console.log(typeof(cards_str)); //string

    if (!is.creditCard(cards_str)) {
      sendData = false;
      for (var _i2 = 0; _i2 < cards_el.length; _i2++) {
        cards_el.eq(_i2).css('border', '1px solid red');
      }
    }

    //------------------------------------------------------------判斷信用卡年月
    var carDdate = $("#pay-carddatem").val();
    var cardDateYear = $("#pay-carddatey").val();
    if (payCarDdate === "" || payCarDdate.length < 2 || parseInt(carDdate, 10) > 12 || cardDateYear === "" || parseInt(cardDateYear, 10) < 23) {
      $(".pay-carddate").css('border', '1px solid red');
      sendData = false;
    }

    //------------------------------------------------------------------判斷卡背三碼
    if (chipNumber === "" || chipNumber.length < 3) {
      $(".chip-number").css('border', '1px solid red');
      sendData = false;
    }
    //------------------------------------------------------------------判斷信箱 
    // var email = $("#inputEmail").val();
    // var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if (!emailPattern.test(email)) {
    //   $("#inputEmail").css('border', '1px solid red');
    //   sendData = false;
    // }
    //------------------------------------------------------------------判斷打勾
    $(function () {
      $("#checkBox").click(function () {
        var isChecked = $("#checkBox").is(":checked");
        if (isChecked) {
          // checkbox 被選中
          $("#checkBoxText").css('color', '');
          $(".terms").css('color', '');
          $(".termsfalse").css('border-bottom', '');
          console.log("有打勾");
        } else {
          $("#checkBoxText").css('color', 'red');
          $(".terms").css('color', 'red');
          $(".terms").css('border-bottom', '1px solid red');
          console.log("沒打勾");
          sendData = false;
        }
        ;
      });
    });

    //--------------------------------------------------------判斷整個資料
    if (!sendData) {
      //驗證失敗 sendData==false
      alert('請輸入完整資料');
      e.preventDefault();
    } else {
      //--------------------------------------------------
      //執行抓到input資料後放入資料庫中
      var order_data = function order_data(id) {
        $.ajax({
          method: "POST",
          url: "/thd102/g1/API/Frontend/addOrder.php",
          //insert的php
          data: {
            customer_id: id,
            recipient_name: user,
            recipient_phone: phone,
            //input的資料
            shipping_addr: address //input的資料
          },

          dataType: "text",
          success: function success(response) {
            if (response !== "") {
              //有資料
              var data = JSON.parse(response);
              console.log("orderId:" + data.id); //取得order_id

              addOrders(data.id);

              // 跳轉到 ./shoppingcart_success.html 頁面
              window.location.href = '/thd102/g1/shoppingcart_success.html';
            } else {
              //沒資料
              console.log("資料錯誤");
            }
          },
          error: function error(exception) {
            alert("數據載入失敗: " + exception.status);
          }
        });
      };
      //--------------------------------------------------
      //抓到order_id後執行將localstorage的資料寫進資料庫orders中
      var addOrders = function addOrders(order_id) {
        //2. 執行將localstorage user資料接出來寫php
        var cart_box_arr = localStorage.getItem('cart_box');
        var cart_act_arr = localStorage.getItem('cart_act');
        // 轉型為JSON格式
        cart_box_arr = JSON.parse(cart_box_arr);
        cart_act_arr = JSON.parse(cart_act_arr);
        add_order_detail(cart_box_arr, order_id);
        add_order_detail(cart_act_arr, order_id);
      };
      //執行insert的func
      var add_order_detail = function add_order_detail(cart_arr, order_id) {
        for (var _i3 = 0; _i3 < cart_arr.length; _i3++) {
          var item = cart_arr[_i3]; //購物車中每一筆盒子的資料
          console.log(item); //{img,name,price,quantity,total}

          //ajax回傳寫在這
          $.ajax({
            method: "POST",
            url: "/thd102/g1/API/Frontend/addOrder_detail.php",
            //insert需要的資料
            data: {
              order_id: order_id,
              //引數帶入的值
              product_name: item.name,
              //localhost的資料(需用商品名查找product_id)
              quantity: item.quantity //localhost的資料
            },

            dataType: "text",
            success: function success(response) {
              if (response !== "") {
                //有資料 
                var data = JSON.parse(response);
                console.log("成功insert盒子商品");
                console.log(data);
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
      };
      //這裡執行驗證成功後
      console.log(user); //收件人姓名
      console.log(phone); //收件電話
      console.log(mail); //收件郵件
      console.log(address); //收件地址

      //驗證成功
      console.log("驗證成功");
      //5459 4075 2059 4658//04/2027//404
      //-----------------------------------------------
      // 1. 將驗證完的資料接出來寫php
      // localstorage資料
      var login_account = localStorage.getItem('user');
      console.log(login_account); //登入的帳號
      ;

      //------------------------------------------------
      $.ajax({
        method: "POST",
        url: "/thd102/g1/API/Frontend/getLoginCustomerId.php",
        //update的php
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
              // 在这里可以使用id进行后续操作
              order_data(id);
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
      ;
      ;
      ;
    }
  });
});
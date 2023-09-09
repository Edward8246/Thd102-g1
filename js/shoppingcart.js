"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      box: [],
      activity: []
    };
  },
  computed: {
    //計算總計的價錢
    totalPrice: function totalPrice() {
      // Sum the 'total' property of items in 'box' and 'activity'
      var boxTotal = this.box.reduce(function (total, item) {
        return total + (item.total || 0);
      }, 0);
      var activityTotal = this.activity.reduce(function (total, item) {
        return total + (item.total || 0);
      }, 0);
      return boxTotal + activityTotal;
    }
  },
  methods: {
    //header購物車數字改動
    changeCartNum: function changeCartNum() {
      var cartNum = document.getElementsByClassName("quantity_cart")[0];
      var cart_box = JSON.parse(localStorage.getItem('cart_box')) || [];
      var cart_act = JSON.parse(localStorage.getItem('cart_act')) || [];
      // 检查购物车中是否已经存在相同的商品
      // console.log(cart_items);
      if (cart_box.length > 0 || cart_act.length > 0) {
        cartNum.style.display = "inline";
        cartNum.innerHTML = cart_box.length + cart_act.length;
      } else {
        cartNum.style.display = "none";
      }
    },
    //盒子項目數量增加
    addNumberBox: function addNumberBox(index) {
      if (this.box[index].quantity < 30) {
        //這邊設定最多可買30數量可自行調整

        this.box[index].quantity = parseInt(this.box[index].quantity) + 1; // 增加数量
        this.box[index].total = this.box[index].price * this.box[index].quantity; // 更新金額
        this.updateTotal();
        localStorage.setItem('cart_box', JSON.stringify(this.box)); //回存到localstorage
      } else {
        window.alert("超過庫存數量");
      }
    },
    //盒子項目數量減少
    subNumberBox: function subNumberBox(index) {
      if (this.box[index].quantity >= 2) {
        this.box[index].quantity -= 1; // 减少数量
        this.box[index].total = this.box[index].price * this.box[index].quantity; //更新金額
        this.updateTotal();

        // 保存更改后的数据到localStorage
        localStorage.setItem('cart_box', JSON.stringify(this.box));
      }
    },
    //活動項目數量增加
    addNumberAct: function addNumberAct(index) {
      if (this.activity[index].quantity < 30) {
        //這邊設定最多可買30數量可自行調整

        this.activity[index].quantity = parseInt(this.activity[index].quantity) + 1; // 增加数量
        this.activity[index].total = this.activity[index].price * this.activity[index].quantity; // 更新总价
        this.updateTotal();
        localStorage.setItem('cart_act', JSON.stringify(this.activity));
      } else {
        window.alert("超過庫存數量");
      }
    },
    //活動項目數量減少
    subNumberAct: function subNumberAct(index) {
      var btn_sub = document.getElementsByClassName('b-sub-shopping')[index];
      if (this.activity[index].quantity >= 2) {
        this.activity[index].quantity -= 1; // 减少数量
        this.activity[index].total = this.activity[index].price * this.activity[index].quantity;
        this.updateTotal();

        // 保存更改后的数据到localStorage
        localStorage.setItem('cart_act', JSON.stringify(this.activity));
      }
    },
    //更新數量後 各項目金額
    updateTotal: function updateTotal() {
      // 手动更新 total 属性
      this.total = this.box.reduce(function (total, item) {
        return total + item.price * item.quantity;
      }, 0);
    },
    //移除訂單(盒子)
    taskRemoveBox: function taskRemoveBox(i, e) {
      var _this = this;
      var r = confirm("確定要移除嗎？");

      // comfirm 詢問視窗
      if (r) {
        _this.box.splice(i, 1);

        //刪除資料後回存到localstorage
        localStorage.setItem("cart_box", JSON.stringify(_this.box));

        //更新header購物車數字
        _this.changeCartNum();
      }
    },
    //移除訂單(活動)
    taskRemoveAct: function taskRemoveAct(i, e) {
      var _this = this;
      var r = confirm("確定要移除嗎？");

      // comfirm 詢問視窗
      if (r) {
        _this.activity.splice(i, 1);
        //刪除資料後回存到localstorage
        localStorage.setItem("cart_act", JSON.stringify(_this.activity));

        //更新header購物車數字
        _this.changeCartNum();
      }
    }
  },
  //頁面一載入就執行的方法
  mounted: function mounted() {
    var cartNum = document.getElementsByClassName("quantity_cart")[0];
    //讀取localstorage的資料
    //分別查看cart_box 跟 cart_act 有無存放資訊
    var cart_box = JSON.parse(localStorage.getItem('cart_box')) || [];
    var cart_act = JSON.parse(localStorage.getItem('cart_act')) || [];
    if (cart_box.length > 0 || cart_act.length > 0) {
      // 在页面中显示购物车中的产品信息
      //若盒子商品則存入data的box裡面，html即可帶入資料
      this.box = cart_box;
      this.activity = cart_act;
    } else {
      // 如果购物车为空，显示一条消息
      console.log("購物車是空的");
    }
  }
});
app.mount("#cart");

//===================================
//登入檢查
var goToPay_btn = document.getElementById("goToPay");
goToPay_btn.addEventListener("click", function () {
  loginCheck();
});
function loginCheck() {
  $.ajax({
    method: "POST",
    url: "/thd102/g1/API/Frontend/LoginCheck.php",
    data: {},
    dataType: "text",
    success: function success(response) {
      if (response == "") {
        //無登入資料

        alert('請先登入，將前往登入頁');
        // 判斷是否登入，沒登入執行跳出登入視窗
        login_pop();
      } else {
        //若有登入資料
        // 跳轉到下一頁
        location.href = '/thd102/g1/shoppingcart_pay.html';
      }
    },
    error: function error(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });
}
"use strict";

var activity = Vue.createApp({
  data: function data() {
    return {
      dateNow: Date.now(),
      currentTag: null,
      displayedItems: 6,
      itemsPerPage: 6,
      arr_act: null,
      idPort: 0,
      category_list: {
        '新品宣傳': {
          color: 'red'
        },
        '共享餐桌': {
          color: 'purple'
        },
        '私廚教學': {
          color: 'green'
        }
      },
      category: ""
    };
  },
  computed: {
    // filteredList(){
    //   const self = this;
    //   console.table(self.arr_act);
    //   return self.arr_act.filter(function (tag) {
    // console.log(tag.activity_category === self.currentTag);
    // console.log(tag.activity_category);
    // console.log(self.currentTag);
    //     return tag.activity_category === self.currentTag || self.currentTag === null
    //   });
    // },
  },
  methods: {
    /* tagColor2: function tagColor2(tag) {
      switch (tag) {
        case "新品宣傳":
          return "tb-red";
        case "共享餐桌":
          return "tb-purple";
        case "私廚教學":
          return "tb-green";
      }
    }, */
    loadMore: function loadMore() {
      this.displayedItems += this.itemsPerPage;
    },
    disable: function disable(date, e) {
      // e.preventDefault();
      // console.log(e.target.closest('a').classList.add('disabled'));

      if (date <= this.dateNow) {
        e.preventDefault();
        // e.target.closest('a').classList.add('disabled');
      }
    },

    buttonDisable: function buttonDisable(date) {
      if (date <= this.dateNow) {
        return true;
      }
    },
    addNumber: function addNumber() {
      var buy_value = document.getElementsByClassName("buy-value")[0];
      var btn_add = document.getElementsByClassName('b-add')[0];
      if (buy_value.value < 25) {
        buy_value.value = parseInt(buy_value.value) + 1;
        // buy_value.value +=1;
      } else {
        window.alert("超過庫存數量");
      }
    },
    subNumber: function subNumber() {
      var btn_sub = document.getElementsByClassName('b-sub')[0];
      var buy_value = document.getElementsByClassName("buy-value")[0];
      if (buy_value.value >= 2) {
        buy_value.value -= 1;
      }
    },
    addCart: function addCart(date, e) {

      var buy_value = document.getElementsByClassName("buy-value")[0];
      var cartNum = document.getElementsByClassName("quantity_cart")[0];

      if (date <= this.dateNow) {
        e.preventDefault();
        // e.target.closest('a').classList.add('disabled');
      } else {
        //放入要傳遞的活得的資料
        var productInfo = {
          img: this.arr_act.photo_url,
          name: this.arr_act.name,
          // 替换为实际的产品信息
          price: this.arr_act.unit_price,
          // 替换为实际的产品价格
          quantity: buy_value.value,
          total: this.arr_act.unit_price * buy_value.value
          // 添加其他产品信息
        };

        // 获取购物车数据（如果存在）
        var cart_box = JSON.parse(localStorage.getItem('cart_box')) || []; //盒子
        var cart_act = JSON.parse(localStorage.getItem('cart_act')) || []; //活動

        // 检查购物车中是否已经存在相同的商品
        var existingItem = cart_act.find(function (cartItem) {
          return cartItem.name === productInfo.name;
        });
        if (existingItem) {
          // 如果存在相同的商品，更新数量
          existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productInfo.quantity);
          existingItem.total = existingItem.price * existingItem.quantity;
        } else {
          // 否则，将新商品添加到购物车
          cart_act.push(productInfo);
        }
        //渲染存在localStorage的商品數到header數字
        if (cart_box.length > 0 || cart_act.length > 0) {
            cartNum.style.display = "inline";
            cartNum.innerHTML = cart_box.length + cart_act.length;
        }

        // 将购物车数据重新存储到 localStorage
        localStorage.setItem('cart_act', JSON.stringify(cart_act));
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    var urlParams = new URLSearchParams(window.location.search);
    self.idPort = urlParams.get('id');
    axios.get('../API/Frontend/Activities.php').then(function (response) {
      if (response.data) {
        self.arr_act = response.data.find(function (x) {
          return x.products_id == self.idPort;
        });
        console.log(self.arr_act);
      }
    })["catch"](function (error) {
      console.error(error);
    });
  }
});
activity.mount('#actInfo');
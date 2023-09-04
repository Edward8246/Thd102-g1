console.clear();

//hamburdger點擊事件
let bar_el = document.getElementById("bar");
let bar_line_els = document.getElementsByClassName("line");
let header_cataPage_el = document.getElementById("header_cataPage");

bar_el.addEventListener("click", function () {
  header_cataPage_el.classList.toggle("-none");
  bar_el.classList.toggle("-close");

  if (bar_el.classList.contains("-close")) {
    //轉換bar為X符號
    Array.from(bar_line_els).forEach(function (i) {
      i.style.transition = "0.5s";
      bar_line_els[0].style.transform = "rotate(135deg)";
      bar_line_els[1].style.transform = "translateX(-100px)";
      bar_line_els[1].style.opacity = "0"
      bar_line_els[2].style.transform = "rotate(-135deg)";
    });
  } else {
    //轉換bar為hamburger
    Array.from(bar_line_els).forEach(function (i) {
      i.style.transition = "0.5s";
      bar_line_els[0].style.transform = "rotate(0deg)";
      bar_line_els[1].style.transform = "translateX(0px)";
      bar_line_els[1].style.opacity = "1"
      bar_line_els[2].style.transform = "rotate(0deg)";
    });
  }
});


//顯示購物車數量
var joinBtn = document.getElementById("joinBtn");
let cartNum = document.getElementsByClassName("quantity_cart")[0];

// Initialize a variable to keep track of the quantity
// let quantity = 0;

var cart = JSON.parse(localStorage.getItem('cart')) || [];

// 检查购物车中是否已经存在相同的商品
// console.log(cart_items);
if (cart.length > 0) {
  cartNum.style.display = "inline";
  cartNum.innerHTML = cart.length;
}else{
  cartNum.style.display = "none";
}
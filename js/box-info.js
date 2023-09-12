const app = Vue.createApp({

    data() {
        return {
            index: 0,
            product:[],
            ingredients: [],
            recipes:[],
            tips:[],
            chef:[],
            currentTag:null, //初始狀態沒有元素被添加
            isToggled: false // 初始情况下不展开
        };
    },
    methods: {
        addNumber() {
            let buy_value = document.getElementsByClassName("buy-value")[0];
            let btn_add = document.getElementsByClassName('b-add')[0];
            if (buy_value.value < 30) {
                buy_value.value = parseInt(buy_value.value) + 1;
                // buy_value.value +=1;
            } else {
                window.alert("超過庫存數量")
            }

        },
        subNumber() {
            let btn_sub = document.getElementsByClassName('b-sub')[0];
            let buy_value = document.getElementsByClassName("buy-value")[0];
            if (buy_value.value >= 2) {
                buy_value.value -= 1;
            }


        },
        //購物車
        addCart: function addCart() {
            //cartNum為位於header的元素
            var cartNum = document.getElementsByClassName("quantity_cart")[0];
            var buy_value = document.getElementsByClassName("buy-value")[0];
            var productInfo = {
            img: this.product.photo_url,
            name: this.product.name,
            // 替换为实际的产品信息
            price: this.product.unit_price,
            // 替换为实际的产品价格
            quantity: buy_value.value,
            total: this.product.unit_price * buy_value.value
            // 添加其他产品信息
            };
    
            // 获取购物车数据（如果存在）
            var cart_box = JSON.parse(localStorage.getItem('cart_box')) || []; //盒子
            var cart_act = JSON.parse(localStorage.getItem('cart_act')) || []; //活動
    
            // 检查购物车中是否已经存在相同的商品
            var existingItem = cart_box.find(function (cartItem) {
            return cartItem.name === productInfo.name;
            });
    
            if (existingItem) {
            // 如果存在相同的商品，更新数量
            existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productInfo.quantity);
            existingItem.total = existingItem.price * existingItem.quantity;
            } else {
            // 否则，将新商品添加到购物车
            cart_box.push(productInfo);
            }
            //渲染存在localStorage的商品數到header數字
            if (cart_box.length > 0 || cart_act.length > 0) {
            cartNum.style.display = "inline";
            cartNum.innerHTML = cart_box.length + cart_act.length;
            }
    
            // 将购物车数据重新存储到 localStorage
            localStorage.setItem('cart_box', JSON.stringify(cart_box));
        },       
        changeTag(tag) {
            // 当点击一个标签时，将该标签设置为当前标签，并取消其他标签的选择
            this.currentTag = tag;
            this.scrollToId(tag);
        },
        toggleSlide() {
            this.isToggled = !this.isToggled;
        },
        scrollToId(id) {
          const element = document.getElementById(id);
          if (element) {
            // 使用原生 JavaScript 滚动到目标元素
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    },
    mounted() {
        let app = this;
        let urlParams = new URLSearchParams(window.location.search);
        app.index = urlParams.get('id');
        
        //---------------------------------------
        // 請求box_info.php數據資料
        axios.get('/thd102/g1/API/Frontend/box_info-product.php')
        .then(function (response) {
            app.product = response.data;
            // console.log(app.product);
            if(response.data){
                // 修改为 app.product
                app.product = response.data.find(x => x.products_id == app.index); 
            }
            // console.log(app.product);
        })
        .catch(function (error) {
            console.error(error);
        });

        // 請求 box_info-ingredients.php
        axios.get('/thd102/g1/API/Frontend/box_info-ingredients.php')
        .then(function (response) {
            if(response.data){
                app.ingredients = response.data.filter(x => x.products_id == app.index); 
            }
            // console.log(app.ingredients);
        })
        .catch(function (error) {
        console.error(error);
        });

        // 請求 box_info-recipe.php
        axios.get('/thd102/g1/API/Frontend/box_info-recipe.php')
        .then(function (response) {
            if(response.data){
                app.recipes = response.data.filter(x => x.products_id == app.index); 
            }
            // console.log(app.recipes);
        })
        .catch(function (error) {
        console.error(error);
        });

        // 請求 box_info-tips.php
        axios.get('/thd102/g1/API/Frontend/box_info-tips.php')
        .then(function (response) {
            if(response.data){
                app.tips = response.data.filter(x => x.products_id == app.index); 
            }
            // console.log(app.tips);
        })
        .catch(function (error) {
        console.error(error);
        });

        // 請求 box_info-chef.php
        axios.get('/thd102/g1/API/Frontend/box_info-chef.php')
        .then(function (response) {
            if(response.data){
                app.chef = response.data.filter(x => x.products_id == app.index); 
            }
            // console.log(app.chef);
        })
        .catch(function (error) {
        console.error(error);
        });

        
    }
});

app.mount("#app");


//===============================================
// 滑動變換class樣式
// 获取所有链接和内容区块的引用
const buyLink = document.getElementById('buyLink');
const ingredientsLink = document.getElementById('ingredientsLink');
const stepLink = document.getElementById('stepLink');
const chefLink = document.getElementById('chefLink');

// 内容区块...
const buySection = document.getElementById('buy');
const ingredientsSection = document.getElementById('ingredients');
const stepSection = document.getElementById('step');
const chefSection = document.getElementById('chef');


// 滚动时检查当前视口中的区块并更新导航标签的类名
window.addEventListener('scroll', function () {
  // 获取页面滚动位置
  const scrollPosition = window.scrollY;

  // 为了触发 80px 区域，将每个区块的上方边界向上偏移 120px
  const buyOffsetTop = buySection.offsetTop - 120;
  const ingredientsOffsetTop = ingredientsSection.offsetTop - 120;
  const stepOffsetTop = stepSection.offsetTop - 120;
  const chefOffsetTop = chefSection.offsetTop - 120;

  // 检查当前滚动位置并更新导航标签的类名
  if (scrollPosition >= buyOffsetTop && scrollPosition < ingredientsOffsetTop) {
    setActiveLink(buyLink);
  } else if (scrollPosition >= ingredientsOffsetTop && scrollPosition < stepOffsetTop) {
    setActiveLink(ingredientsLink);
  } else if (scrollPosition >= stepOffsetTop && scrollPosition < chefOffsetTop) {
    setActiveLink(stepLink);
  } else if (scrollPosition >= chefOffsetTop) {
    setActiveLink(chefLink);
  } 
});

// 设置活动导航标签的类名
function setActiveLink(link) {
  removeActiveLinks();
  link.classList.add('onTag');
}

// 移除所有导航标签的类名
function removeActiveLinks() {
  const allLinks = document.querySelectorAll('.select');
  allLinks.forEach(link => link.classList.remove('onTag'));
}
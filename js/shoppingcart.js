const app = Vue.createApp({
    data() {
        return {
            box: [
                {
                    image: "./images/shoppingcart/item1.png",
                    quantity: 2,  // 將預設值更改為您期望的值
                    price: 188,
                    // 其他商品資訊
                },
            ],       // 這是您的購物車商品列表
            activity: [],  // 這是您的活動商品列表
            total: 0       // 總計金額
        };
    },
    computed: {
        // 透過計算屬性計算總價
        totalAmount() {
            return this.box.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    },
    methods: {
        // 增加數量
        addNumber(index) {
            if (this.box[index].quantity < 30) {
                this.box[index].quantity++;
                
                this.updateTotal();
                // localStorage.setItem('cart', JSON.stringify(this.box));
                const itemPrice = this.box[index].price;
                console.log("新增一個商品，價格：", itemPrice);
            } else {
                window.alert("超過庫存數量");
            }
        },
        // 減少數量
        subNumber(index) {
            if (this.box[index].quantity >= 2) {
                this.box[index].quantity--;
                this.updateTotal();
                // localStorage.setItem('cart', JSON.stringify(this.box));
            }
        },
        // 更新總計金額
        updateTotal() {
            this.total = this.totalAmount;
        }
    },
    mounted() {
        // 讀取購物車數據
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            this.box = cart;
        }

        // 讀取活動商品數據
        const cart2 = JSON.parse(localStorage.getItem('cart2')) || [];
        if (cart2.length > 0) {
            this.activity = cart2;
        }

        // 初始化總計金額
        this.updateTotal();

    }
});

app.mount("#app");

// var deleteButtons = document.querySelectorAll('.item-delete');
        //     deleteButtons.forEach(function(button) {
        //     button.addEventListener('click', function() { 
        //         var shoppingCartItem = button.closest('.shoppingcart-item');
        //         let removeli = document.getElementsByClassName('.shoppingcart-item');
                
        //         setTimeout(function(){
        //         $shoppingCartItem.remove();
        //         },1000);
                
        //     });
        // });
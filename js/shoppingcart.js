const app = Vue.createApp({
    data() {
        return {
            box: [],
            activity:[]
        }
    },
    computed: {
        total() {
            // 使用 reduce 方法計算總價
            return this.items.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        }
    },
    methods: {
        addNumber(index) {
            let quantity_num = document.getElementsByClassName("quantity-num")[0];
            let btn_add = document.getElementsByClassName('b-add-shopping')[0];
            if (quantity_num.value < 30) {

                this.box[index].quantity = parseInt(this.box[index].quantity) + 1; // 增加数量
                this.box[index].total = this.box[index].price * this.box[index].quantity; // 更新总价
                this.updateTotal();

                localStorage.setItem('cart', JSON.stringify(this.box));
            } else {
                window.alert("超過庫存數量")
            }

        },
        subNumber(index) {
            let btn_sub = document.getElementsByClassName('b-sub-shopping')[0];
            let quantity_num = document.getElementsByClassName("quantity-num")[0];
            if (quantity_num.value >= 2) {

                this.box[index].quantity -= 1; // 减少数量
                this.box[index].total = this.box[index].price * this.box[index].quantity;
                this.updateTotal();

                // 保存更改后的数据到localStorage
                localStorage.setItem('cart', JSON.stringify(this.box));
            }




        },
        updateTotal() {
            // 手动更新 total 属性
            this.total = this.box.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
    },
    mounted() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            // 在页面中显示购物车中的产品信息
            this.box = cart;
        } else {
            // 如果购物车为空，显示一条消息
            console.log("購物車是空的");
        }

        //activity
        var cart2 = JSON.parse(localStorage.getItem('cart2')) || [];
        if (cart2.length > 0) {
            // 在页面中显示购物车中的产品信息
            this.activity = cart2;
        }
    }
});
app.mount("#app");
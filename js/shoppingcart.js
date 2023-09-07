const app = Vue.createApp({
    data() {
        return {
            box: [],
            activity: [],
           
        }
    },
    computed: {
        //計算總計的價錢
        totalPrice() {
    // Sum the 'total' property of items in 'box' and 'activity'
    const boxTotal = this.box.reduce((total, item) => {
        return total + (item.total || 0);
    }, 0);

    const activityTotal = this.activity.reduce((total, item) => {
        return total + (item.total || 0);
    }, 0);

    return boxTotal + activityTotal;
}

    },
    methods: {
        //盒子項目數量增加
        addNumberBox(index) {

            
            if ((this.box[index].quantity) < 30) { //這邊設定最多可買30數量可自行調整

                this.box[index].quantity = parseInt(this.box[index].quantity) + 1; // 增加数量
                this.box[index].total = this.box[index].price * this.box[index].quantity; // 更新金額
                this.updateTotal();

                localStorage.setItem('cart', JSON.stringify(this.box));//回存到localstorage
            } else {
                window.alert("超過庫存數量")
            }

        },
        //盒子項目數量減少
        subNumberBox(index) {
            if ((this.box[index].quantity) >= 2) {

                this.box[index].quantity -= 1; // 减少数量
                this.box[index].total = this.box[index].price * this.box[index].quantity;//更新金額
                this.updateTotal();

                // 保存更改后的数据到localStorage
                localStorage.setItem('cart', JSON.stringify(this.box));
            }
        },
        //活動項目數量增加
        addNumberAct(index) {
            if ((this.activity[index].quantity) < 30) {//這邊設定最多可買30數量可自行調整

                this.activity[index].quantity = parseInt(this.activity[index].quantity) + 1; // 增加数量
                this.activity[index].total = this.activity[index].price * this.activity[index].quantity; // 更新总价
                this.updateTotal();

                localStorage.setItem('cart2', JSON.stringify(this.activity));
            } else {
                window.alert("超過庫存數量")
            }

        },
        //活動項目數量減少
        subNumberAct(index) {
            let btn_sub = document.getElementsByClassName('b-sub-shopping')[index];

            if ((this.activity[index].quantity) >= 2) {

                this.activity[index].quantity -= 1; // 减少数量
                this.activity[index].total = this.activity[index].price * this.activity[index].quantity;
                this.updateTotal();

                // 保存更改后的数据到localStorage
                localStorage.setItem('cart2', JSON.stringify(this.activity));
            }
        },
        //更新數量後 各項目金額
        updateTotal() {
            // 手动更新 total 属性
            this.total = this.box.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
        //移除訂單(盒子)
        taskRemoveBox(i, e) {
            let r = confirm("確定要移除嗎？");
            // comfirm 詢問視窗
            if (r) {
                setTimeout(() => {
                    this.box.splice(i, 1);

                    //刪除資料後回存到localstorage
                    localStorage.setItem("cart", JSON.stringify(this.box));
                }, 500)
            }
        },
        //移除訂單(活動)
        taskRemoveAct(i, e) {
            let r = confirm("確定要移除嗎？");
            // comfirm 詢問視窗
            if (r) {
                
                setTimeout(() => {
                    this.activity.splice(i, 1);

                    //刪除資料後回存到localstorage
                    localStorage.setItem("cart2", JSON.stringify(this.activity));
                }, 500)
            }
        },
    },

    //頁面一載入就執行的方法
    mounted() { 

        //讀取localstorage的資料
        //分別查看cart 跟 cart2裡面有無存放資訊
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            // 在页面中显示购物车中的产品信息
            //若盒子商品則存入data的box裡面，html即可帶入資料
            this.box = cart;
        } else {
            // 如果购物车为空，显示一条消息
            console.log("購物車是空的");
        }
        //activity
        var cart2 = JSON.parse(localStorage.getItem('cart2')) || [];
        if (cart2.length > 0) {
            // 在页面中显示购物车中的产品信息
             //若盒子商品則存入data的activity裡面，html即可帶入資料
            this.activity = cart2;
        }
    }
});
app.mount("#cart");
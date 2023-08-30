"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      all: [],
      // items: [],
      //以改為使用資料庫數據資料
      currentTag: null,
      firstTimeTag: true,
      itemsPerPage: 6,
      category:{
        '西式料理':{
          property_name:'cuisine',
           special:false
        },
        '中式料理':{
          property_name:'cuisine',
           special:false
        },
        '日式料理':{
          property_name:'cuisine',
           special:false
        },
        '健康料理':{
          property_name:'health',
          special:true
        },
        '快速料理':{
          property_name:'fast',
          special:true
        }
      },
      // 每次新增的商品數量
      displayedItems: 12 // 初始已顯示的商品數量
    };
  },
  computed:{
    items(){
      const _this = this
      if(_this.currentTag !==null){
        const property_name =  this.category[_this.currentTag].property_name

        const special =  this.category[_this.currentTag].special

        if(special === true){
          return _this.all.filter(function (tag) {
            return tag[property_name] === true
          });
        }else{
          return _this.all.filter(function (tag) {
            return tag[property_name] == _this.currentTag;
          });
        }
  
      }else{
        return _this.all
      }

    }

  },

  methods: {
    show(tag){
      if(this.currentTag === tag){
        this.currentTag = null;
      }else{
        this.currentTag = tag;
      }

      this.displayedItems = 12;

    },
    loadMoreItems: function loadMoreItems() {
      this.displayedItems += this.itemsPerPage;
    }
  },
  mounted: function mounted() {
    var _this = this;
    var urlParams = new URLSearchParams(window.location.search);
    var tag = urlParams.get('tag');
    var category = urlParams.get('category');
    // this.show(tag, category, 'all');
    // console.log('aaa');

    //接box.php $data
    axios.get('../API/Frontend/box.php').then(function (response) {
      let items = response.data;
      console.log(items);
      //=============================================
      // 创建一个用于存储已处理数据的对象
      var processedData = {};
      items = items.forEach(function (item) {
        var key = item.name;
        // 如果 processedData 中不存在相同名字的项目，则添加该项目
        if (!processedData[key]) {
          processedData[key] = _objectSpread(_objectSpread({}, item), {}, {
            health: false,
            fast: false
          });
        }

        // 如果同名字的食物中存在 '健康料理' 属性，则设置 health 为 true
        if (item.box_category_name === "健康料理") {
          processedData[key].health = true;
        }

        // 如果同名字的食物中存在 '快速上菜' 属性，则设置 fast 为 true
        if (item.box_category_name === "快速上菜") {
          processedData[key].fast = true;
        }
      });

      // 将 processedData 的值转换为数组
      items = Object.values(processedData).map(function (item) {
        return {
          id: item.id - 8,
          img: "./images/box-info/" + item.photo_url,
          name: item.name,
          cuisine: item.box_category_name,
          time: item.box_time,
          health: item.health,
          fast: item.fast
        };
      });
      _this.all=items
      // _this.items = _this.all
      console.log(_this.all);
    })["catch"](function (error) {
      console.error(error);
    });
  }
});
app.mount("#my_app");
// app.mount("#article2_app");

// items: [{
//   id: 1,
//   img: "./images/box-info/box-info-ginger.jpg",
//   name: "薑汁燒肉",
//   cuisine: "日式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 2,
//   img: "./images/box-info/box-info-sushi.jpg",
//   name: "蟹肉棒壽司捲",
//   cuisine: "日式料理",
//   time: "15分鐘",
//   health: true,
//   fast: true
// }, {
//   id: 3,
//   img: "./images/box-info/box-info-salad.jpg",
//   name: "夏日野薺盛宴",
//   cuisine: "西式料理",
//   time: "20分鐘",
//   health: true,
//   fast: true
// }, {
//   id: 4,
//   img: "./images/box-info/box-info-pork.jpg",
//   name: "糖醋排骨",
//   cuisine: "中式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 5,
//   img: "./images/box-info/box-info-poke.jpg",
//   name: "POKE",
//   cuisine: "西式料理",
//   time: "20分鐘",
//   health: true,
//   fast: true
// }, {
//   id: 6,
//   img: "./images/box-info/box-info-hamburger.jpg",
//   name: "火腿漢堡",
//   cuisine: "西式料理",
//   time: "35分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 7,
//   img: "./images/box-info/box-info-dumpling.jpg",
//   name: "韭菜豬肉水餃",
//   cuisine: "中式料理",
//   time: "40分鐘",
//   health: true,
//   fast: false
// }, {
//   id: 8,
//   img: "./images/box-info/box-info-donburi.jpg",
//   name: "牛肉丼飯",
//   cuisine: "日式料理",
//   time: "30分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 9,
//   img: "./images/box-info/box-info-curry.jpg",
//   name: "牛肉咖哩飯",
//   cuisine: "日式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 10,
//   img: "./images/box-info/box-info-tofu.jpg",
//   name: "麻婆豆腐",
//   cuisine: "中式料理",
//   time: "30分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 11,
//   img: "./images/box-info/box-info-cornsoup.jpg",
//   name: "玉米濃湯",
//   cuisine: "西式料理",
//   time: "35分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 12,
//   img: "./images/box-info/box-info-beefhamburger.jpg",
//   name: "牛肉漢堡套餐",
//   cuisine: "西式料理",
//   time: "45分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 13,
//   img: "./images/box-info/box-info-avocadosalad.jpg",
//   name: "酪梨沙拉",
//   cuisine: "西式料理",
//   time: "20分鐘",
//   health: true,
//   fast: true
// }, {
//   id: 14,
//   img: "./images/box-info/box-info-friedpork.jpg",
//   name: "炸豬排",
//   cuisine: "日式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 15,
//   img: "./images/box-info/box-info-ramen.jpg",
//   name: "豚骨拉麵",
//   cuisine: "日式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 16,
//   img: "./images/box-info/box-info-taiyaki.jpg",
//   name: "鯛魚燒",
//   cuisine: "日式料理",
//   time: "35分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 17,
//   img: "./images/box-info/box-info-tempura.jpg",
//   name: "炸蝦天婦羅",
//   cuisine: "日式料理",
//   time: "40分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 18,
//   img: "./images/box-info/box-info-kungpao.jpg",
//   name: "宮保雞丁",
//   cuisine: "中式料理",
//   time: "25分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 19,
//   img: "./images/box-info/box-info-dongpo.jpg",
//   name: "東坡肉",
//   cuisine: "中式料理",
//   time: "50分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 20,
//   img: "./images/box-info/box-info-beefnoodle.jpg",
//   name: "牛肉麵",
//   cuisine: "中式料理",
//   time: "50分鐘",
//   health: false,
//   fast: false
// }, {
//   id: 21,
//   img: "./images/box-info/box-info-spegatti.jpg",
//   name: "番茄義大利麵",
//   cuisine: "西式料理",
//   time: "30分鐘",
//   health: false,
//   fast: false
// }],





// items: [{
      //   id: 1,
      //   img: "./images/box-info/box-info-ginger.jpg",
      //   name: "薑汁燒肉",
      //   cuisine: "日式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 2,
      //   img: "./images/box-info/box-info-sushi.jpg",
      //   name: "蟹肉棒壽司捲",
      //   cuisine: "日式料理",
      //   time: "15分鐘",
      //   health: true,
      //   fast: true
      // }, {
      //   id: 3,
      //   img: "./images/box-info/box-info-salad.jpg",
      //   name: "夏日野薺盛宴",
      //   cuisine: "西式料理",
      //   time: "20分鐘",
      //   health: true,
      //   fast: true
      // }, {
      //   id: 4,
      //   img: "./images/box-info/box-info-pork.jpg",
      //   name: "糖醋排骨",
      //   cuisine: "中式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 5,
      //   img: "./images/box-info/box-info-poke.jpg",
      //   name: "POKE",
      //   cuisine: "西式料理",
      //   time: "20分鐘",
      //   health: true,
      //   fast: true
      // }, {
      //   id: 6,
      //   img: "./images/box-info/box-info-hamburger.jpg",
      //   name: "火腿漢堡",
      //   cuisine: "西式料理",
      //   time: "35分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 7,
      //   img: "./images/box-info/box-info-dumpling.jpg",
      //   name: "韭菜豬肉水餃",
      //   cuisine: "中式料理",
      //   time: "40分鐘",
      //   health: true,
      //   fast: false
      // }, {
      //   id: 8,
      //   img: "./images/box-info/box-info-donburi.jpg",
      //   name: "牛肉丼飯",
      //   cuisine: "日式料理",
      //   time: "30分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 9,
      //   img: "./images/box-info/box-info-curry.jpg",
      //   name: "牛肉咖哩飯",
      //   cuisine: "日式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 10,
      //   img: "./images/box-info/box-info-tofu.jpg",
      //   name: "麻婆豆腐",
      //   cuisine: "中式料理",
      //   time: "30分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 11,
      //   img: "./images/box-info/box-info-cornsoup.jpg",
      //   name: "玉米濃湯",
      //   cuisine: "西式料理",
      //   time: "35分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 12,
      //   img: "./images/box-info/box-info-beefhamburger.jpg",
      //   name: "牛肉漢堡套餐",
      //   cuisine: "西式料理",
      //   time: "45分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 13,
      //   img: "./images/box-info/box-info-avocadosalad.jpg",
      //   name: "酪梨沙拉",
      //   cuisine: "西式料理",
      //   time: "20分鐘",
      //   health: true,
      //   fast: true
      // }, {
      //   id: 14,
      //   img: "./images/box-info/box-info-friedpork.jpg",
      //   name: "炸豬排",
      //   cuisine: "日式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 15,
      //   img: "./images/box-info/box-info-ramen.jpg",
      //   name: "豚骨拉麵",
      //   cuisine: "日式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 16,
      //   img: "./images/box-info/box-info-taiyaki.jpg",
      //   name: "鯛魚燒",
      //   cuisine: "日式料理",
      //   time: "35分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 17,
      //   img: "./images/box-info/box-info-tempura.jpg",
      //   name: "炸蝦天婦羅",
      //   cuisine: "日式料理",
      //   time: "40分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 18,
      //   img: "./images/box-info/box-info-kungpao.jpg",
      //   name: "宮保雞丁",
      //   cuisine: "中式料理",
      //   time: "25分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 19,
      //   img: "./images/box-info/box-info-dongpo.jpg",
      //   name: "東坡肉",
      //   cuisine: "中式料理",
      //   time: "50分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 20,
      //   img: "./images/box-info/box-info-beefnoodle.jpg",
      //   name: "牛肉麵",
      //   cuisine: "中式料理",
      //   time: "50分鐘",
      //   health: false,
      //   fast: false
      // }, {
      //   id: 21,
      //   img: "./images/box-info/box-info-spegatti.jpg",
      //   name: "番茄義大利麵",
      //   cuisine: "西式料理",
      //   time: "30分鐘",
      //   health: false,
      //   fast: false
      // }],
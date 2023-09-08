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
    axios.get('/thd102/g1/API/Frontend/box.php').then(function (response) {
      let items = response.data;
      console.log(items);
      
      //=============================================
      // 创建一个用于存储已处理数据的对象
      var processedData = {};
      items = items.forEach(function (item) {
        const key = item.name
        if(!processedData[key]){
          processedData[key] = item
        }else{
          if(item.box_category_name === '健康料理' ){
            processedData[key].health = true
          }
          if(item.box_category_name === '快速上菜' ){
            processedData[key].fast = true
          }
        }

      });

      // 将 processedData 的值转换为数组
      items = Object.values(processedData).map(function (item) {
        
        return {
          id: item.id - 8,
          img: "/thd102/g1/images/box-info/" + item.photo_url,
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
// },
const app = Vue.createApp({
    data() {
      return {
        all: [],
        items: [
          {
            id: 1,
            img: "./images/box-info/box-info-ginger.jpg",
            name: "薑汁燒肉",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 2,
            img: "./images/box-info/box-info-sushi.jpg",
            name: "蟹肉棒壽司捲",
            cuisine: "日式料理",
            time: "15分鐘",
            health: true,
            fast: true,
          },
          {
            id: 3,
            img: "./images/box-info/box-info-salad.jpg",
            name: "夏日野薺盛宴",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 4,
            img: "./images/box-info/box-info-pork.jpg",
            name: "糖醋排骨",
            cuisine: "中式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 5,
            img: "./images/box-info/box-info-poke.jpg",
            name: "POKE",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 6,
            img: "./images/box-info/box-info-hamburger.jpg",
            name: "火腿漢堡",
            cuisine: "西式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 7,
            img: "./images/box-info/box-info-dumpling.jpg",
            name: "韭菜豬肉水餃",
            cuisine: "中式料理",
            time: "40分鐘",
            health: true,
            fast: false,
          },
          {
            id: 8,
            img: "./images/box-info/box-info-donburi.jpg",
            name: "牛肉丼飯",
            cuisine: "日式料理",
            time: "30分鐘",
            health: false,
            fast: false,
          },
          {
            id: 9,
            img: "./images/box-info/box-info-curry.jpg",
            name: "牛肉咖哩飯",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 10,
            img: "./images/box-info/box-info-tofu.jpg",
            name: "麻婆豆腐",
            cuisine: "中式料理",
            time: "30分鐘",
            health: false,
            fast: false,
          },
          {
            id: 11,
            img: "./images/box-info/box-info-cornsoup.jpg",
            name: "玉米濃湯",
            cuisine: "西式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 12,
            img: "./images/box-info/box-info-beefhamburger.jpg",
            name: "牛肉漢堡套餐",
            cuisine: "西式料理",
            time: "45分鐘",
            health: false,
            fast: false,
          },
          {
            id: 13,
            img: "./images/box-info/box-info-avocadosalad.jpg",
            name: "酪梨沙拉",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 14,
            img: "./images/box-info/box-info-friedpork.jpg",
            name: "炸豬排",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 15,
            img: "./images/box-info/box-info-ramen.jpg",
            name: "豚骨拉麵",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 16,
            img: "./images/box-info/box-info-taiyaki.jpg",
            name: "鯛魚燒",
            cuisine: "日式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 17,
            img: "./images/box-info/box-info-tempura.jpg",
            name: "炸蝦天婦羅",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 18,
            img: "./images/box-info/box-info-kungpao.jpg",
            name: "宮保雞丁",
            cuisine: "中式料理",
            time: "25分鐘",
            health: false,
            fast: false,
          },
          {
            id: 19,
            img: "./images/box-info/box-info-dongpo.jpg",
            name: "東坡肉",
            cuisine: "中式料理",
            time: "50分鐘",
            health: false,
            fast: false,
          },
          {
            id: 20,
            img: "./images/box-info/box-info-beefnoodle.jpg",
            name: "牛肉麵",
            cuisine: "中式料理",
            time: "50分鐘",
            health: false,
            fast: false,
          },
          {
            id: 21,
            img: "./images/box-info/box-info-spegatti.jpg",
            name: "番茄義大利麵",
            cuisine: "西式料理",
            time: "30分鐘",
            health: false,
            fast: false,
          }

        ],
        currentTag: '',
        firstTimeTag: true,
        itemsPerPage: 6, // 每次新增的商品數量
        displayedItems: 12 // 初始已顯示的商品數量
      };
    },
    methods: {
      show(tag, category, all) {
        // 切換到選中的標籤
        if (this.firstTimeTag) {
          this[all] = this.items;
          this.firstTimeTag = false;
        }
        if (this.currentTag === tag) {
          this.currentTag = "";
          this.displayedItems = 12;
          this.items = this[all];
        } else {
          this.currentTag = tag;
          this.displayedItems = 12;
          // this.items = this[category];
          switch (category) {
            case "western":
              this.items = this.all.filter((tag) => tag.cuisine == '西式料理');
              break;
            case "chinese":
              this.items = this.all.filter((tag) => tag.cuisine == '中式料理');
              break;
            case "japanese":
              this.items = this.all.filter((tag) => tag.cuisine == '日式料理');
              break;
            case "health":
              this.items = this.all.filter((tag) => tag.health == true);
              break;
            case "fast":
              this.items = this.all.filter((tag) => tag.fast == true);
              break;

          }
        }

      },
      loadMoreItems() {
        this.displayedItems += this.itemsPerPage;
      }
    },
    mounted(){
        let urlParams = new URLSearchParams(window.location.search);
        let tag = urlParams.get('tag') ;
        let category = urlParams.get('category') ;
        this.show(tag,category,'all');
        // console.log('aaa');

    }

  });

  app.mount("#my_app");
  app.mount("#article2_app");

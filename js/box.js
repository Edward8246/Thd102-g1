const app = Vue.createApp({
    data() {
      return {
        all: [],
        items: [
          {
            id: 1,
            img: "./images/box/box_ginger.jpg",
            name: "薑汁燒肉",
            color: "purple",
            cuisine: "中式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 2,
            img: "./images/box/box_sushi.jpg",
            name: "蟹肉棒壽司捲",
            color: "blue",
            cuisine: "日式料理",
            time: "15分鐘",
            health: true,
            fast: true,
          },
          {
            id: 3,
            img: "./images/box/box_salad.jpg",
            name: "夏日野薺盛宴",
            color: "green",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 4,
            img: "./images/box/box_pork.jpg",
            name: "糖醋排骨",
            color: "purple",
            cuisine: "中式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 5,
            img: "./images/box/box_poke.jpg",
            name: "POKE",
            color: "green",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 6,
            img: "./images/box/box_hamburger.jpg",
            name: "火腿漢堡",
            color: "green",
            cuisine: "西式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 7,
            img: "./images/box/box_dumpling.jpg",
            name: "韭菜豬肉水餃",
            color: "purple",
            cuisine: "中式料理",
            time: "40分鐘",
            health: true,
            fast: false,
          },
          {
            id: 8,
            img: "./images/box/box_donburi.jpg",
            name: "牛肉丼飯",
            color: "blue",
            cuisine: "日式料理",
            time: "30分鐘",
            health: false,
            fast: false,
          },
          {
            id: 9,
            img: "./images/box/box_curry.jpg",
            name: "牛肉咖哩飯",
            color: "blue",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 10,
            img: "./images/box/box_tofu.jpg",
            name: "麻婆豆腐",
            color: "purple",
            cuisine: "中式料理",
            time: "30分鐘",
            health: false,
            fast: false,
          },
          {
            id: 11,
            img: "./images/box/box_cornsoup.jpg",
            name: "玉米濃湯",
            color: "green",
            cuisine: "西式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 12,
            img: "./images/box/box_beefhamburger.jpg",
            name: "牛肉漢堡套餐",
            color: "green",
            cuisine: "西式料理",
            time: "45分鐘",
            health: false,
            fast: false,
          },
          {
            id: 13,
            img: "./images/box/box_avocadosalad.jpg",
            name: "酪梨沙拉",
            color: "green",
            cuisine: "西式料理",
            time: "20分鐘",
            health: true,
            fast: true,
          },
          {
            id: 14,
            img: "./images/box/box_friedpork.jpg",
            name: "炸豬排",
            color: "blue",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 15,
            img: "./images/box/box_ramen.jpg",
            name: "豚骨拉麵",
            color: "blue",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 16,
            img: "./images/box/box_taiyaki.jpg",
            name: "鯛魚燒",
            color: "blue",
            cuisine: "日式料理",
            time: "35分鐘",
            health: false,
            fast: false,
          },
          {
            id: 17,
            img: "./images/box/box_tempura.jpg",
            name: "炸蝦天婦羅",
            color: "blue",
            cuisine: "日式料理",
            time: "40分鐘",
            health: false,
            fast: false,
          },
          {
            id: 18,
            img: "./images/box/box_kungpao.jpg",
            name: "宮保雞丁",
            color: "purple",
            cuisine: "中式料理",
            time: "25分鐘",
            health: false,
            fast: false,
          },
          {
            id: 19,
            img: "./images/box/box_dongpo.jpg",
            name: "東坡肉",
            color: "purple",
            cuisine: "中式料理",
            time: "50分鐘",
            health: false,
            fast: false,
          },
          {
            id: 20,
            img: "./images/box/box_beefnoodle.jpg",
            name: "牛肉麵",
            color: "purple",
            cuisine: "中式料理",
            time: "50分鐘",
            health: false,
            fast: false,
          },
          {
            id: 21,
            img: "./images/box/box_spegatti.jpg",
            name: "番茄義大利麵",
            color: "green",
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
        console.log('aaa');

    }

  });

  app.mount("#my_app");
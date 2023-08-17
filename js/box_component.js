export default{
    data(){
        return {
            product: [
                {   id:1,
                    name: "薑汁燒肉",
                    img: "./images/box-info/box-info-tofu.jpg",
                    color: "purple",
                    cuisine:"中式料理",
                    health: false,
                    fast: true,
                    price: "188",
                    time: "20分鐘",
                    tool: "平底鍋",
                    intro:"薑燒豬肉是一道傳統的日本料理，結合了豬肉的香嫩與薑汁的辛香，是一道美味又營養的料理。這道菜色香味俱全，適合當作家庭晚餐或宴客招待的佳餚。現在就讓我們來學習如何製作這道美味的薑燒豬肉吧！",
                    ingredients:[
                        {item:"豬肉(建議使用豬里肌肉或肩肉，切成薄片)", num:"500g"},
                        {item:"醬油", num:"3匙"},
                        {item:"日本料理酒(或米酒)", num:"3匙"},
                        {item:"大蒜（切成末狀）", num:"1顆"},
                        {item:"洋蔥（切成薄片）", num:"1顆"},
                        {item:"蔥花(裝飾用)", num:"適量"},
                        {item:"薑汁(將薑切成細絲，擠壓出汁液)", num:"2匙"}

                    ],
                    steps:[
                        {id:1, title:"準備豬肉", do:"將豬肉洗淨，用廚房紙巾擦乾，然後將豬肉切成薄片，厚度約為3到5毫米，備用。"},
                        {id:2, title:"調製薑燒醬汁", do:"在一個碗中，將醬油、日本料酒、薑汁、糖和蜂蜜混合在一起，攪拌均勻，成為薑燒醬汁。"},
                        {id:3, title:"燒烤豬肉", do:"將平底鍋加熱，倒入沙拉油，待油熱後，將豬肉片逐一鋪在平底鍋中，煎至兩面呈金黃色。取出煎好的豬肉，備用。"},
                        {id:4, title:"炒香蔬菜", do:"在同一平底鍋中加入切好的蒜末、洋蔥片、紅甜椒和綠甜椒，用中火炒熟，直至蔬菜變軟。"},
                        {id:5, title:"拌炒豬肉與蔬菜", do:"薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！"},
                        {id:6, title:"裝盤與裝飾", do:"將薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！"}
                    ],
                    tip1:"可以根據個人口味增減糖和蜂蜜的份量，調整甜度。",
                    tip2:"薑燒豬肉應盡快食用，以免過度燉煮影響肉質口感。",
                    tip3:"若喜歡更多蔬菜，可以增加其他蔬菜種類如胡蘿蔔或香菇。",
                    chefName:"橫山一郎",
                    chefIntro:"橫山一郎是一位熱愛料理的資深日本料理大廚，擁有超過25年的廚藝經驗。他在年輕時就對料理產生濃厚的興趣，經過多年的學習與精進，成為了日本料理界的翹楚。橫山一郎對於傳統的日本料理深具造詣，同時也敢於嘗試創新，將傳統料理元素與現代烹飪技巧巧妙結合。",
                    chefImg:"./images/box-info/box-info-chef1.png"


                },{
                    id:2,
                    name: "義大利麵",
                    img: "./images/box-info/box-info-tofu.jpg",
                    color: "purple",
                    cuisine:"中式料理",
                    health: false,
                    fast: true,
                    price: "188",
                    time: "20分鐘",
                    tool: "平底鍋",
                    intro:"薑燒豬肉是一道傳統的日本料理，結合了豬肉的香嫩與薑汁的辛香，是一道美味又營養的料理。這道菜色香味俱全，適合當作家庭晚餐或宴客招待的佳餚。現在就讓我們來學習如何製作這道美味的薑燒豬肉吧！",
                    ingredients:[
                        {item:"豬肉(建議使用豬里肌肉或肩肉，切成薄片)", num:"500g"},
                        {item:"醬油", num:"3匙"},
                        {item:"日本料理酒(或米酒)", num:"3匙"},
                        {item:"大蒜（切成末狀）", num:"1顆"},
                        {item:"洋蔥（切成薄片）", num:"1顆"},
                        {item:"蔥花(裝飾用)", num:"適量"},
                        {item:"薑汁(將薑切成細絲，擠壓出汁液)", num:"2匙"}

                    ],
                    steps:[
                        {id:1, title:"準備豬肉", do:"將豬肉洗淨，用廚房紙巾擦乾，然後將豬肉切成薄片，厚度約為3到5毫米，備用。"},
                        {id:2, title:"調製薑燒醬汁", do:"在一個碗中，將醬油、日本料酒、薑汁、糖和蜂蜜混合在一起，攪拌均勻，成為薑燒醬汁。"},
                        {id:3, title:"燒烤豬肉", do:"將平底鍋加熱，倒入沙拉油，待油熱後，將豬肉片逐一鋪在平底鍋中，煎至兩面呈金黃色。取出煎好的豬肉，備用。"},
                        {id:4, title:"炒香蔬菜", do:"在同一平底鍋中加入切好的蒜末、洋蔥片、紅甜椒和綠甜椒，用中火炒熟，直至蔬菜變軟。"},
                        {id:5, title:"拌炒豬肉與蔬菜", do:"薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！"},
                        {id:6, title:"裝盤與裝飾", do:"將薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！"}
                    ],
                    tip1:"可以根據個人口味增減糖和蜂蜜的份量，調整甜度。",
                    tip2:"薑燒豬肉應盡快食用，以免過度燉煮影響肉質口感。",
                    tip3:"若喜歡更多蔬菜，可以增加其他蔬菜種類如胡蘿蔔或香菇。",
                    chefName:"橫山一郎",
                    chefIntro:"橫山一郎是一位熱愛料理的資深日本料理大廚，擁有超過25年的廚藝經驗。他在年輕時就對料理產生濃厚的興趣，經過多年的學習與精進，成為了日本料理界的翹楚。橫山一郎對於傳統的日本料理深具造詣，同時也敢於嘗試創新，將傳統料理元素與現代烹飪技巧巧妙結合。",
                    chefImg:"./images/box-info/box-info-chef1.png"


                }
                ]
        };
    },
    mounted() {
        const tag = this.$route.params.tag;
        const id = this.$route.params.id;
        // 根據 tag 和 id 的值顯示相應的商品詳細資訊
        // 可以使用 v-for 渲染商品列表，然後根據 tag 和 id 篩選商品
      },
      template: `    <div class="info-wrapper">
      <div class="info-top">
          <div class="image">
              <img :src="product[0].img" alt="">
          </div>
          <div class="select-tag-r">
              <a href="#buy" class="select-r">訂購</a>
              <a href="#ingred" class="select-r">食材</a>
              <a href="#step" class="select-r">步驟</a>
          </div>
  
      </div>
      <div class="box-info-wrapper ">
          <section class="select-tag">
              <a href="#buy" class="select">訂購</a>
              <a href="#ingred" class="select">食材</a>
              <a href="#step" class="select">步驟</a>
          </section>
  
          <section id="buy" class="buy">
              <div class="info-left">
                  <div class="image">
                      <img :src="product[0].img" alt="">
                  </div>
                  <div class="info-tags">
                      <div class="ft-purple">{{ product[0].cuisine }}</div>
                      <div v-if="fast" :class="'ft-'+product[0].color">快速料理</div>
                      <div v-if="health" class="ft-yellow">快速料理</div>
  
                  </div>
              </div>
  
              <div class="info-right ">
                  <div class="info-name">
                      <h2>{{ product[0].name }}</h2>
                      <h4 class="r-price">'$'{{product[0].price}}</h4>
                  </div>
  
                  <div class="info-detail">
                      <div class="icon-text">
                          <i class="fa-solid fa-clock"></i>
                          <span>{{ product[0].time }}</span>
                      </div>
                      <div class="icon-text">
                          <i class="fa-solid fa-user"></i>
                          <span>1人份</span>
                      </div>
                      <div class="icon-text use">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                              <path d="M8.41667 0.0625C6.94167 0.0625 5.64167 0.89125 5.225 2.09542C4.78333 1.92542 4.31667 1.83333 3.83333 1.83333C2.94928 1.83333 2.10143 2.13184 1.47631 2.6632C0.851189 3.19455 0.5 3.91522 0.5 4.66667C0.501974 5.29413 0.748328 5.90339 1.2006 6.3993C1.65287 6.89521 2.2856 7.24988 3 7.40792V12.4583H13.8333V7.40792C15.3 7.08208 16.3333 5.95583 16.3333 4.66667C16.3333 3.91522 15.9821 3.19455 15.357 2.6632C14.7319 2.13184 13.8841 1.83333 13 1.83333C12.5167 1.83333 12.05 1.92542 11.6083 2.09542C11.1917 0.89125 9.89167 0.0625 8.41667 0.0625ZM8 6.4375H8.83333V11.3958H8V6.4375ZM5.5 7.85417H6.33333V11.3958H5.5V7.85417ZM10.5 7.85417H11.3333V11.3958H10.5V7.85417ZM3 13.1667V13.875C3 14.0629 3.0878 14.243 3.24408 14.3759C3.40036 14.5087 3.61232 14.5833 3.83333 14.5833H13C13.221 14.5833 13.433 14.5087 13.5893 14.3759C13.7455 14.243 13.8333 14.0629 13.8333 13.875V13.1667H3Z" fill="#255359"/>
                              </svg>
                          <span>{{ product[0].tool }}</span>
                      </div>
                  </div>
                  <p class="info-text">
                      {{ product[0].intro }}
                  </p>
                  <h4 class="box-price">
                      '$'{{ product[0].price }}
                  </h4>
                  <div class="btn-number">
                      <div class="b-n b-sub col-2"></div>
                      <input class="text col-8" type="text" value="1" readonly="readonly">
                      <div class="b-n b-add col-2"></div>
                  </div>
                  <div class="btn-group">
                      <button class="b-buy b-left colte-6">加入購物車</button>
                      <button class="b-buy b-right colte-6">立即購買</button>
                  </div>
  
              </div>
          </section>
          <h5 id="ingred">食材</h5>
          <section class="ingredients">
  
              <ul class="items colte-5">
                  <li v-for=" ingredient in product[0].ingredients" :key="ingredient.name">
                       <span class="item-name ">{{ingredient.item}}</span>
                      <span class="item-num">{{ ingredient.num }}</span>
                  </li>
                  
              </ul>
  
  
              <div class="image colte-5">
                  <img src="./images/box-info/box-info-Ingredients.jpg" alt="">
              </div>
          </section>
          <h5 id="step">料理步驟</h5>
          <ul class="steps">
              <li v-for="step in product[0].steps" :key="id" class="step">
                  <span>{{ step.id }}</span>
                  <div class="step-text">
                      <h6>{{ step.title }}</h6>
                      <p>{{ step.do }}</p>
                  </div>
              </li>
          </ul>
          <div class="tips ">
              <div class="tip-icon">
                  <i class="fa-regular fa-lightbulb"></i>
                  <h5>小撇步</h5>
              </div>
              <ul class="tip-text">
                  <li>{{ product[0].tip1 }}</li>
                  <li>{{ product[0].tip2 }}</li>
                  <li>{{ product[0].tip3 }}</li>
              </ul>
          </div>
  
          <h5 class="chef-title">主廚介紹</h5>
          <div class="chef">
              <div class="image ">
                  <img :src="product[0].chefImg" alt="">
              </div>
              <div class="chef-name ">
                  <h4>{{ product[0].chefName }}</h4>
                  <p>{{ product[0].chefIntro }}
                  </p>
              </div>
          </div>
      </div>
    </div>`

}
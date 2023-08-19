const activity = Vue.createApp({
            data(){
                return{
                    dateNow: Date.now(),
                    currentTag: "",
                    displayedItems: 6,
                    itemsPerPage: 6,
                    noclick: false,
                    //index: null,
                    arr_act: [
                    {
                        tag: '新品宣傳',
                        name: '咖哩飯新登場',
                        date: '2023-07-25 14:00',
                        dur: '2 小時',
                        img:'./images/activity/activity-curry.jpg',
                        loc: '馬吉小簡商場',
                        adr: '台北市快樂路123號4樓'
                    },
                    {
                        tag: '私廚教學',
                        name: '健康素食料理',
                        date: '2023-08-10 18:30',
                        dur: '2.5 小時',
                        img:'./images/activity/activity-veggie.jpg',
                        loc: 'Hako 小廚房',
                        adr: '新北市美食街456巷2號'
                    },
                    {
                        tag: '私廚教學',
                        name: '泰式料理大師班',
                        date: '2023-10-08 17:00',
                        dur: '3 小時',
                        img:'./images/activity/activity-thai.jpg',
                        loc: 'Hako 小廚房',
                        adr: '新北市美食街456巷2號'
                    },
                    {
                        tag: '共享餐桌',
                        name: '國際美食交流會',
                        date: '2023-09-05 19:00',
                        dur: '3 小時',
                        img:'./images/activity/activity-inter.jpg',
                        loc: '紹育愛德華A店',
                        adr: '台北市繁華路789號5樓'
                    },
                    {
                        tag: '新品宣傳',
                        name: '卡波納拉義大利麵',
                        date: '2023-09-15 15:30',
                        dur: '2 小時',
                        img:'./images/activity/activity-carbonara.jpg',
                        loc: '馬吉小簡商場',
                        adr: '台北市快樂路123號4樓'
                    },
                    {
                        tag: "新品宣傳",
                        name: "麻婆豆腐嘗鮮",
                        date: "2023-09-01 14:00",
                        dur: "2 小時",
                        img:'./images/box/box_tofu.jpg',
                        loc:"飄香小店",
                        adr: "台北市信義區光復南路123號"
                    },
                    {
                        tag: "私廚教學",
                        name: "精緻法式料理教學",
                        date: "2023-09-10 18:30",
                        dur: "2.5 小時",
                        img:'./images/activity/activity-sept.jpg',
                        loc:"Hako 小廚房",
                        adr: "台北市大安區敦化南路一段456巷7號"
                    },
                    {
                        tag: "共享餐桌",
                        name: "九月之友共享之夜",
                        date: "2023-09-20 19:00",
                        dur: "3 小時",
                        img:'./images/activity/activity-sept.jpg',
                        loc:"紹育愛德華A店",
                        adr: "台北市中山區民生東路三段789號"
                    }
                    
                    ],

                    tags:[
                        {
                            id:'tag1',
                            class: 'tb-red',
                            name: '新品宣傳'
                        },
                        {
                            id:'tag1',
                            class: 'tb-green',
                            name: '私廚教學'
                        },
                        {
                            id:'tag1',
                            class: 'tb-purple',
                            name: '共享餐桌'
                        }
                    ],
                    filteredList:[
                        {
                            id: 1,
                            tag: '新品宣傳',
                            name: '咖哩飯新登場',
                            date: '2023-07-25 14:00',
                            dur: '2 小時',
                            img:'./images/activity/activity-curry.jpg',
                            loc: '馬吉小簡商場',
                            adr: '台北市快樂路123號4樓',
                            act_desc: '品味極致，咖哩飯新登場!<br><br>我們引以為傲地推出全新的超好吃咖哩飯，將您帶入一場香氣四溢的美食饗宴！每一口都充滿了濃郁的咖哩風味和精心挑選的新鮮食材，讓您的味蕾在此翻飛起舞。為了讓您的咖哩飯體驗更上一層樓，我們特別邀請了優秀私廚，將帶您一同展開美食的冒險之旅。無論您是烹飪新手還是經驗豐富的大廚，私廚們將親切地引導您，讓您在烹飪的過程中充分發揮創意，創造出屬於自己獨一無二的咖哩傑作。<br><br>我們相信，飲食不僅是一種生活方式，更是一種獨特的藝術。踏入我們的美食天地，您將與優雅的咖哩風味交織，感受到來自東方的濃情味道。讓我們的咖哩飯帶您展開一段難忘的味覺之旅，尋找屬於自己的完美滋味。<br><br>別再猶豫，現在就加入我們的咖哩飯私廚班，讓味蕾嘗到前所未有的驚艷，開啟一個風味與創意交織的美食之旅！',
                            loc_desc: '活動場地廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。'
                        },
                        {
                            id: 2,
                            tag: '私廚教學',
                            name: '健康素食料理',
                            date: '2023-08-10 18:30',
                            dur: '2.5 小時',
                            img:'./images/activity/activity-veggie.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號'
                        },
                        {
                            id: 3,
                            tag: '私廚教學',
                            name: '泰式料理大師班',
                            date: '2023-10-08 17:00',
                            dur: '3 小時',
                            img:'./images/activity/activity-thai.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號'
                        },
                        {
                            id:4,
                            tag: '共享餐桌',
                            name: '國際美食交流會',
                            date: '2023-09-05 19:00',
                            dur: '3 小時',
                            img:'./images/activity/activity-inter.jpg',
                            loc: '紹育愛德華A店',
                            adr: '台北市繁華路789號5樓'
                        },
                        {
                            id: 5,
                            tag: '新品宣傳',
                            name: '卡波納拉義大利麵',
                            date: '2023-09-15 15:30',
                            dur: '2 小時',
                            img:'./images/activity/activity-carbonara.jpg',
                            loc: '馬吉小簡商場',
                            adr: '台北市快樂路123號4樓'
                        },
                        {
                            id: 6,
                            tag: "新品宣傳",
                            name: "麻婆豆腐嘗鮮",
                            date: "2023-09-01 14:00",
                            dur: "2 小時",
                            img:'./images/box/box_tofu.jpg',
                            loc:"飄香小店",
                            adr: "台北市信義區光復南路123號"
                        },
                        {
                            id: 7,
                            tag: "私廚教學",
                            name: "精緻法式料理教學",
                            date: "2023-09-10 18:30",
                            dur: "2.5 小時",
                            img:'./images/activity/activity-french.jpg',
                            loc:"Hako 小廚房",
                            adr: "台北市大安區敦化南路一段456巷7號"
                        },
                        {
                            id: 8,
                            tag: "共享餐桌",
                            name: "九月之友共享之夜",
                            date: "2023-09-20 19:00",
                            dur: "3 小時",
                            img:'./images/activity/activity-sept.jpg',
                            loc:"紹育愛德華A店",
                            adr: "台北市中山區民生東路三段789號"
                        }                    
                    ],
                    idPort: 0

                }
            },
            methods:{
                tagColor(tag){
                    switch (tag) {
                        case "新品宣傳":
                            return "ft-red";
                        case "共享餐桌":
                            return "ft-purple"
                        case "私廚教學":
                            return "ft-green"
                    }
                },
                tagColor2(tag){
                    switch (tag) {
                        case "新品宣傳":
                            return "tb-red";
                        case "共享餐桌":
                            return "tb-purple"
                        case "私廚教學":
                            return "tb-green"
                    }
                },
                show(curr, event, type){
                        
                        let click_el = event.target;
                        // console.log(click_el);


                        if(this.currentTag == curr && click_el.classList.contains(`tb${curr}On`)){
                            this.currentTag = '';
                            this.filteredList = this.arr_act;
        
                        }else{
                            this.currentTag = curr;
                            
                            switch (type){
                                case "newProd":
                                    this.filteredList = this.arr_act.filter((tag)=> tag.tag == '新品宣傳');
                                    break;
                                case "cook":
                                    this.filteredList = this.arr_act.filter((tag)=> tag.tag == '私廚教學');
                                    break;
                                case "share":
                                    this.filteredList = this.arr_act.filter((tag)=> tag.tag == '共享餐桌');
                                    break;
                                default: this.filteredList = this.arr_act;
                                break;
                            }
                        };
                        
                },
                loadMore(){
                   this.displayedItems += this.itemsPerPage 
                },
                disable(date, e){
                    // e.preventDefault();
                    // console.log(e.target.closest('a').classList.add('disabled'));
                    
                    if(date <= this.dateNow){
                        e.preventDefault();
                        // e.target.closest('a').classList.add('disabled');
        
                    }
                   
                },
                buttonDisable(date){
                    if(date <= this.dateNow){
                        return true;
                    }
                }
                
            },
            mounted(){
                let urlParams = new URLSearchParams(window.location.search);
                let id = parseInt(urlParams.get('id')); 
                this.idPort = id -1
                // if (!isNaN(index)) {
                //     this.filteredList = [this.arr_act[index]]; 
                // }

            }
        });

        activity.mount('#actInfo');
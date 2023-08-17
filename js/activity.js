const activity = Vue.createApp({
            data(){
                return{
                    currentTag: "",
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
                        }
                        
                    ]

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

                        

                }
            },
        });

        activity.mount('#test');
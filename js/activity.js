  const activity = Vue.createApp({
            data(){
                return{
                    arr_act: [
                    {
                        tag: '新品宣傳',
                        name: '咖哩飯新登場',
                        date: '2023-07-25 14:00',
                        dur: '2 小時',
                        img:'./images/activity-2.jpg',
                        loc: '馬吉小簡商場',
                        adr: '台北市快樂路123號4樓'
                    },
                    {
                        tag: '私廚教學',
                        name: '健康素食料理',
                        date: '2023-08-10 18:30',
                        dur: '2.5 小時',
                        img:'./images/activity-1.jpg',
                        loc: 'Hako 小廚房',
                        adr: '新北市美食街456巷2號'
                    },
                    {
                        tag: '私廚教學',
                        name: '泰式料理大師班',
                        date: '2023-10-08 17:00',
                        dur: '3 小時',
                        img:'./images/activity-1.jpg',
                        loc: 'Hako 小廚房',
                        adr: '新北市美食街456巷2號'
                    },
                    {
                        tag: '共享餐桌',
                        name: '國際美食交流會',
                        date: '2023-09-05 19:00',
                        dur: '3 小時',
                        img:'./images/activity-1.jpg',
                        loc: '紹育愛德華A店',
                        adr: '台北市繁華路789號5樓'
                    },
                    {
                        tag: '新品宣傳',
                        name: '秋季時尚專場',
                        date: '2023-09-15 15:30',
                        dur: '2 小時',
                        img:'./images/activity-1.jpg',
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
                }
            },
        });

        activity.mount('#test');
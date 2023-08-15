  const activity = Vue.createApp({
            data(){
                return{
                    arr_act: [
                    {
                        tag: '新品宣傳',
                        name: '夏日清涼特惠',
                        date: '2023-07-25 14:00',
                        dur: '2 小時',
                        img:'./images/activity-1.jpg',
                        loc: '愛德華商場',
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
                        loc: '購物中心 A 店',
                        adr: '台北市繁華路789號5樓'
                    },
                    {
                        tag: '新品宣傳',
                        name: '秋季時尚專場',
                        date: '2023-09-15 15:30',
                        dur: '2 小時',
                        img:'./images/activity-1.jpg',
                        loc: '國際廚藝學院',
                        adr: '新北市烹飪路101號，大樓C棟'
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
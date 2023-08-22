const activity = Vue.createApp({
            data(){
                return{
                    dateNow: Date.now(),
                    currentTag: "",
                    displayedItems: 6,
                    itemsPerPage: 6,
                    idPort: 0,
                    arr_act: [
                        {
                            id: 1,
                            tag: '新品宣傳',
                            name: '咖哩飯新登場',
                            date: '2023-07-25 14:00',
                            dur: '2 小時',
                            price: '1200',
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
                            price: '1200',
                            img:'./images/activity/activity-veggie.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號',
                            act_desc: "這個課程是為了追求美味和健康均衡的您而量身打造的特殊經驗。透過這次課程，我們將帶您進入素食的奇幻世界，一同揭開營養豐富的食材如何幻化成令人讚嘆的美味佳餚。<br><br>無論您是素食的忠實愛好者，還是想增添多樣蔬果攝取的選擇，這門課程將滿足您的味蕾和求知欲。我們優秀的素食廚師們將分享多年的烹飪心得，教您如何選擇最新鮮的有機食材，並運用創意手法，將它們轉化成色彩繽紛、口感豐富的美饌。<br><br>從美味的素食漢堡到垂涎的蔬菜炒飯，我們將探索各式料理風格和烹飪技巧，讓您在學習的同時享受無限創意的烹飪樂趣。此外，課程將深入討論素食的營養價值，指導您如何巧妙搭配食材，確保在追求美味的同時也能獲得豐盛的營養。",
                            loc_desc: "Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id: 3,
                            tag: '私廚教學',
                            name: '泰式料理大師班',
                            date: '2023-10-08 17:00',
                            dur: '3 小時',
                            price: '1200',
                            img:'./images/activity/activity-thai.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號',
                            act_desc: "來參加我們為您精心設計的「泰式料理大師班」私廚教學課程吧！這個課程將帶您踏上一段美食的探索之旅，專注於泰國料理的烹飪藝術與文化。<br><br>在這趟獨特的味覺之旅中，您將有機會學習到如何以新鮮的香料和食材，調配出道道美味的泰國菜餚。透過專業的大師指導，您將逐步掌握泰式料理的烹調技巧，並將這些技巧融入到您的家庭廚藝中。<br><br>我們的課程強調實踐與互動，您將親自參與每道菜餚的製作過程。這不僅僅是一次學習，更是一次動手體驗的機會。透過親身操作，您將更深刻地理解每個步驟的重要性，並享受創作美味的成就感。<br><br>除了烹飪技巧，我們的課程也將深入探討泰國料理背後的故事和文化元素。您將了解每道菜餚背後的歷史和意義，讓您的料理之旅更加豐富多彩。<br><br>無論您是烹飪愛好者、美食探索家，還是想要豐富自己廚藝技能的人，這個課程都將帶給您一個充滿美味和知識的難忘經驗。讓我們一同穿越泰國的烹飪文化，開展一場美味的冒險吧！",
                            loc_desc: "Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id:4,
                            tag: '共享餐桌',
                            name: '國際美食交流會',
                            date: '2023-09-05 19:00',
                            dur: '3 小時',
                            price: '1200',
                            img:'./images/activity/activity-inter.jpg',
                            loc: '紹育愛德華A店',
                            adr: '台北市繁華路789號5樓',
                            act_desc:"在這個迷人的場所，世界各地的美食文化將如一幅繽紛的畫卷展現在您眼前。這裡不僅是一個品味美食的舞台，更像是一場璀璨的國際美食博覽會，等待著您來一一品味多種國度的經典佳餚，徹底點亮您的味蕾星空。<br><br>我們的專業廚師團隊，將以他們紮實的烹飪技藝，引領您穿越不同國家的烹飪奧秘，揭示那些令人垂涎的秘訣。而更令人興奮的是，您將受邀親身參與這場國際美食的交流盛會，親手嘗試製作多種迷人美味。在這裡，您將與來自世界各地的烹飪愛好者互動，彼此交流心得，分享家鄉美食的美好，彷彿跨足國界，豐富了您的飲食視野，也豐潤了每一次的味蕾冒險。",
                            loc_desc:"位於台北市繁華的中山區，是一個融合優雅氛圍和美食文化的綜合性場地。這個場地不僅提供豐富多樣的美食體驗，還擁有令人印象深刻的室內設計，為您的每次到訪帶來難忘的回憶。"
                        },
                        {
                            id: 5,
                            tag: '新品宣傳',
                            name: '卡波納拉義大利麵',
                            date: '2023-09-15 15:30',
                            dur: '2 小時',
                            price: '1200',
                            img:'./images/activity/activity-carbonara.jpg',
                            loc: '馬吉小簡商場',
                            adr: '台北市快樂路123號4樓',
                            act_desc:"帶您品味義大利最經典的麵食之一，探索卡波納拉醬的美味風味與獨特魅力。<br><br>我們自豪地呈獻這款口感豐富、風味撲鼻的卡波納拉義大利麵，這是義大利料理中的一個經典代表。我們精心選用新鮮的食材和優質的麵條，搭配原汁原味的卡波納拉醬，為您帶來一場美食的盛宴。<br><br>這個活動不僅僅是一場品味饗宴，更是一次探索義大利美食文化的契機。我們的專業廚師將與您分享卡波納拉醬的起源故事、烹飪秘訣，並親自示範如何製作出一道完美的卡波納拉義大利麵。<br><br>您將有機會親自參與烹飪過程，一同學習如何調配卡波納拉醬的各種成分，以及如何掌握烹飪的火候和技巧。無論您是烹飪新手還是有豐富經驗的大廚，這個活動都將為您帶來新的驚喜和啟發。<br><br>讓我們一同沉浸在卡波納拉的香氣中，感受義大利美食的魅力。這個活動不僅會滿足您的味蕾，更將帶您走進一個充滿熱情和創意的美食世界。無論您是美食愛好者還是想要開拓味蕾的冒險家，千萬不要錯過這個難得的機會！",
                            loc_desc:"「馬吉小簡商場」位於繁華市中心，為您提供舒適和現代化的環境，適合舉辦各種不同類型的活動。<br><br>商場內部設施完善，設備先進，包括寬敞的活動場地、專業廚房以及舒適的用餐區。這些設施使我們成為一個理想的場地，適合舉辦各種大小活動，無論是工作坊、聚會還是課程。"
                        },
                        {
                            id: 6,
                            tag: "新品宣傳",
                            name: "麻婆豆腐嘗鮮",
                            date: "2023-09-01 14:00",
                            dur: "2 小時",
                            price: '1200',
                            img:'./images/box/box_tofu.jpg',
                            loc:"飄香小店",
                            adr: "台北市信義區光復南路123號",
                            act_desc:"「麻婆豆腐」融合了麻辣和鮮香的風味，以其濃郁的味道和豐富的口感在美食愛好者之間廣受喜愛。<br><br>我們將「麻婆豆腐嘗鮮」這道經典菜餚提升到了一個全新的境界。豆腐的柔軟與肉醬的香辣在舌尖上交融，帶來一種層次豐富的味覺體驗。每一口都帶著微妙的辣度，充滿了川菜獨特的風味。<br><br>廚師們精心挑選新鮮的食材，運用經典的川味調味料和秘制的配方，將豆腐與香辣醬汁完美融合。豆腥鮮美，醬汁濃郁，配合上一些嫩嫩的肉末，形成了這道經典的「麻婆豆腐嘗鮮」。<br><br>無論您是辛辣愛好者還是對於麻辣料理的新手，我們的「麻婆豆腐嘗鮮」都將是您無法抗拒的美味選擇。來到我們的「飄香小店」，品味這道美味的經典川菜，讓您的味蕾感受到一場香辣的饗宴。",
                            loc_desc:"位於台北市信義區的「飄香小店」是一個引人入勝的美食天地，專注於帶給您獨特的餐飲體驗。<br><br>我們以追求食材的品質和烹飪的創意為己任，致力於將最新鮮、最美味的食材轉化為令人驚艷的美食佳餚。每道菜品都經過我們精心挑選和巧手烹調，旨在為您呈現獨一無二的味覺體驗。"
                        },
                        {
                            id: 7,
                            tag: "私廚教學",
                            name: "精緻法式料理教學",
                            date: "2023-09-10 18:30",
                            dur: "2.5 小時",
                            price: '1200',
                            img:'./images/activity/activity-french.jpg',
                            loc:"Hako 小廚房",
                            adr: "台北市大安區敦化南路一段456巷7號",
                            act_desc:"誠摯邀請您踏入法國美食的奇妙世界。這是一場為熱愛美食與烹飪藝術的您所度身訂造的珍貴體驗。<br><br>在這個課程中，我們將帶您穿越法國的鄉間小徑和巷弄餐廳，品味那些經典的法式美味。從傳統的布列塔尼蘋果派到經典的波爾多燉牛肉，您將學會如何用精湛的廚藝將這些美味帶到您的餐桌上。<br><br>我們的專業法式廚師將親自指導您，從基本的刀功技巧到複雜的調味技法，讓您深入了解法國料理的精髓。您將有機會親手製作道道美味，並在學習的過程中體會到烹飪的樂趣與滿足感。<br><br>不僅如此，我們還將深入探討法國飲食文化的背後故事，讓您更加融入這個迷人的世界。無論您是烹飪初學者還是經驗豐富的廚藝愛好者，「精緻法式料理教學」課程都將帶給您一場美味和知識的雙重饗宴。<br><br>讓我們一同探索法式烹飪的奧秘，將優雅的法國風味帶進您的廚房，讓每一道料理都成為一場美味的藝術饗宴。",
                            loc_desc:"Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id: 8,
                            tag: "共享餐桌",
                            name: "秋季共享之夜",
                            date: "2023-09-20 19:00",
                            dur: "3 小時",
                            price: '1200',
                            img:'./images/activity/activity-sept.jpg',
                            loc:"紹育愛德華A店",
                            adr: "台北市中山區民生東路三段789號",
                            act_desc:"隨著涼爽的秋風吹拂而來，秋季食物成為了大自然的恩賜，為我們帶來了一系列美味的享受。在這個季節裡，大自然的豐收將各種色彩鮮豔、風味豐富的食材呈現在我們的餐桌上。<br><br>秋季的果實成熟了，滿園的蘋果、梨子、葡萄和柿子都散發著迷人的香氣。您可以品嚐到多汁的水果，或是將它們加入到各種料理中，為菜餚增添獨特的風味。<br><br>蔬菜也在秋季達到了最美的時刻。色彩斑斕的南瓜、紅蘿蔔、甜菜根和菠菜等等，不僅是豐收的象徵，更是健康飲食的重要組成部分。這些蔬菜富含維生素和抗氧化劑，不僅可以為您的身體提供營養，還能為菜餚增添豐富的色彩和口感。最後，別忘了秋季的節慶食物，如感恩節的火雞、萬聖節的南瓜派和中秋節的月餅。這些特別的美食不僅滿足味蕾，更代表著文化和情感的交流。<br><br>總之，秋季食物帶來了無限的可能性，無論您是享受自然的恩賜，還是探索烹飪的樂趣，都能在這個季節找到令人愉悅的味道和體驗。讓我們一同迎接秋天，享受這個美食的季節吧！",
                            loc_desc:"位於台北市繁華的中山區，是一個融合優雅氛圍和美食文化的綜合性場地。這個場地不僅提供豐富多樣的美食體驗，還擁有令人印象深刻的室內設計，為您的每次到訪帶來難忘的回憶。"
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
                            price: '1200',
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
                            price: '1200',
                            img:'./images/activity/activity-veggie.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號',
                            act_desc: "這個課程是為了追求美味和健康均衡的您而量身打造的特殊經驗。透過這次課程，我們將帶您進入素食的奇幻世界，一同揭開營養豐富的食材如何幻化成令人讚嘆的美味佳餚。<br><br>無論您是素食的忠實愛好者，還是想增添多樣蔬果攝取的選擇，這門課程將滿足您的味蕾和求知欲。我們優秀的素食廚師們將分享多年的烹飪心得，教您如何選擇最新鮮的有機食材，並運用創意手法，將它們轉化成色彩繽紛、口感豐富的美饌。<br><br>從美味的素食漢堡到垂涎的蔬菜炒飯，我們將探索各式料理風格和烹飪技巧，讓您在學習的同時享受無限創意的烹飪樂趣。此外，課程將深入討論素食的營養價值，指導您如何巧妙搭配食材，確保在追求美味的同時也能獲得豐盛的營養。",
                            loc_desc: "Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id: 3,
                            tag: '私廚教學',
                            name: '泰式料理大師班',
                            date: '2023-10-08 17:00',
                            dur: '3 小時',
                            price: '1200',
                            img:'./images/activity/activity-thai.jpg',
                            loc: 'Hako 小廚房',
                            adr: '新北市美食街456巷2號',
                            act_desc: "來參加我們為您精心設計的「泰式料理大師班」私廚教學課程吧！這個課程將帶您踏上一段美食的探索之旅，專注於泰國料理的烹飪藝術與文化。<br><br>在這趟獨特的味覺之旅中，您將有機會學習到如何以新鮮的香料和食材，調配出道道美味的泰國菜餚。透過專業的大師指導，您將逐步掌握泰式料理的烹調技巧，並將這些技巧融入到您的家庭廚藝中。<br><br>我們的課程強調實踐與互動，您將親自參與每道菜餚的製作過程。這不僅僅是一次學習，更是一次動手體驗的機會。透過親身操作，您將更深刻地理解每個步驟的重要性，並享受創作美味的成就感。<br><br>除了烹飪技巧，我們的課程也將深入探討泰國料理背後的故事和文化元素。您將了解每道菜餚背後的歷史和意義，讓您的料理之旅更加豐富多彩。<br><br>無論您是烹飪愛好者、美食探索家，還是想要豐富自己廚藝技能的人，這個課程都將帶給您一個充滿美味和知識的難忘經驗。讓我們一同穿越泰國的烹飪文化，開展一場美味的冒險吧！",
                            loc_desc: "Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id:4,
                            tag: '共享餐桌',
                            name: '國際美食交流會',
                            date: '2023-09-05 19:00',
                            dur: '3 小時',
                            price: '1200',
                            img:'./images/activity/activity-inter.jpg',
                            loc: '紹育愛德華A店',
                            adr: '台北市繁華路789號5樓',
                            act_desc:"在這個迷人的場所，世界各地的美食文化將如一幅繽紛的畫卷展現在您眼前。這裡不僅是一個品味美食的舞台，更像是一場璀璨的國際美食博覽會，等待著您來一一品味多種國度的經典佳餚，徹底點亮您的味蕾星空。<br><br>我們的專業廚師團隊，將以他們紮實的烹飪技藝，引領您穿越不同國家的烹飪奧秘，揭示那些令人垂涎的秘訣。而更令人興奮的是，您將受邀親身參與這場國際美食的交流盛會，親手嘗試製作多種迷人美味。在這裡，您將與來自世界各地的烹飪愛好者互動，彼此交流心得，分享家鄉美食的美好，彷彿跨足國界，豐富了您的飲食視野，也豐潤了每一次的味蕾冒險。",
                            loc_desc:"位於台北市繁華的中山區，是一個融合優雅氛圍和美食文化的綜合性場地。這個場地不僅提供豐富多樣的美食體驗，還擁有令人印象深刻的室內設計，為您的每次到訪帶來難忘的回憶。"
                        },
                        {
                            id: 5,
                            tag: '新品宣傳',
                            name: '卡波納拉義大利麵',
                            date: '2023-09-15 15:30',
                            dur: '2 小時',
                            price: '1200',
                            img:'./images/activity/activity-carbonara.jpg',
                            loc: '馬吉小簡商場',
                            adr: '台北市快樂路123號4樓',
                            act_desc:"帶您品味義大利最經典的麵食之一，探索卡波納拉醬的美味風味與獨特魅力。<br><br>我們自豪地呈獻這款口感豐富、風味撲鼻的卡波納拉義大利麵，這是義大利料理中的一個經典代表。我們精心選用新鮮的食材和優質的麵條，搭配原汁原味的卡波納拉醬，為您帶來一場美食的盛宴。<br><br>這個活動不僅僅是一場品味饗宴，更是一次探索義大利美食文化的契機。我們的專業廚師將與您分享卡波納拉醬的起源故事、烹飪秘訣，並親自示範如何製作出一道完美的卡波納拉義大利麵。<br><br>您將有機會親自參與烹飪過程，一同學習如何調配卡波納拉醬的各種成分，以及如何掌握烹飪的火候和技巧。無論您是烹飪新手還是有豐富經驗的大廚，這個活動都將為您帶來新的驚喜和啟發。<br><br>讓我們一同沉浸在卡波納拉的香氣中，感受義大利美食的魅力。這個活動不僅會滿足您的味蕾，更將帶您走進一個充滿熱情和創意的美食世界。無論您是美食愛好者還是想要開拓味蕾的冒險家，千萬不要錯過這個難得的機會！",
                            loc_desc:"「馬吉小簡商場」位於繁華市中心，為您提供舒適和現代化的環境，適合舉辦各種不同類型的活動。<br><br>商場內部設施完善，設備先進，包括寬敞的活動場地、專業廚房以及舒適的用餐區。這些設施使我們成為一個理想的場地，適合舉辦各種大小活動，無論是工作坊、聚會還是課程。"
                        },
                        {
                            id: 6,
                            tag: "新品宣傳",
                            name: "麻婆豆腐嘗鮮",
                            date: "2023-09-01 14:00",
                            dur: "2 小時",
                            price: '1200',
                            img:'./images/box/box_tofu.jpg',
                            loc:"飄香小店",
                            adr: "台北市信義區光復南路123號",
                            act_desc:"「麻婆豆腐」融合了麻辣和鮮香的風味，以其濃郁的味道和豐富的口感在美食愛好者之間廣受喜愛。<br><br>我們將「麻婆豆腐嘗鮮」這道經典菜餚提升到了一個全新的境界。豆腐的柔軟與肉醬的香辣在舌尖上交融，帶來一種層次豐富的味覺體驗。每一口都帶著微妙的辣度，充滿了川菜獨特的風味。<br><br>廚師們精心挑選新鮮的食材，運用經典的川味調味料和秘制的配方，將豆腐與香辣醬汁完美融合。豆腥鮮美，醬汁濃郁，配合上一些嫩嫩的肉末，形成了這道經典的「麻婆豆腐嘗鮮」。<br><br>無論您是辛辣愛好者還是對於麻辣料理的新手，我們的「麻婆豆腐嘗鮮」都將是您無法抗拒的美味選擇。來到我們的「飄香小店」，品味這道美味的經典川菜，讓您的味蕾感受到一場香辣的饗宴。",
                            loc_desc:"位於台北市信義區的「飄香小店」是一個引人入勝的美食天地，專注於帶給您獨特的餐飲體驗。<br><br>我們以追求食材的品質和烹飪的創意為己任，致力於將最新鮮、最美味的食材轉化為令人驚艷的美食佳餚。每道菜品都經過我們精心挑選和巧手烹調，旨在為您呈現獨一無二的味覺體驗。"
                        },
                        {
                            id: 7,
                            tag: "私廚教學",
                            name: "精緻法式料理教學",
                            date: "2023-09-10 18:30",
                            dur: "2.5 小時",
                            price: '1200',
                            img:'./images/activity/activity-french.jpg',
                            loc:"Hako 小廚房",
                            adr: "台北市大安區敦化南路一段456巷7號",
                            act_desc:"誠摯邀請您踏入法國美食的奇妙世界。這是一場為熱愛美食與烹飪藝術的您所度身訂造的珍貴體驗。<br><br>在這個課程中，我們將帶您穿越法國的鄉間小徑和巷弄餐廳，品味那些經典的法式美味。從傳統的布列塔尼蘋果派到經典的波爾多燉牛肉，您將學會如何用精湛的廚藝將這些美味帶到您的餐桌上。<br><br>我們的專業法式廚師將親自指導您，從基本的刀功技巧到複雜的調味技法，讓您深入了解法國料理的精髓。您將有機會親手製作道道美味，並在學習的過程中體會到烹飪的樂趣與滿足感。<br><br>不僅如此，我們還將深入探討法國飲食文化的背後故事，讓您更加融入這個迷人的世界。無論您是烹飪初學者還是經驗豐富的廚藝愛好者，「精緻法式料理教學」課程都將帶給您一場美味和知識的雙重饗宴。<br><br>讓我們一同探索法式烹飪的奧秘，將優雅的法國風味帶進您的廚房，讓每一道料理都成為一場美味的藝術饗宴。",
                            loc_desc:"Hako小廚房是一個專為舉辦烹飪活動、烹飪班、私人聚會和團隊建設活動而設計的理想場所。我們提供現代化的廚房設施，以及舒適和寬敞的用餐區，讓您的活動在這裡變得愉悅且難忘。<br><br>我們的活動場地廚房設備齊全，擁有先進的廚房設備和烹飪工具，包括專業級的烤箱、爐灶、攪拌機、刀具和炊具等，讓您可以盡情發揮創意，準備出美味的佳餚。"
                        },
                        {
                            id: 8,
                            tag: "共享餐桌",
                            name: "秋季共享之夜",
                            date: "2023-09-20 19:00",
                            dur: "3 小時",
                            price: '1200',
                            img:'./images/activity/activity-sept.jpg',
                            loc:"紹育愛德華A店",
                            adr: "台北市中山區民生東路三段789號",
                            act_desc:"隨著涼爽的秋風吹拂而來，秋季食物成為了大自然的恩賜，為我們帶來了一系列美味的享受。在這個季節裡，大自然的豐收將各種色彩鮮豔、風味豐富的食材呈現在我們的餐桌上。<br><br>秋季的果實成熟了，滿園的蘋果、梨子、葡萄和柿子都散發著迷人的香氣。您可以品嚐到多汁的水果，或是將它們加入到各種料理中，為菜餚增添獨特的風味。<br><br>蔬菜也在秋季達到了最美的時刻。色彩斑斕的南瓜、紅蘿蔔、甜菜根和菠菜等等，不僅是豐收的象徵，更是健康飲食的重要組成部分。這些蔬菜富含維生素和抗氧化劑，不僅可以為您的身體提供營養，還能為菜餚增添豐富的色彩和口感。最後，別忘了秋季的節慶食物，如感恩節的火雞、萬聖節的南瓜派和中秋節的月餅。這些特別的美食不僅滿足味蕾，更代表著文化和情感的交流。<br><br>總之，秋季食物帶來了無限的可能性，無論您是享受自然的恩賜，還是探索烹飪的樂趣，都能在這個季節找到令人愉悅的味道和體驗。讓我們一同迎接秋天，享受這個美食的季節吧！",
                            loc_desc:"位於台北市繁華的中山區，是一個融合優雅氛圍和美食文化的綜合性場地。這個場地不僅提供豐富多樣的美食體驗，還擁有令人印象深刻的室內設計，為您的每次到訪帶來難忘的回憶。"
                        }                    
                    ],
                    

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
                },
<<<<<<< HEAD
                addCart() {
                    let buy_value = document.getElementsByClassName("buy-value")[0];
        
                    var productInfo = {
                        img: this.filteredList[this.idPort].img,
                        name: this.filteredList[this.idPort].name, // 替换为实际的产品信息
                        quantity: buy_value.value,
                        // total: (this.filteredList[this.idPort].price) * buy_value.value
                        // 添加其他产品信息
                    };
        
                    // 获取购物车数据（如果存在）
                    var cart2 = JSON.parse(localStorage.getItem('cart2')) || [];
        
        
                    // 检查购物车中是否已经存在相同的商品
                    const existingItem = cart2.find(cartItem => cartItem.name === productInfo.name);
        
                    if (existingItem) {
                        // 如果存在相同的商品，更新数量
                        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productInfo.quantity);
                        existingItem.total = existingItem.price * existingItem.quantity;
                    } else {
                        // 否则，将新商品添加到购物车
                        cart2.push(productInfo);
                    }
        
        
                    // 将购物车数据重新存储到 localStorage
                    localStorage.setItem('cart2', JSON.stringify(cart2));
                }
                
=======
                addNumber(){
                    let buy_value = document.getElementsByClassName("buy-value")[0];
                    let btn_add = document.getElementsByClassName('b-add')[0];
                    if(buy_value.value < 25){
                        buy_value.value = parseInt(buy_value.value) +1;
                        // buy_value.value +=1;
                    }else{
                        window.alert("超過庫存數量")
                    }
                },
                subNumber(){
                    let btn_sub = document.getElementsByClassName('b-sub')[0];
                    let buy_value = document.getElementsByClassName("buy-value")[0];
                    if(buy_value.value >= 2){
                        buy_value.value -= 1;
                    }
          
                },                
>>>>>>> 02d3cb227403eb74e958fb96c2ca0e2da06d378c
            },
            mounted(){
                let urlParams = new URLSearchParams(window.location.search);
                let id = parseInt(urlParams.get('id')); 
                this.idPort = id - 1;

            }
        });

        activity.mount('#actInfo');
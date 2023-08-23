const app = Vue.createApp({

    data() {
        return {
            index: 0,
            product: [
                {
                    id: 1,
                    name: "薑汁燒肉",
                    img: "./images/box-info/box-info-ginger.jpg",
                    cuisine: "日式料理",
                    price: "188",
                    time: "20分鐘",
                    tool: "平底鍋",
                    intro: "薑燒豬肉是一道傳統的日本料理，結合了豬肉的香嫩與薑汁的辛香，是一道美味又營養的料理。這道菜色香味俱全，適合當作家庭晚餐或宴客招待的佳餚。現在就讓我們來學習如何製作這道美味的薑燒",
                    ingredients: [
                        { item: "豬肉(建議使用豬里肌肉或肩肉，切成薄片)", num: "500g" },
                        { item: "醬油", num: "3匙" },
                        { item: "日本料理酒(或米酒)", num: "3匙" },
                        { item: "大蒜（切成末狀）", num: "1顆" },
                        { item: "洋蔥（切成薄片）", num: "1顆" },
                        { item: "蔥花(裝飾用)", num: "適量" },
                        { item: "薑汁(將薑切成細絲，擠壓出汁液)", num: "2匙" }

                    ],
                    steps: [
                        { id: 1, title: "準備豬肉", do: "將豬肉洗淨，用廚房紙巾擦乾，然後將豬肉切成薄片，厚度約為3到5毫米，備用。" },
                        { id: 2, title: "調製薑燒醬汁", do: "在一個碗中，將醬油、日本料酒、薑汁、糖和蜂蜜混合在一起，攪拌均勻，成為薑燒醬汁。" },
                        { id: 3, title: "燒烤豬肉", do: "將平底鍋加熱，倒入沙拉油，待油熱後，將豬肉片逐一鋪在平底鍋中，煎至兩面呈金黃色。取出煎好的豬肉，備用。" },
                        { id: 4, title: "炒香蔬菜", do: "在同一平底鍋中加入切好的蒜末、洋蔥片、紅甜椒和綠甜椒，用中火炒熟，直至蔬菜變軟。" },
                        { id: 5, title: "拌炒豬肉與蔬菜", do: "薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！" },
                        { id: 6, title: "裝盤與裝飾", do: "將薑燒豬肉盛盤，撒上適量蔥花作為裝飾。你的美味薑燒豬肉現在已經完成，趕快享用吧！" }
                    ],
                    tip1: "可以根據個人口味增減糖和蜂蜜的份量，調整甜度。",
                    tip2: "薑燒豬肉應盡快食用，以免過度燉煮影響肉質口感。",
                    tip3: "若喜歡更多蔬菜，可以增加其他蔬菜種類如胡蘿蔔或香菇。",
                    chefName: "橫山一郎",
                    chefIntro: "橫山一郎是一位熱愛料理的資深日本料理大廚，擁有超過25年的廚藝經驗。他在年輕時就對料理產生濃厚的興趣，經過多年的學習與精進，成為了日本料理界的翹楚。橫山一郎對於傳統的日本料理深具造詣，同時也敢於嘗試創新，將傳統料理元素與現代烹飪技巧巧妙結合。",
                    chefImg: "./images/box-info/box-info-chef1.png"


                },
                {
                    id: 2,
                    name: "蟹肉棒壽司捲",
                    img: "./images/box-info/box-info-sushi.jpg",
                    cuisine: "日式料理",
                    price: "166",
                    time: "30分鐘",
                    tool: "壽司捲蓆",
                    intro: "這道壽司捲融合了海鮮的鮮美和壽司的美味，將新鮮的蟹肉棒與其他精心挑選的配料結合在一起，呈現出精緻的外觀和豐富的口感，適合作為精緻的小吃或聚會上的一道亮點。",
                    ingredients: [
                        { item: "壽司米", num: "300g" },
                        { item: "蟹肉棒", num: "4-6支" },
                        { item: "青瓜", num: "1根" },
                        { item: "胡蘿蔔", num: "1根" },
                        { item: "酥炸蔥絲", num: "適量" },
                        { item: "壽司醋", num: "2匙" },
                        { item: "海苔", num: "1張" }



                    ],
                    steps: [
                        { id: 1, title: "預備壽司米", do: "將壽司米煮熟，並在煮飯時加入壽司醋，攪拌均勻。讓飯稍微冷卻，備用。" },
                        { id: 2, title: "準備材料", do: "將蟹肉棒、青瓜、胡蘿蔔等切成細長條，備用。" },
                        { id: 3, title: "包裝壽司", do: "在壽司席上鋪上一片海苔，然後在海苔上均勻地鋪上一層壽司米，留下上方約1英寸的空白。" },
                        { id: 4, title: "放置內餡", do: "在壽司米的中間，放上蟹肉棒、青瓜和胡蘿蔔條。您可以根據喜好加入其他配料。" },
                        { id: 5, title: "捲壽司", do: "輕輕抓住壽司席的下方，開始卷起海苔和內餡，形成壽司卷。確保用適度的壓力讓壽司緊實捲起。" },
                        { id: 6, title: "切片", do: "使用鋒利的壽司刀，將壽司捲切成均勻的小片，每片約1-1.5英寸寬。" },
                        { id: 7, title: "裝盤和裝飾", do: "將切好的壽司片整齊地排在盤子上，可以撒上一些酥炸蔥絲作為裝飾。" }
                    ],
                    tip1: "壽司米在鋪在海苔上時要稍微濕潤，這有助於讓壽司捲更容易捲起並保持形狀。",
                    tip2: "在放置內餡時，避免過度填充，以免壽司捲無法緊實捲起。",
                    tip3: "切割壽司捲時，可以先沾一些水在刀上，這樣可以防止米飯和海苔粘在刀刃上。",
                    chefName: "橫山一郎",
                    chefIntro: "橫山一郎是一位熱愛料理的資深日本料理大廚，擁有超過25年的廚藝經驗。他在年輕時就對料理產生濃厚的興趣，經過多年的學習與精進，成為了日本料理界的翹楚。橫山一郎對於傳統的日本料理深具造詣，同時也敢於嘗試創新，將傳統料理元素與現代烹飪技巧巧妙結合。",
                    chefImg: "./images/box-info/box-info-chef1.png"


                },
                {
                    id: 3,
                    name: "夏日野薺盛宴",
                    img: "./images/box-info/box-info-salad.jpg",
                    cuisine: "西式料理",
                    price: "200",
                    time: "20分鐘",
                    tool: "平底鍋",
                    intro: "充滿自然的原始風味和健康的營養的清新沙拉，這道沙拉將新鮮的野薺與多種時令蔬菜、堅果和香草相結合，為您帶來一份美味又充滿活力的用餐體驗。",
                    ingredients: [
                        { item: "野薺", num: "200g" },
                        { item: "生菜或其他蔬菜", num: "適量" },
                        { item: "堅果", num: "適量" },
                        { item: "水果", num: "依喜好" },
                        { item: "沙拉醬", num: "適量" },
                        { item: "雞蛋", num: "2顆" }

                    ],
                    steps: [
                        { id: 1, title: "預備野薺和其他配料", do: "將野薺洗净，瀝乾，備用。您可以選擇添加生菜、堅果、水果等其他配料。" },
                        { id: 2, title: "製作太陽蛋", do: "在平底鍋中加熱食用油，將雞蛋打入鍋中，盡量保持蛋黃完整，讓蛋白固化。" },
                        { id: 3, title: "混合配料", do: "在大碗中，將洗净的野薺和其他選擇的配料混合在一起。" },
                        { id: 4, title: "添加沙拉醬", do: "加入適量的沙拉醬，您可以選擇自己喜歡的沙拉醬。" },
                        { id: 5, title: "輕輕攪拌", do: "輕輕攪拌混合沙拉，確保沙拉醬均勻地覆蓋在所有配料上。" },
                        { id: 6, title: "裝盤與裝飾", do: "將沙拉盛裝在盤子中，放上製作好的太陽蛋。" }
                    ],
                    tip1: "除了野薺和太陽蛋，您可以添加其他蔬菜、水果、堅果等，增加沙拉的層次感和風味。",
                    tip2: "在製作太陽蛋時，保持蛋黃完整，可以用小火煎炒，以確保蛋白熟透，蛋黃保持液態。",
                    tip3: "添加沙拉醬時，注意不要過多，以免淹沒了食材的原味。可以選擇混合不同風味的沙拉醬，增添變化。",
                    chefName: "Alex Hamilton",
                    chefIntro: "Alex Hamilton是一位傑出的西式料理男廚師，他以他的創意、專業和熱情在烹飪界引起了廣泛的關注。出生於法國的廚藝世家，亞歷克斯從小就對美食和烹飪技藝產生濃厚的興趣。他善於將新鮮的季節食材和當地的特色結合，呈現出充滿層次感和口感的菜品，總是能給食客帶來驚喜和滿足。",
                    chefImg: "./images/box-info/box-info-chef2.png"
                },
                {
                    id: 4,
                    name: "糖醋排骨",
                    img: "./images/box-info/box-info-pork.jpg",
                    cuisine: "中式料理",
                    price: "150",
                    time: "40分鐘",
                    tool: "平底鍋",
                    intro: "糖醋排骨是一道具有豐富口味和多層次風味的中式料理，融合了甜、酸、咸的調味，以及鮮嫩的排骨肉質，成為中式料理的經典之一。這道菜品以其獨特的糖醋醬汁和綿密多汁的肉質，經常在家庭聚會、餐廳和宴會中出現。",
                    ingredients: [
                        { item: "排骨", num: "500g" },
                        { item: "白醋", num: "2匙" },
                        { item: "白糖", num: "3匙" },
                        { item: "醬油", num: "2匙" },
                        { item: "米酒", num: "1匙" },
                        { item: "薑片", num: "數片" },
                        { item: "蒜瓣", num: "數瓣" }
                    ],
                    steps: [
                        { id: 1, title: "準備排骨", do: "將排骨切成小段，洗净，瀝乾，備用。" },
                        { id: 2, title: "醃製排骨", do: "在一個大碗中，加入料酒和少許鹽，將排骨放入醃製約15分鐘，使排骨更加入味。" },
                        { id: 3, title: "炸煮排骨", do: "在炸鍋中加熱食用油，將醃製過的排骨炸至金黃酥脆，然後撈出瀝乾油分。" },
                        { id: 4, title: "烹煮糖醋醬", do: "將白醋加入焦糖中，然後加入醬油，攪拌均勻，使焦糖和醋充分結合。" },
                        { id: 5, title: "加入排骨", do: "將炸好的排骨加入鍋中，迅速翻炒均勻，使排骨均勻沾上醬汁。" },
                        { id: 6, title: "裝盤與裝飾", do: "將糖醋排骨盛裝在盤子中，撒上一些紅辣椒碎作為裝飾，即可享用。" }
                    ],
                    tip1: "炸排骨時要保持中小火，讓排骨充分變得金黃酥脆。不要過度炸煮，以免肉質過於乾燥。",
                    tip2: "在烹煮焦糖時，要注意掌握好顏色，以免燒焦。焦糖過度熔化成焦糖色即可，不需要太深的顏色。",
                    tip3: "根據口味，您可以調整白醋、醬油、糖等的比例，創造出適合自己喜好的糖醋味道。",
                    chefName: "張文豪",
                    chefIntro: "張文豪在多個知名中式餐廳和飯店的廚房中積累了豐富的烹飪經驗。他對中式料理的烹飪技巧和食材有著深刻的理解，同時又善於將傳統與現代相結合，創造出別具一格的美食。他的烹飪作品不僅味道美味，更帶著他對食物和文化的獨特理解，成為了中式料理界一個備受矚目的男廚師。",
                    chefImg: "./images/box-info/box-info-chef3.png"

                },
                {
                    id: 5,
                    name: "POKE",
                    img:"./images/box-info/box-info-poke.jpg",
                    cuisine: "西式料理",
                    price: "160",
                    time: "20分鐘",
                    tool: "刀具、碗",
                    intro: "POKE是一道美味的夏威夷傳統料理，這種美食以新鮮的海鮮為基礎，將海鮮切成小塊，然後混合各種精心調味的配料，形成一道充滿層次豐富、美味怡人的佳餚。",
                    ingredients: [
                        { item: "生鮮魚肉(如鮪魚、鯛魚等)", num: "300g" },
                        { item: "醬油", num: "2匙" },
                        { item: "蔥", num: "1根" },
                        { item: "鳳梨、酪梨、青木瓜等水果或蔬菜", num: "依喜好" },
                        { item: "芝麻油", num: "1匙" },
                        { item: "海鹽和黑胡椒粉", num: "適量" }
                    ],
                    steps: [
                        { id: 1, title: "準備魚肉", do: "將生鮮的魚肉洗净，去皮骨，然後切成小塊，大小可根據喜好調整。" },
                        { id: 2, title: "調製醬汁", do: "在一個碗中，將醬油和芝麻油混合均勻，成為醬汁。" },
                        { id: 3, title: "混合魚肉和醬汁", do: "將魚肉放入一個深碗中，倒入醬汁，輕輕攪拌混合，確保每塊魚都均勻沾滿醬汁。您可以在魚肉醃漬10-15分鐘，讓其吸收風味。" },
                        { id: 4, title: "烹添加配菜", do: "將加入切碎的蔥和水果或蔬菜，如鳳梨、酪梨、青木瓜等。輕輕拌勻，確保魚肉和配菜均勻分布。" },
                        { id: 5, title: "調味", do: "根據口味，添加少量的海鹽和黑胡椒粉，以調整味道。" },
                        { id: 6, title: "裝盤與裝飾", do: "可以在上面撒上一些芝麻作為裝飾，然後即可享用。" }
                    ],
                    tip1: "如果可能，選擇高品質的生魚，確保它新鮮，無異味。",
                    tip2: "您可以根據自己的口味和季節使用不同的水果、蔬菜和調味料。嘗試不同的組合，創造出獨特的風味。",
                    tip3: "在處理生魚時，請確保使用乾净的刀具和工作區，以避免交叉污染。同時，確保魚肉在醃漬過程中保持在安全的溫度下，以避免食品中毒風險。",
                    chefName: "Alex Hamilton",
                    chefIntro: "Alex Hamilton是一位傑出的西式料理男廚師，他以他的創意、專業和熱情在烹飪界引起了廣泛的關注。出生於法國的廚藝世家，亞歷克斯從小就對美食和烹飪技藝產生濃厚的興趣。他善於將新鮮的季節食材和當地的特色結合，呈現出充滿層次感和口感的菜品，總是能給食客帶來驚喜和滿足。",
                    chefImg: "./images/box-info/box-info-chef2.png"

                },
                {
                    id: 6,
                    name: "火腿漢堡",
                    img: "./images/box-info/box-info-hamburger.jpg",
                    color: "green",
                    cuisine: "西式料理",
                    health: false,
                    fast: false,
                    price: "160",
                    time: "20分鐘",
                    tool: "平底鍋",
                    intro: "火腿漢堡是一道經典的美食，將豐富多樣的味道結合在一個餐點中。這道料理由美味的火腿肉、蓬鬆的漢堡麵包以及各種口感豐富的配料和醬料組成，給人們帶來美味的快餐體驗。",
                    ingredients: [
                        { item: "火腿肉漢堡肉餡", num: "250g" },
                        { item: "漢堡麵包", num: "兩片" },
                        { item: "生菜", num: "依喜好" },
                        { item: "番茄片", num: "依喜好" },
                        { item: "洋蔥片", num: "依喜好" },
                        { item: "美乃滋、芥末、番茄醬等調味醬", num: "依喜好" }
                    ],
                    steps: [
                        { id: 1, title: "調製漢堡肉餡", do: "將火腿肉漢堡肉餡用適當的調味，如鹽、胡椒粉、洋蔥粉等，調味均勻。分割和塑造肉餡成您想要的大小和形狀，通常是漢堡的大小。" },
                        { id: 2, title: "預熱平底鍋或燒烤爐", do: "如果使用平底鍋，預熱鍋子，加熱時可以在鍋底刷上一點橄欖油或牛油，避免肉粘在鍋上。如果使用燒烤爐，預熱燒烤爐至中高溫。" },
                        { id: 3, title: "烹飪漢堡肉", do: "將調好味的漢堡肉餡放入預熱的平底鍋或燒烤爐上，用中高火煮熟。根據肉餡的厚度，每面大約烹飪3-5分鐘，或直到內部完全熟透（內部溫度達到165°F / 74°C）。翻轉漢堡肉一次，確保兩面均均勻煎烤。" },
                        { id: 4, title: "準備漢堡麵包和配菜", do: "在漢堡麵包的底部塗抹您喜歡的調味醬，例如美乃滋、芥末、番茄醬等。然後放上生菜、番茄片、洋蔥片等配菜。" },
                        { id: 5, title: "組裝漢堡", do: "將煮熟的漢堡肉放在配菜上，然後蓋上麵包的上半部。您的火腿漢堡就準備好了！" }
                    ],
                    tip1: "選擇新鮮的火腿肉餡，最好是肉質較為緊實，且沒有太多多餘的脂肪，因為它將直接影響到漢堡的口感和味道。",
                    tip2: "在調製和塑造漢堡肉餡時，盡量避免過度揉捏或處理。過度處理肉餡可能導致漢堡變得過於緻密，影響口感。",
                    tip3: "火腿漢堡肉餡通常相對較薄，所以在烹飪時要注意不要過熟，以免變得乾燥。",
                    chefName: "Alex Hamilton",
                    chefIntro: "Alex Hamilton是一位傑出的西式料理男廚師，他以他的創意、專業和熱情在烹飪界引起了廣泛的關注。出生於法國的廚藝世家，亞歷克斯從小就對美食和烹飪技藝產生濃厚的興趣。他善於將新鮮的季節食材和當地的特色結合，呈現出充滿層次感和口感的菜品，總是能給食客帶來驚喜和滿足。",
                    chefImg: "./images/box-info/box-info-chef2.png"

                },
                {
                    id: 7,
                    name: "韭菜豬肉水餃",
                    img: "./images/box-info/box-info-dumpling.jpg",
                    cuisine: "中式料理",
                    price: "120",
                    time: "40分鐘",
                    tool: "鍋子",
                    intro: "將新鮮的韭菜和多汁的豬肉結合在一起，確保每一口都充滿了鮮美和溫暖，這是一道適合與親朋好友共享的佳餚，不論是在午餐時間品味還是晚餐時與家人共享，我們的韭菜豬肉水餃都將成為您的味蕾最愛。",
                    ingredients: [
                        { item: "韭菜", num: "200g" },
                        { item: "豬絞肉", num: "200g" },
                        { item: "水餃皮", num: "20片" },
                        { item: "薑蒜末", num: "依喜好" },
                        { item: "醬油", num: "2匙" },
                        { item: "鹽", num: "適量" },
                        { item: "香油", num: "1茶匙" }

                    ],
                    steps: [
                        { id: 1, title: "預備材料", do: "將韭菜切碎，將薑蒜剁成末，備用。" },
                        { id: 2, title: "調製餡料", do: "在一個大碗中，將豬絞肉和切碎的韭菜放在一起。加入薑蒜末、醬油、花椒粉、鹽和香油，混合均勻。這就是水餃的餡料。" },
                        { id: 3, title: "包水餃", do: "取一片水餃皮，放一些餡料在中間。用指尖蘸些水沿著水餃皮的邊緣，然後將皮對摺成半圓形。用手指輕壓餃邊，使其密封。根據需要，可以摺出花紋或將餃子封口。" },
                        { id: 4, title: "煮水餃", do: " 在大鍋中加入足夠的水，讓水煮沸。將水餃放入滾水中，煮至餃子浮起並變形，這通常需要2-3分鐘。然後再繼續煮1-2分鐘，確保餃子熟透。" },
                        { id: 5, title: "撈出水餃", do: "使用網漏或湯勺，將煮熟的水餃撈出，瀝乾水分。" },
                        { id: 6, title: "擺盤上桌", do: "將煮好的韭菜豬肉水餃裝盤，可以在碟邊放上一碟醋和辣椒油，用來蘸餃子。" },

                    ],
                    tip1: "餃子皮的質地和厚度會影響水餃的口感。選擇適合包餃子的餃皮。",
                    tip2: " 如果餡料過於乾燥，包水餃時容易封口不牢。您可以在餡料中加入少許水，保持餡料的濕潤度。",
                    tip3: "包水餃時，不要過度填入餡料，以免餃子爆開煮熟時。適度的餡料量可以確保餃子在烹飪過程中不會爆裂。",
                    chefName: "張文豪",
                    chefIntro: "張文豪在多個知名中式餐廳和飯店的廚房中積累了豐富的烹飪經驗。他對中式料理的烹飪技巧和食材有著深刻的理解，同時又善於將傳統與現代相結合，創造出別具一格的美食。他的烹飪作品不僅味道美味，更帶著他對食物和文化的獨特理解，成為了中式料理界一個備受矚目的男廚師。",
                    chefImg: "./images/box-info/box-info-chef3.png"

                },
                {
                    id: 8,
                    name: "牛肉丼飯",
                    img: "./images/box-info/box-info-donburi.jpg",
                    color: "blue",
                    cuisine: "日式料理",
                    price: "200",
                    time: "35分鐘",
                    tool: "平底鍋",
                    intro: "這道簡單而美味的料理是日本料理的經典之一，以薄切的嫩牛肉、甜美的醬汁和蓬鬆的白飯為特色。每一口都是一次美味的冒險，牛肉的鮮嫩和醬汁的深邃味道在嘴裡融化，帶給您滿滿的滿足感。",
                    ingredients: [
                        { item: "牛肉", num: "200g" },
                        { item: "洋蔥", num: "1顆" },
                        { item: "薑蒜末", num: "依喜好" },
                        { item: "醬油", num: "3匙" },
                        { item: "糖", num: "1.5匙" },
                        { item: "酒", num: "2匙" },
                        { item: "高湯或水", num: "半杯" },
                        { item: "雞蛋", num: "1顆" },
                        { item: "蔥花", num: "適量" },
                        { item: "白飯", num: "適量" },

                    ],
                    steps: [
                        { id: 1, title: "預備材料", do: "將牛肉切成薄片或小塊，洋蔥切成薄片，打散雞蛋，備用。" },
                        { id: 2, title: "炒煮備料", do: "在鍋中加熱一些食用油，加入洋蔥和薑蒜末炒煮片刻，直至洋蔥變軟。" },
                        { id: 3, title: "加入牛肉", do: "將切好的牛肉加入鍋中，繼續翻炒至牛肉變色，變得稍微熟透。" },
                        { id: 4, title: "調味", do: "加入醬油、糖和酒，攪拌均勻，使調味料充分滲透到牛肉和洋蔥中。" },
                        { id: 5, title: "加入高湯或水", do: " 倒入高湯或水，使調味料和牛肉充分混合。將火調至中小火，繼續燉煮幾分鐘，使牛肉入味，洋蔥變軟。" },
                        { id: 6, title: "加入雞蛋（選擇性）", do: "如果喜歡，您可以將打散的雞蛋倒入鍋中，攪拌均勻，讓蛋液在牛肉和洋蔥間凝固。" },
                        { id: 7, title: "裝盤", do: "將煮好的牛肉和洋蔥混合物盛裝在煮好的白飯上，撒上一些蔥花作為裝飾。" }

                    ],
                    tip1: "您可以使用薄片的牛肉或小塊的牛肉。根據您的口味和喜好選擇適合的牛肉。",
                    tip2: "調味料的份量可以根據您的喜好進行微調，如果您喜歡更甜或更鹹的口味，可以適當增加糖或醬油的量。",
                    tip3: "在炒煮洋蔥時，可以用中小火進行，讓洋蔥變得軟嫩並散發出甜味。",
                    chefName: "橫山一郎",
                    chefIntro: "橫山一郎是一位熱愛料理的資深日本料理大廚，擁有超過25年的廚藝經驗。他在年輕時就對料理產生濃厚的興趣，經過多年的學習與精進，成為了日本料理界的翹楚。橫山一郎對於傳統的日本料理深具造詣，同時也敢於嘗試創新，將傳統料理元素與現代烹飪技巧巧妙結合。",
                    chefImg: "./images/box-info/box-info-chef1.png"


                },

            ]


        };
    },
    methods: {
        addNumber() {
            let buy_value = document.getElementsByClassName("buy-value")[0];
            let btn_add = document.getElementsByClassName('b-add')[0];
            if (buy_value.value < 30) {
                buy_value.value = parseInt(buy_value.value) + 1;
                // buy_value.value +=1;
            } else {
                window.alert("超過庫存數量")
            }

        },
        subNumber() {
            let btn_sub = document.getElementsByClassName('b-sub')[0];
            let buy_value = document.getElementsByClassName("buy-value")[0];
            if (buy_value.value >= 2) {
                buy_value.value -= 1;
            }


        },
        addCart() {
            let buy_value = document.getElementsByClassName("buy-value")[0];

            var productInfo = {
                img: this.product[this.index].img,
                name: this.product[this.index].name, // 替换为实际的产品信息
                price: this.product[this.index].price, // 替换为实际的产品价格
                quantity: buy_value.value,
                total: (this.product[this.index].price) * buy_value.value
                // 添加其他产品信息
            };

            // 获取购物车数据（如果存在）
            var cart = JSON.parse(localStorage.getItem('cart')) || [];


            // 检查购物车中是否已经存在相同的商品
            const existingItem = cart.find(cartItem => cartItem.name === productInfo.name);

            if (existingItem) {
                // 如果存在相同的商品，更新数量
                existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productInfo.quantity);
                existingItem.total = existingItem.price * existingItem.quantity;
            } else {
                // 否则，将新商品添加到购物车
                cart.push(productInfo);
            }


            // 将购物车数据重新存储到 localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    },
    mounted() {
        let urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams.has('q')); // true
        // console.log(urlParams.get('id')); // "abc"
        // console.log(urlParams.getAll('action')); // ["abc"]
        // console.log(urlParams.toString()); // "q=1234&txt=abc"
        // console.log(urlParams.append('page', '1')); // "q=1234&txt=abc&page=1"
        this.index = urlParams.get('id') - 1;

        // console.log(this.index);
        // console.log(urlParams.get('tag'));

    }
});

app.mount("#app");
var app = Vue.createApp({
data(){
    return {
    currentTab: "tab1",
    tabs: [
        {
        id: "tab1",
        name: "訂餐",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M6.82 20.575v3.834A12.475 12.475 0 0 0 16.5 29c4.324 0 8.136-2.196 10.38-5.533v-5.374C26.112 23.136 21.757 27 16.5 27c-4.354 0-8.089-2.65-9.68-6.425Zm18.21-10.199V8.654a3.32 3.32 0 0 1 .184-1.116A12.459 12.459 0 0 0 16.5 4a12.45 12.45 0 0 0-7.976 2.875l.005.061l.001.027v2.7A10.476 10.476 0 0 1 16.5 6c3.514 0 6.624 1.726 8.53 4.376Z"/><path d="M24.5 16.5a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14ZM29.99 7.94c0-.9-.73-1.63-1.63-1.63c-1.3 0-2.34 1.05-2.33 2.34v5.55c0 1.253.726 2.375 1.85 2.883V25.7c0 .52.42.94.94.94h.23c.52 0 .94-.42.94-.94V7.94ZM6.82 6.31a.68.68 0 0 0-.68.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v4.58c0 .902.437 1.707 1.109 2.209c.601.339.601 1.891.601 1.891v10.02c0 .52.42.94.94.94h.23c.52 0 .94-.42.94-.94V15.67s0-1.491.601-1.891A2.757 2.757 0 0 0 7.53 11.57V6.99a.72.72 0 0 0-.71-.68Z"/></g></svg>`
        },
        {
        id: "tab2",
        name: "活動",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.063 8.063 0 0 0 16 21.125a8.063 8.063 0 0 0-3.469-3.281A6.006 6.006 0 0 0 15 13c0-3.3-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4zm14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4z"/></svg>`

        },
        {
        id: "tab3",
        name: "食譜",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z"/><path fill="currentColor" d="M28 5H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V7a2.002 2.002 0 0 0-2-2ZM4 7h11v18H4Zm13 18V7h11v18Z"/></svg>`

        },
        {
        id: "tab4",
        name: "物流",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z"/><path fill="currentColor" d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394ZM9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"/></svg>`

        }
    ]
    };
},
computed:{
    current_tab_component(){
        return this.currentTab + "_content";
    }
}
});
app.component("tab1_content", {
template: `

<div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1.如何進行線上訂餐？
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            可以訪問我們的官方網站或使用我們的行動應用程式，在餐單中選擇您喜歡的餐點，加入購物車，然後完成結帳過程，輸入送貨地址和付款信息。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2.如何確認訂單已經提交成功？ 
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            在完成訂單後，您也可以登入您的訂單賬戶，查看訂單狀態。

            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3. 訂單何時會開始處理？
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            一般來說，訂單會在確認支付後的1-2個工作日內開始處理。
            </div>
        </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4.是否提供季節性菜單？
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，我們會根據不同季節的食材推出季節性菜單，以確保您品嚐到新鮮美味的料理。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                5.如何了解每個料理盒子的食材成分？
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                在我們的網站上，每個料理盒子都附有詳細的食材成分列表和相關信息，以幫助您做出明智的選擇。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6.是否提供菜譜和烹飪指導？
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，每個料理盒子都會附帶詳細的菜譜和烹飪指導，以幫助您在家輕鬆製作美味佳餚。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                7.能否定制節日或特殊場合的料理盒子？
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，我們提供定制節日或特殊場合的料理盒子選項，讓您的慶祝活動更加特別。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                8.如何查詢訂單狀態？
            </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                您可以登錄您的賬戶，在「我的訂單」中查看訂單狀態和跟踪信息。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                9.有關包裝的環保政策是什麼？
            </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                我們致力於環保，我們的包裝會盡量使用可回收和環保材料，減少對環境的影響。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                10.如何處理退款和退貨？
            </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                如果您需要退款或退貨，請在一定時間內聯繫我們客服團隊，我們會根據退款政策為您處理。
            </div>
            </div>
        </div>
        </div>
    

`
});

app.component("tab2_content", {
    template: `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1.有關穿著方面的建議是什麼？
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            我們建議參加者穿著舒適、休閒的服裝，以便在活動期間更加自在地參與各種活動和互動
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2.活動的舉辦場地是在哪裡?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            活動的舉辦場地會因不同的活動而有所不同。我們的每個活動都有詳細的資訊頁面，該頁面會提供活動地點的具體地址以及相關的位置描述。您可以在活動詳細資訊頁面中找到有關活動地點的所有重要資訊，包括地址、地圖位置和其他相關說明。我們建議您在參加活動前仔細閱讀詳細資訊，以確保您能夠順利抵達活動地點。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3.是否可以更改活動舉辦地點？
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            很抱歉，基於活動的安排和組織，我們目前無法更改活動的舉辦地點。
            </div>
        </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4.付款方式有哪些選擇？
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                我們只提供信用卡支付。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                5.可以自行攜帶食材來參加活動嗎
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                建議不需要唷。我們有提供料理食材，您可以在活動現場使用我們的食材進行烹飪。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6.能否自行攜帶烹飪工具？
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                我們已經為活動準備了基本的烹飪工具，但如果您有特定的烹飪工具偏好，歡迎您攜帶，以確保您能夠更好地參與活動。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                7.可以提前參觀場地嗎？
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然可以！我們歡迎您預約時間前來參觀我們的活動場地廚房，您可以親自了解我們的設施以及用餐區的環境。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                8.是否提供專業廚師或烹飪導師？
            </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，我們可以安排專業的廚師或烹飪導師為您的活動提供指導和協助。這將有助於提升活動的互動性和學習體驗。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                9.場地有提供用餐服務嗎？
            </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，我們的場地設有舒適和寬敞的用餐區，您可以在此享受您所準備的美味佳餚。如果您需要用餐服務，請提前告知我們，我們會協助安排。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                10.場地的停車設施如何？
            </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                我們提供方便的停車設施，供參加活動的客人使用。您可以在活動前向我們了解詳細的停車指引和場地位置。
            </div>
            </div>
        </div>
        </div>
    
    `
    });

app.component("tab3_content", {
    template: `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1.可以有一個以肉類為主的豐盛餐點嗎？ 
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            當然！試試「烤牛排配薯條和綠色蔬菜」食譜：將牛排烤至喜好的熟度，搭配炸薯條和清爽的綠色蔬菜沙拉，這道餐點充滿肉香和營養。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2.我們能夠品嚐到豐富的海鮮料理嗎？
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            絕對可以！試試「海鮮拼盤」食譜：將新鮮的蝦子、螃蟹腿、魷魚等海鮮，烹調成烤、炸或燉煮的料理，並搭配自製的美味蘋果番茄醬。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3.我們有一個偏好素食的朋友，有什麼選擇？ 
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            當然有！試試「素食多多燉菜」食譜：將多種新鮮的蔬菜，如胡蘿蔔、馬鈴薯、洋蔥等，燉煮成濃郁的素食燉菜，加入一些香料和番茄醬，味道美味。
            </div>
        </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4.是否有適合喜歡辛辣口味的食物？
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然可以！試試「香辣雞翅」食譜：將雞翅用辣椒粉、辣椒醬和其他香料醃製，然後烤至金黃色，這道多汁又辛辣的雞翅一定能滿足您的胃口。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                5.我們可以嘗試一個包含多種肉類和海鮮的拼盤嗎？ 
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然可以！試試「肉多多海鮮大餐拼盤」食譜：將烤牛排、炸蝦子、烤魷魚等各種肉類和海鮮組合在一個大盤中，搭配沙拉和烤蔬菜，這道拼盤將會是一場豐盛的盛宴。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6.我們可以試試一個燒烤主題的聚會嗎？
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                絕對可以！您可以準備各種肉類、海鮮和蔬菜，搭配不同的燒烤醬料和調味品，讓每個人可以根據自己的口味烹煮和品嚐。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                7.我們有一位對海鮮過敏的朋友，有適合的食譜嗎？
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然有！試試「多多烤雞腿」食譜：將雞腿用香料和橄欖油醃製，然後烤至金黃色，這是一道美味的肉類選擇，也適合對海鮮過敏的朋友。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                8.我們可以嘗試一個以中式菜餚為主的晚宴嗎？ 
            </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然可以！試試「多多中式滷肉飯」食譜：將豬肉燉煮成滷肉，再搭配蔥花、滷蛋和一碗白飯，這是一道濃郁的中式美食。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                9.是否有適合小朋友的多彩餐點？ 
            </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的！試試「蔬菜串燒」食譜：將彩色蔬菜切塊，串在竹籤上，輕輕烤烤，這個多彩的蔬菜串燒一定會吸引小朋友的注意。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                10.我們可以在食譜中加入一些特別的醬料嗎？ 
            </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                當然可以！您可以嘗試自製的特色醬料，如香草醬、花生醬、香甜的烤肉醬等，為每道菜餚增添獨特的風味和驚喜。
            </div>
            </div>
        </div>
        </div>
    

    `
    });


    app.component("tab4_content", {
    template: `
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            1.我們可以選擇不同的物流方式嗎？
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            目前依據品項不同，提供冷藏或冷凍運送。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2.如何確認訂單的物流狀態？ 
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            您可以在我們的官方網站上使用訂單追蹤功能，輸入訂單號碼或相關信息，即可查詢訂單的物流狀態和預計送達時間。
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3.物流費用如何計算？ 
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            目前皆是免運費。
            </div>
        </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4.我們可以更改已經下單的物流方式嗎？ 
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                在一般情況下，您可能需要在下單後的一段時間內聯繫客服，以便進行物流方式的更改。請注意，部分訂單可能無法更改物流方式，具體情況請與客服聯繫。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                4.如何處理物流中可能出現的延遲？
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                物流延遲可能受到天氣、節假日、海關檢查等因素影響。如果您遇到物流延遲，請通過我們的客服進行查詢，我們將盡力協助您解決問題。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6.我們可以查詢國際運送的關稅和稅收嗎？ 
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，您可以在我們的網站上查詢國際運送的關稅和稅收信息。請注意，不同國家的稅收政策可能不同，請在下單前了解相關信息。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                7.如何處理包裹遺失或損壞的情況？
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                如果您的包裹在運送過程中遺失或損壞，請立即與我們的客服聯繫。我們將協助您進行相關的調查和處理程序，以確保您的權益。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                8.否提供國際運送服務？
            </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                是的，我們提供國際運送服務，您可以選擇將商品運送至您所在國家或地區。請注意，國際運送可能需要更長的時間和額外的關稅。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                9.我們可以選擇特定的運送日期嗎？ 
            </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                在大多數情況下，您可能無法指定特定的運送日期，但您可以根據預估的運送時間來選擇適合的下單日期，以確保商品在您需要的時候到達。
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                10.如何處理退貨和退款的物流事宜？
            </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                如果您需要退貨和退款，請與我們的客服聯繫，我們將指導您進行相關的退貨程序。請注意，退貨的物流費用可能需要您承擔，具體情況請與客服核實。
            </div>
            </div>
        </div>
        </div>

    `
    });
app.mount("#the_block");

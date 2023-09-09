document.addEventListener("DOMContentLoaded", function(){
    let cards = document.getElementsByClassName("card-number");
    let carddate = document.getElementsByClassName("pay-carddate");
    let chipNumber = document.getElementsByClassName("chip-number");
    let phoneNumber = document.getElementById("inputPhone");
    let inputEmail = document.getElementById("inputEmail");
    // console.log(chipNumber);
    
    for(let i = 0; i < cards.length; i++){
        //-------------------------------------刪除時---------------------------------------------- 
        cards[i].addEventListener("keydown", function(e){
            if((e.which >= 48 && e.which <= 57) || e.which == 8){
                if(e.target.value.length === 0 && e.which == 8){
                    let currentIndex = Array.from(cards).indexOf(e.target);
                    let prevIndex = currentIndex - 1;
                if (prevIndex >= 0) {
                    let prevInput = cards[prevIndex];
                    prevInput.focus();
                }
                
            }
            }else{
                e.preventDefault();
            }
        
        }); 
        // -----------------------------------輸入時-------------------------------------------------
        cards[i].addEventListener("keyup", function(e){
            let str = e.target.value;
            let input = e.target;
            str = str.replace(/\D/g, "");
            
            e.target.value = str;
            if(str.length == 4){
                let currentIndex = Array.from(cards).indexOf(e.target);
                let nextIndex = currentIndex + 1;

                if(nextIndex < cards.length){
                    cards[nextIndex].focus();
                }
            }
            
            
        });
        //-----------------------卡片日期
        
        for(let i = 0; i < carddate.length; i++){
            
            carddate[i].addEventListener("keydown", function(e){
                if((e.which >= 48 && e.which <= 57) || e.which == 8){
                    if(e.target.value.length === 0 && e.which == 8){
                        let carddateIndex = Array.from(carddate).indexOf(e.target);
                        let prevcarddateIndex = carddateIndex - 1;
                        if(prevcarddateIndex >= 0){
                            let prevcarddateInput = carddate[prevcarddateIndex];
                            prevcarddateInput.focus();
                        }
                    }
                }else{
                    e.preventDefault();
                }
            });
    
    
            carddate[i].addEventListener("keyup", function(e){
                let str = e.target.value;
                str = str.replace(/\D/g, "");
                
                e.target.value = str;
                if(str.length == 2){
                    let currentIndex = Array.from(carddate).indexOf(e.target);
                    let nextIndex = currentIndex + 1;
    
                    if(nextIndex < carddate.length){
                        carddate[nextIndex].focus();
                    }
                }
                
            });
        };
        //--------------------------------------------------電話
        phoneNumber.addEventListener("keyup", function(e){
            let str = e.target.value;
            let input = e.target;
            str = str.replace(/\D/g, "");
            
            e.target.value = str;           
        });
        //--------------------------------------------------信箱
        
        //--------------------------------------------------卡片末三碼
        chipNumber[0].addEventListener("keyup", function(e){
            let str = e.target.value;
            let input = e.target;
            str = str.replace(/\D/g, "");
            
            e.target.value = str;           
        });
        
    }
    
});

//---------------------下一步

// console.log($(".card-number"));
$(function(){
    $("#inputUser").blur(function(){
        let user = $(this).val();
        if (user === ""){
            $(this).css('border','1px solid red');
        } else {
            $(this).css('border','');
        }
    });
    $("#inputPhone").blur(function(){
        let phone = $(this).val();
        if (phone === ""){
            $(this).css('border','1px solid red');
        } else {
            $(this).css('border','');
        }
    });
    $("#inputEmail").blur(function(){
        let mail = $(this).val();
        if (mail === ""){
            $(this).css('border','1px solid red');
        } else {
            $(this).css('border','');
        }
    });
    $("#inputAddress").blur(function(){
        let address = $(this).val();
        if (address === ""){
            $(this).css('border','1px solid red');
        } else {
            $(this).css('border','');
        }
    });
    //-----信用卡
    $(".card-number").blur(function(){
        let cardNumber = $(this).val();
        // console.log(cardNumber);
        console.log(cardNumber.length);
        if (cardNumber === "" || cardNumber.length !== 4){
            $(this).css('border','1px solid red');
        }else{
            $(this).css('border','');
        }
    });

    
    $("#pay-carddatem").blur(function(){
        let carddate = $(this).val();
        // 如果卡片日期不是兩位數，就在前面補零
        if (carddate.length === 1) {
            carddate = "0" + carddate;
            $(this).val(carddate);
        }
        carddate = parseInt(carddate, 10); // 將輸入值轉換為整數
        if (isNaN(carddate) || carddate > 12 || carddate < 1 || carddate === "") {
            $(this).css('border','1px solid red');
        } else {
            $(this).css('border','');
        }
    });
    $("#pay-carddatey").blur(function(){
        let carddatey = $("#pay-carddatey").val();
        let carddatem = $("#pay-carddatem").val();
        if (carddatey == 23 && carddatem < 9) {
            $("#pay-carddatey").css('border','1px solid red');
            $("#pay-carddatem").css('border','1px solid red');
            // console.log(this);
            alert("這張卡片過期囉!!");
        }else {
            $(this).css('border','');
        };
        
        if (carddatey === "" || carddatey.length === 1 || carddatey < 23) {
            $(this).css('border','1px solid red');
            
        } else {
            $(this).css('border','');
        };

    });
    $(".chip-number").blur(function(){
        let chipNumber = $(this).val();
        
        // console.log(cardnumber.length);
        if (chipNumber === "" || chipNumber.length != 3){
            $(this).css('border','1px solid red');
            // console.log(cardNumber);
        } else {
            $(this).css('border','');
        }
    });
    $(function(){
        $("#checkBox").click(function(){
            let isChecked = $("#checkBox").is(":checked");
           
            if (isChecked) {
                // checkbox 被選中
                $("#checkBoxText").css('color', '');
                $(".terms").css('color', '');
                $(".terms").css('border-bottom', '');
                console.log("有打勾");
            }else{
                $("#checkBoxText").css('color', 'red');
                $(".terms").css('color', 'red');
                $(".terms").css('border-bottom', '1px solid red');
                console.log("沒打勾");
            };
        });
    });
    


    //--------------------------------------------按下送出
    $("#nextsubmit").click(function(e){
        e.preventDefault();

        let user = $("#inputUser").val(); // 获取输入框的值
        let phone = $("#inputPhone").val();
        let mail = $("#inputEmail").val();
        let address = $("#inputAddress").val();
        let cards_el = $(".card-number"); //只抓得到第一筆
        let payCarDdate = $(".pay-carddate").val();
        let chipNumber = $(".chip-number").val();
        
        let sendData = true; // 新增的变量，用于跟踪是否已经触发了警告

//------------------------------------------------------------判斷姓名 
        if (user === "") {
            $("#inputUser").css('border','1px solid red');
            sendData = false;
        }

//------------------------------------------------------------判斷電話
        if (phone === "") {
            $("#inputPhone").css('border','1px solid red');
            sendData = false;
        }

//------------------------------------------------------------判斷信箱 
        if (mail === "") {
            $("#inputEmail").css('border','1px solid red');
            sendData = false;
        }

//------------------------------------------------------------判斷地址
        if (address === "") {
            $("#inputAddress").css('border','1px solid red');
            sendData = false;
        }

        
//------------------------------------------------------------判斷信用卡卡號
        let cards_str = "";
        for (let i = 0; i < cards_el.length; i++) {
            cards_str += cards_el.eq(i).val();   
        };
        //console.log(typeof(cards_str)); //string


        // if (cardNumber === "" || cards_str.length !== 4) {
        //     $(".card-number").css('border','1px solid red');
        //     sendData = false;
        // };
        if (is.creditCard(cards_str)) {
            sendData = false;
            for(let i = 0; i < cards_el.length; i++){
                cards_el.eq(i).css('border','1px solid red');
            }
        }else{
            cards_el.eq(i).css('border','');
        };
        if(sendData = false){
            console.log("錯的");
        }else{
            console.log("對的");
        };
        


//------------------------------------------------------------判斷信用卡年月
        let carDdate = $("#pay-carddatem").val();
        let cardDateYear = $("#pay-carddatey").val();

        if (payCarDdate === "" || payCarDdate.length < 2 || parseInt(carDdate, 10) > 12 || cardDateYear === "" || parseInt(cardDateYear, 10) < 23) {
            $(".pay-carddate").css('border', '1px solid red');
            sendData = false;
        };
//------------------------------------------------------------------判斷卡背三碼
        if (chipNumber === "" || chipNumber.length < 3){
            $(".chip-number").css('border','1px solid red');
            sendData = false;
        }
//------------------------------------------------------------------判斷信箱 
        let email = $("#inputEmail").val();
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!emailPattern.test(email)) {
                $("#inputEmail").css('border','1px solid red');
                sendData = false;
            } 
//------------------------------------------------------------------判斷打勾
                let isChecked = $("#checkBox").is(":checked");
            
                if (isChecked) {
                    // checkbox 被選中
                    $("#checkBoxText").css('color', '');
                    $(".terms").css('color', '');
                    $(".termsfalse").css('border-bottom', '');
                    console.log("有打勾");
                } else {
                    $("#checkBoxText").css('color', 'red');
                    $(".terms").css('color', 'red');
                    $(".terms").css('border-bottom', '1px solid red');
                    console.log("沒打勾");
                    sendData = false;
                };
        
        //--------------------------------------------------------判斷整個資料
        if (!sendData) { //驗證失敗 sendData==false
            alert('請輸入完整資料');
            e.preventDefault();
        } else {         //驗證成功
            // 跳轉到 ./shoppingcart.html 頁面
            //window.location.href = './shoppingcart_success.html';
            console.log(cards_str);
            console.log("驗證成功");
            //4556072908576837
        };

    });
        
});


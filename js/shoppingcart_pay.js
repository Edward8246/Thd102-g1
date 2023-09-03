document.addEventListener("DOMContentLoaded", function(){
    let cards = document.getElementsByClassName("card-number");
    let carddate = document.getElementsByClassName("pay-carddate");
    console.log(carddate);
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
        //-----------------------
        
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
        }
    }
    
});

//---------------------下一步

let btn = document.getElementById("nextsubmit");
btn.addEventListener("click", function(){
    let user = document.getElementById("inputUser");
    let phone = document.getElementById("inputPhone");
    let mail = document.getElementById("inputEmail");
    
 
});


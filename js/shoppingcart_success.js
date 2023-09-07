$(function(){
    //產生單號=====================================  
    //==============================================            
          
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        let move = $(this).scrollTop();
        if(move >= 500){
            $('.success-food1').addClass('foodmove1');
            $('.success-food2').addClass('foodmove2');
            $('.success-food3').addClass('foodmove3');
            $('.success-food4').addClass('foodmove4');
            $('.success-food5').addClass('foodmove5');
            $('.success-food6').addClass('foodmove6');
            
            setTimeout(function(){

                $('.success-box-top').css( 'opacity', '1')
                $('.success-box-top').addClass('boxtoprun')
            }, 3000);

            setTimeout(function(){
                $('.success-animation').addClass('runend')
            }, 6000);

            setTimeout(function(){
                $(".success-animation").remove();
            },7000);
            setTimeout(function(){
                $(".success-animation-wrapper").animate({height:'50px'})
            },8000);
            setTimeout(function(){
                $(".shoppinrcart-success-button").animate({opacity:'1'})
            },8500);
        }
    })
})


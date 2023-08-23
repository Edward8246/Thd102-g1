//文字視差

function el_move(article_el,selector_el){
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: article_el,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, 
      //markers: true
    }
  });
  t1.to( article_el+" "+selector_el, { y: -30, duration: 2})
  t1.to( article_el+" "+selector_el, { y: 0,  stagger: 1 , duration: 2})
}

el_move(".article1",".small_info");
el_move(".article2",".small_info");
el_move(".article3",".small_info");
el_move(".article1",".circlefont");
//textmove(".circlefont");
//============================================
//article3圓圈視差
function selectormove(article_el,move_el){
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: article_el,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, 
      //markers: true
    }
  });
  t1.to( article_el+" "+move_el, { y: 50})
  t1.to( article_el+" "+move_el, { y: 0,  stagger: 1 , duration: 2})
}
selectormove(".article3",".newProduct");
selectormove(".article3",".chefClass");
selectormove(".article3",".shareTable");
//============================================
//article1箱子食材
//#1 食材爆炸
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".article1",
    start: "top center",
    end: "top center",
    scrub: 1, //啟用了 scrub 功能，動畫的進度會根據滾動的位置進行平滑過渡。
    pin: true, //觸發器元素在觸發時固定在視窗上方，創建出一種視差滾動的效果。
    //markers: true,
  }
});
t2.to(".ingredients_bg", { yPercent: -23, delay:2, duration: 1});
t2.to(".ingredients_bg", { scale: 0.8, duration: 1});



//============================================
//#2 食材、箱子搖擺
function Tween() {
  TweenLite.fromTo(
    ".box_open,.ingredients_bg,.more_info,.box", 
    3, 
    { rotation: -5 },
    {
      rotation: 0,
      ease: Elastic.easeOut.config(2, 0.2),
      repeat: -1,
      repeatDelay: 2 // 設置每次重複之間的延遲時間
    }
  );
}
Tween();

//============================================
//article2菜單 輪播
gsap.set(".block1 .recipe_item", {
    x: (i) => i * 15+"vw"
  });
  
  gsap.to(".block1 .recipe_item", {
    duration: 10,
    ease: "none",
    x: "+= 105vw", //move each box 90px to right
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 105) //force x value to be between 0 and 90 using modulus
    },
    
    repeat: -1
  });
  
  //---------------------------------
  gsap.set(".block2 .recipe_item", {
    x: (i) => i * (-15)+"vw"
  });
  
  gsap.to(".block2 .recipe_item", {
    duration: 10,
    ease: "none",
    x: "-= 105vw", //move each box 90px to right
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 105 ) //force x value to be between 0 and 90 using modulus
    },
    repeat: -1
  });
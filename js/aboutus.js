//============================================
      //#1 驚嘆號放大
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "top top",
          scrub: 1, //啟用了 scrub 功能，動畫的進度會根據滾動的位置進行平滑過渡。
          pin: true, //觸發器元素在觸發時固定在視窗上方，創建出一種視差滾動的效果。
        //   markers: true,
        }
      });
      t2.to(".mark", { yPercent: -10, delay:2, duration: 1});
      t2.to(".mark", { scale: 1.5, duration: 1});
      t2.to(".mark2", { yPercent: -23, delay:2, duration: 1});
      t2.to(".mark2", { scale: 0.8, duration: 1});
    //   食物爆炸----------------------------
      const box_explode = gsap.timeline({
        scrollTrigger: {
          trigger: ".sectionTwo",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: 1, //啟用了 scrub 功能，動畫的進度會根據滾動的位置進行平滑過渡。
          pin: true, //觸發器元素在觸發時固定在視窗上方，創建出一種視差滾動的效果。
          markers: true,
        }
      });
    //   t2.to(".cata_box_food", { yPercent: -10, delay:2, duration: 1});
    box_explode.to(".cata_box_food", { yPercent: -36, scale: 1.2,delay:1, duration: 1});

//============================================
    //#2 食材、箱子、圖片搖擺
    function Tween() {
    TweenLite.fromTo(
        ".box,.mark,.cata_box_food, .img_sm", 
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
    //#3 盒子上下視差
    const box_move = gsap.timeline({
        scrollTrigger: {
        trigger: ".sectionOne",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
        //markers: true
        }
    });
    
    box_move.to('.aboutus_box', { yPercent: 0, delay:1, duration: 2});
    box_move.to('.aboutus_box', { yPercent: -30, duration: 2});
    
//============================================
    //#3 文字視差
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
      
    el_move(".sectionOne",".text_button_wrapper");
    el_move(".sectionTwo",".small_info");
    el_move(".sectionThree",".image");
    el_move(".sectionFive",".small_info");
    
//============================================
      //圓圈視差
      function selectormove(article_el,move_el){
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: article_el,
            start: "top center",
            end: "bottom bottom",
            scrub: 1, 
            //markers: true
          }
        });
        t1.to( article_el+" "+move_el, { y: 10})
        t1.to( article_el+" "+move_el, { y: -20,  stagger: 1 , duration: 1})
      }
      selectormove(".sectionTwo",".photo");
      selectormove(".sectionThree",".small_info");
      
     

//============================================
    //#Section 4 block移動
    // 检查屏幕宽度是否大于某个像素值（例如800px）
    function isScreenWidth(px) {
        return window.innerWidth > px;
    }


    const block_move = gsap.timeline({
        scrollTrigger: {
        trigger: ".sectionFour",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
        markers: true
        }
    });

    //只有螢幕尺寸大於  px才執行
    if (isScreenWidth(800)) {
        block_move.to('.support .block', { xPercent: 0});
        block_move.to('.support .block', { xPercent: 20, duration: 3});

        block_move.to('.quality .block', { xPercent: 0});
        block_move.to('.quality .block', { xPercent: 80,delay:1, duration: 5});

        block_move.to('.spirit .block', { xPercent: 0});
        block_move.to('.spirit .block', { xPercent: 60,delay:1, duration: 4});
    }
         
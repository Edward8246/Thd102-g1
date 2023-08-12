//=================== article2 圖片輪播 ==============================
//ref:codepen: https://codepen.io/GreenSock/pen/QEdpLe?editors=1111
//商品圖片陣列
//let recipe_item =[];

//預設每張圖片
// gsap.set(".box", {
//     backgroundColor: (i) => colors[i % colors.length],
//     x: (i) => i * 50
//   });

const slideContainer = document.querySelector(".recipes_theme");
const slideItems = document.querySelectorAll(".recipe_item");

gsap.set(slideItems, {
    x: (i) => i * 15 + 'vw' // 15vw 是每項目的寬度
  });

const slideAnimation = gsap.to(slideItems, {
    duration: 20,
    ease: "power1.inOut",  //none
    x: "-=15vw", 
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (15 * 6) + "vw")
      //x: gsap.utils.unitize(x => parseFloat(x) % 1920) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
  });

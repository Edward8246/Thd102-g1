
gsap.set(".block1 .recipe_item", {
    x: (i) => i * 15+"vw"
  });
  
  gsap.to(".block1 .recipe_item", {
    duration: 10,
    ease: "none",
    x: "+= 90vw", //move each box 90px to right
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 90) //force x value to be between 0 and 90 using modulus
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
    x: "-= 90vw", //move each box 90px to right
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 90 ) //force x value to be between 0 and 90 using modulus
    },
    repeat: -1
  });
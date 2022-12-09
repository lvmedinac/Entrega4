const swiper = new Swiper('.swiper', {
   
    direction: 'horizontal',
    loop: true,  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});



anime({
    targets: '.animation_title',
    translateY: 25,
    /*fontSize: 20,*/
    delay: 10,
    loop: true,
  });
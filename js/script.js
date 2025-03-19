$(document).ready(function(){
  $('.lang p').click(function(){
    $('.lang_tab').toggle();
  });

  $('.menu').click(function(){
    $('.modal_gnb').show();
    $('.menu').hide();
    $('.close').show();
  });

  $('.close').click(function(){
    $('.modal_gnb').hide();
    $('.close').hide();
    $('.menu').show();
  });


    // Swiper 슬라이드, html class 이름과 맞춰야 함
	const content = new Swiper('.content', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
      
      });

  $('.tabs li').eq(0).click(function(){
    $('.system_2').hide(); 
    $('.system').eq(0).show();
    $('.tabs li').css('background','#A1C4FD'); 
    $(this).css('background','#f2f2f2');
  });

  $('.tabs li').eq(1).click(function(){
    $('.system').hide(); 
    $('.system_2').eq(1).show();
    $('.tabs li').css('background','#A1C4FD');
    $(this).css('background','#f2f2f2');
  });

  $('.tabs li').eq(2).click(function(){
    $('.system').hide(); 
    $('.system_2').eq(2).show();
    $('.tabs li').css('background','#A1C4FD'); 
    $(this).css('background','#f2f2f2');
  });

});
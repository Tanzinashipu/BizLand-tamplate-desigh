$(document).ready(function(){
// vinobox js
 $('.venobox').venobox({
 	
 }); 
//    counter js
    $('.number').counterUp({
            delay: 10,
            time:1500
        });
    
//    member slick slider js
  $('.team-slider').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay:true,
        dots:true,
        arrows:false,


         responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

     });
    
//    protofolio js
    $('.portfolios').filterData({
			aspectRatio: '8:5',		
			nOfRow : 3,
			itemDistance : 0
		});
		$('.portfolio-controllers button').on('click',function(){
			$('.portfolio-controllers button').removeClass('active-work');
			$(this).addClass('active-work');
		});

    
    // back back-to-top 
 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },2000);
    return false;
  });
    
    
    //    stickytop menu
    $(window).scroll(function(){
       var scrolling=$(this).scrollTop();
        var sticky=$('.sticky');
        if(scrolling>100){
            sticky .addClass('menu_bg');
        }
        else{
              sticky .removeClass('menu_bg');
        }
    });
    
    // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 150});

 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 50
             }, 2000);
             return false;
         }
     }
 });

 // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });
 
});
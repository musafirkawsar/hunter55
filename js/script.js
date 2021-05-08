$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fas fa-arrow-circle-right nxt"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
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

// ================================================================================== service-slider

$('.service-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  vertical:true,
  nextArrow: '<i class="fas fa-angle-down nxt"></i>',
  prevArrow: '<i class="fas fa-angle-up prev"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1200,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        speed: 1200,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//===============================================================================================test-slider 
$('.image-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  nextArrow: '<i class="fas fa-angle-down nxt"></i>',
  prevArrow: '<i class="fas fa-angle-up prev"></i>',
  asNavFor: ".testi-txt-slider",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1200,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
        speed: 1200,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
        centerMode: true,
        centerPadding: "0",
        speed: 1200,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.testi-txt-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical:true,
  asNavFor: ".image-slider",
});
// ================================================================================================================counter
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// ====================================================================================================================lastslider
$('.footerimg-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// =================================================================================
$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1050)
})
$(window).scroll(function(){
  if($(window).scrollTop() >300){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
})
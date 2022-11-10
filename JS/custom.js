
// preloader
// $(window).on('load', function(){
//   $(".preloader").fadeOut(100);
// });
// preloader

// cursor
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})
// cursor

// fixed Nav
$(window).scroll(function () {
    var scrolling = $(window).scrollTop();

    if (scrolling == 0) {
        $(".navbar").removeClass('bg');
    } else {
        $(".navbar").addClass('bg');

    }

});
// fixed Nav

// back to top

$(window).scroll(function(){
  var scrolling = $(window).scrollTop();

  if(scrolling > 10){
    $(".bk_top").slideDown(1000);
  }else{
    $(".bk_top").slideUp(1000);
  }


});
$(".bk_top").click(function(){
  $('html, body').animate({
      scrollTop:0
  },1500)
});

// back to top



// Banner Slider
$('.banner_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
    autoplay: false,
    pauseOnHover:false,
    pauseOnDotsHover:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
// Banner Slider

// banner typed
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });
// banner typed

// wow js
AOS.init();
// wow js

// banner theme button

$(".clrplt").click(function() 
{
  $(".clrplt ul").toggleClass('plt_bg');
});
// banner theme button


// banner theme colour
$('.colors').each(function(){
  $(this).click(function(){
    let color = $(this).attr('data-color');
    document.documentElement.style.setProperty('--color', color);
  })
})
// banner theme colour



// Gallery VenoBox
new VenoBox({
  selector: ".my-image-links",
  spinner: 'fold',
  infinigall:true,
  navSpeed: 400,
  spinColor:"blue"
});
// Gallery VenoBox



// Feedback circle slider

$('.big_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.small_slider',
  speed: 500,
});
$('.small_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.big_slider',
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  vertical: true,
  verticalSwiping: true,
  prevArrow: '<i class="fa-solid fa-circle-up arr"></i>',
  nextArrow: '<i class="fa-solid fa-circle-down arr"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        
      }
    },
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});
// Feedback circle slider
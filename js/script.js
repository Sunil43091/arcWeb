
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $(".menuTriggerRight").addClass("navFix");
    } else {
      $(".menuTriggerRight").removeClass("navFix");
    }
});

$(".menuTriggerRight").click(function(){
  $(".navMain").toggleClass("displayBlock");
  $(".navMain").toggleClass("show");
  $(".navMain .navContent").toggleClass("active");
  $(".menuTriggerRight").toggleClass("active");
  $(".logo").toggleClass("logowhite");
  $("body").toggleClass("overflowhide");
});


var swiper = new Swiper('.bannerSwiper', {
  autoplay: {
    // delay: 11000,
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  loop: true,
  pagination: {
	el: '.swiper-pagination',
	dynamicBullets: true,
	renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<svg class="circ" width="40" height="40" class="circ"><circle class="circ1" cx="20" cy="20" r="15" stroke="#fff" stroke-width="2" fill="none"/><circle class="circ2" cx="20" cy="20" r="15" stroke="#fff" stroke-width="1" fill="none"/></svg>' + '</span>';
    },
  },
});


var swiper = new Swiper(".testimonialSlider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




//-----------  parallax  Start

var winScrollTop=0;
$.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    //viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    //bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.parallax-section').each(function(){
	 if ($(this).is_on_screen()) {
		var firstTop = $(this).offset().top;
    var $title = $(this).find(".parallaxTitleElement");
    var $span = $(this).find(".parallaxElement");
    var moveTopTitle = (firstTop-winScrollTop)*0.02 //speed;
    var moveTop = (firstTop-winScrollTop)*0.06 //speed;
    $title.css("transform","translateY("+moveTopTitle+"px)");
    $span.css("transform","translateY("+moveTop+"px)");
   }
  });
}

$(window).scroll(function(e){
  winScrollTop = $(this).scrollTop();
  parallax();
});
//-----------  parallax  Close

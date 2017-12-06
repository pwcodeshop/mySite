//==== show and hide menu ====//
// this changes the navbar background color
$(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');
 
    if (scrollPos > 450) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});
// this changes the navbar link text color
$(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar .nav-link');
 
    if (scrollPos > 450) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});
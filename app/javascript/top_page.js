$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});


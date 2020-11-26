$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});


// scroll-fixed

$(function() {
  var box = $('#scroll-fixed');
  var boxTop = box.offset().top;
  var margin = 50;

  $(window).scroll(function() {
    if ($(window).scrollTop() + margin >= boxTop) {
      box.css('width', box.outerWidth());
      box.addClass('fixed');
    } else {
      box.css('width', '');
      box.removeClass('fixed');
    }
  });
});

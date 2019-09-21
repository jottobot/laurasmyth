$(document).ready(function () {
  $(".biography").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.about').offset().top)
    }, 500);
  });
  $(".choreography").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.portfolio').offset().top)
    }, 500);
  });
  $(".peformances").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.performance').offset().top)
    }, 500);
  });
  $(".contacts").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.contact').offset().top)
    }, 500);
  });
});
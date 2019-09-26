$(document).ready(function () {
  $(".biography").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.about').offset().top)
    }, 500);
  });
  $(".choreography").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.choreo').offset().top)
    }, 500);
  });
  $(".Statement").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.statement').offset().top)
    }, 500);
  });
  // $(".peformances").on('click', function (event) {
  //   $('html, body').animate({
  //     scrollTop: ($('.performance').offset().top)
  //   }, 500);
  // });
  $(".contacts").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.contact').offset().top)
    }, 500);
  });
  // });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
      // document.getElementById("navbar").style.top = "0px";

    }
    prevScrollpos = currentScrollPos;
  }

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function () {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });
  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function () {
    check_if_in_view()
  })
  //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
(function ($) {
  "use strict";

  $(".time-line-btn").click(function (j) {
    var dropDown = $(this).closest(".content").find(".time-line-body");
    $(this).closest(".acc").find(".time-line-body").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this)
        .closest(".acc")
        .find(".time-line-btn.active")
        .removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  AOS.init({
    duration: 1500, // values from 0 to 3000, with step 50ms
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    offset: 0, // offset (in px) from the original trigger point
    once: true,
    easing: "ease",
  });

  $(".digt-count").counterUp({
    delay: 10,
    time: 1000,
  });

  /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
  $(".scene").each(function () {
    new Parallax($(this)[0]);
  });

  /*--------------------------
      SscrollUp
    ---------------------------- */

  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    scrollDistance: 200, // Distance from top/bottom before showing element (px)
    scrollFrom: "top", // 'top' or 'bottom'
    scrollSpeed: 800, // Speed back to top (ms)
    easingType: "linear", // Scroll to top easing (see http://easings.net/)
    animation: "fade", // Fade, slide, none
    animationSpeed: 200, // Animation speed (ms)
    scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
    scrollText: '<span class="fas fa-arrow-up"></span>', // Text for element, can contain HTML
    scrollTitle: false, // Set a custom <a> title if required.
    scrollImg: false, // Set true to use image
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 2147483647, // Z-Index for the overlay
  });
})(jQuery);

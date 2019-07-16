/**
 * All the famcy stuff that needs to happen on scrolling.
 */

$(document).ready(function () {
  // Initialize when page is opened
  doScrollingStuff();

  // Set when scrolled
  window.onscroll = function () {
    doScrollingStuff();
  };

  function doScrollingStuff() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Set page progress bar
    if ($('#ppb').length) {
      let scrolled = winScroll / height * 100;
      document.getElementById("ppb").style.width = scrolled + "%";
    }
    // Change header class, if necessary
    var header = $("header");
    if (winScroll >= 70) {
      if (!header.hasClass("small")) {
        header.addClass("small");
      }
    } else {
      if (header.hasClass("small")) {
        header.removeClass("small");
      }
    }
  }


});

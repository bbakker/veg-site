$(document).ready(function() {
  /**
   * Handle the level second of the main menu
   */
  var lastClickedTopItem = "";
  function SecondMenu(clickedItem) {
    let $secondMenu = $("#main-menu-second");
    let currentMenuState = $secondMenu.hasClass("closed") ? "closed" : "open";
    let clickedItemTitle = clickedItem.find("a").text();
    let newMenuState = currentMenuState === "open" ? "closed" : "open";
    let subMenu = $(clickedItem).find("ul");

    // If clicked item doesn't has a submenu: Close the submenu
    if (!clickedItem.has("ul").length) {
      // Close the submenu wrapper
      $secondMenu.slideUp("slow").addClass("closed");

      // Return old submenu, if there is one
      if (lastClickedTopItem) {
        lastClickedTopItem.append($secondMenu.find("ul"));
      }
      // Set new state to closed
      newMenuState = "closed";

      // Set last active item
      lastClickedTopItem = clickedItem;
      return;
    }

    // Menu is open, but a different topitem is clicked twice so: Leave the menu open
    if (currentMenuState === "open" && lastClickedTopItem !== clickedItem) {
      // Return old submenu
      lastClickedTopItem.append($secondMenu.find("ul"));
      // Add new submenu
      $secondMenu.html(subMenu);
    } else {
      if (newMenuState === "open") {
        // Add submenu
        $secondMenu.html(subMenu);
        // Open the submenu wrapper
        $secondMenu.slideDown("slow").toggleClass("closed");
      } else if (newMenuState === "closed") {
        $secondMenu.slideUp("slow").toggleClass("closed");
      }
    }

    // Set last active item
    lastClickedTopItem = clickedItem;
  }

  // Make correct topitem active based on clicked topitem.
  $("#main-menu ul > li").click(function() {
    // Reset old active topmenu
    if (lastClickedTopItem) {
      lastClickedTopItem.find("a").toggleClass("active");
    }

    // Set new active topmenu
    $(this)
      .find("> a, > span")
      .toggleClass("active");

    // Open the correct submenu
    SecondMenu($(this));
  });

  /**
   * Scrolling shizzlll
   */

  // Initialize when page is opened
  doScrollingStuff();

  // Set when scrolled
  window.onscroll = function() {
    doScrollingStuff();
  };

  function doScrollingStuff() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Set page progress bar
    let scrolled = winScroll / height * 100;
    document.getElementById("ppb").style.width = scrolled + "%";

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

  // Mobile menu
  $(".hamburger-menu").on("click", function() {
    $(this).toggleClass("open");
    $("#main-menu").toggleClass("mobile").toggleClass("col-md-6").toggleClass("underline-hover");
    console.log('opened mobile menu');
  });

});

$(document).ready(function () {

  /**
   * Handle the level second of the main menu
   */
  var lastClickedTopItem = "";

  function SecondMenu(clickedItem) {

    let $secondMenu = $("#main-menu-second");
    let $secondMenuDescription = $("#main-menu-second-description");
    let currentMenuState = $secondMenu.hasClass("closed") ? "closed" : "open";
    let newMenuState = currentMenuState === "open" ? "closed" : "open";
    let subMenu = $(clickedItem).find("ul").first();
    let submmenuDescription = $(clickedItem).find(".submenu_desc").first();

    let closemenu = function () {
      // Close the submenu description
      $.when($secondMenuDescription.find(".submenu_desc").fadeOut("fast")).done(function () {
        // Close the menu wrapper
        $.when($secondMenu.slideUp("200").addClass("closed")).done(function () {
          if (lastClickedTopItem) {

            // Return old description and submenu, if there is one
            lastClickedTopItem.append($secondMenuDescription.find(".submenu_desc"));
            lastClickedTopItem.append($secondMenu.find("ul"));

            // Set last active item
            lastClickedTopItem = clickedItem;

            // Set new state to closed
            newMenuState = "closed";

            return;
          }
        });
      });
    }

    if (clickedItem.data('has-submenu')) {

      // If no lastClickedTopItem is known, set it with the currently clicked item.
      lastClickedTopItem = (lastClickedTopItem === "") ? clickedItem : lastClickedTopItem;

      // Close the submenu if a menu is loaded
      if (!clickedItem.has("ul").length) {
        //console.log('Close the submenu if a menu is loaded');

        // Close the submenu description
        $.when($secondMenuDescription.find(".submenu_desc").fadeOut("fast")).done(function () {
          // Close the menu wrapper
          $.when($secondMenu.slideUp("200").addClass("closed")).done(function () {
            // Return old description and submenu, if there is one
            if (lastClickedTopItem) {
              lastClickedTopItem.append($secondMenuDescription.find(".submenu_desc"));
              lastClickedTopItem.append($secondMenu.find("ul"));
            }
          });
        });

        // Set new state to closed
        newMenuState = "closed";

        // Set last active item
        lastClickedTopItem = clickedItem;
        return;
      }


      // Menu is open, but a different topitem is clicked twice so: 
      // Leave the menu open but change the submenu and description.
      if (currentMenuState === "open" && lastClickedTopItem !== clickedItem) {
        //console.log('Menu is open, but a different topitem is clicked twice so:...');

        // Switch the description
        $secondMenuDescription.find(".submenu_desc").fadeOut(function () {

          // Return old description 
          lastClickedTopItem.append($secondMenuDescription.find(".submenu_desc"));

          // hide and Return old submenu
          $.when($secondMenu.find("ul").fadeOut).done(function () {
            lastClickedTopItem.append($secondMenu.find("ul"));
          });

          // Set new description
          $secondMenuDescription.html(submmenuDescription);

          // Add new submenu and then fadein de the description
          $.when($secondMenu.html(subMenu).hide().fadeIn('fast')).done(function () {
            $secondMenuDescription.find(".submenu_desc").fadeIn(200);
          });

          // Set last active item
          lastClickedTopItem = clickedItem;
        });
        return;
      }
      // Add the correct submenu, description and open the submenu
      else {
        if (newMenuState === "open") {
          //console.log('Add submenu and description. New state is: Open');

          // Fill submenu and description
          $secondMenu.html(subMenu);
          $secondMenuDescription.html(submmenuDescription);

          // Show the submenu wrapper and show Description
          $.when($secondMenu.slideDown("slow").toggleClass("closed")).done(function () {
            $secondMenuDescription.find(".submenu_desc").fadeIn();
          });

        } else if (newMenuState === "closed") {
          //console.log('Add submenu and description. New state is: Closed');
          $secondMenu.slideUp("slow").toggleClass("closed");
        }
      }
      // Set last active item
      lastClickedTopItem = clickedItem;
      return
    } else {
      // If menu is open, and a topitem is clicked with no submenu...
      if (currentMenuState === 'open') {
        closemenu();
      }
    }
  }


  // Trigger menu.
  $("#main-menu ul > li").click(function () {
    // Reset old active topmenu
    $("#main-menu ul > li > a.active, #main-menu ul > li > span.active").toggleClass("active");

    // Set new active topmenu
    $(this)
      .find("> a, > span")
      .toggleClass("active");

    // Handle the correct submenu
    SecondMenu($(this));
  });

  // Close menu if clicked outsite the menu.
  $('#main').click(function () {
    if (!$("#main-menu-second").hasClass('closed')) {
      SecondMenu($('li.home'));
    }
  });

});

$(document).ready(function () {
    // Mobile menu
    $(".hamburger-menu").on("click", function () {
        $(this).toggleClass("open");
        $("#main-menu").toggleClass("mobile").toggleClass("col-md-6").toggleClass("underline-hover");
        console.log('opened mobile menu');
    });
});

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

$(document).ready(function () {

    /*
    Trigger: open search box on hover
    */
    $("header.small .search").mouseenter(function () {
        openSearch();
    });

    /* 
    Trigger: Close search box on mouseleave, and input box has not the focus.
    */
    $("header.small .search").mouseleave(function () {
        if ($(this).find('input').is(":focus")) {
        } else {
            closeSearch();
        }
    });

    /*
    Trigger: Close search box on focusout.
    */
    $("header.small .search input").focusout(function () {
        closeSearch()
    });


    /* 
    Open the searchbox on a small view
    */
    function openSearch() {
        $('header.small .search').addClass('open');
        $('header.small .search').find('input').focus();
    }

    /*
    close the searchbox on a small view. 
    Close only if the input field has no current value.
    */
    function closeSearch() {
        let value = $(".search input").val().trim();
        if (value.length < 1) {
            setTimeout(function () { $('header.small .search').removeClass("open") }, 800);
        }
    }

    /*
    Bind enter in the search input to the search button
    */
    $(".search input").keypress(function (e) {
        var key = e.which;
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('.search button').click();
            return false;
        }
    });


    /*
    Add loading bar background when search button is clicked.
    */
    $(".search button").on('click', function (e) {
        let value = $(".search input").val().trim();
        if (value.length < 1) {
            closeSearch()
        } else {
            $.when($(".search button.search-submit").addClass('loading')).done(function () {
                setTimeout(function () {
                    window.location.href = "homepage.html?search=" + value;
                    $(".search button.search-submit").removeClass('loading');
                }, 1200);
            });
        }
    });

});
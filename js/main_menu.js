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

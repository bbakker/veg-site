/**
 * All the famcy stuff that needs to happen on scrolling.
 */
$(document).ready(function () {
    let loginbox = $("#login_menu");
    let overlay = $("#overlay");
    let overlayClose = $("div.close");

    // Open loginbox and show overlay
    $(".open_login_window").on("click", function () {
        loginbox.fadeToggle("slow").toggleClass("open");
        overlay.fadeToggle().toggleClass("open");
        // @todo disable scrolling.
    });

    // close overlay and loginbox
    overlay.on("click", function () {
        closeOverlayAndLoginBox();
    });

    function closeOverlayAndLoginBox() {
        if (overlay.hasClass("open")) {
            loginbox.fadeToggle().toggleClass("open");
            overlay.fadeToggle().toggleClass("open");
            // @todo enable scrolling.
        }
    }

    overlayClose.on("click", function () {
        closeOverlayAndLoginBox();
    });

});

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
$(document).ready(function () {
    // Mobile menu
    $(".hamburger-menu").on("click", function () {
        $(this).toggleClass("open");
        $("#main-menu").toggleClass("mobile").toggleClass("col-md-6").toggleClass("underline-hover");
        console.log('opened mobile menu');
    });
});

$(document).ready(function () {
    let activityDetails = $("#activity_details");

    // Change to the first item
    $(".calendar_item_selector li:nth-child(1)").on("click", function(){
        activityDetails.find("h3").text("Zondag 16 September: Samenkomst").hide().fadeIn('slow');
        activityDetails.find(".icon-clock").text("De zaal is open vanaf 9:30").hide().fadeIn('slow');
        activityDetails.find(".two_columns div:nth-child(1)").html("Zangdienst: Carola van Dongen <br />Spreker: Cees Visser <br /> Uitgangstekst: Spreuken 1:1/2 <br /><br />Na de dienst kunt u onder het genot van een kopje koffie of thee elkaar ontmoeten en uitwisselen.").hide().fadeIn('slow');
        $(".calendar_item_selector li.active").removeClass('active');
        $(".calendar_item_selector li:nth-child(1)").addClass('active');
    });

    // Change to the second item
    $(".calendar_item_selector li:nth-child(2)").on("click", function(){
        activityDetails.find("h3").text("Woensdag 19 September: Preekbespreking").hide().fadeIn('slow');
        activityDetails.find(".icon-clock").text("De koffie staat klaar vanaf 19:45").hide().fadeIn('slow');
        activityDetails.find(".two_columns div:nth-child(1)").html('Onder leiding van: Martien Stolwerk<br />We bespreken de preek van zondag 16 september. <br /><a class="icon icon-download" href="#">Download de MP3 hier</a><br />Lees ter voorbereiding John 1:1/15<br />').hide().fadeIn('slow');
        $(".calendar_item_selector li.active").removeClass('active');
        $(".calendar_item_selector li:nth-child(2)").addClass('active');
    });

});

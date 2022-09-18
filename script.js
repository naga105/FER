function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude);
}
getLocation();

function handleSubmit() {
    console.log("submited");
}

function carousel() {

    if ($("#carouselButton").children("span").hasClass('fa-pause')) {

        $("#mycarousel").carousel('pause');

        $("#carouselButton").children("span").removeClass('fa-pause');

        $("#carouselButton").children("span").addClass('fa-play');

    } else if ($("#carouselButton").children("span").hasClass('fa-play')) {

        $("#mycarousel").carousel('cycle');

        $("#carouselButton").children("span").removeClass('fa-play');

        $("#carouselButton").children("span").addClass('fa-pause');

    }

};

$(document).ready(function() {

    $("#mycarousel").carousel({
        interval: 2000
    });

    $("#carousel-pause").click(function() {

        $("#mycarousel").carousel('pause');

    });

    $("#carousel-play").click(function() {

        $("#mycarousel").carousel('cycle');

    });

});

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

});
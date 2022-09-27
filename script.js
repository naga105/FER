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



$(document).ready(function() {
    //tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $("#mycarousel").carousel({
        interval: 2000
    });
    //pause button

    $("#carousel-pause").click(function() {

        $("#mycarousel").carousel('pause');

    });
    //play button
    $("#carousel-play").click(function() {

        $("#mycarousel").carousel('cycle');

    });

    // include 2
    $("#carouselButton").click(function() {

        if ($("#carouselButton").children("span").hasClass('fa-pause')) {

            $("#mycarousel").carousel('pause');

            $("#carouselButton").children("span").removeClass('fa-pause');

            $("#carouselButton").children("span").addClass('fa-play');

        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {

            $("#mycarousel").carousel('cycle');

            $("#carouselButton").children("span").removeClass('fa-play');

            $("#carouselButton").children("span").addClass('fa-pause');

        }

    });

})
$(document).ready(function() {

    $('#activeForm').on('click', function() {
        $('#formModal').modal()
    });
    $('#formModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#formModal').modal('hide')
    });
    $('#loginForm').on('click', function() {
        $('#loginModal').modal()
    });
    $('#loginModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#loginModal').modal('hide')
    });
});
$(document).ready(function() {
    $("#launch-button").click(function() {
        $("header").addClass("shake-animation");
        $("#launch-button").removeClass("launch-button-animation");
        setTimeout(scrolldown, 2000);
    });

    function scrolldown() {
        var elTarget = document.getElementById("weather-carousel");
        elTarget.scrollIntoView();
    }
});

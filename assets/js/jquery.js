$(document).ready(function() {
    autoPlayYouTubeModal();
    switchPages();


    //Launch button animation
    $("#launch-button").click(function() {
        $("header").addClass("shake-animation");
        $("#launch-button").removeClass("launch-button-animation");
        setTimeout(scrolldown, 2000);
    });

    //Function to scroll down to weather after "launch"
    function scrolldown() {
        var elTarget = document.getElementById("weather-section");
        elTarget.scrollIntoView();
    }

    //function to autoplay videos
    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function() {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + " iframe").attr("src", videoSRCauto);
            $(theModal + " button.close").click(function() {
                $(theModal + " iframe").attr("src", videoSRC);
            });
        });
    }

    //Function for the weight calculator
    $("#weightCheck").click(function() {
        var weight = $("#weightInput").val();
        var testValue = $.isNumeric(weight);
        var kgVal = $("#kgRadio:checked").val();
        var lbVal = $("#lbRadio:checked").val();

        if (kgVal == "on") {
            var unit = "kg";
            var mass = weight / 9.8;
            var wom = mass * 3.711;
            var weightOnMars = wom.toFixed(1);
        } else if (lbVal == "on") {
            var unit = "lb";
            var weightInKG = weight / 2.20462;
            var mass = weightInKG / 9.8;
            var wom = mass * 3.711;
            var weightOnMars = wom.toFixed(1);
        }

        if (testValue == false) {
            $("#weightResult").html("<h4>Please insert a valid number. (i.e. 75.6 or 2483.8)</h4>")
        } else {
            $("#weightResult").html(`<h4>On Mars, that weight would be equivalent to ${weightOnMars}${unit}!</h4>`)
        };
    });

    //Function to switch the pages for tablets and desktop
    function switchPages() {
        var trigger = $(".sc-buttons > a");

        trigger.click(function() {
            var selectedSectionID = $(this).attr("href");
            $(selectedSectionID)
                .addClass("slide-show")
                .removeClass("slide-hide, move-back");

            var siblingsOnly = $(this).siblings();
            siblingsOnly.each(function(i) {
                var otherSectionsID = $(this).attr("href");
                $(otherSectionsID)
                    .removeClass("slide-show")
                    .addClass("slide-hide");

                setTimeout(function() {
                    $(otherSectionsID).addClass("move-back");
                }, 2000);
            });
        });
    }


});
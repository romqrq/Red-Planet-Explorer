$(document).ready(function() {
    autoPlayYouTubeModal();
    switchPages();

    $("#launch-button").click(function() {
        $("header").addClass("shake-animation");
        $("#launch-button").removeClass("launch-button-animation");
        setTimeout(scrolldown, 2000);
    });

    function scrolldown() {
        var elTarget = document.getElementById("weather-section");
        elTarget.scrollIntoView();
    }
    // console.log(("#data2").children("img"));
    //     $("#data2").children("img").click(function() {
    //         var imgID = $(this).attr("id");
    //         console.log(imgID);
    //         var galModal = document.getElementById("galModal");
    //         // galModal.innerHTML = "";
    //         galModal.innerHTML = `
    //         <div id="myModal" class="modal">
    //         <span class="close">&times;</span>
    //         <img class="modal-content" id="${imgID}">`;
    //     });

    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    //code from https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal
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

    //Function to switch the pages for tablets and desktop
    function switchPages() {
        var trigger = $(".sc-buttons > button");

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
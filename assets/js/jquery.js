$(document).ready(function() {
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
});
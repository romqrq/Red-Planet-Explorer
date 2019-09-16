$(document).ready(function() {
    $("#launch-button").click(function() {
        $("#test").addClass("shake-animation");
        setTimeout(scrolldown, 3000);
    });

    function scrolldown() {
        var images = document.getElementById("image");
        images.scrollIntoView();
    }
});


// $("#button").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });
// // $("#launch-button").click(function() {
// //     this.addClass("shake-animation");
// //     setTimeout(window.scrollBy(0, 100));
// });

// $("button").click(function(){
//   $("p:first").addClass("intro");
// });

// function launch(){
//     document.getElementById("test").addClass("shake-animation");
// }

// function scroll() {

//     window.scrollBy(0, 900)
// }

// setTimeout(scroll, 3000);



// var datenow = new Date;
// console.log(datenow);

function getWeatherData(cbweather) {
    // console.log(roverNameManifest);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbweather(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0");
    xhr.send();
}

function writeWeatherToDocument() {
    var el = document.getElementById("dataWeather");
    el.innerHTML = "";

    getWeatherData(function(data) {
        var JSO = data;
        //data/validity_checks/
        var vc = data.validity_checks;
        //setting last sol number
        var sol = JSON.parse(vc.sols_checked)
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        var vcsATvalid = vc[sol].AT.valid;

        if (vcsATvalid !== false) {
            el.innerHTML += `
            <p>Temperature (ºC): ${JSO[sol].AT.av}</p>
            <p>ATM Pressure (Pa): ${JSO[sol].PRE.av}</p>
            <p>Wind Speed (m/s): ${JSO[sol].HWS.av}</p>
            <p>Wind Direction: ${JSO[sol].WD.most_common.compass_point}</p>
            `;
        }
        else {
            el.innerHTML += `
            <p>Temperature (ºC): </p>
            <p>ATM Pressure (Pa): </p>
            <p>Wind Speed (m/s): </p>
            <p>Wind Direction: </p>
            <p>NASA: Data not yet validated.</p>
            `;
        }
    });
}

//         if (validCheck.valid === false) {
//             //setting sol number to element

//             document.getElementById("lastSunNumber").innerHTML = `
//                     <p>Data for <strong>${featuredSol}</strong> awaiting NASA's validation</p>
//                     <p>While we wait, scroll down and go deeper into the Red Planet!</p>
//                     `;
//         }
//     });
// }






























// function getData(cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//             console.log(JSON.parse(this.responseText));
//         }
//     };
// }





// function getManifest(roverNameManifest, cbManifest) {
//     console.log(roverNameManifest);

//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             cbManifest(JSON.parse(this.responseText));
//         }
//     };
//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverNameManifest + "?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeManifestToDocument(roverNameManifest) {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getManifest(roverNameManifest, function(data) {
//         data = data.photo_manifest;

//         let item;
//         for (item in data) {
//             if (item != "photos") {
//                 let itemString = item.replace(/_/g, " ");
//                 let itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
//                 console.log(itemStringCapitalized);
//                     el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
//             }
//         }
//     });
// }
















// function printDataToConsole(data) {
//     console.log(data.photo_manifest);
// }

// getData(printDataToConsole);


// function getManifest(cbManifest) {
//     // var roverLatest = document.getElementById("inputLatestRoverPhoto");
//     // var roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
//     // var rvrnm = document.getElementsByclass("nameRoverButton").id;
//     // console.log(rvrnm);
//     // var roverNameLatest = rvrnm.value;
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             cbManifest(JSON.parse(this.responseText));
//         }
//     };
//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeManifestToDocument() {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getManifest(function(data) {
//         console.log(data.photo_manifest);
//         data = data.photo_manifest;
//         var item;
//         for (item in data) {
//             if (item != "photos") {
//                 var itemString = item.replace(/_/g, " ");
//                 var itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
//                 console.log(itemStringCapitalized);
//                     el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
//             }
//         }
//     });
// }

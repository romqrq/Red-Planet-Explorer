var roverName = "curiosity";
// var solNumber = ""; //"&sol=1000";
// var camName = "&camera=FHAZ";
// var pageNumber = ""; //"&page=1"
// var earthDate = "earth_date=2015-6-3"


//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");



var roverName = ""; //"curiosity";
var solNumber = ""; //"&sol=1000";
var camName = ""; //"&camera=FHAZ";
var pageNumber = ""; //"&page=1"
var earthDate = ""; //"earth_date=2015-6-3"


//Information for the weather section

function getWeatherData(cbweather) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
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
        var sol = vc.sols_checked[vc.sols_checked.length - 1];
        //setting SECOND LAST sol number
        var SLsol = vc.sols_checked[vc.sols_checked.length - 2];
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        var vcsATvalid = vc[sol].AT.valid;
        //data/validity_checks/"SECOND LAST sun number"/AT/valid:"true or false"
        var vcSLsATvalid = vc[SLsol].AT.valid;

        //Setting sol number to use as reference to drill down to the other variables
        if (vcsATvalid) {
            var SOLnum = sol;
        } else if (vcSLsATvalid) {
            var SOLnum = SLsol;
        }
        var DLVS = JSO[SOLnum];
        var AT = JSO[SOLnum].AT;
        var PRE = JSO[SOLnum].PRE;
        var HWS = JSO[SOLnum].HWS;
        var WD = JSO[SOLnum].WD.most_common.compass_point;
        var LUTC = JSO[SOLnum].Last_UTC;
        var LUTCyear = LUTC.substr(0, 4);
        var LUTCmonth = LUTC.substr(5, 2);
        var LUTCday = LUTC.substr(8, 2);
        el.innerHTML += `
        <div class="weather-sun-date">
            <p class="weather-number">Sol ${SOLnum}</p>
            <p class="weather-label">Last valid data: ${LUTCday}/${LUTCmonth}/${LUTCyear}</p>
        </div>
        <hr class="hr-divider">
        <div class="row">    
            <div class="col-4 AT-data">
                <p class="weather-label">Temperature<br>(ºC):</p>
                <p class="weather-main-number weather-number">${Math.round(AT.av)}</p>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${Math.round(AT.mx)}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${Math.round(AT.mn)}</p>
                    </div>
                </div>
            </div>
            <div class="col-4 AT-data">
                <p class="weather-label">Pressure<br>(atm÷100):</p>
                <p class="weather-main-number weather-number">${((PRE.av/101325)*100).toPrecision(1)}</p>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${((PRE.mx/101325)*100).toPrecision(1)}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${((PRE.mn/101325)*100).toPrecision(1)}</p>
                    </div>
                </div>
            </div>
            <div class="col-4 AT-data">
                <p class="weather-label">Wind<br>(m/s):</p>
                <div class="wind-direction">
                <p class="weather-main-number weather-number">${Math.round(HWS.av)}</p>
                <h5>${WD}</h5>
                </div>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${Math.round(HWS.mx)}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${Math.round(HWS.mn)}</p>
                    </div>    
                </div>
            </div>
        </div>`;
    });
}


//Information about Rovers

// function getManifest(roverNameManifest, cbManifest) {

//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cbManifest(JSON.parse(this.responseText));
//             console.log(cbManifest);
//         }
//     };
//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverNameManifest + "?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeManifestToDocument(roverNameManifest) {
//     var el = document.getElementById("dataManifest");
//     el.innerHTML = "";

//     var el2 = document.getElementById("curiosityLastSun");
//     el2.innerHTML = "";

//     getManifest(roverNameManifest, function(data) {
//         data = data.photo_manifest;
//         // console.log(data);
//         // var RovNameManifest = data.name;
//         // var RovLandingManifest = data.landing_date;
//         // var RovLaunchManifest = data.launch_date;
//         // var RovStatusManifest = data.status;
//         // var RovMaxSolManifest = data.max_sol;
//         // var RovTotalPhotosManifest = data.total_photos;
//         //Breaking down dates
//         var RLchYear = data.launch_date.substr(0, 4);
//         var RLchMonth = data.launch_date.substr(5, 2);
//         var RLchDay = data.launch_date.substr(8, 2);

//         var RLndYear = data.landing_date.substr(0, 4);
//         var RLndMonth = data.landing_date.substr(5, 2);
//         var RLndDay = data.landing_date.substr(8, 2);

//         //Setting up the background image link
//         var imgbox = document.getElementById("dataManifest");
//         imgbox.style.backgroundImage = `URL('assets/images/${data.name}.jpg')`;
//         imgbox.style.height = "45vh";




//         el.innerHTML = ` 
//         <div class="manifest-text">
//             <p class="weather-label">Name: ${data.name}</p>
//             <p class="weather-label">Status: ${data.status}</p>
//             <p class="weather-label">Launch Date: ${RLchDay}/${RLchMonth}/${RLchYear}</p>
//             <p class="weather-label">Landing Date: ${RLndDay}/${RLndMonth}/${RLndYear}</p>
//             <p class="weather-label">Max Sol: ${data.max_sol}</p>
//             <p class="weather-label">Total Photos: ${data.total_photos}</p>
//         </div>    
//         `;

//         // el2.innerHTML = `document.${data.name}.html.innerHTML`;


//     });
// }

function getParamsData(cb) {

    var rvn = document.getElementById("inputRoverName");
    var roverName = rvn.options[rvn.selectedIndex].value;

    var snb = document.getElementById("solTextInput");
    var solNumber = `&sol=${snb.value}`;
    // var snb = document.getElementById("inputSolNumber");
    // var solNumber = `&sol=${snb.options[snb.selectedIndex].value}`;

    var cmn = document.getElementById("inputCamName");
    var camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

    // var pgn = document.getElementById("inputPageNumber");
    // var pageNumber = `&page=${pgn.options[pgn.selectedIndex].value}`;

    // var ead = document.getElementById("inputEarthDate");
    // var earthDate = `earth_date=${ead.options[ead.selectedIndex].value}`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`);
    xhr.send();

}

function writeParamsToDocument() {
    var el = document.getElementById("data2");
    el.innerHTML = "";

    getParamsData(function(data) {
        data = data.photos;

        data.forEach(function(item) {
            el.innerHTML += `<img src=${item.img_src} id="${item.id}" class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
    });
}

function openModal(imageID, imageSRC) {
    var modalContent = document.getElementById("modalBody");
    modalContent.innerHTML = "";

    modalContent.innerHTML = `
        <img class="modal-content" src="${imageSRC}" id="${imageID}">`;
}

// function modalOpener(id) {
//     var GalModal = document.getElementById("galleryModal")
//     GalModal.innerHTML = "";




//     `<div id="myModal" class="modal">
//   <span class="close">&times;</span>
//   <img class="modal-content" id="${item.id}">

//   <!-- Modal Caption (Image Text) -->
//   <div id="${item.earth_date}"></div>
// </div>`;

// };






function getLatest(cbLatest) {
    var roverLatest = document.getElementById("inputLatestRoverPhoto");
    var roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
    // var rvrnm = document.getElementsByclass("nameRoverButton").id;
    // console.log(rvrnm);
    // var roverNameLatest = rvrnm.value;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbLatest(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNameLatest}/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0`);
    xhr.send();
}

function writeLatestToDocument() {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getLatest(function(data) {
        data = data.latest_photos;

        data.forEach(function(item) {
            el.innerHTML += `<img src=${item.img_src} class="img-thumbnail">`;
        });
    });
}


//DESKTOP

// // Scroll top button
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// // Intechanging pages
// function openAbout() {
//   document.getElementById("sidenav-about").style.width = "47vw";
//   document.getElementById("sidenav-resume").style.width = "0";
//   document.getElementById("sidenav-portfolio").style.width = "0";
//   document.getElementById("sidenav-contact").style.width = "0";
// }
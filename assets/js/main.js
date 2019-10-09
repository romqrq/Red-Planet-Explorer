window.mobilecheck = function() {
    var check = false;
    (function(a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");

//Information for the weather section

function getWeatherData(cbweather) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cbweather(JSON.parse(this.responseText));
        }
    };
    xhr.open(
        "GET",
        "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0"
    );
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
                <p class="weather-main-number weather-number">${Math.round(
                  AT.av
                )}</p>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${Math.round(
                          AT.mx
                        )}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${Math.round(
                          AT.mn
                        )}</p>
                    </div>
                </div>
            </div>
            <div class="col-4 AT-data">
                <p class="weather-label">Pressure<br>(atm÷100):</p>
                <p class="weather-main-number weather-number">${(
                  (PRE.av / 101325) *
                  100
                ).toPrecision(1)}</p>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${(
                          (PRE.mx / 101325) *
                          100
                        ).toPrecision(1)}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${(
                          (PRE.mn / 101325) *
                          100
                        ).toPrecision(1)}</p>
                    </div>
                </div>
            </div>
            <div class="col-4 AT-data">
                <p class="weather-label">Wind<br>(m/s):</p>
                <div class="wind-direction">
                <p class="weather-main-number weather-number">${Math.round(
                  HWS.av
                )}</p>
                <h5>${WD}</h5>
                </div>
                <div class ="weather-max-min">
                    <div>
                        <h6>High</h6><p class="weather-number-small">${Math.round(
                          HWS.mx
                        )}</p>
                    </div>
                    <div>
                        <h6>Low</h6><p class="weather-number-small">${Math.round(
                          HWS.mn
                        )}</p>
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

// Latest Pictures
function getLatest(cbLatest) {
    var roverLatest = document.getElementById("inputLatestRoverPhoto");
    var roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbLatest(JSON.parse(this.responseText));
        }
    };
    xhr.open(
        "GET",
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNameLatest}/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0`
    );
    xhr.send();
}

function writeLatestToDocument() {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getLatest(function(data) {
        data = data.latest_photos;

        data.forEach(function(item) {
            el.innerHTML += `<img src=${item.img_src} class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
    });
}


//Photo search by parameters
//Variables for parameters search
var roverName = ""; //"curiosity";
var solNumber = ""; //"&sol=1000";
var camName = ""; //"&camera=FHAZ";
var earthDate = ""; //"earth_date=2015-6-3"

function getParamsData(cb) {
    var rvn = document.getElementById("inputRoverName");
    var roverName = rvn.options[rvn.selectedIndex].value;

    var snb = document.getElementById("solTextInput");
    var solNumber = `&sol=${snb.value}`;

    var cmn = document.getElementById("inputCamName");
    var camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

    // var ead = document.getElementById("inputEarthDate");
    // var earthDate = `earth_date=${ead.options[ead.selectedIndex].value}`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open(
        "GET",
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`
    );
    xhr.send();
}

function writeParamsToDocument() {
    var el = document.getElementById("data2");
    el.innerHTML = "";

    getParamsData(function(data) {
        data = data.photos;
        console.log(data[0].rover);
        var minDate = data[0].rover.landing_date;
        var maxDate = data[0].rover.max_date;
        var maxSol = data[0].rover.max_sol;

        var cn = data[0].rover.cameras;
        var camList = [];
        cn.forEach(function(camera) {
            camList.push(camera.name);
        });

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
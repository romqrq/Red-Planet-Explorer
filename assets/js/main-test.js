//Global variables
var URL;
const APIKEY = "api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b";
const link1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

$(document).ready(function () {
  getData("weather-section");
  autoPlayYouTubeModal();
  switchPages();
})

//Launch button animation
$("#launch-button").click(function () {
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
  trigger.click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-theVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
}

//Function for the weight calculator
$("#weightCheck").click(function () {
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

  trigger.click(function () {
    var selectedSectionID = $(this).attr("href");
    $(selectedSectionID)
      .addClass("slide-show")
      .removeClass("slide-hide, move-back");

    var siblingsOnly = $(this).siblings();
    siblingsOnly.each(function (i) {
      var otherSectionsID = $(this).attr("href");
      $(otherSectionsID)
        .removeClass("slide-show")
        .addClass("slide-hide");

      setTimeout(function () {
        $(otherSectionsID).addClass("move-back");
      }, 2000);
    });
  });
}


//Event Listeners
// document.getElementById("weather-section").addEventListener("load", getData);
document.getElementById("latestButton").addEventListener("click", getData);
document.getElementById("photoButton").addEventListener("click", getData);
document.getElementById("inputRoverName").addEventListener("change", getData);
//Function to retrieve data from APIs

function getData() {
  //Conditionals to determine parameters and ultimately parse the URL to fetch
  //Despite the intention to not use "var", some of the variables inside the conditionals needed to be accessible from outside the "let" scope.
  if ("weather-section") {
    //retrieving API weather information
    console.log("test");
    URL = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
  } else if (this.id == "latestButton") {
    //retrieving API latest photos by rover name
    let roverLatest = document.getElementById("inputLatestRoverPhoto");
    let roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
    URL = `${link1}${roverNameLatest}/latest_photos?${APIKEY}&feedtype=json&ver=1.0`;
  } else if (this.id == "photoButton") {
    //retrieving API photos by rover name, sol number and camera name
    let rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    let snb = document.getElementById("solTextInput");
    let solNumber = `&sol=${snb.value}`;

    let cmn = document.getElementById("inputCamName");
    let camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

    URL = `${link1}${roverName}/photos?${solNumber}${camName}&${APIKEY}`;
  } else if (this.id == "inputRoverName") {
    //retrieving API information to auto fill the input fields of the photo search
    let rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    URL = `${link1}${roverName}/photos?&sol=1600&${APIKEY}`;
  }
  //fetching API data
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      //conditionals to process the content to the respective sections.
      if (this.id == "latestButton") {
        let el = document.getElementById("data");
        el.innerHTML = "";
        data = data.latest_photos;

        data.forEach(function (item) {
          el.innerHTML += `<img src=${item.img_src} class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      } else if (this.id == "inputRoverName") {
        let rvn = document.getElementById("inputRoverName");
        let roverName = rvn.options[rvn.selectedIndex].value;

        data = data.photos;
        let maxSol = data[0].rover.max_sol;
        let cn = data[0].rover.cameras;

        let camNamesList = document.getElementById("inputCamName");
        camNamesList.innerHTML = "";
        cn.forEach(function (camera) {

          camNamesList.innerHTML += `
          <option value="${camera.name}">${camera.name}</option>
          `;
        });

        let maxSolField = document.getElementById("solTextInput");
        maxSolField.placeholder = maxSol;

      } else if (this.id == "photoButton") {
        let el = document.getElementById("data2");
        el.innerHTML = "";

        data = data.photos;

        let cn = data[0].rover.cameras;
        let camList = [];
        cn.forEach(function (camera) {
          camList.push(camera.name);
        });

        data.forEach(function (item) {
          el.innerHTML += `<img src=${item.img_src} id="${item.id}" class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      } else if ("weather-section") {
        let el = document.getElementById("dataWeather");
        el.innerHTML = "";
        let JSO = data;
        //data/validity_checks/
        let vc = data.validity_checks;
        //setting last sol number
        let sol = vc.sols_checked[vc.sols_checked.length - 1];
        //setting SECOND LAST sol number
        let SLsol = vc.sols_checked[vc.sols_checked.length - 2];
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        let vcsATvalid = vc[sol].AT.valid;
        //data/validity_checks/"SECOND LAST sun number"/AT/valid:"true or false"
        let vcSLsATvalid = vc[SLsol].AT.valid;

        //Setting sol number to use as reference to drill down to the other variables
        if (vcsATvalid) {
          var SOLnum = sol;
        } else if (vcSLsATvalid) {
          var SOLnum = SLsol;
        }
        let DLVS = JSO[SOLnum];
        let AT = JSO[SOLnum].AT;
        let PRE = JSO[SOLnum].PRE;
        let HWS = JSO[SOLnum].HWS;
        let WD = JSO[SOLnum].WD.most_common.compass_point;
        let LUTC = JSO[SOLnum].Last_UTC;
        let LUTCyear = LUTC.substr(0, 4);
        let LUTCmonth = LUTC.substr(5, 2);
        let LUTCday = LUTC.substr(8, 2);
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
      };
    });
}
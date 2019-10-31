//Global variables
let URL;
let SOLnum;
let weightOnMars;
let unit;
const APIKEY = "api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b";
const link1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

//functions triggered on ready state
$(document).ready(function () {
  getData("weather-section");
  // autoPlayYouTubeModal();
  switchPages();
  videoShow();
})

//Launch button animation
$("#launch-button").click(function () {
  $("body").addClass("shake-animation");
  $("#launch-button").removeClass("launch-button-animation");
  setTimeout(scrolldown, 2000);
});

//Function to scroll down to weather after "launch"
function scrolldown() {
  const elTarget = document.getElementById("weather-section");
  elTarget.scrollIntoView();
}

//function to open modals with selected images
function openModal(imageID, imageSRC) {
  const modalContent = document.getElementById("modalBody");

  modalContent.innerHTML = `
      <img class="modal-content" src="${imageSRC}" id="${imageID}">`;
}

//Functions to change visibility of video player div
function videoShow() {

  $("#videoContainer").hide()

  $(".vg-general-button").click(function () {
    let videoLink = this.value;
    $("#videoPlayer").html(`
    <iframe src="${videoLink}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" id="videoContent" allowfullscreen></iframe>
    `);

    $("#videoContainer").show()
  });

  $("#videoCloseButton").click(function () {
    //code from https://stackoverflow.com/a/9040667
    let video = $("#videoContent").attr("src");
    $("#videoContent").attr("src", "");
    $("#videoContent").attr("src", video);
    $("#videoContainer").hide()
  })
}


//Function for the weight calculator
$("#weightCheck").click(function () {
  let weight = $("#weightInput").val();
  let testValue = $.isNumeric(weight);
  let kgVal = $("#kgRadio:checked").val();
  let lbVal = $("#lbRadio:checked").val();

  if (kgVal == "on") {
    unit = "kg";
    let mass = weight / 9.8;
    let wom = mass * 3.711;
    weightOnMars = wom.toFixed(1);
  } else if (lbVal == "on") {
    unit = "lb";
    let weightInKG = weight / 2.20462;
    let mass = weightInKG / 9.8;
    let wom = mass * 3.711;
    weightOnMars = wom.toFixed(1);
  }

  if (testValue == false) {
    $("#weightResult").html("<h4>Please insert a valid number. (i.e. 75.6 or 2483.8)</h4>")
  } else {
    $("#weightResult").html(`<h4>On Mars, that weight would be equivalent to ${weightOnMars}${unit}!</h4>`)
  };
});

//Function to switch the pages for tablets and desktop
function switchPages() {
  let trigger = $(".sc-buttons > a");

  trigger.click(function () {
    let selectedSectionID = $(this).attr("href");
    $(`${selectedSectionID}`)
      .addClass("slide-show")
      .removeClass("slide-hide, move-back");

    let siblingsOnly = $(`${selectedSectionID}`).siblings("section");
    // console.log(siblingsOnly);
    siblingsOnly.each(function (i) {
      if (!$(this).hasClass('move-back')) {
        $(this).removeClass("slide-show").addClass("slide-hide")
      };
      let target = this
      setTimeout(function () { $(target).addClass("move-back"); }, 500);
    });
  });
}


//Event Listeners
document.getElementById("latestButton").addEventListener("click", getData);
document.getElementById("photoButton").addEventListener("click", getData);
document.getElementById("inputRoverName").addEventListener("change", getData);

//Function to retrieve data from APIs
function getData() {
  //Conditionals to determine parameters and ultimately parse the URL to fetch
  if (this.id == "latestButton") {
    //retrieving API latest photos by rover name
    const roverLatest = document.getElementById("inputLatestRoverPhoto");
    let roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
    URL = `${link1}${roverNameLatest}/latest_photos?${APIKEY}&feedtype=json&ver=1.0`;
  } else if (this.id == "photoButton") {
    //retrieving API photos by rover name, sol number and camera name
    const rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    const snb = document.getElementById("solTextInput");
    let solNumber = `&sol=${snb.value}`;

    const cmn = document.getElementById("inputCamName");
    let camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

    URL = `${link1}${roverName}/photos?${solNumber}${camName}&${APIKEY}`;
  } else if (this.id == "inputRoverName") {
    //retrieving API information to auto fill the input fields of the photo search
    const rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    URL = `${link1}${roverName}/photos?&sol=1600&${APIKEY}`;
  } else if ("weather-section") {
    //retrieving API weather information
    URL = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
  }
  //fetching API data
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      //conditionals to process the content to the respective sections.

      //Latest photos
      if (this.id == "latestButton") {
        const el = document.getElementById("data");
        el.innerHTML = "";
        data = data.latest_photos;
        console.log("test");

        data.forEach(function (item) {
          el.innerHTML += `<img src=${item.img_src} class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      }
      //Autofill for photo gallery search 
      else if (this.id == "inputRoverName") {
        data = data.photos;
        let maxSol = data[0].rover.max_sol;
        let cn = data[0].rover.cameras;

        const camNamesList = document.getElementById("inputCamName");
        camNamesList.innerHTML = "";
        cn.forEach(function (camera) {

          camNamesList.innerHTML += `
          <option value="${camera.name}">${camera.name}</option>
          `;
        });

        const maxSolField = document.getElementById("solTextInput");
        maxSolField.placeholder = maxSol;

      }
      //Photos from Gallery search
      else if (this.id == "photoButton") {
        const el = document.getElementById("data2");
        el.innerHTML = "";

        data = data.photos;
        if (data.length == 0) {
          el.innerHTML = "<h2>Sorry! There are no pictures for this specific Sol and Camera combination. Please try different Sol values or different cameras!</h2>"
        }
        let cn = data[0].rover.cameras;
        let camList = [];
        cn.forEach(function (camera) {
          camList.push(camera.name);
        });

        data.forEach(function (item) {

          el.innerHTML += `<img src=${item.img_src} id="${item.id}" class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      }
      //Weather
      else if ("weather-section") {
        const el = document.getElementById("dataWeather");
        el.innerHTML = "";
        let JSO = data;
        //data/validity_checks/
        let vc = data.validity_checks;
        //setting last sol number
        let sol = vc.sols_checked[vc.sols_checked.length - 1];
        //setting SECOND LAST sol number
        let SLsol = vc.sols_checked[vc.sols_checked.length - 2];
        //Checking if data is valid
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        let vcsATvalid = vc[sol].AT.valid;
        let vcsHWSvalid = vc[sol].HWS.valid;
        let vcsPREvalid = vc[sol].PRE.valid;
        let vcsWDvalid = vc[sol].WD.valid;
        //data/validity_checks/"SECOND LAST sun number"/AT/valid:"true or false"
        let vcSLsATvalid = vc[SLsol].AT.valid;

        //Setting sol number to use as reference to drill down to the other variables
        if (vcsATvalid && vcsHWSvalid && vcsPREvalid && vcsWDvalid) {
          SOLnum = sol;
        } else if (vcSLsATvalid) {
          SOLnum = SLsol;
        }

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
      }
    });
}
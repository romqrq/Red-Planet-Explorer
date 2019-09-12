// var firstInput = document.getElementById("input1");
// var roverName = firstInput.options[firstInput.selectedIndex].value;

// var secondInput = document.getElementById("input2");
// var earthDate = `earth_date=${secondInput.options[secondInput.selectedIndex].value}`;

// var thirdInput = document.getElementById("input3");
//$(document).ready(function() {
// var camName = `&camera=${thirdInput.options[thirdInput.selectedIndex].text}`;


//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");


function getWeatherData(cbweather) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            // cbweather(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
    xhr.send();
}





var xhr = new XMLHttpRequest();
var roverName = ""; //"curiosity";
var solNumber = ""; //"&sol=1000";
var camName = ""; //"&camera=FHAZ";
var pageNumber = ""; //"&page=1"
var earthDate = ""; //"earth_date=2015-6-3"

function getGeneral(cbData) {
    var rvn = document.getElementById("inputRoverName");
    var roverName = rvn.options[rvn.selectedIndex].value;

    var snb = document.getElementById("solTextInput");
    var solNumber = `&sol=${snb.value}`;
    // console.log(solNumber);
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
            cbData(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`);
    xhr.send();
}

function writeGeneralToDocument() {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getGeneral(function(data) {
        data = data.photos;

        data.forEach(function(item) {
            // item.img_src = item.img_src.slice(0, 4)+"s"+item.img_src.slice(4, -1);
            // el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
            el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
        });
    });
}



function getLatest(cbLatest) {
    var rvrnm = document.getElementsByName("testButton");
    var roverNameLatest = rvrnm.value;
    console.log(roverNameLatest);
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
            el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
        });
    });
}

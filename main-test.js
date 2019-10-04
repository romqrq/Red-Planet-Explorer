//Variables for parameters search
var roverName = ""; //"curiosity";
var solNumber = ""; //"&sol=1000";
var camName = ""; //"&camera=FHAZ";
var pageNumber = ""; //"&page=1"
var earthDate = ""; //"earth_date=2015-6-3"

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
    xhr.open(
        "GET",
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`
    );
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
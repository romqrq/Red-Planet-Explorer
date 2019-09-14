// var roverName = "curiosity";
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
        var sol = JSON.parse(vc.sols_checked)
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        var vcsATvalid = vc[sol].AT.valid;

        if ( vcsATvalid !== false) {
            el.innerHTML += `
            <p>Temperature (ºC): ${JSO[sol].AT.av}</p>
            <p>ATM Pressure (Pa): ${JSO[sol].PRE.av}</p>
            <p>Wind Speed (m/s): ${JSO[sol].HWS.av}</p>
            <p>Wind Direction: ${JSO[sol].WD.most_common.compass_point}</p>
            `;
        } else {
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


function getManifest(roverNameManifest, cbManifest) {
    console.log(roverNameManifest);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbManifest(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverNameManifest + "?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
    xhr.send();
}

function writeManifestToDocument(roverNameManifest) {
    var el = document.getElementById("dataManifest");
    el.innerHTML = "";

    getManifest(roverNameManifest, function(data) {
        data = data.photo_manifest;
        
        let item;
        for (item in data) {
            if (item != "photos") {
                let itemString = item.replace(/_/g, " ");
                let itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
                console.log(itemStringCapitalized);
                    el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
            }
        }
    });
}

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
			// for (item in data) {
			el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
		});
	});
}


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
            el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
        });
    });
}

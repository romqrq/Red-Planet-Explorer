// var roverName = "curiosity";
// var solNumber = ""; //"&sol=1000";
// var camName = "&camera=FHAZ";
// var pageNumber = ""; //"&page=1"
// var earthDate = "earth_date=2015-6-3"


//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");




// //Pick latest photo by rover name
// function getLatest(cb) {
// 	// roverName = function() {
// 	// 	if (document.getElementById("buttonCuriosity") == true) {
// 	// 		var e = document.getElementById("buttonCuriosity");
// 	// 		return e.options[e.selectedIndex].value;
// 	// 	}
// 	// }
// 	$('.latest-button').on('click', function() {
// 		var e = document.getElementById(this.id);
// 		roverName = e.options[e.selectedIndex].value;
// 	});
// 	console.log(roverName);
// 	// var e = document.getElementById("buttonCuriosity");
// 	// var roverName = e.options[e.selectedIndex].value;
// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// document.getElementById("data").innerHTML = JSON.parse(this.responseText);
// 			console.log(JSON.parse(this.responseText));
// 			cb(JSON.parse(this.responseText));
// 		}
// 	};
// 	xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
// 	xhr.send();

// }

// function writeLatestToDocument() {
// 	var el = document.getElementById("data");
// 	el.innerHTML = "";

// 	getLatest(function(data) {
// 		data = data.latest_photos;

// 		data.forEach(function(item) {
// 			el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
// 		});
// 	});
// }





// function getLatest(cb) {
// 	var xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// document.getElementById("data").innerHTML = JSON.parse(this.responseText);
// 			console.log(JSON.parse(this.responseText));
// 			cb(JSON.parse(this.responseText));
// 		}
// 	};

// 	xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
// 	xhr.send();
// }

// function writeToDocument() {
// 	var el = document.getElementById("data");
// 	el.innerHTML = "";

// 	getLatest(function(data) {
// 		data = data.latest_photos;

// 		data.forEach(function(item) {
// 			el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
// 		});
// 	});
// }
var xhr = new XMLHttpRequest();
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

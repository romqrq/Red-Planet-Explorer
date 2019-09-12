// var roverName = "curiosity";
// var solNumber = ""; //"&sol=1000";
// var camName = "&camera=FHAZ";
// var pageNumber = ""; //"&page=1"
// var earthDate = "earth_date=2015-6-3"


//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");




//Pick latest photo by rover name

function setName(namePicked, cb) {
	var roverName = namePicked;
	var xhr = new XMLHttpRequest();

	xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0`);
	xhr.send();

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(JSON.parse(this.responseText));
			cb(JSON.parse(this.responseText));
		}
	};
}

function writeToData2() {
	var el = document.getElementById("data2");
	el.innerHTML = "";

	getLatest(function(data) {
		data = data.latest_photos;

		data.forEach(function(item) {
			el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
		});
	});
}



function getLatest(cb) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// document.getElementById("data").innerHTML = JSON.parse(this.responseText);
			console.log(JSON.parse(this.responseText));
			cb(JSON.parse(this.responseText));
		}
	};

	xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
	xhr.send();
}

function writeToDocument() {
	var el = document.getElementById("data");
	el.innerHTML = "";

	getLatest(function(data) {
		data = data.latest_photos;

		data.forEach(function(item) {
			el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
		});
	});
}

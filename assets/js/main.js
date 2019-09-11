var roverName = "curiosity";
var solNumber = "" //"&sol=1000";
var camName = "&camera=FHAZ";
var pageNumber = "" //"&page=1"
var earthDate = "earth_date=2015-6-3"

//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");

function getData(key, cb) {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`);
    xhr.send();


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            // console.log(typeof(this.responseText));
        }
    };
}

function writeToDocument (key) {
	getData(key, function(data){
		console.dir(data);
		// document.getElementById("data").innerHTML = data;
	});
}

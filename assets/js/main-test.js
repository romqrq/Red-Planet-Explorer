links
https: //mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0
    https: //api.nasa.gov/mars-photos/api/v1/rovers/${roverNameLatest}/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0
    https: //api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b



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

function getParamsData(cb) {
    var rvn = document.getElementById("inputRoverName");
    var roverName = rvn.options[rvn.selectedIndex].value;

    var snb = document.getElementById("solTextInput");
    var solNumber = `&sol=${snb.value}`;

    var cmn = document.getElementById("inputCamName");
    var camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

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
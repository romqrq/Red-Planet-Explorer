//Variables for parameters search
// var roverName = ""; //"curiosity";
// var solNumber = ""; //"&sol=1000";
// var camName = ""; //"&camera=FHAZ";
// var pageNumber = ""; //"&page=1"
// var earthDate = ""; //"earth_date=2015-6-3"

function getRangeData(roverName, cb) {
    // var rvn = document.getElementById("inputRoverName");
    // var roverName = rvn.options[rvn.selectedIndex].value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open(
        "GET",
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?&sol=1600&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`
    );
    console.log(roverName);
    xhr.send();
}

function writeRangeToDocument() {
    var rvn = document.getElementById("inputRoverName");
    var roverName = rvn.options[rvn.selectedIndex].value;
    console.log(roverName);

    getRangeData(roverName, function(data) {
        console.log(data);
        data = data.photos;
        var minDate = data[0].rover.landing_date;
        var maxDate = data[0].rover.max_date;
        var maxSol = data[0].rover.max_sol;
        var cn = data[0].rover.cameras;

        var camNamesList = document.getElementById("inputCamName");
        camNamesList.innerHTML = "";
        cn.forEach(function(camera) {
            // camList.push(camera.name);
            console.log(camera.name);
            camNamesList.innerHTML += `
            <option value="${camera.name}">${camera.name}</option>
            `;
        });

        var maxSolField = document.getElementById("solTextInput");
        maxSolField.placeholder = maxSol;
        console.log(maxSol);
    });
}
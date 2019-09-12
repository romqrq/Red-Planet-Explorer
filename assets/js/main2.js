var xhr = new XMLHttpRequest();
var roverName = ""; //"curiosity";
var solNumber = ""; //"&sol=1000";
var camName = ""; //"&camera=FHAZ";
var pageNumber = ""; //"&page=1"
var earthDate = ""; //"earth_date=2015-6-3"



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

// function setRover(namePicked) {
//     var roverName = namePicked;
// }

// function setDate(datePicked) {
//     var earthDate = `earth_date=${datePicked}`;
// }

// function setCam(camPicked) {
//     var camName = `&camera=${camPicked}`;
// }

// function nameThem() {
//     var firstInput = document.getElementById("input1");
//     var roverName = firstInput.options[firstInput.selectedIndex].value;

//     var secondInput = document.getElementById("input2");
//     var earthDate = `earth_date=${secondInput.options[secondInput.selectedIndex].value}`;

//     var thirdInput = document.getElementById("input3");
//     var camName = `&camera=${thirdInput.options[thirdInput.selectedIndex].text}`;

//     xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`);
//     xhr.send();


//     xhr.onreadystatechange = function(cb) {
//         if (this.readyState == 4 && this.status == 200) {
//             // cb(JSON.parse(this.responseText));
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             // console.log(typeof(this.responseText));
//         }
//     };

// }

// function writeToDocument() {
//     nameThem(function(data) {
//         console.dir(data);
//         document
//     })
// }



//WORKS xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//WORKS xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");


// xhr.open("GET", `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${earthDate}${solNumber}${camName}${pageNumber}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`);
// xhr.send();


// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // document.getElementById("data").innerHTML=JSON.parse(this.responseText);
//         console.log(JSON.parse(this.responseText));
//         // console.log(typeof(this.responseText));
//     }
// };

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("data").innerHTML = this.responseText;
//     }
// };

function getWeatherData(cbweather) {
    // console.log(roverNameManifest);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbweather(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0");
    xhr.send();
}

function writeManifestToDocument() {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getWeatherData(function(data) {
        // var JSO = data;
        // console.log(JSO[269].AT.av);
        console.log(data);
        // console.log(data.sol_keys);
        // console.log(data.sol_keys.AT);
        // console.log(data.sol_keys.Season);
        // // console.log(data.sol_keys.WD.most_common);
        // console.log(data.validity_checks..AT.valid);
        // var solKeys = data.sol_keys;
        // console.log(solKeys.AT);
        // console.log(data.validity_checks[0]);
        
        console.log(featuredSol);
        var dataCheck = data.validity_checks;
        console.log(dataCheck.sol_keys);
        let latestSunData;
        for (latestSunData in dataCheck) {
            // el.innerHTML += `<p>${data[item]}</p>`;
            let paramsData = data[latestSunData];
            // console.log(data[latestSunData]);
            let param;
            for (param in paramsData) {
                let validCheck = paramsData[param];
                if (validCheck.valid !== false) {
                    var featuredSol = data.sol_keys[data.sol_keys.length - 1];
                    document.getElementById("lastSunNumber").innerHTML = `<p>${featuredSol}</p>`;

                }
                console.log(validCheck);

            }
            //     if (item != "photos") {
            //         let itemString = item.replace(/_/g, " ");
            //         let itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
            //         // console.log(itemStringCapitalized);
            //             el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
        }
    });
}






























// function getData(cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//             console.log(JSON.parse(this.responseText));
//         }
//     };
// }





// function getManifest(roverNameManifest, cbManifest) {
//     console.log(roverNameManifest);

//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             cbManifest(JSON.parse(this.responseText));
//         }
//     };
//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/" + roverNameManifest + "?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeManifestToDocument(roverNameManifest) {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getManifest(roverNameManifest, function(data) {
//         data = data.photo_manifest;

//         let item;
//         for (item in data) {
//             if (item != "photos") {
//                 let itemString = item.replace(/_/g, " ");
//                 let itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
//                 console.log(itemStringCapitalized);
//                     el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
//             }
//         }
//     });
// }
















// function printDataToConsole(data) {
//     console.log(data.photo_manifest);
// }

// getData(printDataToConsole);


// function getManifest(cbManifest) {
//     // var roverLatest = document.getElementById("inputLatestRoverPhoto");
//     // var roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
//     // var rvrnm = document.getElementsByclass("nameRoverButton").id;
//     // console.log(rvrnm);
//     // var roverNameLatest = rvrnm.value;
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             cbManifest(JSON.parse(this.responseText));
//         }
//     };
//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeManifestToDocument() {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getManifest(function(data) {
//         console.log(data.photo_manifest);
//         data = data.photo_manifest;
//         var item;
//         for (item in data) {
//             if (item != "photos") {
//                 var itemString = item.replace(/_/g, " ");
//                 var itemStringCapitalized = itemString.charAt(0).toUpperCase() + itemString.slice(1);
//                 console.log(itemStringCapitalized);
//                     el.innerHTML += `<p>${itemStringCapitalized}: ${data[item]}</p>`;
//             }
//         }
//     });
// }

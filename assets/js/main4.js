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
    var el = document.getElementById("data");
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

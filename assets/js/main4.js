// var firstInput = document.getElementById("input1");
// var roverName = firstInput.options[firstInput.selectedIndex].value;

// var secondInput = document.getElementById("input2");
// var earthDate = `earth_date=${secondInput.options[secondInput.selectedIndex].value}`;

// var thirdInput = document.getElementById("input3");
// var camName = `&camera=${thirdInput.options[thirdInput.selectedIndex].text}`;



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

// function writeToDocument(roverName) {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getData(function(data) {
//         data = data.latest_photos;

//         data.forEach(function(item) {
//             el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
//         });
//     });
// }
// }









// function getData(cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));
//             cb(JSON.parse(this.responseText));
//         }
//     };

//     xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");
//     xhr.send();
// }

// function writeToDocument() {
//     var el = document.getElementById("data");
//     el.innerHTML = "";

//     getData(function(data) {
//         data = data.latest_photos;

//         data.forEach(function(item) {
//             el.innerHTML += `<img src=${item.img_src} height=150 width=150>`;
//         });
//     });
// }

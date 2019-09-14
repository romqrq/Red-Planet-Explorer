// file = fopen("assets/weather-data/last-valid-weather-data.txt", 3);// opens the file for writing
// fwrite(file, str);// str is the content that is to be written into the file.
var file = File()
function getWeatherData(cbweather) {
    // console.log(roverNameManifest);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            cbweather(JSON.parse(this.responseText));
            // dataAsText(this.responseText);
        }
    };
    xhr.open("GET", "assets/weather-data/last-valid-weather-data.txt");
    xhr.send();

}

// function writeToFile(dataAsText) {
//     file = fopen("assets/weather-data/last-valid-weather-data.txt", 3); // opens the file for writing
//     fwrite(file, str); // str is the content that is to be written into the file.
    
//     fh = fopen(getScriptPath(), 0); //to open a file

// };

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
                    
                    //setting sol number to element
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
localStorage.setItem("tempxml", xml_content);
var xml_content = localStorage.getItem("tempxml");


canvas.toBlob(function(blob) {
  saveAs(blob, filename);
});

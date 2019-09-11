var xhr = new XMLHttpRequest();


// xhr.open("GET", "https://api.worldbank.org/V2/incomeLevel/LIC/country");
// xhr.open("GET", "https://api.worldbank.org/v2/indicator");
// xhr.open("GET", "https://api.data.unicef.org/SDMX/rest/");
xhr.open("GET", "https://api.nasa.gov/insight_weather/?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0");

xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("data").innerHTML = this.responseText;
//     }
// };
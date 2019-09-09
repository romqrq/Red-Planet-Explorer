var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		document.getElementById("data").innerHTML=this.responseText;
	}
});

xhr.open("POST", "https://nasaapidimasv1.p.rapidapi.com/getClosestAsteroids");
xhr.setRequestHeader("x-rapidapi-host", "NasaAPIdimasV1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "4b98a9a210msh591d6d1fd6f0ab6p14fa63jsnb3c557da6032");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

xhr.send(data);
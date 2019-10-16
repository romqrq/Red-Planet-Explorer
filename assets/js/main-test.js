
document.getElementById("home").addEventListener("load", getData);
document.getElementById("latestButton").addEventListener("click", getData);
document.getElementById("photoButton").addEventListener("click", getData);
document.getElementById("inputRoverName").addEventListener("change", getData);

function getData() {
  if (this.id == "latestButton") {
    let roverLatest = document.getElementById("inputLatestRoverPhoto");
    let roverNameLatest = `${roverLatest.options[roverLatest.selectedIndex].value}`;
    var URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNameLatest}/latest_photos?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0`;
  } else if (this.id == "photoButton") {
    let rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    let snb = document.getElementById("solTextInput");
    let solNumber = `&sol=${snb.value}`;

    let cmn = document.getElementById("inputCamName");
    let camName = `&camera=${cmn.options[cmn.selectedIndex].value}`;

    var URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?${solNumber}${camName}&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`;
  } else if (this.id == "inputRoverName") {
    let rvn = document.getElementById("inputRoverName");
    let roverName = rvn.options[rvn.selectedIndex].value;

    var URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?&sol=1600&api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b`;
  }

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      if (this.id == "latestButton") {
        let el = document.getElementById("data");
        el.innerHTML = "";
        data = data.latest_photos;

        data.forEach(function (item) {
          el.innerHTML += `<img src=${item.img_src} class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      } else if (this.id == "inputRoverName") {
        let rvn = document.getElementById("inputRoverName");
        let roverName = rvn.options[rvn.selectedIndex].value;

        data = data.photos;
        var maxSol = data[0].rover.max_sol;
        var cn = data[0].rover.cameras;

        var camNamesList = document.getElementById("inputCamName");
        camNamesList.innerHTML = "";
        cn.forEach(function (camera) {
          // camList.push(camera.name);
          console.log(camera.name);
          camNamesList.innerHTML += `
          <option value="${camera.name}">${camera.name}</option>
          `;
        });

        var maxSolField = document.getElementById("solTextInput");
        maxSolField.placeholder = maxSol;
        console.log(maxSol);
      } else if (this.id == "photoButton") {
        let el = document.getElementById("data2");
        el.innerHTML = "";

        data = data.photos;

        var cn = data[0].rover.cameras;
        var camList = [];
        cn.forEach(function (camera) {
          camList.push(camera.name);
        });

        data.forEach(function (item) {
          el.innerHTML += `<img src=${item.img_src} id="${item.id}" class="img-thumbnail" onclick="openModal(this.id, this.src)" data-toggle="modal" data-target="#galleryModal">`;
        });
      };
    });
}


function writeRangeToDocument() {
  var rvn = document.getElementById("inputRoverName");
  var roverName = rvn.options[rvn.selectedIndex].value;
  console.log(roverName);

  getRangeData(roverName, function (data) {
    console.log(data);
    data = data.photos;
    var minDate = data[0].rover.landing_date;
    var maxDate = data[0].rover.max_date;
    var maxSol = data[0].rover.max_sol;
    var cn = data[0].rover.cameras;

    var camNamesList = document.getElementById("inputCamName");
    camNamesList.innerHTML = "";
    cn.forEach(function (camera) {
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

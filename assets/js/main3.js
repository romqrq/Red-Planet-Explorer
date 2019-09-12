// document.getElementById('testbutton').addEventListener('click', getText);

// // function getText() {
// //     fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0')
// //         .then(function(res) {
// //             console.log(res.text());
// //         });
// // }

// function getText() {
//     fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0')
//     .then((res) => res.text())
//     .then((data) => {
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch((err) => console.log(err));
// }

 function getPhotos() {
            fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=unJZiQapXhyZamSl37P8FEh7Zlssi7xmaIF4l95b&feedtype=json&ver=1.0')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Photos</>';
                data.forEach(function(photo){
                    output += `
                    <ul>
                        <li>Name: ${photo_manifest.name}</li>
                        <li>Landing Date: ${key.landing_date}</li>
                        <li>Launch Date: ${key.launch_date}</li>
                        <li>Status: ${key.status}</li>
                        <li>Max Sol: ${key.max_sol}</li>
                    </ul>`;
                });
                document.getElementById('output3').innerHTML = output;
                
            });
        }
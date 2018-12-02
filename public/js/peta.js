var mymap = L.map('mapid').setView([-5.148754, 119.436973], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVxbWFuZmFuYW5pIiwiYSI6ImNqbzB3MHBmdTAwMGEzeHJwdTF5NDYybWUifQ.oIHrfzvIgraTFuPcAkXxaA'
}).addTo(mymap);

function findLocation(x, y) {
    for (var i = 0; i < area.length; i++) {
        if (area[i].lokasi[0] == x &&
            area[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1
}

function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = area[ix].gambar;
        par.textContent = area[ix].review;
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review")
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

const URL = 'data/peta.json'
let area = []
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        // console.log(JSON.stringify(myJson));
        localStorage.setItem('nanang', JSON.stringify(myJson.area));
        //   var places = localStorage.getItem('nanang');
        area = JSON.parse((localStorage.getItem('nanang')));

        for (var p of area) {
            var marker =
                L.marker(p.lokasi).addTo(mymap)
                .bindPopup(p.sponsor);
            marker.on('click', showLocation);
        }
    })
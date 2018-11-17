var mymap = L.map('mapid').setView([-5.148754, 119.436973], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHVxbWFuZmFuYW5pIiwiYSI6ImNqbzB3MHBmdTAwMGEzeHJwdTF5NDYybWUifQ.oIHrfzvIgraTFuPcAkXxaA'
    }).addTo(mymap);
    let area= [
        {"lokasi":[-5.153414, 119.454206], "sponsor" : "Ulu Juku"},
        {"lokasi": [-5.149436, 119.430267], "sponsor" : "Coto Kuda"},
        {"lokasi": [-5.155316, 119.418372], "sponsor" : "Warung Kopi Dg.Sija"},
        {"lokasi": [-5.161518, 119.409988], "sponsor" : "Kartu Kuning"},
        {"lokasi": [-5.166006, 119.409413], "sponsor" : "Samsat!!"}
        ]

    for (var p of area) {
        var marker=
        L.marker(p.lokasi).addTo(mymap)
        .bindPopup(p.sponsor);
        }
    




    
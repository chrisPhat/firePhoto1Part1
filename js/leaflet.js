document.addEventListener('DOMContentLoaded', ()=>{

    var map = L.map('map').setView([50.375384675566444, -4.14261817932129], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2hyaXNib290aHBseW11bmkiLCJhIjoiY2tvanVhY2QzMGhwbzJxcHZyenZ3c3ExZCJ9.WRN7D1Y_oyg_UUcxdSPXFg'
    }).addTo(map);



    var modalElems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElems);

    var addImgModal = document.querySelector('#addImgModal');
    var instance = M.Modal.getInstance(addImgModal);

    var latPlaceholder = document.querySelector('#latPlaceholder');
    var lngPlaceholder = document.querySelector('#lngPlaceholder');



    map.on('click', clickedMap);

    function clickedMap(e){
        console.log(e.latlng.lat, e.latlng.lng)

        latPlaceholder.textContent = e.latlng.lat;
        lngPlaceholder.textContent = e.latlng.lng;

        instance.open();

        // db.collection('locations').doc().set({
        //     lat: e.latlng.lat,
        //     lng: e.latlng.lng
        // })
    }

})
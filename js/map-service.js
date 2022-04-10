'use strict'

navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
console.log(navigator.geolocation.getCurrentPosition())
function initMap() {
    // The location of eilat
    const eilat = { lat: 29.557669, lng: 34.951925 };
    // The map, centered at eilat
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: eilat,
    });
    // The marker, positioned at eilat
    const marker = new google.maps.Marker({
        position: eilat,
        map: map,
    });
}


// function showLocation(){

// }

// function handleLocationError(){

// }
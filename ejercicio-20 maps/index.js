
let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion1 = {
        lat: 6.2476,
        lng: 75.5658
    }

    const posicion2 = {
        lat: 8.6341,
        lng: 77.3491
    }

    const posicion3 = {
        lat: 12.5769,
        lng: 81.7051
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Posición 1"
    })

    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Posición 2"
    })

    marker = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Posición 3"
    })
}
// Token access here
mapboxgl.accessToken = mapboxToken;

geocode("3903 S Western Ave, Oklahoma City, OK 73109", mapboxToken).then(function (result){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 18
    });
    map.setCenter(result);

    var markerOptions = {
        color: 'purple',
        draggable: true
    };
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(result)
        .addTo(map);

    map.on('click', function () {
        var favRestaurant = new mapboxgl.Popup()
            .setText("La Tropicana")
            .addTo(map);

        marker.setPopup(favRestaurant);
    });
});
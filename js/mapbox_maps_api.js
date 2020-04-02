// Token access here
mapboxgl.accessToken = mapboxToken;

geocode("Western Ave, Oklahoma City, OK 73109", mapboxToken).then(function (result){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 18
    });
    map.flyTo({center: result});
});
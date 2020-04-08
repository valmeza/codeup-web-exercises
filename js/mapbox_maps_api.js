// Token access here


// geocode("3903 S Western Ave, Oklahoma City, OK 73109", mapboxToken).then(function (result){
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         zoom: 12
//     });
//     map.setCenter(result);
//
//     var markerOptions = {
//         color: 'purple',
//         draggable: true
//     };
//     var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map);
//
//     map.on('click', function () {
//         var favRestaurant = new mapboxgl.Popup()
//             .setText("La Tropicana")
//             .addTo(map);
//
//         marker.setPopup(favRestaurant);
//     });
// });

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [- 97.5164, 35.4676],
    zoom: 15.5,
    bearing: 27,
    pitch: 45
});

var chapters = {
    'mexican': {
        bearing: 27,
        center: [-97.531249, 35.425381],
        zoom: 15.5,
        pitch: 20
    },
    'pizza': {
        duration: 6000,
        center: [-97.501100, 35.319270],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'chicken': {
        duration: 6000,
        center: [-97.627258, 35.461071],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'nothing': {
        duration: 6000,
        center: [- 97.5164, 35.4676],
        bearing: 150,
        zoom: 15,
        pitch: 0
    }
};

window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'mexican';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
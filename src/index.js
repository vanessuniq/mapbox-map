require('dotenv').config();

const initMap = () => {
    // REPLACE WITH YOUR ACCESS TOKEN
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [4.900293, 52.379174],
        zoom: 12.5,
    });

    const popup = new mapboxgl.Popup().setHTML(
        `<h2>Amsterdam central</h2><p>Station</p>`
    );

    const marker = new mapboxgl.Marker()
        .setLngLat([4.900293, 52.379174])
        .setPopup(popup)
        .addTo(map);
};

initMap();
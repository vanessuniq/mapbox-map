require('dotenv').config();

const initMap = () => {
    // REPLACE WITH YOUR ACCESS TOKEN
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [-77.036698, 38.897102],
        zoom: 7,
    });

    const popup = new mapboxgl.Popup().setHTML(
        `<h2>Washington, DC</h2><p>District Capital</p>`
    );

    const marker = new mapboxgl.Marker()
        .setLngLat([-77.036698, 38.897102])
        .setPopup(popup)
        .addTo(map);
};

initMap();
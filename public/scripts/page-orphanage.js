const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomScroll: false
};

const map = L.map('mapid', options).setView([-22.8526212,-45.2378317], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L
.marker([-22.8526212,-45.2378317], { icon })
.addTo(map)
.bindPopup(popup);
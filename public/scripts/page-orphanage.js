const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

const map = L.map('mapid', options).setView([-22.8526212,-45.2378317], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

L
.marker([-22.8526212,-45.2378317], { icon })
.addTo(map);

function selectImage(event) {
    const button = event.currentTarget;
    
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    button.classList.add("active");

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;
}

function removeActiveClass(button) {
    button.classList.remove("active");
}

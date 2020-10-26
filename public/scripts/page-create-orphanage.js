const map = L.map('mapid').setView([-22.8526212, -45.2378317], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Exemplo orfanato <a href="orphanage.html?id=1" class="choose-orpanhage"> <img src="./public/images/arrow-white.svg"> </a>')

let marker;

map.on('click', function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker);

    marker = L.marker([lat, lng], { icon })
        .addTo(map);
});

//add the photo links
function addPhotoField() {
    const container = document.querySelector('#images');
    const fieldContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    const field = newFieldContainer.children[0];

    if (field.value == "") {
        return;
    }

    cleanField(field);

    container.appendChild(newFieldContainer);
}

function cleanField(field) {
    field.value = "";
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        cleanField(span.parentNode.children[0]);
        return;
    }

    span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active');
    })

    const currentButton = event.currentTarget;
    currentButton.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}
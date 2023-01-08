const API_KEY = "eb534ecd05efc6780a8b18f4b7b523d4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const city = document.querySelector("#weather div:first-child");
        const weather = document.querySelector("#weather div:last-child");
        weather.innerHTML = `${data.weather[0].main} / ${Math.round(data.main.temp)}°c`;
        city.innerHTML = data.name;
    });
}
function onGeoError() {
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
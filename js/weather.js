

const WEATHER_KEY = "13bb23b27b7b9d89270b78ef04bec69f";
async function onGeoOk(position) {
  const coords = position.coords;
  const { latitude, longitude } = coords;
  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  const name = data.name;
  weather.innerText = data.weather[0].main;
  city.innerText = name;
  // console.log(data);
}
function onGeoError() {
  console.log("Can't find you");
}
const position = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

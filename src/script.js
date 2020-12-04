function currentDayAndTime() {
  let DayAndTime = document.querySelector("h3#now");
  DayAndTime.innerHTML = `${day} ${hour}:${minutes}`;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

console.log(now);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(document.querySelector("h3#now"));
console.log(document.querySelector(".fa-search"));

currentDayAndTime();


function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let percipitation = Math.round(response.data.clouds.all);
  let wind = Math.round(response.data.wind.speed);
  let humidity = Math.round(response.data.main.humidity);
  let city = response.data.name;
  console.log(temperature);
  console.log(percipitation);
  console.log(wind);
  console.log(humidity);
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
  let h1 = document.querySelector("#temperature");
  h1.innerHTML = temperature;
  let percipitationInfo = document.querySelector("#percipitation");
  percipitationInfo.innerHTML = `${percipitation}%`;
  let windInfo = document.querySelector("#wind");
  windInfo.innerHTML = `${wind} km/h`;
  let humidityInfo = document.querySelector("#humidity");
  humidityInfo.innerHTML = `${humidity}%`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-field");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;

  let apiKey = "68c5c1062569a9e686bff1d72332375f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Button for current Location

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68c5c1062569a9e686bff1d72332375f&units=metric`;
  console.log(lat);
  console.log(lon);
  console.log(endpoint);

  axios.get(endpoint).then(showTemperature);
}

function currentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", currentLocation);

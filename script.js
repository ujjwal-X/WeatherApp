//  this is styles
document.addEventListener("DOMContentLoaded", () => {
  // Container animation
  gsap.from(".container", { duration: 1, opacity: 0, y: -50 });

  // Heading animation
  gsap.from("h1", { duration: 1, opacity: 0, delay: 0.5, y: -50 });

  // Search box and button animation
  gsap.from(".searchData", { duration: 1, opacity: 0, delay: 1, y: -50 });
  gsap.from("#inputBox", { duration: 1, opacity: 0, delay: 1.2, x: -100 });
  gsap.from("button", { duration: 1, opacity: 0, delay: 1.2, x: 100 });
});

//weather api script starts form here
const inputBox = document.getElementById("inputBox");
const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const humidity = document.getElementById("humidity");
const localTime = document.getElementById("localTime");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please enter the city Name:");
  }

  const city = inputBox.value;
  //fetch data from API
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d2ddf4e9e0304dcc97c92746242206&q=${city}&aqi=yes`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  //displaying data on html

  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  weatherStatus.innerHTML = data.current.condition.text;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
  windSpeed.innerHTML = data.current.wind_kph;
  humidity.innerHTML = data.current.humidity;
  temprature.innerHTML = data.current.temp_c;
  localTime.innerHTML = data.location.localtime;
};

// Declaring variable
let weatherCondition = document.getElementById("condition");
let temparature = document.getElementById("temparature");
let city = document.getElementById("location");
let locationInput = document.getElementById("location-input");
const secretkey = config.SECRET_KEY;

document.getElementById("submit-button").addEventListener("click", function () {
  city.innerText = locationInput.value;
  let statusIcon = document.getElementById("status-icon");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${secretkey}&units=metric `;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // Temparature Output
      let icon = data.weather[0].icon;
      statusIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const celsious = data.main.temp.toFixed(2);
      temparature.innerText = celsious;
      weatherCondition.innerText = data.weather[0].main;
      locationInput.value = "";
    });
});

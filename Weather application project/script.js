// -------------------------------
// SELECTING DOM ELEMENTS
// -------------------------------
const searchInput = document.querySelector(".search_input");
const cityName = document.querySelector(".weather_city");
const dateTime = document.querySelector(".weather_datetime");
const weatherStatus = document.querySelector(".weather_status");
const weatherIcon = document.querySelector(".weather_icon");
const temperature = document.querySelector(".weather_temp");
const minTemp = document.querySelector(".weather_min");
const maxTemp = document.querySelector(".weather_max");

const feelsLike = document.querySelector(".weather_feelslike");
const windSpeed = document.querySelector(".weather_wind");
const pressure = document.querySelector(".weather_pressure");
const humidity = document.querySelector(".weather_humidity");

// -------------------------------
// API KEY
// -------------------------------
const API_KEY = "569bb763c9f3bd35029629433c9e54d2";

// -------------------------------
// FETCH WEATHER DATA
// -------------------------------
const getWeatherData = async (city = "Delhi") => {
  try {
    const URL = 
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(URL);
    const data = await res.json();

    if (data.cod !== 200) {
      cityName.textContent = "City Not Found 😒";
      weatherIcon.innerHTML = "";
      return;
    }

    updateUI(data);
  } catch (error) {
    console.log(error);
  }
};

// -------------------------------
// UPDATE UI FUNCTION
// -------------------------------
const updateUI = (data) => {

  const {
    name,
    sys: { country },
    main: { temp, temp_min, temp_max, feels_like, pressure: p, humidity: h },
    weather,
    wind: { speed }
  } = data;

  // Convert country code → actual country name
  const getCountryName = (code) => {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
  };

  cityName.textContent = `${name}, ${getCountryName(country)}`;
  dateTime.textContent = new Date().toLocaleString();

  weatherStatus.textContent = weather[0].description;

  weatherIcon.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
  `;

  temperature.textContent = `${temp}°C`;
  minTemp.textContent = `Min: ${temp_min}°C`;
  maxTemp.textContent = `Max: ${temp_max}°C`;

  feelsLike.textContent = `${feels_like}°C`;
  windSpeed.textContent = `${speed} m/s`;
  pressure.textContent = `${p} hPa`;
  humidity.textContent = `${h}%`;
};

// -------------------------------
// SEARCH INPUT (ENTER KEY)
// -------------------------------
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchInput.value.trim() !== "") {
    getWeatherData(searchInput.value.trim());
    searchInput.value = "";
  }
});

// -------------------------------
// DEFAULT WEATHER ON PAGE LOAD
// -------------------------------
window.onload = () => {
  getWeatherData("Delhi");
};

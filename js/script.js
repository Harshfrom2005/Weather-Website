// const apiKey = "ef7bc4b188b1fbfc12c05203132dfcf1";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector('.search-box');
// const searchBtn = document.querySelector('.search-btn');


// async function checkWeather(city){
//   const response = await fetch(apiURL + city + `&appid=${apiKey}`);
//   var data = await response.json();

//   console.log(data);

//   document.querySelector("#delhi_location").innerHTML = `Weather For ${data.name}`;
//   document.querySelector("#wind_degrees").innerHTML = `Wind Degree: ${data.wind.deg}`;
//   document.querySelector("#wind_speed").innerHTML = `Wind Speed: ${data.wind.speed} Km/h`;
//   document.querySelector(".current-temp").innerHTML = `Current Temp: ${Math.round(data.main.temp)}&degc`;
//   document.querySelector(".temp_max").innerHTML = `Max Temp: ${data.main.temp_max}&degc`;
//   document.querySelector(".temp_min").innerHTML = `Min Temp: ${data.main.temp_min}&degc`;
//   document.querySelector(".feels_like").innerHTML = `Feels Like: ${data.main.feels_like}&degc`;
//   document.querySelector("#sunrise").innerHTML = `Sunrise: ${data.sys.sunrise}`;
//   document.querySelector("#sunset").innerHTML = `Sunset: ${data.sys.sunset}`;

//   searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
//   })

// }

// checkWeather();

  const apiKey = "ef7bc4b188b1fbfc12c05203132dfcf1";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox = document.querySelector('.search-box');
  const searchBtn = document.querySelector('.search-btn');
  const videoWeather = document.querySelector('#video-background');

  async function checkWeather(city) {
    try {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('City not found!');
      }
      const data = await response.json();

      console.log(data);

      document.querySelector("#delhi_location").innerHTML = `Weather For ${data.name}`;
      document.querySelector("#wind_degrees").innerHTML = `Wind Degree: ${data.wind.deg}`;
      document.querySelector("#wind_speed").innerHTML = `Wind Speed: ${data.wind.speed} Km/h`;
      document.querySelector(".current-temp").innerHTML = `Current Temp: ${Math.round(data.main.temp)}&degc`;
      document.querySelector(".temp_max").innerHTML = `Max Temp: ${data.main.temp_max}&degc`;
      document.querySelector(".temp_min").innerHTML = `Min Temp: ${data.main.temp_min}&degc`;
      document.querySelector(".feels_like").innerHTML = `Feels Like: ${data.main.feels_like}&degc`;
      document.querySelector("#sunrise").innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
      document.querySelector("#sunset").innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
      // Update background video based on weather

    if (data.weather[0].main == "Clouds") {
      videoWeather.src = "img/cloudy-weather1.mp4";
    } else if (data.weather[0].main == "Clear") {
      videoWeather.src = "img/sunny-weather.mp4";
    } else if (data.weather[0].main == "Drizzle") {
      videoWeather.src = "img/rainy-weather.mp4";
    } else if (data.weather[0].main == "Mist") {
      videoWeather.src = "img/mist-weather.mp4";
    } else if (data.weather[0].main == "Rain") {
      videoWeather.src = "img/rainy-weather.mp4";
    } else if (data.weather[0] == "Snow"){
      videoWeather.src = "img/snowy-weather";
    }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

  }

  // Call checkWeather function when the search button is clicked
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    checkWeather(searchBox.value);
  });

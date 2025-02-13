export function weather() {
  const apiKey = "69890b88a0fd6c8e8bb0ff5a405f0305";
  const city = "Stockholm";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  async function getWeather() {
    try {
      const response = await axios.get(url);
      const weatherData = response.data;

      const cityName = weatherData.name;
      const temperature = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const weatherDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
      const humidity = weatherData.main.humidity;

      document.querySelector(
        ".js-banner-weather"
      ).innerHTML = `<div class='daily-weather-info'> <div id='city-name'>Sweden, ${cityName} </div> <br> <div id='icon-current-temp'> <img src='${iconUrl}'> <span> <p id='current-temp'>${temperature}°C </p> <p id='current-humidity'>RH : ${humidity}%</p> </span> </div> <br> <div id='description-temp-container'> ${weatherDescription} <div id='temp-divider'></div> Feels like: ${feelsLike}°C</div> </div> `;
    } catch (error) {
      console.error("날씨 정보를 가져오는 데 실패했습니다:", error.message);
    }
  }

  getWeather();
}

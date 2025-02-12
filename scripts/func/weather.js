export function weather() {
  const apiKey = "69890b88a0fd6c8e8bb0ff5a405f0305";
  const city = "Stockholm";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  async function getWeather() {
    try {
      const response = await axios.get(url); // axios는 전역 변수로 사용
      const weatherData = response.data;

      const cityName = weatherData.name;
      const temperature = weatherData.main.temp;
      const feels_like = weatherData.main.feels_like;
      const weatherIcon = weatherData.weather[0].icon;
      const iconUrl = "https://openweathermap.org/img/wn/10d@2x.png";

      document.querySelector(
        ".js-banner-weather"
      ).innerHTML = `<div class='daily-weather-info'> 현재 ${cityName}의 온도: ${temperature}°C <br> 체감온도: ${feels_like}°C <br> 상태: <img src='${iconUrl}'></div>`;
    } catch (error) {
      console.error("날씨 정보를 가져오는 데 실패했습니다:", error.message);
    }
  }

  getWeather();
}

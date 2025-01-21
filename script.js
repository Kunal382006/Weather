const API_KEY = 'your_api_key_here'; // Replace with your OpenWeather API key
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();

      cityName.textContent = `Weather in ${data.name}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Condition: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;

      weatherResult.classList.remove('hidden');
    } catch (error) {
      alert(error.message);
    }
  }
});

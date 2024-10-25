async function fetchWeatherData() {
    const apiKey = 'f95d9ba240c597333909070d5b3407fd';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was ok");
        }
        const weatherData = await response.json();

        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const location = weatherData.name;

        const weatherContainer = document.getElementById('weatherContainer');
        weatherContainer.innerHTML = `<h2>Weather in ${location}</h2>
        <p>Temperature: ${temperature}C</p>
        <p>Description: ${description}</p>`;
    } catch (error) {
        const weatherContainer = document.getElementById('weatherContainer');
        weatherContainer.innerHTML = `<p class='error'>Failed to fetch weather data. Please try again later</p>`
    }
}
fetchWeatherData();
const apiKey = "b33b89a2fbd390322ec9bbef9e155664";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        const tempElement = document.querySelector(".temp");
        const cityElement = document.querySelector(".city");
        const humidityElement = document.querySelector(".humidity");
        const windElement = document.querySelector(".wind");

        async function checkWeather(city) {
            try {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                if (!response.ok) {
                    throw new Error('City not found');
                }
                const data = await response.json();
                console.log(data);
                cityElement.textContent = data.name;
                tempElement.textContent = Math.round(data.main.temp) + "°C";
                humidityElement.textContent = data.main.humidity + "%";
                windElement.textContent = data.wind.speed + " km/h";

                switch (data.weather[0].main) {
                    case "Clouds":
                        weatherIcon.src = "clouds.png";
                        break;
                    case "Clear":
                        weatherIcon.src = "clear.png";
                        break;
                    case "Rain":
                        weatherIcon.src = "rain.png";
                        break;
                    case "Drizzle":
                        weatherIcon.src = "drizzle.png";
                        break;
                    case "Mist":
                        weatherIcon.src = "mist.png";
                        break;
                    default:
                        weatherIcon.src = "weather1.png";
                }
            } catch (error) {
                alert(error.message);
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
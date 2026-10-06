const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const locationBtn = document.getElementById("locationBtn");


// ================================
// Loading
// ================================

function showLoading() {

    document.getElementById("loading")
        .classList.remove("d-none");

}

function hideLoading() {

    document.getElementById("loading")
        .classList.add("d-none");

}


// ================================
// Weather Condition
// ================================

function getWeatherCondition(code) {

    if (code === 0) {
        return ["☀️", "Clear Sky"];
    }

    if (code === 1 || code === 2) {
        return ["🌤️", "Partly Cloudy"];
    }

    if (code === 3) {
        return ["☁️", "Cloudy"];
    }

    if (code === 45 || code === 48) {
        return ["🌫️", "Foggy"];
    }

    if (code >= 51 && code <= 57) {
        return ["🌦️", "Drizzle"];
    }

    if (code >= 61 && code <= 67) {
        return ["🌧️", "Rain"];
    }

    if (code >= 71 && code <= 77) {
        return ["🌨️", "Snow"];
    }

    if (code >= 80 && code <= 82) {
        return ["🌧️", "Rain Showers"];
    }

    if (code >= 95 && code <= 99) {
        return ["⛈️", "Thunderstorm"];
    }

    return ["🌤️", "Unknown"];

}


// ================================
// Dynamic Weather Background
// ================================

function updateWeatherBackground(code) {

    document.body.classList.remove(
        "clear-weather",
        "cloudy-weather",
        "rain-weather",
        "storm-weather",
        "snow-weather",
        "fog-weather"
    );


    if (code === 0) {

        document.body.classList.add("clear-weather");

    }

    else if (code === 1 || code === 2 || code === 3) {

        document.body.classList.add("cloudy-weather");

    }

    else if (code === 45 || code === 48) {

        document.body.classList.add("fog-weather");

    }

    else if (code >= 51 && code <= 67) {

        document.body.classList.add("rain-weather");

    }

    else if (code >= 71 && code <= 77) {

        document.body.classList.add("snow-weather");

    }

    else if (code >= 80 && code <= 99) {

        document.body.classList.add("storm-weather");

    }

}


// ================================
// Format Date
// ================================

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {

        weekday: "short",
        month: "short",
        day: "numeric"

    });

}


// ================================
// Display Forecast
// ================================

function displayForecast(result) {

    const forecastContainer =
        document.getElementById("forecastContainer");

    forecastContainer.innerHTML = "";


    const dates = result.daily.time;

    const weatherCodes =
        result.daily.weather_code;

    const maxTemperatures =
        result.daily.temperature_2m_max;

    const minTemperatures =
        result.daily.temperature_2m_min;


    for (let i = 0; i < dates.length; i++) {

        const weather =
            getWeatherCondition(weatherCodes[i]);


        const forecastCard =
            document.createElement("div");


        forecastCard.className =
            "col-12 col-sm-6 col-md-4 col-lg";


        forecastCard.innerHTML = `

            <div class="forecast-card h-100">

                <h5 class="fw-bold">
                    ${formatDate(dates[i])}
                </h5>

                <div class="forecast-icon my-3">
                    ${weather[0]}
                </div>

                <p class="text-muted mb-2">
                    ${weather[1]}
                </p>

                <h5 class="fw-bold">
                    ${maxTemperatures[i]}°C
                </h5>

                <p class="text-muted mb-0">
                    Low: ${minTemperatures[i]}°C
                </p>

            </div>

        `;


        forecastContainer.appendChild(forecastCard);

    }

}


// ================================
// Get Weather
// ================================

async function getWeather(
    latitude,
    longitude,
    cityName
) {

    const url =
        `https://api.open-meteo.com/v1/forecast` +

        `?latitude=${latitude}` +

        `&longitude=${longitude}` +

        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,visibility,uv_index,surface_pressure,wind_speed_10m,weather_code` +

        `&daily=weather_code,temperature_2m_max,temperature_2m_min` +

        `&timezone=auto`;


    try {

        showLoading();


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Weather data could not be fetched"
            );

        }


        const result =
            await response.json();


        // ================================
        // City Name
        // ================================

        document.getElementById("cityName")
            .textContent = cityName;


        // ================================
        // Temperature
        // ================================

        document.getElementById("temperature")
            .textContent =
            result.current.temperature_2m + "°C";


        // ================================
        // Humidity
        // ================================

        document.getElementById("humidity")
            .textContent =
            result.current.relative_humidity_2m + " %";


        // ================================
        // Wind Speed
        // ================================

        document.getElementById("windSpeed")
            .textContent =
            result.current.wind_speed_10m + " km/h";


        // ================================
        // Feels Like
        // ================================

        document.getElementById("feelsLike")
            .textContent =
            result.current.apparent_temperature + "°C";


        // ================================
        // Visibility
        // ================================

        document.getElementById("visibility")
            .textContent =
            (result.current.visibility / 1000)
            .toFixed(1) + " km";


        // ================================
        // UV Index
        // ================================

        document.getElementById("uvIndex")
            .textContent =
            result.current.uv_index;


        // ================================
        // Pressure
        // ================================

        document.getElementById("pressure")
            .textContent =
            result.current.surface_pressure + " hPa";


        // ================================
        // Weather Condition
        // ================================

        const weather =
            getWeatherCondition(
                result.current.weather_code
            );


        // Dynamic Background

        updateWeatherBackground(
            result.current.weather_code
        );


        document.getElementById("weatherIcon")
            .textContent = weather[0];


        document.getElementById("weatherCondition")
            .textContent = weather[1];


        // ================================
        // Date and Time
        // ================================

        const currentTime =
            new Date(result.current.time);


        document.getElementById("dateTime")
            .textContent =
            currentTime.toLocaleString(
                "en-US",
                {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        // ================================
        // Forecast
        // ================================

        displayForecast(result);


        // ================================
        // Hide Loading
        // ================================

        hideLoading();


        // ================================
        // Clear Error
        // ================================

        document.getElementById("errorMessage")
            .textContent = "";

    }


    catch (error) {

        console.error(error);


        hideLoading();


        document.getElementById("errorMessage")
            .textContent =
            "Unable to fetch weather data.";

    }

}


// ================================
// Search City
// ================================

async function searchCity(city) {

    const geocodingURL =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


    try {

        showLoading();


        document.getElementById("errorMessage")
            .textContent = "";


        const response =
            await fetch(geocodingURL);


        if (!response.ok) {

            throw new Error(
                "City search failed"
            );

        }


        const data =
            await response.json();


        if (
            !data.results ||
            data.results.length === 0
        ) {

            hideLoading();


            document.getElementById("errorMessage")
                .textContent =
                "City not found.";


            return;

        }


        const location =
            data.results[0];


        await getWeather(

            location.latitude,

            location.longitude,

            location.name

        );

    }


    catch (error) {

        console.error(error);


        hideLoading();


        document.getElementById("errorMessage")
            .textContent =
            "Unable to search for city.";

    }

}


// ================================
// Search Button
// ================================

searchBtn.addEventListener(
    "click",
    function () {

        const city =
            cityInput.value.trim();


        if (city === "") {

            document.getElementById("errorMessage")
                .textContent =
                "Please enter a city name.";

            return;

        }


        searchCity(city);

    }
);


// ================================
// Enter Key
// ================================

cityInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchBtn.click();

        }

    }
);


// ================================
// My Location
// ================================

locationBtn.addEventListener(
    "click",
    function () {

        if (!navigator.geolocation) {

            document.getElementById("errorMessage")
                .textContent =
                "Geolocation is not supported by your browser.";

            return;

        }


        showLoading();


        document.getElementById("errorMessage")
            .textContent =
            "Getting your location...";


        navigator.geolocation.getCurrentPosition(

            async function (position) {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;


                try {

                    await getWeather(

                        latitude,

                        longitude,

                        "Your Location"

                    );

                }


                catch (error) {

                    console.error(error);


                    hideLoading();


                    document.getElementById(
                        "errorMessage"
                    ).textContent =
                        "Unable to get weather for your location.";

                }

            },


            function (error) {

                hideLoading();


                if (error.code === 1) {

                    document.getElementById(
                        "errorMessage"
                    ).textContent =
                        "Location permission was denied.";

                }

                else if (error.code === 2) {

                    document.getElementById(
                        "errorMessage"
                    ).textContent =
                        "Unable to determine your location.";

                }

                else if (error.code === 3) {

                    document.getElementById(
                        "errorMessage"
                    ).textContent =
                        "Location request timed out.";

                }

                else {

                    document.getElementById(
                        "errorMessage"
                    ).textContent =
                        "Unable to get your location.";

                }

            }

        );

    }
);


// ================================
// Default City
// ================================

searchCity("Kolkata");
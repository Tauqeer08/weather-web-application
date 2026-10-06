# 🌤️ Weather Web Application

A responsive and user-friendly **Weather Web Application** that provides current weather information and a 5-day forecast for any city. Users can search for a city by name or use their current location to get weather information.

The application is built using **HTML5, CSS3, JavaScript, Bootstrap 5, and Open-Meteo APIs**.

---

## 📸 Project Preview

> Add your application screenshot here.

```text
screenshots/weather-app.png
```

---

## 🚀 Features

* 🔍 **City Search** – Search for weather information by entering a city name.
* 📍 **Current Location** – Get weather information based on the user's current location.
* 🌡️ **Current Temperature** – Displays the current temperature in Celsius.
* 💧 **Humidity** – Shows the current relative humidity.
* 💨 **Wind Speed** – Displays current wind speed.
* 🌡️ **Feels Like Temperature** – Shows the apparent temperature.
* 👁️ **Visibility** – Displays visibility distance in kilometers.
* ☀️ **UV Index** – Shows the current UV index.
* 🧭 **Atmospheric Pressure** – Displays current surface pressure.
* 🌤️ **Weather Condition** – Displays weather condition with a corresponding icon.
* 📅 **Date & Time** – Displays the current date and time for the selected location.
* 📊 **5-Day Forecast** – Shows maximum and minimum temperatures with weather conditions.
* ⏳ **Loading Indicator** – Displays a loading indicator while fetching weather data.
* 🎨 **Dynamic Weather Background** – Background changes according to the current weather condition.
* 📱 **Responsive Design** – Works across desktop, tablet, and mobile screen sizes.

---

## 🛠️ Technologies Used

| Technology                   | Usage                                 |
| ---------------------------- | ------------------------------------- |
| **HTML5**                    | Structure of the application          |
| **CSS3**                     | Custom styling and visual design      |
| **JavaScript (ES6+)**        | Application logic and API integration |
| **Bootstrap 5**              | Responsive layout and UI components   |
| **Open-Meteo Weather API**   | Current weather and forecast data     |
| **Open-Meteo Geocoding API** | City search and location coordinates  |
| **Browser Geolocation API**  | Detecting user's current location     |

---

## 🔗 APIs Used

### Open-Meteo Weather API

The Open-Meteo Weather API is used to retrieve current weather information and daily weather forecasts.

Website:

https://open-meteo.com/

### Open-Meteo Geocoding API

The Open-Meteo Geocoding API is used to search for cities and retrieve their geographical coordinates.

Website:

https://open-meteo.com/en/docs/geocoding-api

---

## ⚙️ How the Application Works

The application uses a simple API-based workflow.

### 🔍 City Search

```text
User enters a city name
        ↓
Open-Meteo Geocoding API
        ↓
Latitude & Longitude
        ↓
Open-Meteo Weather API
        ↓
Weather JSON Response
        ↓
JavaScript processes the response
        ↓
Weather information displayed on the webpage
```

### 📍 Current Location

```text
User clicks "My Location"
        ↓
Browser Geolocation API
        ↓
Latitude & Longitude
        ↓
Open-Meteo Weather API
        ↓
Weather JSON Response
        ↓
Weather information displayed
```

---

## 📊 Weather Information Displayed

The application displays the following weather information:

* Current temperature
* Weather condition
* Humidity
* Wind speed
* Feels-like temperature
* Visibility
* UV index
* Atmospheric pressure
* Current date and time
* 5-day maximum temperature
* 5-day minimum temperature
* Daily weather conditions

---

## 📂 Project Structure

```text
weather-web-application/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    └── weather-app.png
```

### File Description

**`index.html`**

Contains the structure and layout of the Weather Web Application.

**`style.css`**

Contains custom styling, responsive design, weather backgrounds, cards, buttons, and other visual elements.

**`script.js`**

Contains the application logic, API requests, city search, geolocation, weather processing, forecast generation, loading state, and dynamic UI updates.

**`README.md`**

Contains documentation about the project.

---

## 💻 Getting Started

### Prerequisites

You only need:

* A modern web browser
* Internet connection
* A code editor such as Visual Studio Code

No backend server or database is required.

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/weather-web-application.git
```

### 2. Navigate to the Project Folder

```bash
cd weather-web-application
```

### 3. Open the Project

Open the project folder in **Visual Studio Code**.

### 4. Run the Application

You can open `index.html` directly in your browser.

For development, you can also use the **Live Server** extension in Visual Studio Code.

---

## 🌐 Using the Application

### Search Weather by City

1. Enter a city name in the search box.
2. Click the **Search** button.
3. The application retrieves the city's coordinates.
4. Weather information is fetched from Open-Meteo.
5. The current weather and 5-day forecast are displayed.

### Use Current Location

1. Click the **My Location** button.
2. Allow location access when the browser asks for permission.
3. The application retrieves your coordinates.
4. Weather information for your location is displayed.

---

## 🎨 Responsive Design

The application is designed to work on different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Bootstrap's responsive grid system is used together with custom CSS to provide a responsive user interface.

---

## 🧠 JavaScript Concepts Used

This project helped implement

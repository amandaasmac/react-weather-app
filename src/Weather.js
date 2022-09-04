import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      iconUrl: `https://aquamarine-praline-279a47.netlify.app/img/800d.png`,
      date: `sunday 13:24`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="app-container">
          <header>
            <button className="unit-switch">˚F</button>
            <form className="search-form">
              <input
                type="search"
                name="searchcity"
                className="search-input"
                placeholder="Search city..."
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
            <button className="use-device-button">
              <i className="fa-solid fa-location-dot"></i> Use device location
            </button>
          </header>
          <main>
            <div className="weather-today">
              <h2>
                <span>{Math.round(weatherData.temperature)}</span>˚C
              </h2>
              <h1>{weatherData.city}</h1>
              <div className="today-description">{weatherData.description}</div>
              <div className="today-min-max">
                <span className="max-temp">
                  {Math.round(weatherData.maxTemp)}
                </span>
                ˚|{" "}
                <span className="min-temp">
                  {Math.round(weatherData.minTemp)}
                </span>
                ˚
              </div>
              <div className="current-dayandtime">
                Last updated: {weatherData.date}
              </div>
              <div className="today-details">
                <div className="today-feelslike">
                  Feels like: {Math.round(weatherData.feelsLike)}˚
                </div>
                <div className="today-humidity">
                  Humidity: {weatherData.humidity}%
                </div>
                <div className="today-windspeed">
                  Wind speed: {Math.round(weatherData.windSpeed)} km/h
                </div>
              </div>
            </div>
            <div className="weather-image">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    const apiKey = "f2a962d48c46d7fc23aca5910b2db6af";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "f2a962d48c46d7fc23aca5910b2db6af";
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [units, setUnits] = useState({
    system: "metric",
    buttonSymbol: "˚F",
    tempSymbol: "˚C",
  });

  function switchUnits() {
    if (units.system === "metric") {
      setUnits({ system: "imperial", buttonSymbol: "˚C", tempSymbol: "˚F" });
    } else {
      setUnits({ system: "metric", buttonSymbol: "˚F", tempSymbol: "˚C" });
    }
    console.log(units);
    search(weatherData.city);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      tempUnit: units.tempSymbol,
      units: units.system,
      description: response.data.weather[0].description,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].id,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units.system}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function deviceLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="app-container">
          <header>
            <button className="unit-switch" onClick={switchUnits}>
              {units.buttonSymbol}
            </button>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                name="searchcity"
                className="search-input"
                placeholder="Search city..."
                onChange={handleCitySearch}
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
            <button className="use-device-button" onClick={deviceLocation}>
              <i className="fa-solid fa-location-dot"></i> Use device location
            </button>
          </header>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coord={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

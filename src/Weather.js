import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [units, setUnits] = useState("metric");
  const [switcherSymbol, setSwitcherSymbol] = useState("˚F");
  const [tempSymbol, setTempSymbol] = useState("˚C");

  function switchUnits() {
    if (units === "metric") {
      setUnits("imperial");
      setSwitcherSymbol("˚C");
      setTempSymbol("˚F");
    } else {
      setUnits("metric");
      setSwitcherSymbol("˚F");
      setTempSymbol("˚C");
    }
    search();
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      tempUnit: tempSymbol,
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
    const apiKey = "f2a962d48c46d7fc23aca5910b2db6af";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="app-container">
          <header>
            <button className="unit-switch" onClick={switchUnits}>
              {switcherSymbol}
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
            <button className="use-device-button">
              <i className="fa-solid fa-location-dot"></i> Use device location
            </button>
          </header>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

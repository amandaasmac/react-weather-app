import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <span>24</span>˚C
            </h2>
            <h1>Rome</h1>
            <div className="today-description">Sunny</div>
            <div className="today-min-max">
              <span className="max-temp">30</span>˚|{" "}
              <span className="min-temp">15</span>˚
            </div>
            <div className="today-details">
              <div className="today-feelslike">Feels like: 26˚</div>
              <div className="today-humidity">Humidity: 34%</div>
              <div className="today-windspeed">Wind speed: 12 km/h</div>
            </div>
          </div>
          <div class="weather-image">
            <img
              src="https://aquamarine-praline-279a47.netlify.app/img/800d.png"
              alt="sunny"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

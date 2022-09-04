import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <main className="WeatherInfo">
      <div className="weather-today">
        <h2>
          <span>{Math.round(props.data.temperature)}</span>˚C
        </h2>
        <h1>{props.data.city}</h1>
        <div className="today-description">{props.data.description}</div>
        <div className="today-min-max">
          <span className="max-temp">{Math.round(props.data.maxTemp)}</span>
          ˚| <span className="min-temp">{Math.round(props.data.minTemp)}</span>˚
        </div>
        <div className="current-dayandtime">
          Last updated: <FormattedDate date={props.data.date} />
        </div>
        <div className="today-details">
          <div className="today-feelslike">
            Feels like: {Math.round(props.data.feelsLike)}˚
          </div>
          <div className="today-humidity">Humidity: {props.data.humidity}%</div>
          <div className="today-windspeed">
            Wind speed: {Math.round(props.data.windSpeed)} km/h
          </div>
        </div>
      </div>
      <div className="weather-image">
        <img src={props.data.iconUrl} alt={props.data.description} />
      </div>
    </main>
  );
}

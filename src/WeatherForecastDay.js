import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}˚`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}˚`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    return days[day];
  }

  return (
    <div className="daily-forecast">
      <div className="forecast-day">{day()}</div>
      <div>
        <span className="forecast-max-temp">{maxTemp()}</span> |{" "}
        <span className="forecast-min-temp">{minTemp()}</span>
      </div>
      <WeatherIcon
        code={props.data.weather[0].id}
        alt={props.data.weather[0].description}
      />
    </div>
  );
}

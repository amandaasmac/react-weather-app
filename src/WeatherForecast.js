import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="daily-forecast">
        <div className="forecast-day">saturday</div>
        <div>
          <span className="forecast-max-temp">22˚</span> |{" "}
          <span className="forecast-min-temp">13˚</span>
        </div>
        <img src="img/500d.png" alt="light rain" />
      </div>
    </div>
  );
}

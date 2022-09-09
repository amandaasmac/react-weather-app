import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "f2a962d48c46d7fc23aca5910b2db6af";
  let units = "metric";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);

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

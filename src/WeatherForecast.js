import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />
        <WeatherForecastDay data={forecast[1]} />
        <WeatherForecastDay data={forecast[2]} />
      </div>
    );
  } else {
    let apiKey = "f2a962d48c46d7fc23aca5910b2db6af";
    let units = "metric";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
